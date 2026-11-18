import { useState, useEffect } from 'react'
import { listarPlantios, criarPlantio, atualizarPlantio, excluirPlantio } from '../services/plantiosService'

export default function usePlantios() {
  const [plantios, setPlantios] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  useEffect(() => {
    listarPlantios()
      .then(setPlantios)
      .catch((e) => setErro(e.message))
      .finally(() => setCarregando(false))
  }, [])

  async function executar(acao) {
    setErro('')
    try {
      await acao()
    } catch (e) {
      setErro(e.message)
    }
  }

  const adicionar = (dados) =>
    executar(async () => {
      const novo = await criarPlantio(dados)
      setPlantios((lista) => [...lista, novo])
    })

  const editar = (id, dados) =>
    executar(async () => {
      const atualizado = await atualizarPlantio(id, dados)
      setPlantios((lista) => lista.map((p) => (p.id === id ? atualizado : p)))
    })

  const remover = (id) =>
    executar(async () => {
      await excluirPlantio(id)
      setPlantios((lista) => lista.filter((p) => p.id !== id))
    })

  return { plantios, carregando, erro, adicionar, editar, remover }
}
