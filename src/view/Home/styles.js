import styled from 'styled-components'

export const Main = styled.main`
    background-color: rgba(92, 194, 242,0.12);
`

export const Banner = styled.div`
    max-width: 100%;
    height: auto;
`

export const PromoSection = styled.section`
    border-radius: 3rem 3rem 0 0;
    background-color: #fff;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 50% 50%;
    row-gap: 4rem;
    column-gap: 2rem;
    justify-items: center;
    padding: 15rem;
    z-index: 20;
    transform: translateY(-20px);
`