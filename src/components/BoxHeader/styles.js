import styled from 'styled-components'

export const Header = styled.header`
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 9rem;
    padding: 0 6rem;
`

export const LogoMenu = styled.div`
    display: flex;
    align-items: center;
`
export const Icons = styled.img`
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
    margin-right: 3.2rem;

    &:nth-child(3) {
        margin-right: 0;
    }

    &:hover {
        transform: scale(1.2);
    }
`

export const Image = styled.img`
    width: 150px;
    height: 150px;
`

export const List = styled.ul`
    display: flex;
    margin-left: 1.2rem;
`

export const ListItem = styled.li`
    font-size: 1.6rem;
    margin-right: 1.2rem;
    color: #5cc2f2;
    cursor: pointer;

    &:nth-child(6) {
        margin-right: 0;
    }

    &:hover {
        color: #191ba9;
    }
`