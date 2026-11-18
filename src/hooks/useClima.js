import { useState, useEffect } from 'react'
import { buscarClima } from '../services/climaService'

export default function useClima(cidade) {
  const [clima, setClima] = useState(null)
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  useEffect(() => {
    let cancelado = false
    setCarregando(true)
    setErro('')
    buscarClima(cidade.lat, cidade.lon)
      .then((dados) => !cancelado && setClima(dados))
      .catch((e) => !cancelado && setErro(e.message))
      .finally(() => !cancelado && setCarregando(false))
    return () => {
      cancelado = true
    }
  }, [cidade])

  return { clima, carregando, erro }
}
