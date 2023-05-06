import React, { useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import toDo from "../redux/modules/toDo";
import { render } from "@testing-library/react";
import { itIsDone, deleteToDo } from "../redux/modules/toDo";

function ToDoList() {
  const toDoStore = useSelector((state) => state.toDo);
  const dispatch = useDispatch();
  const listStyle = {
    border: "3px solid rgb(0 128 128)",
    maxWidth: "250px",
    minWidth: "250px",
    height: "160px",
    textAlign: "left",
    listStyle: "none",
    borderRadius: "15px",
    padding: "10px",
    margin: "20px",
  };
  const pStyle = {
    maxWidth: "230px",
  };
  const divStyle = {
    display: "grid",
    gridTemplateColumns: " 1fr 1fr 1fr 1fr",
  };
  const linkStyle = {
    color: "black",
    fontSize: "12px",
  };

  const buttonset = {
    display: "flex",
    gap: "10px",
    margintop: "24px",
  };

  const todoCompleteBtn = {
    backgroundcolor: "#fff",
    border: "2px solid green",
    borderRadius: "8px",
    cursor: "pointer",
    height: "40px",
    width: "50%",
  };

  const todoDeleteBtn = {
    backgroundcolor: "#fff",
    border: "2px solid red",
    borderRadius: "8px",
    cursor: "pointer",
    height: "40px",
    width: "50%",
  };

  return (
    <div>
      <h2> Working...🔥</h2>
      <div style={divStyle}>
        {toDoStore.map((item) => {
          if (item.isDone === false) {
            return (
              <div key={item.id} style={listStyle}>
                <Link to={`/work/${item.id}`} style={linkStyle}>
                  상세보기
                </Link>
                <h3>{item.title}</h3>
                <p style={pStyle}>{item.text}</p>

                <div style={buttonset}>
                  <button
                    style={todoDeleteBtn}
                    onClick={() => {
                      dispatch(deleteToDo(item.id));
                    }}
                  >
                    삭제하기
                  </button>
                  <button
                    style={todoCompleteBtn}
                    onClick={() => {
                      dispatch(itIsDone(item.id));
                    }}
                  >
                    완료하기
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default ToDoList;
