import React from "react";
import Navbar from "@/components/Navbar";
import Herosection from "./Component/Herosection";
import Text from "./Component/Text";
import Get from "./Component/Get";
import Footer from "@/components/Footer";
// import herosection from "@/app/Privacy/Component/Herosection";

function page() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Text />
      <Get />
      <Footer />
      {/* <herosection /> */}
    </div>
  );
}

export default page;
