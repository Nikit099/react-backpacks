import React from 'react'

function Search(props) {
    return (
        <div>
              <div className='maneText'>
     <h1>{props.searchValue ? `Поиск по запросу "${props.searchValue}"` : 'All on your back'}</h1>
     <div className='search'> 
       <img src="/img/search.png" alt="Search" width={15} height={15} />
       {props.searchValue && <img className='clear' onClick={props.delitSearch} src="/img/delet.png" alt="delet" width={20}/>}
       <input onChange={props.onChangeSearchInput} value={props.searchValue} placeholder='Search...' />
       </div>
       </div>
        </div>
    )
}

export default Search
