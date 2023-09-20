import { ThemeProvider } from 'styled-components'

import Main from './components/Main'
import QuizProvider from './context/QuizContext'
import { GlobalStyles } from './styles/Global'
import { theme as AppTheme } from './styles/Theme'
import './index.css';

const App = () => (
  <ThemeProvider theme={AppTheme}>
    <GlobalStyles />
    <QuizProvider>
      <Main />
    </QuizProvider>
  </ThemeProvider>
)

export default App
