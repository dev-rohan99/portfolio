import React from 'react';
import dynamic from 'next/dynamic'
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

const Cursor = () => {

  
  return (

    <AnimatedCursor
      innerSize={12}
      outerSize={30}
      color='50, 220, 121'
      outerAlpha={0.2}
      innerScale={0.5}
      outerScale={5}
    />

  )
}

export default Cursor;
