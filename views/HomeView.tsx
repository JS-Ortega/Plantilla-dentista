import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Expert from "../components/Expert";
import Services from "../components/Services";
import Promotions from "../components/Promotions";
import Appointment from "../components/Appointment";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Location from "../components/Location";
import Footer from "../components/Footer";

export default function HomeView() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Expert />
      <Services />
      <Promotions />
      <Appointment />
      <Testimonials />
      <FAQ />
      <Location />
      <Footer />
    </main>
  );
}
