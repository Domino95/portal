import React from "react";
import {
  AllInputsWithLabelsWrapper,
  SingleInputWithLabelWrapper
} from "./InputsWithLabelsStyle";
import {
  EMAIL,
  PASSWORD,
  REP_PASSWORD,
  DISPLAY_NAME,
  LOGIN_TYPE
} from "Pages/AuthPage/constants";
import Label from "./Label/Label";
import Input from "./Input/Input";
/* //TEN KOMPONENT BĘDZIE KONTENEREM NA NASZE INPUTY WRAZ Z LABELAMI
Chodzi o to, że możemy sobie tutaj wypisać w tablicy inputy, których będziemy używać. Każdy z inputów ma id, value (który jest brany z propsów, name i placeholder). Do każdego inputa musi być label.
*/

const InputsWithLabels = ({
  handleSetInput,
  repassword,
  password,
  email,
  displayName,
  formType
}) => {
  // tutaj mamy tablicę wszystkich labeli jakie będziemy używać. wrzucamy do niej nazwy klas z fontAwesome - dzięki temu do odpowiedniego inputa damy odpowiednią ikonkę

  //to jest tablica wszystkich inputów z labelami
  let allInputsWithLabels = [
    {
      id: 1,
      value: email,
      name: EMAIL,
      placeholder: "Username",
      icon: "fas fa-user"
    },
    {
      id: 2,
      value: displayName,
      name: DISPLAY_NAME,
      placeholder: "Your name and surname",
      icon: "fas fa-user"
    },
    {
      id: 3,
      value: password,
      name: PASSWORD,
      placeholder: "Password",
      icon: "fas fa-key"
    },
    {
      id: 4,
      value: repassword,
      name: REP_PASSWORD,
      placeholder: "Repeat password",
      icon: "fas fa-key"
    }
  ];

  // jeżeli formType jest do logowania to filtrujemy tablicę i usuwamy z niej obiekt który ma id ===3, w naszym wypadku jest to repeatPassword - niepotrzebujemy tego do logowania
  formType === LOGIN_TYPE &&
    (allInputsWithLabels = allInputsWithLabels.filter(input => input.id !== 4).filter(input => input.id !== 2));

  //tutaj już tworzymy zawartość to wyrenderowania
  const contentToRender = allInputsWithLabels.map(input => {
    return (
      <SingleInputWithLabelWrapper key={input.id}>
        <Label name={input.name} icon={input.icon} />
        <Input
          name={input.name}
          value={input.value}
          handleSetInput={e => handleSetInput(e, input.name)}
          placeholder={input.placeholder}
        />
      </SingleInputWithLabelWrapper>
    );
  });
  return (
    <AllInputsWithLabelsWrapper length={contentToRender.length}>
      {contentToRender}
    </AllInputsWithLabelsWrapper>
  );
};

export default InputsWithLabels;
