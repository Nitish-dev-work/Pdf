import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFUsingPackage from './components/PDFUsingPackage'
import HtmlToPdf from './components/HtmlToPdf'

function App() {

  return (
    <>
    {/* Approach 1 */}
      {/* <PDFUsingPackage/> */}

    {/* Approach 2 */}
    <div>
    <h1>Download PDF</h1>
    <PDFDownloadLink
      document={<HtmlToPdf />}
      fileName="example.pdf"
    >
      {({ loading }) => (loading ? 'Loading...' : 'Download PDF')}
    </PDFDownloadLink>
  </div>
    </>
  )
}

export default App
