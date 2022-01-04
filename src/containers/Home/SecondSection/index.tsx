import Container from 'components/Container'
import CategoriesCarousel from './CategoriesCarousel'
import TrendingCard from './TrendingCard'
import 'react-multi-carousel/lib/styles.css'

const SecondSection = () => {
  return (
    <section>
      <Container>
        <CategoriesCarousel />
        <TrendingCard />
      </Container>
    </section>
  )
}

export default SecondSection
