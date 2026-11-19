import { useState } from 'react'
import Secao from '../components/Secao'
import { CONTATOS } from '../data/contatos'

const Mercado = () =>{
  const [tipo, setTipo] = useState('Todos')
  const [cultura, setCultura] = useState('')

  const lista = CONTATOS.filter(
    (c) => (tipo === 'Todos' || c.tipo === tipo) && c.cultura.toLowerCase().includes(cultura.toLowerCase()),
  )

  return (
    <>
      <h1 className="titulo-pagina">Mercado</h1>
      <p className="-mt-2 mb-4 text-suave">Encontre compradores e investidores para sua produção.</p>
      <div className="mb-4 grid gap-3 sm:grid-cols-2">
        <select className="campo !mt-0" value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option>Todos</option>
          <option>Comprador</option>
          <option>Investidor</option>
        </select>
        <input className="campo !mt-0" placeholder="Buscar por cultura (ex.: milho)" value={cultura} onChange={(e) => setCultura(e.target.value)} />
      </div>
      {lista.length === 0 && <p className="text-suave">Nenhum contato encontrado para essa busca.</p>}
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {lista.map((c) => (
          <li key={c.id}>
            <Secao>
              <span className={`rounded-full px-3 py-1 text-xs font-bold ${c.tipo === 'Investidor' ? 'bg-trigo/30' : 'bg-broto'}`}>{c.tipo}</span>
              <p className="mt-3 font-display text-lg font-bold text-mata">{c.nome}</p>
              <p className="text-sm text-suave">{c.cultura} · {c.cidade}</p>
            </Secao>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Mercado