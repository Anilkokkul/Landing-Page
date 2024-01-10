import { useEffect, useState } from "react";
import "./App.css";
import CallToAction from "./components/CallToAction";
import Description from "./components/Description";
import Feature1 from "./components/Feature1";
import Feature2 from "./components/Feature2";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import { url } from "./url";
import axios from "axios";

function App() {
  const [navLogo, setNavLogo] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    axios
      .get(`${url}/logo`)
      .then((data) => {
        setNavLogo(data.data[0].logo);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${url}/get-text`)
      .then((data) => {
        setContent(data.data[0].text);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className=" h-md-10 py-2 px-5 border-b bg-white relative z-30">
        <div className=" text-center flex justify-center items-center gap-3 font-bold text-sm ">
          <span className=" py-1 px-2 bg-slate-200 rounded-xl text-xs h-6">
            Announcement
          </span>
          <p className=" text-xs">
            We are happy to announce that we raise $2 Million in Seed Funding
          </p>
        </div>
      </div>
      <Navbar navLogo={navLogo} />
      <HeroSection content={content} />
      <Logo />
      <Feature1 />
      <Feature2 />
      <Description />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
