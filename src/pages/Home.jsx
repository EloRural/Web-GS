import CardClima from '../components/CardClima'
import AlertaDestaque from '../components/AlertaDestaque'
import CardPlantio from '../components/CardPlantio'
import Recomendacao from '../components/Recomendacao'

const Home = ({ nome, cidade, clima, carregandoClima, erroClima, alertas, plantios, recomendacao }) => {
  const alerta = alertas.find((a) => a.nivel === 'alto') ?? alertas[0]
  const lavoura = plantios.find((p) => p.status !== 'Colhido') ?? plantios[0]
  const primeiroNome = nome.split(' ')[0]
  return (
    <>
      <h1 className="mt-6 font-display text-4xl font-extrabold text-mata">Olá{primeiroNome && `, ${primeiroNome}`}!</h1>
      <p className="mb-5 text-suave">Confira como está sua lavoura hoje.</p>
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CardClima clima={clima} carregando={carregandoClima} erro={erroClima} cidade={cidade} />
        </div>
        <AlertaDestaque alerta={alerta} />
        <div className="lg:col-span-2">
          <CardPlantio plantio={lavoura} />
        </div>
        <Recomendacao recomendacao={recomendacao} />
      </div>
    </>
  )
}

export default Home