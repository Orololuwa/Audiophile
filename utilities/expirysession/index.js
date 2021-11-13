class ExpirySession {
  static get = (key) => {
    let stringValue = window.localStorage.getItem(key); // get details about token.
    if (stringValue !== null) {
      let value = JSON.parse(stringValue);
      let expirationDate = new Date(value.expirationDate);
      if (expirationDate > new Date()) {
        return value.value;
      } else {
        window.localStorage.removeItem(key); // remove token if expired.
      }
    }
    return null;
  };

  static set = (key, value, expirationInSeconds = 86400) => {
    let expirationDate = new Date(
      new Date().getTime() + 1000 * expirationInSeconds
    ); // create new expiring date.
    let newValue = {
      value: value,
      expirationDate: expirationDate.toISOString(),
    };
    window.localStorage.setItem(key, JSON.stringify(newValue)); // add token to local storage.
  };

  static clear = () => {
    window.localStorage.removeItem("access");
    window.localStorage.removeItem("user");
  };
}

export default ExpirySession;
