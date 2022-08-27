import { useReducer } from "react";
import { Sub } from "../types";

const INITIAL_FORM = {
  nick: "",
  email: "",
  website: "",
  phone: "",
};

interface FormState {
  inputValues: Sub;
}

type formReducerAction =
  | {
      type: "INPUT_CHANGE";
      payload: {
        inputName: string;
        inputValue: string;
      };
    }
  | {
      type: "INPUTS_CLEAR";
    };

const formReducer = (
  state: FormState["inputValues"],
  action: formReducerAction
) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      const { inputName, inputValue } = action.payload;
      return {
        ...state,
        [inputName]: inputValue,
      };
    case "INPUTS_CLEAR":
      return INITIAL_FORM;
    default: // no es necesario este default
      return state;
  }
};

const useNewSubForm = () => {
  return useReducer(formReducer, INITIAL_FORM);
};
export default useNewSubForm;
