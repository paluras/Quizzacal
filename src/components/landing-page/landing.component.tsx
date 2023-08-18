
import "./landing.styles.css";

interface Landing {
  handleQuiz: ()=> void
}


function Landing(props:Landing) {
  return (
    <>
      <div className="centered-container">
        <h1 className="tittle">Quizzical</h1>
        <p className="intro-description">Answer Random Questions</p>
        <button onClick={props.handleQuiz} className="start-button">Start quiz</button>
      </div>
    </>
  );
}

export default Landing;
