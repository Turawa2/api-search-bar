import React from 'react'

function SearchResult( {result} ) {
  return (
    <div className='serach-result' onClick={(e) =>  alert(`You clicked ${result.name}`)}>
        {result.name}
    </div>
  )
}

export default SearchResult