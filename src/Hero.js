const Hero = (props) => {
    return ( 
        <section className="hero">
            <img src={props.img} alt="" className="hero-img" />
            <div className="hero-text">
                <h1>{props.h1}</h1>
                <p className="hero-paragraph">{props.p}</p>
            </div>
        </section>
     );
}
 
export default Hero;