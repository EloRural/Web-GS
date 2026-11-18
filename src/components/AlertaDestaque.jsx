import { Link } from 'react-router-dom'
import { AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react'

const AlertaDestaque = ({ alerta }) => {
  const alto = alerta?.nivel === 'alto'
  const Icone = alerta ? AlertTriangle : CheckCircle2
  const cor = !alerta ? 'bg-broto border-folha' : alto ? 'bg-red-50 border-red-600 text-red-900' : 'bg-trigo/20 border-trigo'
  return (
    <Link to="/dados" className={`flex h-full flex-col justify-between gap-4 rounded-2xl border-l-8 p-5 ${cor}`}>
      <div>
        <Icone size={30} strokeWidth={1.7} />
        <p className="mt-2 font-display text-xl font-bold">{alerta ? alerta.titulo : 'Tudo tranquilo'}</p>
        <p className="text-sm opacity-75">{alerta ? alerta.texto : 'Nenhum alerta no campo agora.'}</p>
      </div>
      <span className="inline-flex items-center gap-1 text-sm font-semibold">
        Ver alertas <ArrowRight size={14} />
      </span>
    </Link>
  )
}

export default AlertaDestaque
