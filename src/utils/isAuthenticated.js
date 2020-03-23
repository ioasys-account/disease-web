const isAuthenticated = () => {
  const { token } = localStorage.getItem('access-token');
  if (token) return true;
  return false;
};

export default isAuthenticated;
