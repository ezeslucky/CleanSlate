import Footer from "./_components/Footer";
// import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { Navbar } from "./_components/Navbar";


export default function Home() {
  return (
    <div>
      {/* <Header/> */}
      <Navbar/>

      <Hero/>

      <Footer/>
    </div>
  );
}
