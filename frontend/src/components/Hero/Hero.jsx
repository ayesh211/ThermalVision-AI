import "./Hero.css";

import QuickActions from "../QuickActions/QuickActions";

import useTypewriter from "../../hooks/useTypewriter";

const Hero = () => {
  const title = useTypewriter(
    "THERMALVISION AI",
    100
  );

  const subtitle = useTypewriter(
    "AI Thermal Weapon Detection System",
    35
  );

  return (
    <section className="hero">

      <div className="hero-glow"></div>

      <div className="scan-line"></div>

      <span className="hero-badge">

        ● AI SECURITY CENTER

      </span>

      <h1>

        {title}

        <span className="cursor">|</span>

      </h1>

      <h2>{subtitle}</h2>

      <p>

        Detect firearms, knives and dangerous objects
        from thermal surveillance using artificial intelligence.

      </p>

      <QuickActions />

    </section>
  );
};

export default Hero;