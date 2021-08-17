import React from 'react'
import { withLDProvider } from 'launchdarkly-react-client-sdk'
import ExampleComponent from './ExampleComponent'

function App() {
  return (
    <div className="App">
      <ExampleComponent />
    </div>
  )
}

export default withLDProvider({
  clientSideID: process.env.REACT_APP_LD_CLIENT_ID || '',
  options: {}
})(App)
