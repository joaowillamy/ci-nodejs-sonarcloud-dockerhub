export function App() {

  return (
    <div className="container">
      <div className="form-container" id="login-form">
        <h1>Login</h1>
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
          <button onClick={(e) => e.preventDefault()}>Login</button>
        </form>
        <p>Don't have an account? <a href="#" id="signup-link">Sign up</a></p>
      </div>
    </div>
  )
}

export default App;
