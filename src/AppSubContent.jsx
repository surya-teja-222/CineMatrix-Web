import React, { Suspense } from "react";

import AboutUs from "./components/aboutUs";
import Features from "./components/Features";
import Review from "./components/Review";
import Footer from "./components/Footer/";

export default function AppSubContent({
  searchTerm
}) {
  return (
    <>
      <Features />

      <section id="about">
        <AboutUs />
      </section>

      <Suspense fallback={<div>Loading... </div>}>
        <Review searchTerm={searchTerm} />
      </Suspense>

      <Suspense fallback={<footer>Loading... </footer>}>
        <footer>
          <Footer />
        </footer>
      </Suspense>
    </>
  )
}
