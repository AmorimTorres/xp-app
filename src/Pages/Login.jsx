import React from 'react';

function Login() {
  /*   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true); */

  return (
    <div>
      <label htmlFor="email">
        <input type="text" name="email" />
      </label>

      <label htmlFor="password">
        <input type="text" name="password" />
      </label>
      <button type="button" name="login" aria-label="button" />
    </div>
  );
}

export default Login;
