import FormPlantio from '../components/FormPlantio'
import ListaPlantios from '../components/ListaPlantios'

const Plantios = ({ editando, onSalvar, onCancelar, plantios, carregando, erro, onEditar, onRemover }) => {
  return (
    <>
      <h1 className="titulo-pagina">Meus plantios</h1>
      <div className="grid items-start gap-4 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <FormPlantio editando={editando} onSalvar={onSalvar} onCancelar={onCancelar} />
        </div>
        <div className="lg:col-span-3">
          <ListaPlantios plantios={plantios} carregando={carregando} erro={erro} onEditar={onEditar} onRemover={onRemover} />
        </div>
      </div>
    </>
  )
}

export default Plantios