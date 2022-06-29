import React, { useState } from 'react';
import './style.css';
import { useForm } from './useForm';

export default function App() {
  const [fName, ChangeF, resetF] = useForm();
  const [lName, ChangeL, resetL] = useForm();

  const sub = () => {
    alert(`${fName}-${lName}`);
    resetF();
    resetL();
  };
  return (
    <>
      <h1>use form hook!</h1>
      <input type="text" value={fName} onChange={ChangeF} />
      <input type="text" value={lName} onChange={ChangeL} />
      <button onClick={sub}>Submit </button>
    </>
  );
}
