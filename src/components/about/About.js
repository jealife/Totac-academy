import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
function About() {
    return (
        <div className='container' >
            <section className='hero grid grid-center'>
                <h1 data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center">A propos</h1>
            </section>
        </div>
    )
}

export default About
