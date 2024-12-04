import './App.css'
import MainQueryProvider from './common/MainQueryProvider'
import List from './purchase/List'

function App() {
  return (
    <MainQueryProvider>
      <h1>Purchases</h1>
      <List />
    </MainQueryProvider>
  )
}

export default App
