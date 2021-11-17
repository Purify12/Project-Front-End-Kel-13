import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux'

const CartTotal = (props) => {
  const shippingRef = useRef(false);

  useEffect(() => {
    if (shippingRef.checked)
      props.substractShipping()
  })

  const handleChecked = (e) => {
    if (e.target.checked) {
      props.addShipping();
    }
    else {
      props.substractShipping();
    }
  }

  return (
    <div className="container py-4" style={{backgroundColor:'whitesmoke'}}>
      <div className="collection">
        <div className="collection-item">
          <label>
            <span> Ongkir (+Rp 20000 / jenis item yang dibeli)</span>
          </label>
        </div>
        <div className="collection-item"><b>Total: Rp {(props.total+20000)},- </b></div>
      </div>
      <div className="checkout">
        <button className="btn-primary waves-effect waves-light btn light-green accent-4">Checkout</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
    total: state.total
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addShipping: () => { dispatch({ type: 'ADD_SHIPPING' }) },
    substractShipping: () => { dispatch({ type: 'SUB_SHIPPING' }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTotal)