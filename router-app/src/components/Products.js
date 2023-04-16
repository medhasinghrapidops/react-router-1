import React from 'react'
import { Link , Outlet} from 'react-router-dom'

const Products = () => {
  return (
    <>
    <div>
      Products
    </div>
    <div>
        <input  type='search' placeholder='Search Products'/>
    </div>

    <nav>
        <Link to='featured'> Featured </Link>
        <Link to='newProduct'> New </Link>
    </nav>
    <Outlet />
    </>
  )
}

export default Products
