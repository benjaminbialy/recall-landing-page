import React, { useState, useEffect } from "react";
import DescriptionEditor from "./DescriptionEditor";
import RadioButtonOption from "./RadioButtonOption";

function LearnMultipleChoice(props) {
  const [answer, setAnswer] = useState("");
  const [first, setFirst] = useState();
  const [second, setSecond] = useState();
  const [third, setThird] = useState();
  const [fourth, setFourth] = useState();

  const {
    falseTerms,
    definition,
    setQuestionNumber,
    questionNumber,
    seen,
    setSeen,
    unseen,
    setUnseen,
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
  }, [definition]);

  const onChangeValue = (e) => {
    setAnswer(e.target.value);

    let tempArraySeen = [...seen];
    let tempArrayUnseen = [...unseen];

    // if correct, add to seen and then remove from unseen
    if (e.target.value == answerTerm) {
      tempArraySeen.push(questionNumber);
      setSeen([...tempArraySeen]);
      tempArrayUnseen.splice(questionNumber, 1);
      setUnseen([...tempArrayUnseen]);
    }

    setQuestionNumber((prev) => prev + 1);
    setAnswer("");
  };

  return (
    <div className="multiplechoice" style={{ margin: "0px" }}>
      <div className="multiplechoice--header">
        <div className="multiplechoice--header--headings">
          <p className="multiplechoice--header--headings--type">
            Multiple Choice
          </p>
          <p className="multiplechoice--header--headings--number">
            Question {questionNumber}
          </p>
        </div>
        <div>
          <DescriptionEditor content={definition}></DescriptionEditor>
        </div>
      </div>
      <div className="multiplechoice--answer">
        <div className="multiplechoice--answer--container">
          <label
            className="multiplechoice--answer--label"
            style={{
              outline: answer === first && "var(--accent) solid 2px",
            }}
          >
            <RadioButtonOption
              id={first}
              value={first}
              name={props.questionNumber}
              answer={answer}
              onChangeValue={onChangeValue}
            />
            {first}
          </label>
          <label
            className="multiplechoice--answer--label"
            style={{
              outline: answer === second && "var(--accent) solid 2px",
            }}
          >
            <RadioButtonOption
              id={second}
              value={second}
              name={props.questionNumber}
              answer={answer}
              onChangeValue={onChangeValue}
            />

            {second}
          </label>
          <label
            className="multiplechoice--answer--label"
            style={{
              outline: answer === third && "var(--accent) solid 2px",
            }}
          >
            <RadioButtonOption
              id={third}
              value={third}
              name={props.questionNumber}
              answer={answer}
              onChangeValue={onChangeValue}
            />

            {third}
          </label>
          <label
            className="multiplechoice--answer--label"
            style={{
              outline: answer === fourth && "var(--accent) solid 2px",
            }}
          >
            <RadioButtonOption
              id={fourth}
              value={fourth}
              name={props.questionNumber}
              answer={answer}
              onChangeValue={onChangeValue}
            />
            {fourth}
          </label>
        </div>
      </div>
    </div>
  );
}

export default LearnMultipleChoice;
