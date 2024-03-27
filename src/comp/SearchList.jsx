import React from 'react'
import SearchResult from './SearchResult'

function SearchList( { results}) {
  return (
    <div className='results-list' >
      {
        results.map((result, id) => {
            return <SearchResult result={result} key={id} />
        })
      }
    </div>
  )
}

export default SearchList