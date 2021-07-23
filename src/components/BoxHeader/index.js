import * as S from './styles'
import logo from '../../images/logo.png'
import search from '../../images/search.svg'
import cart from '../../images/cart.svg'
import user from '../../images/user.svg'

export default function BoxHeader(){
    return (
        <S.Header>
            <S.LogoMenu>
                <a href="#">
                    <S.Image src={logo} alt="Logo da Ipsum Store" />
                </a>
                <nav>
                    <S.List>
                        <S.ListItem>HARDWARE</S.ListItem>
                        <S.ListItem>MONITORES</S.ListItem>
                        <S.ListItem>COMPUTADORES</S.ListItem>
                        <S.ListItem>PERIFÉRICOS</S.ListItem>
                        <S.ListItem>CADEIRAS</S.ListItem>
                        <S.ListItem>+CATEGORIAS</S.ListItem>
                    </S.List>
                </nav>
            </S.LogoMenu>
            <div>
                <S.Icons src={search} alt="Ícone de pesquisa" />
                <S.Icons src={cart} alt="Ícone de carrinho" />
                <S.Icons src={user} alt="Ícone de usuário" />

            </div>

        </S.Header>
    )
}