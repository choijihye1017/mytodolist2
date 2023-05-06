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

  return (
    <div>
      <h2> Working....!!!!</h2>
      <div style={divStyle}>
        {toDoStore.map((item) => {
          if (item.isDone === false) {
            return (
              <div key={item.id} style={listStyle}>
                <Link to={`/work/${item.id}`} style={linkStyle}>
                  <h3>{item.title}</h3>
                  <p style={pStyle}>{item.text}</p>
                </Link>

                <button
                  style={btnStyle}
                  onClick={() => {
                    dispatch(deleteToDo(item.id));
                  }}
                >
                  삭제하기
                </button>
                <button
                  style={btnStyle}
                  onClick={() => {
                    dispatch(itIsDone(item.id));
                  }}
                >
                  완료하기
                </button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default ToDoList;
