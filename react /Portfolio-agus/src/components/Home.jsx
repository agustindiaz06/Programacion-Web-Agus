import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <section id="home">
          <h1>Bienvenido a mi portafolio</h1>
        </section>
        {/* Otras secciones */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
