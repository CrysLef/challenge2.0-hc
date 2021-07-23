import React, { useState, useEffect } from 'react'
import * as S from './styles'
import api from '../../services/api'
import bag from '../../images/shopping-bag.svg'


export default function ProductsCard() {
    const [ data, setData ] = useState([])
    useEffect(() => {
        api.get('').then(response => {
            setData(response.data)
        })
    },[])
    return (
        <>
            {data.map(product => {
                return (
                <S.Card key={product.id}>
                    <img src={product.photo} alt="" />
                    <S.ProductName>{product.name}</S.ProductName>
                    <S.Price>R$ {product.price},00</S.Price>
                    <S.Button><img src={bag} alt=""/>COMPRAR</S.Button>
                    
                </S.Card>
                )
            })}
        </>
    )
}