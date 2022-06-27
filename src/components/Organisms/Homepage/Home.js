import Carousel from '../../Moleculs/Carousel/CarouselHomepage';
import ButtonCategory from '../../Atoms/Button/ButtonCategory';
import ItemCard from '../../Moleculs/Card/ItemCard';
// import ButtonList from '../../Atoms/Button/ButtonList';
import { IMAGES } from '../../../data/data';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.Module.css';

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Carousel images={IMAGES} />
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col>
            <h5 style={{ textAlign: 'left', fontWeight: 'bold' }}>Telusuri Kategori</h5>
          </Col>
        </Row>
        <Row className='mt-3'>
          <ButtonCategory />
        </Row>
        <Row className='mt-5'>
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <ItemCard
                title='Jam Tangan Casio'
                type='Aksesoris'
                price='Rp 250.000'
                image='https://placeimg.com/165/100/any'
                imageAlt='Gambar jam tangan'
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
};

export default Home;