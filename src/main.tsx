import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import Layout from './layout/Layout'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Layout>
    <App />
    </Layout>
    </BrowserRouter>
  </React.StrictMode>
)
