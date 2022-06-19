import React from "react";

function SetCheckBox(props) {
  return (
    <div className="setcheckbox">
      <label className="setcheckbox--label" htmlFor={props.setUniqueID}>
        {props.setName}
      </label>
      <input
        className="setcheckbox--input"
        type="checkbox"
        name={props.setUniqueID}
        value={props.setName}
      />
    </div>
  );
}

export default SetCheckBox;
