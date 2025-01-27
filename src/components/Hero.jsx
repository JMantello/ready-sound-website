import "../styles/Hero.css";

export default function Hero() {
  return (
    <div className="hero-container" >
      <h1 className="hero-title" > Welcome to My Website </h1>
      <p className="hero-subtitle" > Your journey begins here.</p>
      <a href="#value-props" className="hero-cta" > Learn More </a>
    </div>
  );
}