import React from "react";
import logIn from "./log-in.png";
import {useForm} from 'react-hook-form'
import * as Yup from 'yup'

export const LoginForm = () => {
  const {register, handleSubmit, errors} = useForm({
    mode: 'onBlur',
    validationSchema: Yup.object({
      login: Yup.string().max(10, 'Login must be shorter than 10 characters').required('Required'),
      password: Yup.string().min(6, 'Password should be longer than 6 characters').required()
    }),
  })

  const onSubmit = ({login, password}) => {
    alert(`Login: ${login}, password: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <header>
        <img width="60" src={logIn} alt="log in" />
      </header>
      <label htmlFor="login">Login</label>
      <input
        ref={register}
        id="login"
        name="login"
        type="text"
      />
      {errors.login && <div>{errors.login.message}</div>} 
      <label htmlFor="password">Password</label>
      <input
        ref={register}
        id="password"
        name="password"
        type="password"
      />
      {errors.password && <div>{errors.password.message}</div>} 
      <button type="submit">Log in</button>
    </form>
  );
};
