import { Sun, CloudRain, Droplets, Wind } from 'lucide-react'
import Secao from './Secao'

const CardClima = ({ clima, carregando, erro, cidade }) => {
  const vaiChover = clima && clima.chuvaProb >= 50
  const Icone = vaiChover ? CloudRain : Sun
  return (
    <Secao tom="clima">
      <p className="text-sm text-white/70">Previsão em {cidade}</p>
      {carregando && <p className="mt-2">Buscando previsão...</p>}
      {erro && <p className="mt-2 font-semibold text-red-200">{erro}</p>}
      {clima && !carregando && (
        <>
          <div className="mt-1 flex items-center justify-between">
            <div>
              <p className="font-display text-6xl font-bold">{Math.round(clima.temperatura)}°C</p>
              <p className="text-white/80">
                {vaiChover ? 'Pode chover hoje' : 'Tempo firme hoje'} · {Math.round(clima.min)}° a {Math.round(clima.max)}°
              </p>
            </div>
            <Icone size={72} strokeWidth={1.3} className="text-trigo" />
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3 text-sm">
            <p className="rounded-xl bg-white/15 p-3"><Droplets size={16} className="mb-1" /><b className="block text-lg">{clima.umidade}%</b>umidade</p>
            <p className="rounded-xl bg-white/15 p-3"><CloudRain size={16} className="mb-1" /><b className="block text-lg">{clima.chuvaProb}%</b>chuva</p>
            <p className="rounded-xl bg-white/15 p-3"><Wind size={16} className="mb-1" /><b className="block text-lg">{clima.vento}</b>km/h vento</p>
          </div>
        </>
      )}
    </Secao>
  )
}

export default CardClima