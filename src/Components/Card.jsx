import React, {useState} from 'react'

function Card({img, title, scale, onPlus }) {
    const [addCheck, setAddCheck] = useState(false)
    const [addPlusCheck, setAddPlusCheck] = useState(false)
 
    const plusClick = () => {
        setAddCheck(!addCheck);
        onPlus({img, title, scale});
    }
    const heartClick = () => {
        setAddPlusCheck(!addPlusCheck)
    }


    return (
        
        <div className='card '>
        <div className='heart1'><img src={addPlusCheck ? '/img/heart2.png' : '/img/heart1.png'} alt="hert1" width={20} onClick={heartClick} /></div>
      <img src={img} alt="back1" width={140} />
      <h5>{title}</h5>
       <div className='magia'>
       <div className='bottomCard'>
  
         <p>price:</p>
        <b>{scale} $.</b>
         
       </div>
       <img className='plus' src={addCheck ? "/img/plus1.png" : "/img/plus2.png"} alt="add" width={19} onClick={plusClick} />
       </div>
       
       </div>
    )
}

export default Card
