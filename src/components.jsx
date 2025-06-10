export const OnInputButtonClick = ({ setValue, setError }) => {
  const PromptInput = () => {
    const promptValue = prompt();
    console.log(promptValue);
    if (promptValue === null) {
      setError("");
    } else if (promptValue.length < 3) {
      setError("Введенное значение должно содержать минимум 3 символа");
    } else if (promptValue.length >= 3) {
      setValue(promptValue);
      setError("");
    } else {
      console.log(promptValue);
    }
  };
  return (
    <button className="button" onClick={PromptInput}>
      Ввести новое
    </button>
  );
};

export const OnAddButtonClick = ({
  isValueVaild,
  setList,
  value,
  setValue,
  setError,
}) => {
  const ButttonClick = () => {
    setList((list) => [...list, { id: Date.now(), value: value }]);
    setValue("");
    setError("");
  };
  return (
    <button className="button" onClick={ButttonClick} disabled={!isValueVaild}>
      Добавить в список
    </button>
  );
};

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

export const AddList = ({ list }) => {
  return list.map((item) => (
    <li key={item.id} className="listItem">
      {`${item.value} ${getDateNow()}`}
    </li>
  ));
};
