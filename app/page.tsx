"use client"

// import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect } from "react";
import Footer from "./_components/Footer";
import { Navbar } from "./_components/Navbar";

export default function Home() {

  const {user}=useKindeBrowserClient();

  useEffect(()=>{
    console.log("--",user)
  },[user])
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  );
}
