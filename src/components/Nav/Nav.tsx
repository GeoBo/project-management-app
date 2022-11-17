import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { api } from 'store/api';
import { selectToken, setToken } from 'store/authSlice';

const Nav = () => {
  const token = useAppSelector(selectToken);
  //console.log(token);
  const dispatch = useAppDispatch();

  function clickHandler(e: React.MouseEvent) {
    e.preventDefault();
    dispatch(setToken({ token: '' }));
    dispatch(api.util.resetApiState());
  }

  return token ? (
    <>
      <NavLink end to="projects">
        Войти в приложение
      </NavLink>
      <NavLink to="/" onClick={clickHandler}>
        Выйти из аккаунта
      </NavLink>
    </>
  ) : (
    <>
      <NavLink end to="login">
        Войти
      </NavLink>
      <NavLink end to="signup">
        Зарегистрироваться
      </NavLink>
    </>
  );
};

export default Nav;