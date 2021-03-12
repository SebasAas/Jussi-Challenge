import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Home } from './pages/home'

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Alguma coisa deu errado:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  )
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Home />
    </ErrorBoundary>
  )
}

export default App
