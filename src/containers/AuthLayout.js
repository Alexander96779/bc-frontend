import React from 'react';
import Logo from '../components/logo/logo';
import './authLayout.scss';

export default function AuthLayout({ title, redirectMsg, redirect, redirectLocation, children }) {
  return (
      <div className="wrapper">
      <div className="container">
        <div className="tab1">
          <Logo />

          <h6 className="title">{title}</h6>
          {children}
          <div className="bottom_link">
            <p href="#" className="link">
              {redirectMsg}
              <a onClick={redirect}>
                {redirectLocation}
              </a>
            </p>
          </div>
        </div>
        <div className="tab2">
          <div className="glass">
            <div className="travel__tab">
              <h1 className="travel_info_title">The People's choice.</h1>
              <p className="travel_info">Bring any form of corruption to the notice of appropriate authorities and the public.</p>
              <p className="travel_info">You can also report on things that need government intervention.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Copyright Broadcaster &copy; 2020</p>
      </div>
      </div>
  );
}
