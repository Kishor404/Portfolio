import '../Styles/Hero.css';

function Hero(){
    return(
        <section className="hero-cont">
            
            <p className="hero-greet">Hi There 👋</p>

            <h1 className="hero-name">
                I am <span>Kishor</span>
            </h1>

            <h2 className="hero-role">
                FullStack Developer
            </h2>

            <p className="hero-desc">
                I build modern, scalable and interactive web & mobile applications.
            </p>

            <button className="hero-btn">
                View My Work
            </button>

        </section>
    )
}

export default Hero;