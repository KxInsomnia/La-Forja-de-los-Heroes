import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { ComingSoonPage } from './pages/ComingSoonPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PvePage } from './pages/PvePage'
import { SpecPage } from './pages/SpecPage'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app__main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pve" element={<PvePage />} />
          <Route
            path="/pvp"
            element={<ComingSoonPage title="Guías PvP" />}
          />
          <Route
            path="/bandas"
            element={<ComingSoonPage title="Guía de Bandas" />}
          />
          <Route path="/clase/:classSlug/:specSlug" element={<SpecPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
