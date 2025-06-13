import React, { useRef } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
const htmlString = `
  <div style="width: 100%; display: flex; justify-content: center;">
    <img 
      src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg" 
      alt="vite" 
      style="height: 100px; width: 100px;" 
    />
  </div>
`;

const PDFUsingPackage = () => {
    const pdfRef = useRef(null)

const downloadPDF = () => {

const input = pdfRef.current;

html2canvas(input).then((canvas) => {

const imgData = canvas.toDataURL('image/png');

const pdf = new jsPDF('p', 'mm', 'a4', true);

const pdfWidth = pdf.internal.pageSize.getWidth();

const pdfHeight = pdf.internal.pageSize.getHeight();

const imgWidth = canvas.width;

const imgHeight = canvas.height;

const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

const imgX = (pdfWidth - imgWidth * ratio) / 2;

const imgY = 30;

pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio)

pdf.save('invoice.pdf');

});
    }
  return (
    <>
    <div style={{width:"100vw",display:"flex",flexDirection:"column",gap:"20px",alignItems:"center"}} ref={pdfRef}>
        <h1>PDF Report</h1>
        {/* static images */}
        <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
            <img src="/vite.svg" alt="vite" style={{height:"100px",width:"100px"}}/>
        </div>

        {/* url images */}
        <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
            <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg" alt="vite" style={{height:"100px",width:"100px"}}/>
        </div>

        {/* dangeroulyhtml */}
            <div dangerouslySetInnerHTML={{ __html: htmlString }} />
        
    </div>
     <div style={{width:"100%",display:"flex",justifyContent:"center",marginTop:"20px"}}>
        <button onClick={downloadPDF}>Download</button>
     </div>
    </>
  )
}

export default PDFUsingPackage