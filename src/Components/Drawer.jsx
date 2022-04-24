import React from 'react'

function Drawer({deletDrawer, items = [], onRemove}) {
   
    
    return (
      
        <div  className="overlay">
        <div className="drawer">
          <h2>Корзина   <img className='delet' src="/img/delet.png" alt="delet" width={30}  onClick={deletDrawer} /></h2>
          <div className="items"> {items.map((obj) => (
  
  <div className="cartItem">
    <img className='foto' src={obj.img} alt="K1" width={80}  />
    <div className="textDrawer">
      <p>{obj.title}</p>
      <b>{obj.scale} руб.</b>
    </div>
    <img className='delet' onClick={() => onRemove(obj.id)} src="/img/delet.png" alt="delet" width={30}/>
    </div>

      ))} </div>
        
         <div className="cartTotal"> <ul >
          <li>
            <span>Итого:</span>
            <div></div>
            <b>2134 руб.</b>
          </li>
          <li>
            <span>Налог 5%:</span>
            <div></div>
            <b>203 руб.</b>
          </li>
        </ul> 
        <button className='greenButton'>Офоримить заказ <img src="/img/arroy.png" alt="arroy" width={18} /></button>
        </div>
        
        </div>
      </div>
    )
}

export default Drawer

