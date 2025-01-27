import '../styles/Packages.css';

const Packages = () => {
  return (
    <section>
      <h2>Our Packages</h2>
      <div className='packages'>
        <div className='package'>
          <h3>Standard Event</h3>
          <p className='price'>$300-$500</p>
          <p>Perfect for speeches, small gatherings, and simple setups.</p>
          <ul>
            <li>1 Yamaha 10-channel mixer w/ auxiliary cable</li>
            <li>2 Yamaha speakers</li>
            <li>1 Microphone</li>
            <li>Basic lighting setup</li>
          </ul>
          <a href='#'>Get A Quote</a>
        </div>
        <div className='package'>
          <h3>Premium Event</h3>
          <p className='price'>$600-$1000</p>
          <p>Ideal for larger events with more complex requirements.</p>
          <ul>
            <li>1 Yamaha 16-channel mixer w/ auxiliary cable</li>
            <li>4 Yamaha speakers</li>
            <li>2 Microphones</li>
            <li>Advanced lighting setup</li>
          </ul>
          <a href='#'>Get A Quote</a>
        </div>
        <div className='package'>
          <h3>Deluxe Event</h3>
          <p className='price'>$1200-$2000</p>
          <p>Perfect for large-scale events with professional setups.</p>
          <ul>
            <li>1 Yamaha 24-channel mixer w/ auxiliary cable</li>
            <li>6 Yamaha speakers</li>
            <li>4 Microphones</li>
            <li>Professional lighting and sound setup</li>
          </ul>
          <a href='#'>Get A Quote</a>
        </div>
      </div>
    </section>
  );
};

export default Packages;