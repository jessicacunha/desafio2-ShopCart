import React, { useState, useEffect } from "react";

import Cart from '../../assets/cart.png'

import { Container } from "./style";

import api from '../../services/api';

interface IProduct {
  id: number;
  photo: string;
  name: string;
  description: string;
  price: number;
}

const Home: React.FC = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<IProduct[]>([]);


  useEffect(() => {
    api.get('').then(
      response => {
        setData(response.data)
      }
    )

  }, [])

  const handleCart = (index: number) => {
    let push: any = [...cart, cart.push(data[index])]
    setCart(push)
    const productStore = JSON.stringify(cart);
    localStorage.setItem('@cart', productStore)
    console.log(cart);
  }

  return (
    <Container>

      <div className="nav">
        <div>
          <img src="data:image/png;base64,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" alt="Logo" width="200px" height="auto" />
        </div>
        <div className="cart">
          <img src={Cart} alt="cart" width="50px" height="auto" /> 
          <span>({cart.length}) - Itens </span> 
        </div>
      </div>

      <section>
        {data.map((prod, index) => (
          <div className="product-content" key={prod.id}>
            <img src={prod.photo} alt="iphone" width="200" height="auto" />
            <h4>{prod.name}</h4>
            <span>{prod.description}</span>
            <h6>R$ {prod.price},00</h6>
            <button onClick={() => handleCart(index)}> Adicionar ao carrinho </button>
          </div>
        ))}

      </section>
    </Container>
  );
}

export default Home;