import Cart from '../components/Cart'
import Catalog from '../components/Catalog'
import { Container } from '../components/Container'
import Header from '../components/Header'

export default function CatalogPage() {
    return (
        <Container>
            <Header />
            <Catalog />
            <Cart />
        </Container>
    )
}
