import { useEffect, useState } from 'react';
import styles from './app.module.scss';

function App(): JSX.Element {
  const [num, setNum] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setNum((pre) => pre + 1);
    }, 1000);
  }, []);
  return (
    <div className={styles.appWrapper}>
      {num}
      <div>{process.env.ENV_NAME}</div>
      <button onClick={() => setNum(num + 1)}>+1</button>
      <button onClick={() => setNum(num - 1)}>-1</button>
      <hr />
      {num}
    </div>
  );
}

export { App };
