import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { App } from './App'
import { Detail } from './features/Detail/Detail'
import { Home } from './features/Home/Home'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path=":id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}