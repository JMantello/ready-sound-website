import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero-container" >
      <h1 className="hero-title">
        We Make Live <br />
        Sound Simple
      </h1>
      <p className="hero-subtitle">Small to medium sound packages, delivered.</p>
      <a href="#value-props" className="hero-cta button">Learn More</a>
    </div>
  );
}