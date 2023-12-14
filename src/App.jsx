import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getTokenFromXero } from './actions/zero';

function App() {
  // const [count, setCount] = useState(0);
  const [fetchData, setFetchData] = useState(true);
  const [code, setCode] = useState(null);
  const getToken = async () => {
    const url = new URL(location.href);
    const code = url.searchParams.get("code");
    console.log(`code: `, code);
    if (!code) {
      await getTokenFromXero();
      setFetchData(false);
    } else {
      setCode(code);
    }
  };
  useEffect(() => {
    getToken();
  }, [fetchData]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="read-the-docs">
        Hello mahdi
      </p>
      {code && (
        <button onClick={() => getTokenFromXero()}>
          Get code
        </button>
      )}
    </>
  )
}

export default App
