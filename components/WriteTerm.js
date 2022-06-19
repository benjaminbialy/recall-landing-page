import React, { useState, useRef, forwardRef } from "react";
import TestResults from "./TestResults";
import DescriptionEditor from "./DescriptionEditor";

// props: questionNumber, description, answer, showAnswer
function WriteTerm(props, ref) {
  const [answer, setAnswer] = useState("");
  const descriptionRef = useRef("");

  const {
    currentQuestion,
    setCurrentQuestion,
    showAnswer,
    setAgain,
    correct,
    setCorrect,
  } = props;

  const inputValidation = (e) => {
    e.preventDefault();
    let trimmedAnswer = answer.trim();
    setAnswer(trimmedAnswer);

    let tempArrayCorrect = [...correct];

    if (props.page == "learm") {
      if (trimmedAnswer == props.answer) {
        tempArrayCorrect.push(props.question);
        setCorrect([...tempArrayCorrect]);
      } else {
        tempArrayCorrect.splice(
          tempArrayCorrect.indexOf(props.questionNumber),
          1
        );
        setCorrect([...tempArrayCorrect]);
      }
    } else {
      // if correct, add to array of correct answers with question number
      if (trimmedAnswer == props.answer) {
        if (!tempArrayCorrect.includes(props.questionNumber)) {
          tempArrayCorrect.push(props.questionNumber);
          setCorrect([...tempArrayCorrect]);
        }
      } else {
        tempArrayCorrect.splice(
          tempArrayCorrect.indexOf(props.questionNumber),
          1
        );
        setCorrect([...tempArrayCorrect]);
      }

      // checks that it's not the last question on the test.
      // checks if the question just clicked has already been moved past
      if (currentQuestion - props.noQuestions < props.questionNumber) {
        // adding test length as the first batch of refs are null, used to find where to scroll
        setCurrentQuestion(props.questionNumber + props.noQuestions);
      } else {
        setAgain((again) => again + 1);
      }
    }
  };

  return (
    <div
      className="writeterm"
      ref={ref}
      style={{ margin: props.page == "learn" && "0px" }}
    >
      <div className="writeterm--header">
        <div className="writeterm--header--headings">
          <p className="writeterm--header--headings--type">
            Write the correct term
          </p>
          <p className="writeterm--header--headings--number">
            Question {props.questionNumber}
          </p>
        </div>
        <div className="writeterm--header--content">
          <div ref={descriptionRef}>
            <DescriptionEditor content={props.description} />
          </div>
        </div>
      </div>
      <div className="writeterm--answer">
        {showAnswer ? (
          <input
            className="writeterm--answer--input"
            type="text"
            value={answer}
            disabled
          ></input>
        ) : (
          <input
            className="writeterm--answer--input"
            required
            type="text"
            value={answer}
            placeholder="Write the correct term here!"
            onChange={(e) => setAnswer(e.target.value)}
            onBlur={inputValidation}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                inputValidation(e);
              }
            }}
          ></input>
        )}
        {showAnswer == true && (
          <TestResults
            stateAnswer={answer}
            answer={props.answer}
            correctTerm={props.answer}
          />
        )}
      </div>
    </div>
  );
}

export default forwardRef(WriteTerm);
