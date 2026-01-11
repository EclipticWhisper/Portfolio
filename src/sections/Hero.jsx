import { words } from "../constants/index.js";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
const Herox = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>
      <div className="hero-layout">
        <header className="flex flex-col justify-center w-full px-10 md:px-20">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>Shaping
                <span className="slide">
                  <span className="wrapper" >
                    {words.map((word, index) => (
                      <span key={`${word.text}-${index}`} className="flex items-center md:gap-3 gap-1 p-2">
                        <img src={word.imgPath} alt={word.text} className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50" />
                        {word.text}
                      </span>
                    ))}
                  </span>

                </span>

              </h1>
              <h1>into Real Projects</h1>
              <h1>that deliver Results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none"> Hi I'm Ahmed, a developer from Pakistan, <br /> with a passion for creating innovative and efficient web solutions. </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See my work"
            />
          </div>
        </header>
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  )
}

export default Herox
