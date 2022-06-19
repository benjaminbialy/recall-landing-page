import React, { useRef, useState, forwardRef, useEffect } from "react";
import TestResults from "./TestResults";
import DescriptionEditor from "./DescriptionEditor";
import RadioButtonOption from "./RadioButtonOption";

// takes in 4 terms, 1 description, question number and answer
// props: firstTerm secondTerm thirdTerm fourthTerm description questionNumber answerTerm testLength
function MultipleChoice(props, ref) {
  const [answer, setAnswer] = useState("");
  const [first, setFirst] = useState();
  const [second, setSecond] = useState();
  const [third, setThird] = useState();
  const [fourth, setFourth] = useState();

  const {
    currentQuestion,
    setCurrentQuestion,
    showAnswer,
    again,
    setAgain,
    correct,
    setCorrect,
    falseTerms,
    answerTerm,
  } = props;

  // taken from https://stackoverflow.com/a/7228322/16295769
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  useEffect(() => {
    var falseTermsCopy = [...falseTerms];
    let optionsRemaining = [1, 2, 3, 4];

    // removes the answer from the falseTerms array copy
    const indexOfAnswer = falseTermsCopy.indexOf(answerTerm);
    falseTermsCopy.splice(indexOfAnswer, 1);

    // set the correct answer
    switch (randomIntFromInterval(1, 4)) {
      case 1:
        setFirst(answerTerm);
        optionsRemaining.splice(0, 1);
        break;
      case 2:
        setSecond(answerTerm);
        optionsRemaining.splice(1, 1);
        break;
      case 3:
        setThird(answerTerm);
        optionsRemaining.splice(2, 1);
        break;
      case 4:
        setFourth(answerTerm);
        optionsRemaining.splice(3, 1);
        break;
    }

    let randomTerm = 0;
    while (optionsRemaining.length > 0) {
      switch (optionsRemaining[0]) {
        case 1:
          randomTerm = randomIntFromInterval(1, falseTermsCopy.length - 1);
          setFirst(falseTermsCopy[randomTerm]);
          falseTermsCopy.splice(randomTerm, 1);
          optionsRemaining.splice(0, 1);
          break;
        case 2:
          randomTerm = randomIntFromInterval(1, falseTermsCopy.length - 1);
          setSecond(falseTermsCopy[randomTerm]);
          falseTermsCopy.splice(randomTerm, 1);
          optionsRemaining.splice(0, 1);
          break;
        case 3:
          randomTerm = randomIntFromInterval(1, falseTermsCopy.length - 1);
          setThird(falseTermsCopy[randomTerm]);
          falseTermsCopy.splice(randomTerm, 1);
          optionsRemaining.splice(0, 1);
          break;
        case 4:
          randomTerm = randomIntFromInterval(1, falseTermsCopy.length - 1);
          setFourth(falseTermsCopy[randomTerm]);
          falseTermsCopy.splice(randomTerm, 1);
          optionsRemaining.splice(0, 1);
          break;
      }
    }
  }, [props.description]);

  const onChangeValue = (e) => {
    setAnswer(e.target.value);

    let tempArrayCorrect = [...correct];

    // if correct, add to object of correct answers with question number
    if (e.target.value == props.answerTerm) {
      tempArrayCorrect.push(props.questionNumber);
      setCorrect([...tempArrayCorrect]);
    } else {
      tempArrayCorrect.splice(
        tempArrayCorrect.indexOf(props.questionNumber),
        1
      );
      setCorrect([...tempArrayCorrect]);
    }

    if (currentQuestion - props.noQuestions < props.questionNumber) {
      // checks if the question just clicked has already been moved past
      // adding test length as the first batch of refs are null, used to find where to scroll
      setCurrentQuestion(props.questionNumber + props.noQuestions);
    } else {
      setAgain((prev) => {
        prev + 1;
      });
    }
  };

  const descriptionRef = useRef("");

  return (
    <div
      className="multiplechoice"
      ref={ref}
      style={{ margin: props.page == "learn" && "0px" }}
    >
      <div className="multiplechoice--header">
        <div className="multiplechoice--header--headings">
          <p className="multiplechoice--header--headings--type">
            Multiple Choice
          </p>
          <p className="multiplechoice--header--headings--number">
            Question {props.questionNumber}
          </p>
        </div>
        <div ref={descriptionRef}>
          <DescriptionEditor content={props.description}></DescriptionEditor>
        </div>
      </div>
      <div className="multiplechoice--answer">
        <div className="multiplechoice--answer--container">
          <label
            className="multiplechoice--answer--label"
            style={{
              outline: answer === first && "var(--accent) solid 2px",
              cursor: showAnswer ? "default" : "pointer",
            }}
          >
            {showAnswer ? (
              <input
                className="multiplechoice--answer--label--radio"
                type="radio"
                value={first}
                id={first}
                name={props.questionNumber}
                checked={answer === first}
                disabled
                onChange={onChangeValue}
              />
            ) : (
              <RadioButtonOption
                id={first}
                value={first}
                name={props.questionNumber}
                answer={answer}
                onChangeValue={onChangeValue}
              />
            )}
            {first}
          </label>
          <label
            className="multiplechoice--answer--label"
            style={{
              outline: answer === second && "var(--accent) solid 2px",
              cursor: showAnswer ? "default" : "pointer",
            }}
          >
            {showAnswer ? (
              <input
                className="multiplechoice--answer--label--radio"
                type="radio"
                value={second}
                id={second}
                name={props.questionNumber}
                checked={answer === second}
                disabled
                onChange={onChangeValue}
              />
            ) : (
              <RadioButtonOption
                id={second}
                value={second}
                name={props.questionNumber}
                answer={answer}
                onChangeValue={onChangeValue}
              />
            )}
            {second}
          </label>
          <label
            className="multiplechoice--answer--label"
            style={{
              outline: answer === third && "var(--accent) solid 2px",
              cursor: showAnswer ? "default" : "pointer",
            }}
          >
            {showAnswer ? (
              <input
                className="multiplechoice--answer--label--radio"
                type="radio"
                value={third}
                id={third}
                name={props.questionNumber}
                checked={answer === third}
                disabled
                onChange={onChangeValue}
              />
            ) : (
              <RadioButtonOption
                id={third}
                value={third}
                name={props.questionNumber}
                answer={answer}
                onChangeValue={onChangeValue}
              />
            )}
            {third}
          </label>
          <label
            className="multiplechoice--answer--label"
            style={{
              outline: answer === fourth && "var(--accent) solid 2px",
              cursor: showAnswer ? "default" : "pointer",
            }}
          >
            {showAnswer ? (
              <input
                className="multiplechoice--answer--label--radio"
                type="radio"
                value={fourth}
                id={fourth}
                name={props.questionNumber}
                checked={answer === fourth}
                disabled
                onChange={onChangeValue}
              />
            ) : (
              <RadioButtonOption
                id={fourth}
                value={fourth}
                name={props.questionNumber}
                answer={answer}
                onChangeValue={onChangeValue}
              />
            )}
            {fourth}
          </label>
        </div>
        {showAnswer && (
          <TestResults
            stateAnswer={answer}
            answer={answerTerm}
            correctTerm={answerTerm}
          />
        )}
      </div>
    </div>
  );
}

export default forwardRef(MultipleChoice);
