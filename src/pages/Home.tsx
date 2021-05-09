import { Link } from 'react-router-dom'

import { Container } from '../components/Container'
import Header from '../components/Header'

export default function Home() {
    return (
        <Container>
            <Header />
            <h1>Página Inicial</h1>
            <div>
                <Link to="/catalogo">
                    <button>Ver catálogo</button>
                </Link>
            </div>
        </Container>
    )
}
