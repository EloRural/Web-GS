// Cartão padrão. "tom" muda a cor conforme a função.
const TONS = {
  claro: 'bg-white border border-mata/10 text-tinta',
  escuro: 'bg-mata text-white',
  verde: 'bg-broto text-tinta',
  clima: 'bg-gradient-to-br from-mata to-folha text-white',
}

export default function Secao({ titulo, tom = 'claro', children }) {
  return (
    <section className={`h-full rounded-2xl p-5 ${TONS[tom]}`}>
      {titulo && <h2 className="mb-3 font-display text-lg font-bold">{titulo}</h2>}
      {children}
    </section>
  )
}
