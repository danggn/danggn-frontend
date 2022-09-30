export function getUsername(keycloak) {
  return (
    keycloak.authenticated &&
    keycloak.tokenParsed &&
    keycloak.tokenParsed.preferred_username
  );
}

export function isAdmin(keycloak) {
  return keycloak.authenticated && isAdmin(keycloak);
}

export function checkAuthenticated() {
  const { keycloak } = this.props;
  if (!keycloak.authenticated) {
    this.handleLogInOut();
  }
}
