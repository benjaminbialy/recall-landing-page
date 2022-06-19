import React, { useState, useRef, useEffect } from "react";
import TipTapEditor from "./TipTapEditor";

function CreateTerm(props) {
  const { formData, setFormData } = props;

  const [term, setTerm] = useState(
    formData?.terms[props.number - 1].term || ""
  );
  const [definition, setDefinition] = useState(
    formData?.terms[props.number - 1].definition || ""
  );

  const deleteTerm = (e) => {
    e.preventDefault();
    let tempArray = [...formData.terms];

    let indexOfTerm = tempArray.indexOf(props.number);
    tempArray.splice(indexOfTerm, 1);

    setFormData((formData) => ({
      ...formData,
      terms: [...tempArray],
    }));
  };

  // runs whenever the term loses focus
  const handleInputChange = () => {
    let formDataCopy = formData;

    let formDataTermsArray = formDataCopy?.terms;

    formDataTermsArray[props.number - 1] = {
      term: term.trim(),
      definition: definition,
      learnt: false,
      seen: false,
    };

    // sets changed term information
    setFormData((formData) => ({
      ...formData,
      terms: [...formDataTermsArray],
    }));
  };

  return (
    <div className="createterm">
      <div className="createterm--heading">
        <h3 className="createterm--number">{props.number}</h3>
        {props.deletable == false ? (
          <></>
        ) : (
          <button className="createterm--delete" onClick={deleteTerm}>
            delete
          </button>
        )}
      </div>
      <div className="createterm--inputs" onBlur={handleInputChange}>
        <input
          type="text"
          placeholder="Enter your term here"
          className="createterm--inputs--term"
          name="title"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          onKeyDown={(e) => e.key == "Enter" && e.preventDefault()}
        ></input>
        <TipTapEditor
          content={definition}
          setContent={setDefinition}
          placeholder={"Enter the definition here"}
        />
      </div>
    </div>
  );
}

export default CreateTerm;
