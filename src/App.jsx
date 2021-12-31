import React, {useState, useEffect} from 'react';
import './App.scss';
import Header from './Components/Header';
import Card from './Components/Card';
import Drawer from './Components/Drawer';
import Search from './Components/Search';
import axios from 'axios';

function App() {
const [onDrawer, setOnDrawer] = useState(false)
const [items, setItems] = useState([])
const [cartItems, setCartItems] = useState([])

useEffect(() => {
    axios.get('https://61c3f0c4f1af4a0017d99198.mockapi.io/items').then(res => {
       setItems(res.data)
    });

}, []);

  const addCart = (obj) => {
    setCartItems([...cartItems, obj])
  }
  return (
    <div className="wrapper">
    { onDrawer && <Drawer
     deletDrawer ={() =>  setOnDrawer(false)} 
    items = {cartItems} /> }

      <Header onClickShop = {() => setOnDrawer(true)} />     

     <div className='mane'>
       
     <Search/>
   
    <div className='bakepack'>
      {items.map((elem) => (
        <Card title = {elem.title}
         scale = {elem.scale} 
        img = {elem.img} 
        onPlus = {(obj) => addCart(obj)}/>
      ))}
     
    
    </div>
     </div>
    </div>
  );
}

export default App;
