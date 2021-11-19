import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, addQuantity, subtractQuantity } from '../Actions/cartActions';
import '../index.css';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import arrowDown from '@iconify/icons-akar-icons/arrow-down';
import arrowUp from '@iconify/icons-akar-icons/arrow-up';

import CartTotal from '../Component/CartTotal';

const Container = styled.div`
    width: 90%;
    height: 30%;
    margin-left: 5%;
    margin-right: 5%;
`
const IMG = styled.img`
    width: auto;
    height: 200px;
`

const Cart = (props) => {

  //to remove the item completely
  const handleRemove = (id) => {
    props.removeItem(id);
  }
  //to add the quantity
  const handleAddQuantity = (id) => {
    props.addQuantity(id);
  }
  //to substruct from the quantity
  const handleSubtractQuantity = (id) => {
    props.subtractQuantity(id);
  }

  return (
<>
    <div className="row pb-2">
        <Navbar class="col-md-12"/>
    </div>
    <Container>
        <div className="row col-md-12 p-1">
            <div className="container p-2">
                <div className="cart mt-2 p-4" >
                    <h5>You have ordered :</h5>
                    <div className="card col-md-12" style={{display:'flex', alignItems:'center', justifyContent:"center", backgroundColor:'whitesmoke'}}>
                    {
                        props.items.length ? (
                        props.items.map((item) => (
                            <div className="card p-2">
                            <div className="row p-2">
                                <div className="col-md-6 mt-4 p-1" key={item.id}>
                                        <div className="item-img">
                                            <IMG src={item.img} alt={item.img} />
                                        </div>
                                </div>
                                    <div className="col-md-6 p-1">
                                        <div className="item-desc">
                                            <span className="title">{item.title}</span>
                                            <p>{item.desc}</p>
                                            <p><b>Price: {item.price}$</b></p>
                                            <p>
                                                <b>Quantity: {item.quantity}</b>
                                            </p>
                                            <div className="add-remove">
                                                <p><Link to="/cart"><button className="btn btn-primary"><Icon icon={arrowUp} inline={true}  onClick={() => { handleAddQuantity(item.id); } } /></button></Link><b>Tambahkan</b></p>
                                                <p><Link to="/cart"><button className="btn btn-primary"><Icon icon={arrowDown} inline={true} onClick={() => { handleSubtractQuantity(item.id); } } /></button></Link><b>Kurangkan</b></p>
                                            </div>
                                            <button className="btn-primary waves-effect waves-light btn light-green accent-4 remove" onClick={() => { handleRemove(item.id); } }>Remove</button>
                                        </div>
                                    </div>
                            </div>
                                
                            </div>
                        ))
                        ) : (
                        <>
                            <p><b>... Nothing ...</b></p>
                            <p class="text-white"><Link to ="/shop"><button class="btn btn-primary">Go to Shop</button></Link></p>
                        </>
                        )
                    }
                    </div>
                </div>
                <CartTotal />
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
    items: state.addedItems,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => { dispatch(removeItem(id)) },
    addQuantity: (id) => { dispatch(addQuantity(id)) },
    subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)