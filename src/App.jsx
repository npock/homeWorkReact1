import "./app.modules.css";
import { useState } from "react";
import * as components from "./components.buttons";

const getDateNow = () => {
  let date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  if (minutes.toString().length < 2) {
    return (
      day +
      "." +
      month +
      "." +
      year +
      " " +
      hours +
      ":0" +
      minutes +
      ":" +
      seconds
    );
  } else if (seconds.toString().length < 2) {
    return (
      day +
      "." +
      month +
      "." +
      year +
      " " +
      hours +
      ":" +
      minutes +
      ":0" +
      seconds
    );
  } else {
    return (
      day +
      "." +
      month +
      "." +
      year +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds
    );
  }
};

const AddList = ({ list }) => {
  return list.map((item) => (
    <li key={item.id} className="listItem">
      {`${item.value} ${getDateNow()}`}
    </li>
  ));
};

export const App = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState("");
  let isValueVaild = value.length < 3;

  return (
    <div className="app">
      <h1 className="pageHeading">Ввод значения</h1>
      <p className="noMarginText">
        Текущее значение
        <code> value</code>
        :"
        <output className="currentValue">{value}</output>"
      </p>
      {error !== "" && <div className="error">{error}</div>}
      <div className="buttonsContainer">
        <components.OnInputButtonClick
          setValue={setValue}
          setError={setError}
        />
        <components.OnAddButtonClick
          isValueVaild={!isValueVaild}
          setList={setList}
          value={value}
          setValue={setValue}
          setError={setError}
        />
      </div>
      <div className="listContainer">
        <h2 className="listHeading">Список</h2>
        {list.length === 0 && (
          <p className="noMarginText">Нет добавленных элементов</p>
        )}
        <ul className="list">
          <AddList list={list} />
        </ul>
      </div>
    </div>
  );
};
