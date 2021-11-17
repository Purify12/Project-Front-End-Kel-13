import Item1 from '../images/rampat.jpg'
import Item2 from '../images/borobudur.jpg'
import Item3 from '../images/ubud.jpg'
import Item4 from '../images/toba.jpg'
import Item5 from '../images/bunaken.jpg'
import Item6 from '../images/pokak.jpg'
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, SUB_SHIPPING } from '../Actions/Action-types/cartActions'
import produce from 'immer'
    
const initState = {
      items: [
        { id: 1, title: 'Buah merah', desc: "Buah Merah HPAI - Anti Kanker - Kista - HIV Aids-Imun Tubuh kemasan 130 mL.", price: 200000, img: Item1, quantity: 0 },
        { id: 2, title: 'Ukiran Batu Borobudur', desc: "Relief/ukiran/ukir batu Borobudur ukuran 39cm x 39cm kondisi sesuai gambar, harga tertera untuk 1 unit.", price: 850000, img: Item2, quantity: 0 },
        { id: 3, title: 'Tas Ate', desc: "Tas Ate asli Ubud Gianyar Bali di Madesudiarta-artbali.", price: 120000, img: Item3, quantity: 0 },
        { id: 4, title: 'Gorga Batak Toba', desc: "Gorga Batak/Ukiran Batak Custom di Andi Toba.", price: 350000, img: Item4, quantity: 0 },
        { id: 5, title: 'Kaos Bunaken', desc: " Oleh-Oleh Kaos Wisata Taman Laut Bunaken Manado Warna Biru di Kaos Distro Oleh-Oleh", price: 130000, img: Item5, quantity: 0 },
        { id: 6, title: 'Pokak', desc: "Pokak berupa sirup dan wedang. Saat diminum, keduanya meninggalkan jejak hangat dan pedas di lidah. Cocok jadi minuman di wilayah dingin seperti Bromo.", price: 35000, img: Item6, quantity: 0 }
      ],
      addedItems: [],
      total: 0
    
    }
    
    
    
    
const cartReducer = (state = initState, action) => {
    
      function removeItem(id) {
        const addedItems = state.addedItems.filter(item => item.id !== id)
      
        const nextState = produce(state, (draf) => {
          if (draf.addedItems.find(item => (item.id == id))) {
            const found = draf.items.find(item => (item.id === id))
            found.quantity = 0;
          }
        })
      
        let total = 0;
        addedItems.map((item) => total += parseInt(item.price) * parseInt(item.quantity))
        console.log(total)
        if (total.length == 0) total = 0;
      
        return {
          ...nextState,
          addedItems: addedItems,
          total: total
        };
      }
    
      //INSIDE HOME COMPONENT
      if (action.type === ADD_TO_CART) {     
    
        const nextState = produce(state, (draf) => {
          const id = action.payload;
          if (draf.addedItems.find(item => (item.id == id))) {
            const found = draf.addedItems.find(item => (item.id === id))
            found.quantity++;
            draf.total += parseInt(found.price)
          } else {
            const found = draf.items.find(item => (item.id === id))
            found.quantity++;
            draf.addedItems.push(found)
            draf.total += parseInt(found.price)
          }
        })
    
        return nextState;
      }
    
      if (action.type === REMOVE_ITEM) {
        // Add code here
        const id = action.payload;  
    
        return removeItem(id)
      }
    
    
      //INSIDE CART COMPONENT
      if (action.type === ADD_QUANTITY) {
        // Add code here
        const nextState = produce(state, (draf) => {
          const id = action.payload;
          const found = draf.addedItems.find(item => (item.id === id))
          found.quantity++;
          draf.total += parseInt(found.price)
        })
    
        return nextState;
      }
      if (action.type === SUB_QUANTITY) {
        // Add code here
        const nextState = produce(state, (draf) => {
          const id = action.payload;
          const found = draf.addedItems.find(item => (item.id === id))
          if (found.quantity === 1){
            return removeItem(id)
          }
          found.quantity--;
          draf.total -= parseInt(found.price)
        })
    
        return nextState;
      }
    
      if (action.type === ADD_SHIPPING) {
        // Add code here (OPTIONAL)
        const nextState = produce(state, (draf) => {
          draf.total += 6;
        })
    
        return nextState;
      }
    
      if (action.type === SUB_SHIPPING) {
        // Add code here (OPTIONAL)
        const nextState = produce(state, (draf) => {
          draf.total -= 6;
        })
    
        return nextState;
      }
    
      else {
        return state
      }
    
}
    
export default cartReducer    