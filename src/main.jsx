import { createRoot } from 'react-dom/client'
import './index.css'
import App from './paginaProduto.jsx'
import Cart from './paginaCarrinho.jsx'

const inicialRoot = document.getElementById('root');
const compraRoot = document.getElementById('compra');

if (inicialRoot) {
  createRoot(inicialRoot).render(
    <App />
  )
}

if (compraRoot) {
  createRoot(compraRoot).render(
    <Cart />
  )
}
