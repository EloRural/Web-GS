import Secao from './Secao'

const formatarData = (d) => (d ? new Date(`${d}T00:00:00`).toLocaleDateString('pt-BR') : '-')

const ListaPlantios = ({ plantios, carregando, erro, onEditar, onRemover }) => {
  return (
    <Secao titulo="Meus plantios">
      {carregando && <p className="text-suave">Carregando...</p>}
      {erro && <p className="mb-2 font-semibold text-red-700">{erro}</p>}
      {!carregando && plantios.length === 0 && !erro && (
        <p className="text-suave">Nenhum plantio registrado. Use o formulário para adicionar o primeiro.</p>
      )}
      <ul className="space-y-2">
        {plantios.map((p) => (
          <li key={p.id} className="flex flex-col gap-2 rounded-2xl bg-broto/60 p-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-semibold">{p.cultura} — {p.status}</p>
              <p className="text-sm text-suave">
                {p.area} ha · plantado em {formatarData(p.dataPlantio)} · {p.producao} kg
              </p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => onEditar(p)} className="btn-ghost">
                Editar
              </button>
              <button
                onClick={() => window.confirm(`Excluir o plantio de ${p.cultura}?`) && onRemover(p.id)}
                className="btn-danger"
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </Secao>
  )
}
export default ListaPlantios