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
const [searchValue, setSearchValue] = useState('')
const [isFavorite, setIsFavorite] = useState([])

useEffect(() => {
    axios.get('https://61c3f0c4f1af4a0017d99198.mockapi.io/items').then(res => {
       setItems(res.data)
    });
    axios.get('https://61c3f0c4f1af4a0017d99198.mockapi.io/card').then(res => {
      setCartItems(res.data)
   });
}, []);

const onRemovItem = (id) => {
  axios.delete(`https://61c3f0c4f1af4a0017d99198.mockapi.io/card/${id}`)
  setCartItems(prev => prev.filter(item => item.id !== id))
}

  const addCart = (obj) => {
    axios.post('https://61c3f0c4f1af4a0017d99198.mockapi.io/card', obj)
       
        setCartItems(prev =>  [...prev , obj])
     
    
  }
  const onFavorite = (obj) => {
    axios.post('https://61c3f0c4f1af4a0017d99198.mockapi.io/favorites', obj)
       
        setCartItems(prev =>  [...prev , obj])
     
    
  }
  const onChangeSearchInput = (e) =>{
    setSearchValue(e.target.value)
  }
  return (
    <div className="wrapper">
    { onDrawer && <Drawer onRemove = {onRemovItem}
     deletDrawer ={() =>  setOnDrawer(false)} 
    items = {cartItems} /> }

      <Header onClickShop = {() => setOnDrawer(true)} />     

     <div className='mane'>
       
     <Search searchValue = {searchValue} delitSearch ={() => setSearchValue('')} onChangeSearchInput = {onChangeSearchInput}/>
   
    <div className='bakepack'>
      {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((elem) => (
        <Card 
        // key={index}
        title = {elem.title}
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
