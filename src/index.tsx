import { lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './Redux/Store/store'
import { LanguageProvider } from './Components/Common/LanguageProvider/LanguageProvider'
import { withSuspense } from './Components/Common/HOC/withSuspense'
import './index.css'

const App = lazy(() => import('./App'))
const AppLazy = withSuspense(App)
const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <LanguageProvider>
        <AppLazy />
      </LanguageProvider>
    </Provider>
  </BrowserRouter>
)
