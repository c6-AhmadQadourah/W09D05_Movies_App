import React from 'react'

const Header = ({setHidden}) => {
  return (
    <div>

<button className='homeButton' onClick={()=>{ setHidden(false)}} > Home</button>
<button className='favButton'> Favorites</button>
    </div>
   
  )
}

export default Header