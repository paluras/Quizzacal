import "./App.css";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import Landing from "./components/landing-page/landing.component";
import Question from "./components/question/question.component";

function App() {
  const [renderquiz, setRenderquiz] = useState(true);
  const [fetched, setFetched] = useState();
  // const[ansArr, setAnsArr] =useState([])
  const handleQuiz = () => {
    setRenderquiz((prevState) => !prevState);
  };

  // i map tru the data
  // i make the

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((response) => response.json())
      .then((data) => {
        setFetched(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const ansElement = fetched?.results.map((question) => {
    const allAnswers = [question.correct_answer, ...question.incorrect_answers];

    const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);

    return {
      id: nanoid(),
      question: question.question,
      answers: shuffledAnswers,
    };
  });

  const questionElement = ansElement?.map((question) => (
    <Question
      key={question.id}
      question={question.question}
      answers={question.answers}
    />
  ));

  return (
    <>
      <main>
        {" "}
        <img
          className="svg-top-right"
          style={{ position: "absolute", right: "0", top: "0", zIndex: "0" }}
          src="blobs.svg"
          alt=""
        />
        <img
          className="svg-bot-left"
          style={{ position: "absolute", left: "0", bottom: "0", zIndex: "0" }}
          src="blob 5.svg"
          alt=""
        />
        {renderquiz ? (
          <Landing handleQuiz={handleQuiz} />
        ) : (
          <div className="questions-for-container">
            {questionElement}
            <button className="submit">Submit</button>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
