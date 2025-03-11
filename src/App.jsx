import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ScrollToTop from './utils/ScrollToTop'
import TermsOfUse from './pages/TermsOfUse'

const App = () => {
  return (
    <div>
        <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-of-use' element={<TermsOfUse />} />
      </Routes>
    </div>
  )
}

export default App