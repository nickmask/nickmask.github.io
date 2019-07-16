import React from "react";

import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Headline from "../Headline/Headline";
import Separator from "../Separator/Separator";
import ListSection from "../ListSection/ListSection";
import WordsToLiveBy from "../WordsToLiveBy/WordsToLiveBy";

import styles from "./App.module.css";

function App() {
  const skills = [
    "Website development",
    "Internationalisation and localisation",
    "Agile promoter",
    "Mobile web enthusiast",
    "Frontend development",
    "Full stack development",
    "Marketer, entrepreneur and customer manager",
    "Co-founder",
    "Team builder",
    "Mediocre gamer"
  ];
  const technology = [
    "Javascript / Typescript / Node.js",
    "React",
    "Redux",
    "Webpack",
    "HTML5",
    "CSS / SCSS / Sass",
    "C# / .NET Core",
    "SQL",
    "GraphQL",
    "AWS",
    "Docker",
    "Jenkins",
    "Git",
    "TeamCity",
    "Jest / Enzyme"
  ];
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <header>
          <Header />
        </header>
        <main>
          <Headline />
          <Separator />
          <About />
          <Separator />
          <ListSection
            title="SKILLS"
            blurb="I have built my expertise over two careers, lots of meetups and
          countless podcasts."
            list={skills}
          />
          <Separator />
          <ListSection
            title="TECHNOLOGY"
            blurb="I have worked with many technologies and am always ready to learn and
          use more."
            list={technology}
          />
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
