import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { SpecPage } from './pages/SpecPage'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app__main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/clase/:classSlug/:specSlug" element={<SpecPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
