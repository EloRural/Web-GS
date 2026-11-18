const BASE = import.meta.env.VITE_API_URL

async function requisicao(caminho = '', opcoes = {}) {
  if (!BASE) throw new Error('Configure VITE_API_URL no arquivo .env')
  const resposta = await fetch(`${BASE}/plantios${caminho}`, {
    headers: { 'Content-Type': 'application/json' },
    ...opcoes,
  })
  if (!resposta.ok) throw new Error(`Erro na API (${resposta.status})`)
  return resposta.json()
}

export const listarPlantios = () => requisicao()
export const criarPlantio = (dados) => requisicao('', { method: 'POST', body: JSON.stringify(dados) })
export const atualizarPlantio = (id, dados) => requisicao(`/${id}`, { method: 'PUT', body: JSON.stringify(dados) })
export const excluirPlantio = (id) => requisicao(`/${id}`, { method: 'DELETE' })
