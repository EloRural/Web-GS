import { Link } from 'react-router-dom'
import { Bell } from 'lucide-react'
import { CIDADES } from '../data/cidades'
import logo from '../assets/Logo.png'

const Header = ({ cidade, onMudarCidade, temAlertas }) => {
  return (
    <header className="flex items-center justify-between md:justify-end">
      <div className="flex items-center gap-2 md:hidden">
        <img src={logo} alt=""/>
        <span className="font-display text-xl font-bold text-mata">EloRural</span>
      </div>
      <div className="flex items-center gap-3">
        <select
          className="select-topo"
          aria-label="Cidade"
          value={cidade.nome}
          onChange={(e) => onMudarCidade(CIDADES.find((c) => c.nome === e.target.value))}
        >
          {CIDADES.map((c) => (
            <option key={c.nome}>{c.nome}</option>
          ))}
        </select>
        <Link to="/dados" aria-label="Alertas" className="relative rounded-full bg-white p-2 text-mata">
          <Bell size={20} />
          {temAlertas && <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-red-500" />}
        </Link>
      </div>
    </header>
  )
}

export default Header
