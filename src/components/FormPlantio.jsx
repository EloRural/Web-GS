import { useState, useEffect } from 'react'
import Secao from './Secao'

const VAZIO = { cultura: '', area: '', dataPlantio: '', producao: '', status: 'Plantado' }
const campo = 'campo'

const FormPlantio = ({ editando, onSalvar, onCancelar }) => {
  const [form, setForm] = useState(VAZIO)

  useEffect(() => {
    setForm(editando ? { ...VAZIO, ...editando } : VAZIO)
  }, [editando])

  const mudar = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  function enviar(e) {
    e.preventDefault()
    onSalvar({
      cultura: form.cultura,
      area: Number(form.area),
      dataPlantio: form.dataPlantio,
      producao: Number(form.producao),
      status: form.status,
    })
    setForm(VAZIO)
  }

  return (
    <Secao titulo={editando ? 'Editar plantio' : 'Registrar plantio'}>
      <form onSubmit={enviar} className="grid gap-4">
        <label className="rotulo">
          Cultura
          <input className={campo} name="cultura" value={form.cultura} onChange={mudar} required placeholder="Ex.: Milho" />
        </label>
        <label className="rotulo">
          Área (hectares)
          <input className={campo} name="area" type="number" min="0" step="0.1" value={form.area} onChange={mudar} required />
        </label>
        <label className="rotulo">
          Data do plantio
          <input className={campo} name="dataPlantio" type="date" value={form.dataPlantio} onChange={mudar} required />
        </label>
        <label className="rotulo">
          Produção (kg)
          <input className={campo} name="producao" type="number" min="0" value={form.producao} onChange={mudar} required />
        </label>
        <label className="rotulo">
          Situação
          <select className={campo} name="status" value={form.status} onChange={mudar}>
            <option>Plantado</option>
            <option>Em crescimento</option>
            <option>Colhido</option>
          </select>
        </label>
        <div className="flex gap-2">
          <button className="btn flex-1">Salvar</button>
          {editando && (
            <button type="button" onClick={onCancelar} className="btn-ghost">
              Cancelar
            </button>
          )}
        </div>
      </form>
    </Secao>
  )
}
export default FormPlantio