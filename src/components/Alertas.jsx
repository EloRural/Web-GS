import Secao from './Secao'

const Alertas = ({ alertas, atendidos, risco, onAtender }) =>  {
  return (
    <Secao titulo={`Alertas · risco ${risco.toLowerCase()}`}>
      {alertas.length === 0 && <p className="text-suave">Nenhum alerta agora. Tudo tranquilo no campo.</p>}
      <ul className="space-y-2">
        {alertas.map((a) => {
          const feito = atendidos.includes(a.id)
          return (
            <li key={a.id} className={`flex items-center justify-between gap-3 rounded-2xl p-3 ${a.nivel === 'alto' ? 'bg-red-100 text-red-900' : 'bg-trigo/20'} ${feito ? 'opacity-50' : ''}`}>
              <div className={feito ? 'line-through' : ''}>
                <p className="font-semibold">{a.titulo}</p>
                <p className="text-sm opacity-70">{a.texto}</p>
              </div>
              {!feito && (
                <button onClick={() => onAtender(a.id)} className="btn shrink-0 !px-4 !py-1.5 text-sm">
                  Já fiz
                </button>
              )}
            </li>
          )
        })}
      </ul>
    </Secao>
  )
}

export default Alertas