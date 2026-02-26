import '../Styles/About.css';

function About(){
    return(
        <section className="about-cont">

            <p className="about-title">About Me</p>

            <h1 className="about-heading">
                Passionate FullStack Developer
            </h1>

            <p className="about-desc">
                I specialize in building modern, scalable, and high-performance web and mobile applications. 
                My expertise includes React.js, Django, Node.js, and interactive 3D experiences using Three.js.
            </p>

            <div className="about-cards">

                <div className="about-card">
                    <h3>Frontend</h3>
                    <p>React.js, Tailwind, GSAP, Three.js</p>
                </div>

                <div className="about-card">
                    <h3>Backend</h3>
                    <p>Django, Node.js, Express.js</p>
                </div>

                <div className="about-card">
                    <h3>Mobile</h3>
                    <p>Flutter, React Native</p>
                </div>

            </div>

        </section>
    )
}

export default About;