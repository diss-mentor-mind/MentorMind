import { useCallback, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import { Box } from '@mui/material';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

const maxWidth = 800;

const RenderPdfComponent = () => {
    type PDFFile = any | null
    const [testFile, setTestFile] = useState<File>();
    const [file, setFile] = useState<File | null>(null);
    const [numPages, setNumPages] = useState<number>()
    const [containerWidth, setContanierWidth] = useState<number>()
    useCallback<ResizeObserverCallback>((entries) => {
        const [entry] = entries;

        if (entry) {
            setContanierWidth(entry.contentRect.width)
        }
    }, []);

    function onLoadSuccess({ numPages } : PDFDocumentProxy) {
        setNumPages(numPages)
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
          setTestFile(e.target.files[0]);
        }
    };

    function doStuff() {
        var reader = new FileReader();
        var fileByteArray = [];
        reader.readAsArrayBuffer(testFile!);
        reader.onloadend = function (evt) {
            if (evt.target!.readyState === FileReader.DONE) {
                console.log(reader.result)
                var blob = new Blob([reader.result as ArrayBuffer], { type: "application/pdf" })
                setFile(new File([blob], "pdf.pdf"))
            }
        }
    }
    
    return (
        <div style={{
            border: '2px solid gray'
        }}>
            <input id="file" type="file" onChange={handleFileChange} />
            <button onClick={doStuff}>abc</button>
            <Document file={file} onLoadSuccess={onLoadSuccess}>
                {Array.from(new Array(numPages), (el, index) => (
                    <Page
                        key = {`page_{index + 1}`}
                        pageNumber = { index + 1}
                        width = { containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth }
                    />
                ))}
            </Document>
        </div>
    )
}

export default RenderPdfComponent;