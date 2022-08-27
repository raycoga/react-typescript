import React, { memo, useReducer } from "react";
import useNewSubForm from "../hooks/useNewSub";
import { Sub } from "../types";

interface FormProps {
  onNewSub: (item: Sub) => void;
}

const Form = memo(({ onNewSub }: FormProps) => {
  const [inputValues, dispatch] = useNewSubForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewSub(inputValues);
    handleClear();
  };

  /* const handleChangeUNO = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // min 45 del video https://www.youtube.com/watch?v=15VKbky2gB4
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  }; */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch({
      type: "INPUT_CHANGE",
      payload: { inputName: name, inputValue: value },
    });
  };

  const handleClear = () => {
    dispatch({ type: "INPUTS_CLEAR" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValues.nick}
          type="text"
          placeholder="nick"
          name="nick"
          onChange={handleChange}
        />
        <input
          value={inputValues.email}
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          value={inputValues.website}
          type="text"
          placeholder="website"
          name="website"
          onChange={handleChange}
        />
        <textarea
          value={inputValues.phone}
          placeholder="phone"
          name="phone"
          onChange={handleChange}
        />
        <button type="button" onClick={handleClear}>
          Clear the form
        </button>
        <button type="submit">Save Sub</button>
      </form>
    </div>
  );
});

export default Form;
