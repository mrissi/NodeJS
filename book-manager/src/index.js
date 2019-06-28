import ReactDOM from 'react-dom'
import routes from './routes'
import registerServiceWorker from './registerServiceWorker'
import './styles/index.css'

ReactDOM.render(
  routes,
  document.getElementById('root')
)

registerServiceWorker()
