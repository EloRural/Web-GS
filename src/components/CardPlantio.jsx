import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const formatarData = (d) => (d ? new Date(`${d}T00:00:00`).toLocaleDateString('pt-BR') : '-')

const CardPlantio = ({ plantio }) => {
  return (
    <div className="h-full overflow-hidden rounded-2xl border border-mata/10 bg-white">
      <svg className="h-40 w-full" viewBox="0 0 400 160" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect width="400" height="160" fill="#cfe8f3" />
        <circle cx="70" cy="40" r="16" fill="#f2b53a" />
        <path d="M0 80 Q100 50 200 75 T400 70 V160 H0Z" fill="#9ccc7a" />
        <polygon points="0,160 400,160 400,90 0,90" fill="#4f9a45" />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <line key={i} x1="200" y1="90" x2={i * 50} y2="160" stroke="#2f7a3c" strokeWidth="3" />
        ))}
      </svg>
      <div className="p-5">
        <p className="text-sm font-medium text-suave">Sua lavoura</p>
        <p className="font-display text-2xl font-bold text-mata">{plantio ? plantio.cultura : 'Nenhum plantio ainda'}</p>
        {plantio && (
          <div className="mt-2 flex flex-wrap gap-2 text-sm">
            <span className="rounded-full bg-broto px-3 py-1">Fase: {plantio.status}</span>
            <span className="rounded-full bg-broto px-3 py-1">{plantio.area} ha</span>
            <span className="rounded-full bg-broto px-3 py-1">Plantado em {formatarData(plantio.dataPlantio)}</span>
          </div>
        )}
        <Link to="/plantios" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-folha">
          {plantio ? 'Gerenciar plantios' : 'Registrar o primeiro plantio'} <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  )
}

export default CardPlantio