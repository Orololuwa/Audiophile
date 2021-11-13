export const emailValidation = (email) => {
  if (
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return;
  }
  if (email.trim() === "") {
    return true;
  }
  return true;
};

export const passwordValidation = (pass) => {
  if (pass.trim() === "" || pass.trim().length < 7) {
    return true;
  }
  return;
};
