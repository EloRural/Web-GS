import { useState } from 'react'
import { Leaf } from 'lucide-react'
import Secao from '../components/Secao'
import { CIDADES } from '../data/cidades'

const ODS = [
  { n: 'ODS 2', nome: 'Fome Zero e Agricultura Sustentável' },
  { n: 'ODS 9', nome: 'Indústria, Inovação e Infraestrutura' },
  { n: 'ODS 12', nome: 'Consumo e Produção Responsáveis' },
]

const Perfil = ({ perfil, onSalvar, cidade, onMudarCidade, totalPlantios, areaTotal, totalAtendidos }) => {
  const [form, setForm] = useState(perfil)
  const [salvo, setSalvo] = useState(false)

  const mudar = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setSalvo(false)
  }
  function enviar(e) {
    e.preventDefault()
    onSalvar(form)
    setSalvo(true)
  }

  const contadores = [
    { valor: totalPlantios, rotulo: 'plantios' },
    { valor: areaTotal.toFixed(1), rotulo: 'hectares' },
    { valor: totalAtendidos, rotulo: 'alertas atendidos' },
  ]

  return (
    <>
      <h1 className="titulo-pagina">Meu perfil</h1>
      <div className="grid gap-4 lg:grid-cols-3">
        <Secao tom="escuro">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-trigo font-display text-2xl font-bold text-mata">
            {perfil.nome ? perfil.nome[0].toUpperCase() : <Leaf size={28} />}
          </span>
          <p className="mt-3 font-display text-2xl font-bold">{perfil.nome || 'Seu nome'}</p>
          <p className="text-white/70">{perfil.propriedade || 'Sua propriedade'}</p>
          <p className="mt-1 text-sm text-white/70">
            {perfil.cultura ? `Cultura principal: ${perfil.cultura} · ` : ''}{cidade.nome}
          </p>
          <div className="mt-5 grid grid-cols-3 gap-2 text-center">
            {contadores.map((c) => (
              <div key={c.rotulo} className="rounded-xl bg-white/10 p-2">
                <p className="font-display text-2xl font-bold">{c.valor}</p>
                <p className="text-[11px] text-white/70">{c.rotulo}</p>
              </div>
            ))}
          </div>
        </Secao>

        <div className="lg:col-span-2">
          <Secao titulo="Meus dados">
            <form onSubmit={enviar} className="grid gap-4 sm:grid-cols-2">
              <label className="rotulo">
                Nome
                <input className="campo" name="nome" value={form.nome} onChange={mudar} placeholder="Como você quer ser chamado" />
              </label>
              <label className="rotulo">
                Propriedade
                <input className="campo" name="propriedade" value={form.propriedade} onChange={mudar} placeholder="Ex.: Sítio Boa Vista" />
              </label>
              <label className="rotulo">
                Cultura principal
                <input className="campo" name="cultura" value={form.cultura} onChange={mudar} placeholder="Ex.: Alface" />
              </label>
              <label className="rotulo">
                Cidade
                <select className="campo" value={cidade.nome} onChange={(e) => onMudarCidade(CIDADES.find((c) => c.nome === e.target.value))}>
                  {CIDADES.map((c) => (
                    <option key={c.nome}>{c.nome}</option>
                  ))}
                </select>
              </label>
              <div className="flex items-center gap-3 sm:col-span-2">
                <button className="btn">Salvar perfil</button>
                {salvo && <span className="text-sm font-semibold text-folha">Perfil salvo!</span>}
              </div>
            </form>
          </Secao>
        </div>

        <div className="lg:col-span-3">
          <Secao titulo="Objetivos de Desenvolvimento Sustentável" tom="verde">
            <ul className="grid gap-3 md:grid-cols-3">
              {ODS.map((o) => (
                <li key={o.n} className="rounded-xl bg-white/70 p-3">
                  <b className="font-display text-lg text-mata">{o.n}</b>
                  <p className="text-sm">{o.nome}</p>
                </li>
              ))}
            </ul>
          </Secao>
        </div>
      </div>
    </>
  )
}

export default Perfil