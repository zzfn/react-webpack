import { useEffect, useState } from 'react';
import './global.scss';
import styles from './app.module.scss';

function App() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log(process.env.API_URL);
  }, []);
  return (
    <div className={styles.appWrapper}>
      <div>{process.env.ENV_NAME}</div>
      <button onClick={() => setNum(num + 1)}>+1</button>
      <button onClick={() => setNum(num - 1)}>-1</button>
      <hr />
      {num}
    </div>
  );
}

export { App };
