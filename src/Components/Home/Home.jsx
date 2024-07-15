import Features from "../Features/Features";
import Hero from "../Hero/Hero";
import Info from "../Info/Info";
import Navbar from "../Navbar/Navbar";
import Price from "../Price/Price";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Sevices from "../Sevices/Sevices";

export default function Home() {



    return <>

                <Navbar />
                <Hero />
                <Info/>
                <Projects/>
                {/* <Features/> */}
                {/* <Sevices/> */}
                <Price/>
                <Contact/>
                <Footer/>
    </>

}
