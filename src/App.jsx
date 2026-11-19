import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Menu from './components/Menu'
import Home from './pages/Home'
import Dados from './pages/Dados' 
import Mercado from './pages/Mercado'
import useSensor from './hooks/useSensor'
import useClima from './hooks/useClima'
import usePlantios from './hooks/usePlantios'
import usePerfil from './hooks/usePerfil'
import { CIDADES } from './data/cidades'
import { gerarAlertas, recomendarIrrigacao, nivelRisco } from './utils/regras'

const App = () => {
  const [cidade, setCidade] = useState(CIDADES[0])
  const [editando, setEditando] = useState(null)
  const [atendidos, setAtendidos] = useState([])
  const [totalAtendidos, setTotalAtendidos] = useState(0)

  const { leitura, simularRisco } = useSensor()
  const { clima, carregando: carregandoClima, erro: erroClima } = useClima(cidade)
  const { plantios, carregando, erro, adicionar, editar, remover } = usePlantios()
  const { perfil, setPerfil } = usePerfil()

  const alertas = gerarAlertas(leitura, clima)
  const risco = nivelRisco(alertas)
  const chaveAlertas = alertas.map((a) => a.id).join(',')

  useEffect(() => {
    setAtendidos((lista) => lista.filter((id) => chaveAlertas.split(',').includes(id)))
  }, [chaveAlertas])

  function atender(id) {
    setAtendidos((lista) => [...lista, id])
    setTotalAtendidos((t) => t + 1)
  }

  async function salvar(dados) {
    if (editando) await editar(editando.id, dados)
    else await adicionar(dados)
    setEditando(null)
  }

  const areaTotal = plantios.reduce((soma, p) => soma + (Number(p.area) || 0), 0)

  return (
    <>
      <Menu />
      <div className="min-h-screen md:pl-64">
        <div className="mx-auto max-w-5xl px-5 pb-28 pt-5 md:px-8 md:pb-10">
          <Header cidade={cidade} onMudarCidade={setCidade} temAlertas={alertas.length > 0} />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  nome={perfil.nome}
                  cidade={cidade.nome}
                  clima={clima}
                  carregandoClima={carregandoClima}
                  erroClima={erroClima}
                  alertas={alertas}
                  plantios={plantios}
                  recomendacao={recomendarIrrigacao(leitura, clima)}
                />
              }
            />
            <Route path="/dados" element={<Dados leitura={leitura} onSimularRisco={simularRisco} alertas={alertas} atendidos={atendidos} risco={risco} onAtender={atender} />}/>
            <Route path="/mercado" element={<Mercado />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App