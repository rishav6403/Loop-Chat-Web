import React from 'react'
import { FcSearch } from "react-icons/fc";

const SearchInput = () => {
  return<>
  <form className='d-flex justify-content-center gap-3 border-bottom border-dark-subtle py-4' >
        <input type="text" className=' rounded-pill p-2' placeholder='Search'/>
        <button type="submit" className='p-2 rounded-circle'><FcSearch size={25} /></button>
    </form>
  </>
}

export default SearchInput