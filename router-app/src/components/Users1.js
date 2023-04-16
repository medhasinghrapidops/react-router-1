// use params-used for the dynamic routing
// we use search params for type of logical or operation
import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'
 
 const Users1 = () => {

  const [searchParams, setSearchParams]  = useSearchParams();
  const showActiveUsers = searchParams.get('filter') === 'active'

   return (
    <>
        <div>
       <h3>first</h3>
       <h3>second</h3>
       <h3>third</h3>
        </div>
        <Outlet/>

        <div>
          <button onClick={ () => setSearchParams({filter: 'active'})}>Active user</button>
          <button onClick={ () => setSearchParams({})}>Reset users user</button>
        </div>

        {showActiveUsers ? <h2>showing active user</h2> : <h2> showing all the users</h2>}
    </>
   )
 }
 
 export default Users1
 