import styled from 'styled-components'

export const Card = styled.div`
    background: rgba( 75, 207, 250, 0.1 );
    border-radius: 1rem;
    display: grid;
    justify-items: center;
    width: 32rem;
    height: auto;
    padding: 2rem;
`

export const ProductName = styled.h2`
    font-size: 1.2rem;
    color: #191ba9;
    margin-top: 1.5rem;
`

export const Price = styled.h3`
    color: #191ba9;
    font-size: 2rem;
    margin: 1.5rem 0;
`

export const Button = styled.button`
    background-color: #191ba9;
    color: #fff;
    font-size: 2rem;
    padding: 1.2rem 3.5rem;
    display: flex;
    align-items: center;
    border-radius: 1rem;
    transition: transform 300ms cubic-bezier(0.46, 0.54, 0.82, 2.29);
    cursor: pointer;

    &:hover {
        transform: scale(1.03);
    }

    & img {
        margin-right: .8rem;
    }
`
