import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'http://localhost:8080/auth',
  realm: 'your-realm',
  clientId: 'your-client-id'
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;