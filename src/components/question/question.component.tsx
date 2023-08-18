import "./question.styles.css";
import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import he from "he";

interface Answer {
  text: string;
  isCorrect: boolean;
}

interface QuestionProps {
    question: string;
    answers: Answer[];
    correct_answer: string; 
    submitted:unknown;
  }
  
  function Question({ question, answers, correct_answer , submitted}: QuestionProps) {
   
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(() => {
    const storedAnswers = localStorage.getItem("selectedAnswers");
    return storedAnswers ? JSON.parse(storedAnswers) : [];
  });



  const toggleAnswer = (index: number) => {
    if(selectedAnswers.length > 0){
        return
    }
    setSelectedAnswers((prevSelectedAnswers) =>
      prevSelectedAnswers.includes(index)
        ? prevSelectedAnswers.filter((item) => item !== index)
        : [...prevSelectedAnswers, index]
    );
  };
  const asn = answers?.map((answer, index) => (
    <button
      onClick={() => toggleAnswer(index)}
      key={nanoid()}
      className={`answears ${selectedAnswers.includes(index) ? "selected" : ""} ${
        submitted && selectedAnswers.includes(index)
          ? answer === correct_answer
            ? "correct"
            : "incorrect"
          : ""
      }`}
    >
      {he.decode(answer)}
    </button>
  ));
  console.log(selectedAnswers);


  

  return (
    <div className="answears-container">
    <h3 className="question">{he.decode(question)}</h3>
    <div className="answears-btn-container">{asn}</div>
    
    <div className="line"></div>
  </div>
);
}

export default Question;
