import BlogSection from "../blogSection/BlogSection"
import Hero from "../hero/Hero"
import LogoCloud from "../logoCloud/LogoCloud"
import Stats from "../stats/Stats"


function Home() {
    return (
        <main>
            <Hero/>
            <LogoCloud/>
            <Stats/>
            <BlogSection/>
        </main>
        
    )
}

export default Home
