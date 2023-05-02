import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (

    <header>
     <nav>
       <Link href="/">
         <p>LeoGarden</p>
       </Link>
       <div>
         <Link href="/">product1</Link>
       </div>
     </nav>

      <hr/>
    </header>
  )
}

export default Header