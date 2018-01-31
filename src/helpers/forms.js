const patterns = {
  email: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
  password: "^(?=.*[A-Z])(?=.*[_!@#$&*\^%\*\.])(?=.*[0-9])(?=.*[a-z]).{8,}$"
}

export default patterns
