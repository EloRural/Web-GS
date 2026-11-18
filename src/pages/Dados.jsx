import CardSensor from '../components/CardSensor'
import Alertas from '../components/Alertas'

const Dados = ({ leitura, onSimularRisco, alertas, atendidos, risco, onAtender }) => {
  return (
    <>
      <h1 className="titulo-pagina">Dados do campo</h1>
      <div className="grid gap-4 lg:grid-cols-2">
        <CardSensor leitura={leitura} onSimularRisco={onSimularRisco} />
        <Alertas alertas={alertas} atendidos={atendidos} risco={risco} onAtender={onAtender} />
      </div>
    </>
  )
}

export default Dados