import logo from "./logo.svg";
import "./App.css";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import LoginPage from "./components/common/login";

function App() {
  return (
    <div className="auth" >
      {/* <LoginPage /> */}
      <Authenticator>
        {({ signOut, user }) => (
          <div>
            <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
            <br />
            <h2>Amplify Todos</h2>
          </div>
        )}
      </Authenticator>
    </div>
  );
}

export default App;
