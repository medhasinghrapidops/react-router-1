// use params

import { useParams } from 'react-router-dom'
import React from 'react'

const UserDetails = () => {
    const params = useParams();
    const userId = params.userId
  return (
    <div>
      Details of the user {userId}.
    </div>
  )
}

export default UserDetails
