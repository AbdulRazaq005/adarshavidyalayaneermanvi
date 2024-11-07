import React, { useState, useEffect } from "react";

export default function ResultRow({
  user,
  idx,
  score,
  max,
  edit,
  onInputChange,
}) {
  //   const [ind, setind] = useState(true);
  const [percent, setPercent] = useState(0);
  var check = 1;
  useEffect(() => {
    if (check) {
      if (score != "Absent") setPercent((score / max) * 100);
      else setPercent(0);
      check = 0;
    }
  }, [score]);
  //   setPercent((score / max) * 100);
  var color = percent * 2;

  return (
    <tr>
      <th scope="row">{idx + 1}</th>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>
        {edit ? (
          <input
            defaultValue={score}
            type="text"
            contentEditable="true"
            style={{ width: "10vw" }}
            onChange={(e) => onInputChange(user.id, e.target.value)}
          />
        ) : (
          score
        )}
      </td>
      <td>{percent.toPrecision(4)}</td>
      <td>
        <div id="result-bar">
          <div
            style={{
              backgroundColor: `rgba(${250 - color}, ${30 + color}, 20, 1)`,
              width: `${percent}%`,
              height: "100%",
              borderRadius: "5px",
              transition: "ease-in-out 0.6s",
            }}
          ></div>
        </div>
      </td>
    </tr>
  );
}
