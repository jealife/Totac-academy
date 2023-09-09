import BlogSection from "../blogSection/BlogSection"
import CyclesSection from "../cylesSection/CyclesSection"
import Hero from "../hero/Hero"
import LogoCloud from "../logoCloud/LogoCloud"
import Stats from "../stats/Stats"


function Home() {
    return (
        <main>
            <Hero/>
            <LogoCloud/>
            <CyclesSection/>
            <Stats/>
            <BlogSection/>
        </main>
        
    )
}

export default Home
