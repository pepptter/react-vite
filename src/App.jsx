import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Contact from './views/Contact'
import NewsDetails from './views/NewsDetails'
import News from './views/News'
import NotFound from './views/NotFound'
import { ArticleProvider } from './Contexts/ArticleContext'

function App() {
  return (
    <div className="wrapper">
    <ArticleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/news/:id" element={<NewsDetails />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </ArticleProvider>
    </div>
  )
}

export default App
