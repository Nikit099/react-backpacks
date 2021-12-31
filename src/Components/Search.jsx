import React from 'react'

function Search() {
    return (
        <div>
              <div className='maneText'>
     <h1>Всё на спину</h1>
     <div className='search'> 
       <img src="/img/search.png" alt="Search" width={15} height={15} />
       <input  placeholder='Поиск...' />
       </div>
       </div>
        </div>
    )
}

export default Search
