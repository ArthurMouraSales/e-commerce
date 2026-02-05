import { createRoot } from 'react-dom/client'
import './index.css'
import App from './productPage.jsx'
import Cart from './cartPage.jsx'

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
