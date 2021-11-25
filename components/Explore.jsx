import React from 'react'
import Link from 'next/link'

const Explore = () => {
  return (
    <main className='explore'>
      <h1>Explore blogs by me...</h1>
      <p>
        I love to write blogs related to awesome stuff
        around the world and technology, watch blogs by
        clicking below
      </p>
      <button>
        <Link href='/blogs'>
          <a>Explore</a>
        </Link>
      </button>
    </main>
  )
}

export default Explore
