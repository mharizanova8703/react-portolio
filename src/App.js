import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavTabs from './components/NavTabs'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/pages/Home'

import Blog from './components/pages/Blog'
import Contact from './components/pages/Contact'
import Learn from './components/pages/Learn'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <NavTabs />
        <Route exact path="/" component={Home} />
     
        <Route exact path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/learn" component={Learn} />
        <Footer />
      </div>
      //{' '}
    </Router>
  )
}

export default App
