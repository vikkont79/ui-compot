import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Icon, IconButton, Input, Link } from './components/shared'
import { Layout } from './components/widgets/layout'


function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('');

  const handleChange = (newValue: string) => {
    setName(newValue);
  };

  return (
    <Layout>
      <main>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>My name is {name}</p>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <Icon
          name='arrow-down'
          size={50}
        />
        <Link>Link/span</Link>
        <Button>Button/Link</Button>
        <IconButton
          icon='arrow-down'
        >Свернуть</IconButton>
        <Input
          label='Имя'
          hiddenLabel={true}
          error='Введите имя'
          isInvalid={true}
          value={name}
          id='1'
          onChange={handleChange}
        />
      </main>
    </Layout>

  )
}

export default App
