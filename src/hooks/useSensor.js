import { useState, useEffect } from 'react'

const limitar = (valor, min, max) => Math.min(max, Math.max(min, valor))

export default function useSensor() {
  const [leitura, setLeitura] = useState({ temperatura: 26, umidade: 60 })

  useEffect(() => {
    const id = setInterval(() => {
      setLeitura((l) => ({
        temperatura: limitar(l.temperatura + (Math.random() - 0.5) * 2, 10, 42),
        umidade: limitar(l.umidade + (Math.random() - 0.5) * 6, 20, 95),
      }))
    }, 3000)
    return () => clearInterval(id)
  }, [])

  const simularRisco = () => setLeitura({ temperatura: 38, umidade: 30 })

  return { leitura, simularRisco }
}
