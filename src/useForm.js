import React, { useState } from 'react';

export const useForm = () => {
  const [value, setValue] = useState();
  const ChangeValue = (e) => {
    setValue(e.target.value);
  };
  const resetV = () => {
    setValue('');
  };

  return [value, ChangeValue, resetV];
};
