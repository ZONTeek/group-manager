import React from "react";
import "./styles.css";
import { Checkbox, Button } from "@material-ui/core";



function GroupList({ props, handleCheckboxInput, handleButtonInput }) {
  return <div className="group">
    <ul> {
      props.students.map(student => {
        return <li key={student}>
          {student}
          <span className="checkbox">
            <Checkbox value={student} onChange={(e) => handleCheckboxInput(e)} />
          </span>
        </li>
      })}
    </ul>
    <span className="button">
      <Button onClick={() => handleButtonInput()}>Отправить</Button>
    </span>
  </div>
};

export default GroupList;