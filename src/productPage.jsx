import { useEffect, useState } from 'react'
import './productPage.css'
import shoppingCartImg from './assets/shopping-cart-simple.svg';
import notebookFrontImg from './assets/notebook-front-view.png';
import notebookOpenImg from './assets/notebook-open-view.png';

const productImgs = [
    { src: notebookFrontImg, alt: "Notebook Front View" },
    { src: notebookOpenImg, alt: "Notebook Open View" }
  ];

export default function App() {

  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((positon) => (positon + 1) % productImgs.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

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
      <div className='pagina-inteira'>
        <div className='box-info'>
          <h2>Informações do Produto</h2>
          <ul>
            <li>Processador Intel Core i5</li>
            <li>16GB de Memoria RAM</li>
            <li>Placa de vídeo NVIDIA GeForce RTX 4050</li>
            <li>Tela de 15.6 polegadas</li>
            <li>Sistema Operacional Windows 11</li>
          </ul>
          <h2>Descrição do Produto</h2>
          <p>Este computador possui um processador Intel Core i5 de alto desempenho, 16GB de memória RAM e uma placa de vídeo NVIDIA GeForce RTX 4050. A tela de 15.6 polegadas oferece uma experiência visual imersiva e o sistema operacional Windows 11 garante uma navegação fluida e segura.</p>
        </div>
        <main className='product-content'>
          <div className='box-imagem'>
            {productImgs.map((img, positon) => (
              <img
                key={positon}
                src={img.src}
                alt={img.alt}
                className={positon === currentImg ? 'active' : 'inactive'}
              />
            ))}
          </div>
          <h2>Notebook Gamer Acer Nitro V15</h2>
          <span className='preco'>R$ 5.399,10</span>
          <button className='comprar-agora' id='compra' onClick={() => window.location.href = '/compra'}>COMPRAR AGORA</button>
        </main>
      </div>
    </>
  )
}


