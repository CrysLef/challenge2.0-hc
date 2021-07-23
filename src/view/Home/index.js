import * as S from './styles'
import BoxHeader from '../../components/BoxHeader'
import banner from '../../images/banner.jpg'
import ProductsCard from '../../components/ProductsCard'

export default function HomePage() {
    return (
        <>
            <BoxHeader />
            <S.Main>
                <S.Banner>
                    <a href="">
                        <img src={banner} alt="Banner com promoções" />
                    </a>
                </S.Banner>
                <S.PromoSection>
                    <ProductsCard />
                </S.PromoSection>
            </S.Main>
        </>
    )
}