// import { response } from 'express';
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./userContext";
import { BASE_URL } from "./backendUrl";

const Header = () => {
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch(BASE_URL+'/profile', {
      // credentials: 'include',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(userInfo => {
      setUserInfo(userInfo);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);


  function logout() {
    fetch(BASE_URL+"/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;
  // const password = userInfo?.password;

  return (
    <header>
      <Link to="/" className="logo">
        MyBlog
      </Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create Post</Link>
            <a onClick={logout}>Logout ({username})</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
