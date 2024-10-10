// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { addNumbers } from '@poc-aok-portalrahmen/jsLib';
import styles from './app.module.css';

export function App() {
  return (
    <div style={{ border: "2px solid darkblue", padding: "20px" }}>
      <p>Remote 3 Content</p>
      <p>Function from shared JS library: {addNumbers(5, 9)}</p>
    </div>
  );
}

export default App;
