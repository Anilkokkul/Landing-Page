import "./App.css";
import Feature1 from "./components/Feature1";
import HeroSection from "./components/HeroSection";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <div className=" h-md-10 p-2 border-b">
        <div className=" text-center flex justify-center items-center gap-4 font-bold text-sm ">
          <span className=" py-1 px-2 bg-slate-200 rounded-xl text-xs h-6">
            Announcement
          </span>
          <p>
            We are happy to announce that we raise $2 Million in Seed Funding
          </p>
        </div>
      </div>
      <Navbar />
      <HeroSection />
      <Logo />
      <Feature1/>
    </div>
  );
}

export default App;
