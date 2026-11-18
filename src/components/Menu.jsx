import { NavLink } from 'react-router-dom'
import { Home, BarChart3, Sprout, Store, User, Leaf } from 'lucide-react'

const ITENS = [
  { para: '/', texto: 'Início', Icone: Home },
  { para: '/dados', texto: 'Dados', Icone: BarChart3 },
  { para: '/plantios', texto: 'Plantios', Icone: Sprout },
  { para: '/mercado', texto: 'Mercado', Icone: Store },
  { para: '/perfil', texto: 'Perfil', Icone: User },
]

export default function Menu() {
  return (
    <>
      <aside className="fixed inset-y-0 left-0 hidden w-64 flex-col bg-mata p-5 text-white md:flex">
        <div className="flex items-center gap-2">
          <Leaf className="text-trigo" size={28} />
          <span className="font-display text-2xl font-bold">EloRural</span>
        </div>
        <p className="mb-8 mt-1 text-sm text-white/60">Conectando o campo ao futuro</p>
        <nav className="flex flex-col gap-1">
          {ITENS.map(({ para, texto, Icone }) => (
            <NavLink
              key={para}
              to={para}
              end
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition-colors ${
                  isActive ? 'bg-white text-mata' : 'text-white/75 hover:bg-white/10'
                }`
              }
            >
              <Icone size={20} /> {texto}
            </NavLink>
          ))}
        </nav>
      </aside>

      <nav className="fixed inset-x-0 bottom-0 grid grid-cols-5 border-t border-mata/10 bg-white px-2 pb-2 md:hidden">
        {ITENS.map(({ para, texto, Icone }) => (
          <NavLink
            key={para}
            to={para}
            end
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 text-[11px] font-medium ${isActive ? 'text-mata' : 'text-suave'}`
            }
          >
            {({ isActive }) => (
              <>
                <span className={`mb-1 h-1 w-8 rounded-b-full ${isActive ? 'bg-trigo' : 'bg-transparent'}`} />
                <Icone size={21} />
                {texto}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </>
  )
}
