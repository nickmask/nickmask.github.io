import React from "react";

import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Headline from "../Headline/Headline";
import Separator from "../Separator/Separator";
import Skills from "../Skills/Skills";
import Technology from "../Technology/Technology";
import WordsToLiveBy from "../WordsToLiveBy/WordsToLiveBy";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <div class={styles.container}>
        <header>
          <Header />
        </header>
        <main>
          <Headline />
          <Separator />
          <About />
          <Separator />
          <Skills />
          <Separator />
          <Technology />
          <Separator />
          <WordsToLiveBy />
          <Separator />
          <Contact />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
