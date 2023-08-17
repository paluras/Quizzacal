import "./question.styles.css";
import { nanoid } from 'nanoid'
import he from "he";
interface Question {
  question: string;
  answers: Array;
}

function Question({ question, answers }: Question) {
  const asn = answers?.map((something) => (
    <button key={nanoid()} className="answears">{he.decode(something)}</button>
  ));
 

  return (
    <>
      <div className="answears-container">
        <h3 className="question">{he.decode(question)}</h3>
        {/* Here we will map 4 buttons , now we hardcoded */}
        <div className="answears-btn-container">{asn}</div>
        <div className="line"></div>
      </div>
    </>
  );
}

export default Question;
