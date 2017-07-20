import React from 'react'
import Link from 'next/link'
import HomePicto from './svg/HomePicto'

const Layout = ({ children }) => {
  return (
    <div>
      <div
        style={{
          transform: 'rotate(90deg)',
          width: 30,
          margin: 10,
          position: 'absolute',
          top: 0,
          left: 0,
          cursor: 'pointer',
        }}
      >
        <Link href="/">
          <div>
            <HomePicto />
          </div>
        </Link>
      </div>
      {children}
    </div>
  )
}

export default Layout
