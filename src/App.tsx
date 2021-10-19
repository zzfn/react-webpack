import { useEffect, useState } from 'react';
import styles from './app.module.scss';

function App(): JSX.Element {
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log(process.env.API_URL);
    console.log(process.env.NODE_ENV);
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
