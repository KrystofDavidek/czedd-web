import React from "react";
import BEMHelper from "react-bem-helper";
import "./About.css";

const classes = new BEMHelper({
  name: "about",
});

export const About = () => {
  return (
    <div {...classes()}>
      <h1>What the CZEDD is?</h1>
      <p>
        CZEDD is a user interface that processes only derivated Czech words and that is intended for students-foreigners who learn the
        Czech language as a second language. CZEDD has the dictionary character because for each derivated word the user can find the
        information like its definition, the part of speech, paradigm pattern, the examples of use etc.
      </p>
      <p>
        In CZEDD are stored derived words only, i.e. those words which meaning is possible to describe due to meanings of based words
        (e.g. učitel is derived from the verb učit by the suffix -tel).
      </p>
      <p>
        CZEDD is intended to students-foreigners without any preferences, this is why we are minimalizing the use of linguistic
        terminology.
      </p>
      <h1>Who is the CZEDD for?</h1>
      <p>
        The active knowledge of word-formation rules is recommended for higher language level (B1 and higher). On the other side, some
        word-formation principles are taught from the beginning. This is why there is for each word written the language level (A1 or
        A2) and if the information is missing, it means that the word is the part of the lexicon at a higher language level.
      </p>
      <h1>How to use the CZEDD?</h1>
      <p>
        CZEDD can be used as a linguistic tool with which you can learn how to create the new Czech words and/or as a Czech-English
        dictionary concentrated on derivated words only. No matter on which way do you use the CZEDD, you will learn how to recognize
        the word structure and approximated meaning of those words.
      </p>
      <p>
        <strong>CZEDD as a linguistic tool for word-formation in Czech.</strong>
      </p>
      <p>
        You can start with learning theory (Theory (Czech derivational morphology)). After study you can start with online excercise.
      </p>
      <p>CZEDD as a derivational dictionary. Because of the properties written above this tool has a dictionary character.</p>
      <h1>Why to use the CZEDD?</h1>
      <p>
        Czech has more than 75 % of words which have been derived from so-called base words (e.g. les? lesík?), i.e. you can read at
        least the approximate word meaning from its structure.
      </p>
      <p>
        This tool is the try to simulate the subconscious knowledge of native speakers about an approximated meaning of the word
        endings and the ability to recognize the word structure.
      </p>
      <p>By regular use of this tool you can understand words which have never heard before.</p>
    </div>
  );
};
