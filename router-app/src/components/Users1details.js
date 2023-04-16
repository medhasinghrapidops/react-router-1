// here we use params for dynamic routing
 import React from 'react'
import { useParams } from 'react-router-dom'
 
 const Users1details = () => {
    // const params = useParams();
    // const userId = params.userId();
    const {userId} = useParams();
    return (
     <div>
       Details of the user {userId};
     </div>
   )
 }
 
 export default Users1details;
 