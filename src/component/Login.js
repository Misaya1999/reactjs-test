function Login() {
  return (
    <div className="App">
      <div className="row" style={{marginBottom: '20px', display: 'flex', justifyContent: 'center'}}>
        <div className="col-sm-4">
          <div className="login-form">
            <h2>Login!</h2>
            <form method="POST" action="{{ route('users.login.form') }}">
              @csrf
              <input type="email" name="email" placeholder="Email Address" />
              <input type="password" name="password" placeholder="Password" />
              <span>
                <input type="checkbox" className="checkbox" name="remember_me" /> 
                Remember me
              </span>
              <div className="button-group" style={{display: 'flex', gap: '10px'}}>
                <button type="submit" className="btn btn-default">Login</button>
                <button type="button" className="btn btn-default" onclick="window.location='{{ route('users.register.form') }}'">Register</button>
                <button type="button" className="btn btn-default" onclick="window.location='{{ route('users.forgotPassword.form') }}'">Forgot Password ?</button>
              </div>
              @if ($errors-&gt;has('login'))
              <div className="alert alert-danger">
                {'{'}{'{'} $errors-&gt;first('login') {'}'}{'}'}
              </div>
              @endif
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
