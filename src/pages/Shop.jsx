import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../Actions/cartActions';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import styled from 'styled-components';

const Container = styled.div`
    width: 90%;
    height: 30%;
    margin-left: 5%;
    margin-right: 5%;
`;

const Image = styled.img`
    width: 100%;
  height: 300px;
  object-fit: cover;

`

const Box = styled.div`
    boxSizing: 'border-box',
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content:center;
}
`

const Shop = (props) => {
  const handleClick = (id) => {
    props.addToCart(id);
  }
  return (
      <>
    <div className="row pb-2">
        <Navbar class="col-md-12"/>
    </div>
    <Container>
        <div className="row col-md-8 p-1 align-items-center">
            <div className="container">
                <h3 className="center">Our Marchendise</h3>
                <Box className="p-2 text-md-center">
                    {
                    props.items.map((item) => (
                        <div className="card py-4" key={item.id}>
                            <div className="card-image">
                                <Image src={item.img} alt={item.title} />
                                <h4 className="card-title">{item.title}</h4>
                                <button to="/shop" className="btn-primary btn-floating halfway-fab waves-effect waves-light light-green accent-4" onClick={() => { handleClick(item.id) }}><i className="material-icons"> Tambahkan ke keranjang</i></button>
                            </div>

                            <div className="card-content">
                                <p>{item.desc}</p>
                                <p><b>Price: Rp {item.price},-</b></p>
                            </div>
                        </div>
                    ))
                    }

                </Box>
            </div>
        </div>
        <div className="row pt-2">
            <Footer class="col-md-12"/>
        </div>
    </Container>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}
const mapDispatchToProps = (dispatch) => {

  return {
    addToCart: (id) => { dispatch(addToCart(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)