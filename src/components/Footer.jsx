import logo from '../assets/Logo.png'

const Footer = () => {
    return (
        <footer className="mt-10 border-t border-mata/10 pt-5 text-center text-sm text-suave">
            <p className="flex items-center justify-center gap-2 font-display font-bold text-mata">
                <img src={logo} alt="" className="h-6 w-auto" /> EloRural
            </p>
            <p>Conectando o campo ao futuro</p>
            <p className="mt-1 text-xs">Global Solution 2026.2 · FIAP</p>
        </footer>
    )
}

export default Footer