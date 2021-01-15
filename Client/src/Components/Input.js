import React from "react";
import styled from "styled-components";
import { Theme } from '../globalStyles';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  position: relative;
  margin-top: 30px;

  & > input {
    border: 1px solid ${Theme.purple};
    border-radius: 0.25rem;
    background-color: transparent;
    outline: none;
    padding: 15px 3px 15px 15px;
    font-size: 16px;
    transition: all 0.2s ease;
    z-index: 500;
    color: #f1f1f1
  }

  & > label {
    color: #757575;
    position: absolute;
    top: 15px;
    left: 15px;
    transition: all 0.2s ease;
    z-index: 500;

    ${props =>
    props.focused &&
    `
      color: #f1f1f1;
      transform: translateY(-23px) translateX(-5px);
      z-index: 501;
      background: ${Theme.purple};
      padding: 0 8px;
      border-radius: 2px;
    `}
  }
`

const Input = ({
  value,
  type,
  label,
  onChange,
  onFocus,
  onBlur,
  setRef,
  id,
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleOnFocus = () => {
    setFocused(true);
    onFocus();
  };

  const handleOnBlur = () => {
    setFocused(false);
    onBlur();
  };

  const validateValue = val => {
    if (type === "email") {
      if (val.indexOf("@") === -1) {
        setError("email is invalid");
      } else {
        setError(null);
      }
    }

  };

  const handleOnChange = val => {
    validateValue(val);
    onChange(val);
  };

  const renderLabel = () => {
    if (label) {
      if (error) {
        return <label>{error}</label>;
      }

      return <label>{label}</label>;
    }
    return null;
  };

  const isFocused = focused || String(value).length || type === "date";

  return (
    <InputContainer focused={isFocused} error={error}>
      {renderLabel()}
      <input
        value={value}
        type={type}
        onChange={e => handleOnChange(e.target.value)}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        ref={ref => setRef(ref)}
        id={id}
        {...props}
      />
    </InputContainer>
  );
};

Input.defaultProps = {
  type: "text",
  label: "",
  onChange: text => {
    console.error(`Missing onChange prop: ${text}`);
  },
  onFocus: () => { },
  onBlur: () => { },
  setRef: () => { }
};

export default Input;