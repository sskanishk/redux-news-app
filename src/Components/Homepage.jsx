import GoogleLogin from 'react-google-login';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSignedIn, setSignedIn, setUserData } from '../features/userSlices';
// import { refreshTokenSetup } from '../utils/refreshToken';

const Homepage = () => {

  const clinet_id = process.env.REACT_APP_GOOGLE_CLIENT_ID
  
  const dispatch = useDispatch();

  const responseGoogle = (response) => {
    // console.log(response)
    // refreshTokenSetup(response);
    dispatch(setSignedIn(true));
    dispatch(setUserData(response.profileObj));
  }

  const isSignedIn = useSelector(selectSignedIn)
  
  return (
    <div>
      {!isSignedIn ? (
        <div id="top">
          <section id="banner">
            <div className="inner">
              <header>
                <h1>React-ion News</h1> 
                <p>A responsive news gallery template with a functional lightbox<br />
                designed by Templated and released under the Creative Commons News.</p>
              </header>
              <GoogleLogin 
                clientId={clinet_id + ".apps.googleusercontent.com"}
                render={(renderProps) => (
                  <button 
                    onClick={renderProps.onClick} 
                    disabled={renderProps.disabled}
                  >
                    Login With Google
                  </button>
                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
              />
              {/* <a href="#main" className="more">Learn More</a> */}
            </div>
          </section>
        </div>
      ):(
        ""
      )}
    </div>
  )
}

export default Homepage;