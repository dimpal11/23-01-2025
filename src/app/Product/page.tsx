import React from "react";
import Navbar from "./compnent/Navbar";
import TDP from "./compnent/TDP";
import Card from "./compnent/Card";
import Card1 from "./compnent/Card1";
import Contact from "./compnent/Contact";
import Footer from "@/components/Footer";
function page() {
  return (
    <div>
      <Navbar />
      <TDP />
      <Card />
      <Card1 />
      <Contact />
      <Footer />
    </div>
  );
}

export default page;
