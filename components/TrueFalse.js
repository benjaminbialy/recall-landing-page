import React, { useRef, useState, forwardRef, useEffect } from "react";
import TestResults from "./TestResults";
import DescriptionEditor from "./DescriptionEditor";
import TrueFalseOption from "./TrueFalseOption";

function TrueFalse(props, ref) {
  const [answer, setAnswer] = useState("");
  const [correctTerm, setCorrectTerm] = useState(""); // error
  const [propsAnswer, setPropsAnswer] = useState("");
  const [displayTerm, setDisplayTerm] = useState("");
  const [description, setDescription] = useState("");

  const {
    currentQuestion,
    setCurrentQuestion,
    showAnswer,
    again,
    setAgain,
    correct,
    setCorrect,
    falseTerms,
  } = props;

  useEffect(() => {
    setPropsAnswer(props.answer);
    setDisplayTerm(props.displayTerm);
    setDescription(props.description);
  }, []);

  useEffect(() => {
    // gets correct answer
    if (propsAnswer == displayTerm) {
      setCorrectTerm("True");
    } else {
      setCorrectTerm("False");
    }
  }, [propsAnswer, displayTerm]);

  const onChangeValue = (e) => {
    setAnswer(e.target.value);

    let tempArrayCorrect = [...correct];

    // if correct, add to array of correct answers with question number
    console.log(e.target.value);
    if (e.target.value == correctTerm) {
      tempArrayCorrect.push(props.questionNumber);
      setCorrect([...tempArrayCorrect]);
    } else {
      tempArrayCorrect.splice(
        tempArrayCorrect.indexOf(props.questionNumber),
        1
      );
      setCorrect([...tempArrayCorrect]);
    }

    // adding test length as the first batch of refs are null
    // checks if the question just clicked has already been moved past
    if (currentQuestion - props.noQuestions < props.questionNumber) {
      // adding test length as the first batch of refs are null, used to find where to scroll
      setCurrentQuestion(props.questionNumber + props.noQuestions);
    } else {
      setAgain(again + 1);
    }
  };

  const descriptionRef = useRef("");

  return (
    <div className="truefalse" ref={ref}>
      <div className="truefalse--header">
        <div className="truefalse--header--headings">
          <p className="truefalse--header--headings--type">True or False</p>
          <p className="truefalse--header--headings--number">
            Question {props.questionNumber}
          </p>
        </div>
        <div className="truefalse--header--content">
          <p className="truefalse--header--content--term">{displayTerm}</p>
          <div ref={descriptionRef}>
            <DescriptionEditor content={description} />
          </div>
        </div>
      </div>
      <div className="truefalse--answer" onChange={onChangeValue}>
        <label
          className="truefalse--answer--label"
          style={{
            outline: answer === "True" && "var(--accent) solid 2px",
            cursor: showAnswer ? "default" : "pointer",
          }}
        >
          {showAnswer ? (
            <input
              className="truefalse--answer--label--radio"
              type="radio"
              value={"True"}
              id={"True"}
              name={props.questionNumber}
              checked={answer === "True"}
              disabled
            />
          ) : (
            <TrueFalseOption
              id={"True-" + props.questionNumber}
              value={"True"}
              name={props.questionNumber}
              answer={answer}
              onChangeValue={onChangeValue}
            />
          )}
          True
        </label>
        <label
          className="truefalse--answer--label"
          style={{
            outline: answer === "False" && "var(--accent) solid 2px",
            cursor: showAnswer ? "default" : "pointer",
          }}
        >
          {showAnswer ? (
            <input
              className="truefalse--answer--label--radio"
              type="radio"
              value={"False"}
              name={props.questionNumber}
              checked={answer === "False"}
              disabled
            />
          ) : (
            <TrueFalseOption
              id={"False-" + props.questionNumber}
              value={"False"}
              name={props.questionNumber}
              answer={answer}
              onChangeValue={onChangeValue}
            />
          )}
          False
        </label>
        {showAnswer && (
          <TestResults
            //stateAnswer (button clicked/inputted), answer (correct button to click/answer)
            stateAnswer={answer}
            answer={correctTerm}
            correctTerm={propsAnswer}
          />
        )}
      </div>
    </div>
  );
}

export default forwardRef(TrueFalse);
