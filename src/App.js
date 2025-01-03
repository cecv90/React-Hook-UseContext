import { createContext, useContext, useState } from 'react';
import './App.css';

const ThemeContext = createContext('light');

const App = ()  => {
  const [theme, setTheme] = useState('light')
  return (
    <div className='center-container'>
    <ThemeContext.Provider value={theme}>
      <Form />
    </ThemeContext.Provider>
    <Button onClick={() => { 
      setTheme(theme === 'dark' ? 'light' : 'dark');
    }}>
      Toggle theme
    </Button>
    </div>
  )
}

const Form = ({ children }) => {
  return (
    <Panel title='Welcome'>
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  )
}

const Panel = ({title, children}) =>{
  const theme=useContext(ThemeContext);
  const className = 'panel-' + theme;
  return(
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

const Button = ({children, onClick}) =>{
  const theme=useContext(ThemeContext);
  const className = 'button-' + theme;
  return(
    <button 
    className={className}
    onClick={onClick}
    >
      {children}
    </button>
  )
}
export default App;

