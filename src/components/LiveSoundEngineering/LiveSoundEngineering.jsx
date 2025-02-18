import React from 'react';
import './LiveSoundEngineering.css';

const LiveSoundEngineering = () => {
  return (
    <section className="live-sound-engineering">
      <div className='content-wrapper'>
        <div className='left'>
          <img src='/images/sound-live.jpg' alt='Live Sound Engineering' />
        </div>
        <div className='right'>
          <h2>Live Sound Engineering</h2>
          <h4>Make Your Live Event Easy with Professional Audio Support</h4>
          <p>Let our experienced audio engineers handle your event, so everything runs smoothly and sounds perfect. Whether it’s a small event or a full production, we’re here to make it happen.</p>
          <ul className="rates">
            <li>$250 for a half day (up to 4 hours)</li>
            <li>$400 for a full day (up to 8 hours)</li>
            <li>$50 per additional hour</li>
          </ul>
          <a className='button' href='/contact'>Book an Engineer</a>
        </div>
      </div>
    </section>
  );
};

export default LiveSoundEngineering;