// src/pages/Work.js

import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Work() {
  const toDoStore = useSelector((state) => state.toDo);
  const param = useParams();

  const divStyle = {
    textAlign: "center",
    width: "700px",
    height: "500px",
    // border: "2px solid black",
    // borderRadius: "10px",
  };
  const pStyle = {
    width: "600px",
    marginTop: "30px",
    height: "300px",
    border: "2px solid black",
    marginLeft: "18px",
    padding: "30px",
    borderRadius: "15px",
  };
  return (
    <div>
      {toDoStore.map((item) => {
        if (item.id === param.id) {
          return (
            <div>
              <h1>{item.title}</h1>
              <h3>ID: {item.id}</h3>
              <p>{item.text}</p>
              <Link to={`/works`}>돌아가기</Link>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Work;