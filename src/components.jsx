export const OnInputButtonClick = ({ setValue, setError }) => {
  const PromptInput = () => {
    const promptValue = prompt();
    if (promptValue.length < 3) {
      setError("Введенное значение должно содержать минимум 3 символа");
    } else if (promptValue.length >= 3) {
      setValue(promptValue);
      setError("");
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

export const AddList = ({ list }) => {
  return list.map((item) => (
    <li key={item.id} className="listItem">
      {item.value}
    </li>
  ));
};
