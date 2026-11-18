import { useState, useEffect } from 'react'

const CHAVE = 'elorural-perfil'
const PADRAO = { nome: '', propriedade: '', cultura: '' }

export default function usePerfil() {
  const [perfil, setPerfil] = useState(() => {
    try {
      return { ...PADRAO, ...JSON.parse(localStorage.getItem(CHAVE)) }
    } catch {
      return PADRAO
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(CHAVE, JSON.stringify(perfil))
    } catch {
    }
  }, [perfil])

  return { perfil, setPerfil }
}
