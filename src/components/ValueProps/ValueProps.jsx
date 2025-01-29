import './ValueProps.css';

const ValueProps = () => {
  return (
    <section id='value-props'>
      <div className='value-prop'>
        <div className='icon-delivered'></div>
        <h2>Effortless Sound, Delivered</h2>
        <p>
          Live sound shouldn't be something to stress about. We've got it covered—from delivery to setup and teardown—so you can focus on what really matters, your event.
        </p>
      </div>

      <div className='value-prop'>
        <div className='icon-audio'></div>
        <h2>Professional Audio Made Simple</h2>
        <p>
          Clear, reliable sound starts with professional gear, set up by an experienced engineer. We’ll make sure everything sounds exactly as it should.
        </p>
      </div>

      <div className='value-prop'>
        <div className='icon-packages'></div>
        <h2>Custom Packages That Fit You</h2>
        <p>
          Whether it's a wedding, corporate event, or live performance, we'll help make it a success. Every event is unique, so we'll work with you to create the perfect setup for your event, your space, and your budget.
        </p>
      </div>

      <a href='#packages' className='cta button'>View Our Packages</a>
    </section>
  );
};

export default ValueProps;