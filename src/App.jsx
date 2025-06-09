import "./app.modules.css";
import { useState } from "react";
import * as components from "./components";

export const App = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState("");
  let isValueVaild;
  value.length < 3 ? (isValueVaild = false) : (isValueVaild = true);

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
          isValueVaild={isValueVaild}
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
          <components.AddList list={list} />
        </ul>
      </div>
    </div>
  );
};
