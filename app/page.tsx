 "use client"
import { useEffect } from "react";
 import Footer from "./_components/Footer";

import Hero from "./_components/Hero";
import { Navbar } from "./_components/Navbar";
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {user } = useKindeBrowserClient();

  useEffect(()=>{
    console.log(user)
  },[user])
  return (
    <div>
      
      <Navbar/>

      <Hero/>

      <Footer/>
    </div>
  );
}
