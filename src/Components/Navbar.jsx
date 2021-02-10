import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import { selectSignedIn, selectUserData, setInput, setSignedIn, setUserData } from '../features/userSlices';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleLogout } from 'react-google-login';
import '../assets/css/navbar.css';


const Navbar = () => {

  const [inputValue, setinputValue] = useState("farmer");
  const isSignedIn = useSelector(selectSignedIn);
  const userData = useSelector(selectUserData);


  const dispatch = useDispatch();
  const logout = (response) => {
    dispatch(setSignedIn(false));
    dispatch(setUserData(null));
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setInput(inputValue));
  };


  return (
    <>
    <div className="navbar">
      <h1 className="navbar__header">React-ion News</h1>
      {isSignedIn ? (
        <div className="navbar__user__data">
          <Avatar
            className="user"
            src={userData?.imageUrl}
            alt={userData?.name}
          />
          <h1 className="signedIn">{userData?.givenName}</h1>
          <GoogleLogout
            clientId="846596287226-asi6k4unp860394eq1mf8jfimpf2hnip.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="logout__button"
              >
                Logout
              </button>
            )}
            onLogoutSuccess={logout}
          />
        </div>
      ) : (
        <h1 className="notSignedIn">Powered by GNews API</h1>
      )}
    </div>

    {isSignedIn && (
      <div className="navbar__mobile__search">
        <div className="news__search">
          <input
            className="search"
            placeholder="Search for a news"
            value={inputValue}
            onChange={(e) => setinputValue(e.target.value)}
          />
          <button className="submit" onClick={handleClick}>
            Search
          </button>
        </div>
      </div>
      )}
    </>
  );
}

export default Navbar


