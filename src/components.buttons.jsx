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
