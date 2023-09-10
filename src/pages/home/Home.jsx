import BlogSection from "../../components/blogSection/BlogSection"
import CyclesSection from "../../components/cylesSection/CyclesSection"
import Hero from "../../components/hero/Hero"
import LogoCloud from "../../components/logoCloud/LogoCloud"
import Stats from "../../components/stats/Stats"


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
