export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.accessToken) {
    // eslint-disable-next-line prefer-template
    return { Authorization: 'Bearer ' + user.accessToken };
  // eslint-disable-next-line no-else-return
  } else {
    return {};
  }
}
