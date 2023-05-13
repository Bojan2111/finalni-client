import React, { useState } from "react";

const RegisterForm = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRepeatPasswordChange = (event) => {
    setRepeatPassword(event.target.value);
  };

  const handleSubmit = () => {
    console.log(username);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <input
          type="repeatPassword"
          id="repeatPassword"
          name="repeatPassword"
          value={repeatPassword}
          onChange={handleRepeatPasswordChange}
        />
      </form>
      <button type="submit">Register</button>
    </div>
  );
};

export default RegisterForm;
