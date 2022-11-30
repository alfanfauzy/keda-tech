import "./App.css";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Hero from "./Component/Hero";
import Pricing from "./Component/Pricing";

function App() {
    return (
        <div className="Container">
            <Hero />
            <About />
            <Pricing />
            <Contact />
            <footer>@Company 2022</footer>
        </div>
    );
}

export default App;
