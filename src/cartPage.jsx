import { useEffect, useState } from 'react'
import './cartPage.css'
import shoppingCartImg from './assets/shopping-cart-simple.svg';

export default function Cart() {
    return (
        <>
            <nav>
                <h1>SHOPTEC</h1>
                <img
                    src={shoppingCartImg}
                    alt="Carrinho de Compras"
                    className="shopping-cart-icon"
                />
            </nav>
            <div className='box-produtos'>
                <h2>Produtos no Carrinho</h2>
            </div>
            <div className='box-endereço'>
                <h2>Endereço de Entrega</h2>
            </div>
            <div className='box-pagamento'>
                <h2>Informações de Pagamento</h2>
                <button className='pix'>Pix</button>
                <button className='credito'>Cartão de Crédito</button>
                <button className='debito'>Cartão de Débito</button>
                <button className='boleto'>Boleto</button>
            </div>
        </>
    )
}