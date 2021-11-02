import React from 'react';
import heroCarausel from 'assets/images/hero-carousel.jpg'

function HomePage() {
  return (
    <div>
      <img
        style={{ width: '100vw' }}
        src={heroCarausel}
        alt='hero carausel'
      />
    </div>
  );
}

export default HomePage;
