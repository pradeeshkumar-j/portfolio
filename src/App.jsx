import GlobalStyle from './styles/GlobalStyle'
import './App.css'
import { ThemeProvider } from 'styled-components'
import { lightThemes } from './components/Themes'
import { Route, Router ,Routes} from 'react-router-dom'
import MainContent from './components/MainContent'
import AboutPage from './components/AboutPage'
import BlogPage from './components/BlogPage'
import WorkPage from './components/WorkPage'
import MyskillsPage from './components/MyskillsPage'
function App() {
  
  return (
    <>
      <ThemeProvider theme={lightThemes}>
      <GlobalStyle />

      <Routes>
        <Route exact path='/' Component={MainContent}/>
        <Route exact path='/about' Component={AboutPage}/>
        <Route exact path='/feats' Component={BlogPage}/>
        <Route exact path='/work' Component={WorkPage}/>
        <Route exact path='/skills' Component={MyskillsPage}/>
      </Routes>

      </ThemeProvider>
    </>
  )
}

export default App
