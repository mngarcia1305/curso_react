import { useState } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: '',
    phone:'',
    email: '',
    emailRepeat: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    console.log(validate(values))
 
    if (Object.keys(validate(values)).length === 0) {
      console.log("no hay errores")
      callback(values);
    }
  };
  return { handleChange, handleSubmit, values, errors };
};

export default useForm;