// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { addNumbers } from '@poc-aok-portalrahmen/jsLib';
import styles from './app.module.css';

export function App() {
  return (
    <div style={{ border: "4px solid white", backgroundColor: "blue" }}>
      <h2>Fachanwendung 3</h2>
      <p>Function from shared JS library: {addNumbers(5, 9)}</p>
    </div>
  );
}

// testing whether global eslint-rules are applied in React-Apps: hover :)
function functionWithoutReturnType() {
  return null;
}

export default App;
