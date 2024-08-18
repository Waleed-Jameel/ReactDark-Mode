import React from 'react'
import { useParams } from 'react-router-dom';

const User = () => {
    const params = useParams() ;
    const {name} = params 
    // const params = useParams() ;
    const {lass} = params ; 
  return (
    <div>
        <h1>This is {name}'s Page and {name} study in class {lass} .</h1>
    </div>
  )
}

export default User ;