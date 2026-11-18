import { Thermometer, Droplets } from 'lucide-react'
import Secao from './Secao'

export default function CardSensor({ leitura, onSimularRisco }) {
  return (
    <Secao titulo="Sensor no campo" tom="escuro">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Thermometer size={20} className="text-trigo" />
          <p className="text-4xl font-semibold">{leitura.temperatura.toFixed(1)}°</p>
          <p className="text-sm text-white/70">Temperatura</p>
        </div>
        <div>
          <Droplets size={20} className="text-trigo" />
          <p className="text-4xl font-semibold">{leitura.umidade.toFixed(0)}%</p>
          <p className="text-sm text-white/70">Umidade do ar</p>
        </div>
      </div>
      <p className="mt-4 text-xs text-white/60">Leituras simuladas (ESP32 com DHT22).</p>
      <button onClick={onSimularRisco} className="mt-2 cursor-pointer rounded-xl border border-white/40 px-3 py-1.5 text-sm font-semibold hover:bg-white/10">
        Simular situação de risco
      </button>
    </Secao>
  )
}
