import React, { useState, useEffect } from 'react'
import * as S from './styles'
import api from '../../services/api'
import bag from '../../images/shopping-bag.svg'


export default function ProductsCard() {
    const [ data, setData ] = useState([])
    const cart = []
    useEffect(() => {
        api.get('').then(response => {
            setData(response.data)
        })
    },[])

    function handleCart(index) {
        const productStorage = JSON.stringify(data[index])
        const pushCart = [...cart, cart.push(productStorage)]
        localStorage.setItem(`@Cart`,pushCart)
    }

    return (
        <>
            {data.map((product,index) => {
                return (
                <S.Card key={product.id}>
                    <img src={product.photo} alt="" />
                    <S.ProductName>{product.name}</S.ProductName>
                    <S.Price>R$ {product.price},00</S.Price>
                    <S.Button onClick={() => handleCart(index)}><img src={bag} alt="ícone de sacola"/>COMPRAR</S.Button>
                    
                </S.Card>
                )
            })}
        </>
    )
}