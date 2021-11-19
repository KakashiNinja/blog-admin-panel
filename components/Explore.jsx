import React from 'react'

const Explore = () => {
  const exploreHandler = () => {
    window.open('/blogs', '_self')
  }

  return (
    <main className='explore'>
      <h1>Explore blogs by me...</h1>
      <p>
        I love to write blogs related to awesome stuff
        around the world and technology, watch blogs by
        clicking below
      </p>
      <button onClick={exploreHandler}>Explore</button>
    </main>
  )
}

export default Explore
