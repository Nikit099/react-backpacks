import React from 'react'

function Header(props) {
    return (
        
             <header>
    <div className='headerLeft'>
      <img src="/img/back.png" alt="back" width={40} />
     <div>
      <h3>Bakepacks</h3>
      <p>Магазин портфелей и сумок на спину</p>
      </div>
    </div>
 
      <ul className='right'>
        <li onClick={props.onClickShop} ><img src="/img/shop.png" alt="shop" width={25}/> <span>1233 руб.</span> </li>
        <li><img src="/img/user.png" alt="user" width={25} /></li>
      </ul>

      </header>
        
    )
}

export default Header
