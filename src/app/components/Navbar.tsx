import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div >
        <Image
          className="bg-white"
          src="/logo.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
    </div>
  )
}

export default Navbar
