import { createRoot } from 'react-dom/client'
import { NavBar } from './NavBar'
import { MainSection } from './MainSection'
import { WebCore } from './WebJSXManager'

createRoot(document.getElementById('root')).render(
  <WebCore />
)
