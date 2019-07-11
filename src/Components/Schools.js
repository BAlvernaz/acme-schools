import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Form from "./Form";

const Schools = ({ students, schools }) => {
  return (
    <div>
      <div>
        <Form />
      </div>
      <div id="schoolcontainer">
        {schools.map(school => (
          <div key={school.id} id="schoolCard">
            {school.name}
            <img id="schoolImg" src={school.image} />>
          </div>
        ))}
      </div>
    </div>
  );
};

const stateToProps = state => state;

export default connect(stateToProps)(Schools);
