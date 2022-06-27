import Carousel from '../../Moleculs/Carousel/CarouselHomepage';
import ButtonCategory from '../../Atoms/Button/ButtonCategory';
import ItemCard from '../../Moleculs/Card/ItemCard';
import BtnAddProduct from '../../Atoms/Button/BtnAddProduct';
// import ButtonList from '../../Atoms/Button/ButtonList';
import { IMAGES } from '../../../data/data';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.Module.css';

const Home = () => {
  return (
    <>
      <Container fluid>
        <div className="row mt-3">
          <div className="col">
            <Carousel images={IMAGES} />
          </div>
        </div>
        <div className="row mt-5 mx-5">
          <div className="col-12">
            <h5 style={{ textAlign: "left" }}>Telusuri Kategori</h5>
          </div>
        </div>
        <div className="row mt-3 mx-5">
          <ButtonCategory />
        </div>
        <div className="row mt-3 mx-5">
          <div className="col-2">
            <ItemCard
              title="Jam Tangan Casio"
              type="Aksesoris"
              price="Rp 250.000"
              image="https://placeimg.com/165/100/any"
              imageAlt="Gambar jam tangan"
            />
          </div>
          <div className="col-2">
            <ItemCard
              title="Jam Tangan Casio"
              type="Aksesoris"
              price="Rp 250.000"
              image="https://placeimg.com/165/100/any"
              imageAlt="Gambar jam tangan"
            />
          </div>
          <div className="col-2">
            <ItemCard
              title="Jam Tangan Casio"
              type="Aksesoris"
              price="Rp 250.000"
              image="https://placeimg.com/165/100/any"
              imageAlt="Gambar jam tangan"
            />
          </div>
          <div className="col-2">
            <ItemCard
              title="Jam Tangan Casio"
              type="Aksesoris"
              price="Rp 250.000"
              image="https://placeimg.com/165/100/any"
              imageAlt="Gambar jam tangan"
            />
          </div>
          <div className="col-2">
            <ItemCard
              title="Jam Tangan Casio"
              type="Aksesoris"
              price="Rp 250.000"
              image="https://placeimg.com/165/100/any"
              imageAlt="Gambar jam tangan"
            />
          </div>
          <div className="col-2">
            <ItemCard
              title="Jam Tangan Casio"
              type="Aksesoris"
              price="Rp 250.000"
              image="https://placeimg.com/165/100/any"
              imageAlt="Gambar jam tangan"
            />
          </div>
        </div>
        <div className="row mt-3 mb-3 mx-5">
          <BtnAddProduct />
        </div>

        {/* <Row style={{ marginleft: 0}}>
          <Col style={{ paddingleft: 0}}><ImageLoginRegis /></Col>
          <Col><LoginForm /></Col>
        </Row> */}
      </Container>
    </>
  )
};

export default Home;