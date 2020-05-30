const isAuthenticated = () => {
  const user = JSON.parse(localStorage.getItem('starterUser'));
  if (user) {
    return true;
  }
  return false;
}

module.exports = {
  isAuthenticated
}