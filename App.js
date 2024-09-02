import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ParentComponent } from './ParentComponent';

function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId="779904650134-ifqacbdpbdunho5dqibsk8grrugu2p68.apps.googleusercontent.com">
        <ParentComponent />
      </GoogleOAuthProvider>;
    </div>
  );
}

export default App;
