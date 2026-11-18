import { Link } from 'react-router-dom'
import { Droplets, ArrowRight } from 'lucide-react'
import Secao from './Secao'

const Recomendacao = ({ recomendacao }) => {
  return (
    <Secao>
      <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-trigo/30 text-mata">
        <Droplets size={20} />
      </span>
      <p className="text-sm font-medium text-suave">Dica de hoje</p>
      <p className="font-display text-xl font-bold text-mata">{recomendacao.titulo}</p>
      <p className="mt-1 text-suave">{recomendacao.motivo}</p>
      <Link to="/dados" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-folha">
        Ver dados <ArrowRight size={14} />
      </Link>
    </Secao>
  )
}

export default Recomendacao