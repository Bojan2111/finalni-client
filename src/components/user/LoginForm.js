import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
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
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </form>
      <button type="submit">Log in</button>
    </div>
  );
};

export default LoginForm;
