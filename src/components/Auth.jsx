import React, { useEffect, useState } from 'react';
import keycloak from '../services/keycloak';

const Auth = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
      setIsAuthenticated(authenticated);
    });
  }, []);

  if (!isAuthenticated) return <div>Loading...</div>;

  return <>{children}</>;
};

export default Auth;