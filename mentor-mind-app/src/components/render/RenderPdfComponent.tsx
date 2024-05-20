import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button } from '@mui/material';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

const RenderPdfComponent = () => {
    const [testFile, setTestFile] = useState<File>();
    const [file, setFile] = useState<File | null>(null);
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState(1);
    const [renderNavButtons, setRenderNavButtons] = useState<Boolean>(false);
    
    function onLoadSuccess() {
        setPageNumber(1);
        setRenderNavButtons(true);
    }

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setTestFile(e.target.files[0]);
        }
    };

    const changePage = (offset: number) => {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }
    const previousPage = () => { changePage(-1); }
    const nextPage = () => { changePage(+1); }

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

    const handleRenderSuccess = (pageData : any) => {
        console.log('width', pageData.width);
        console.log('height', pageData.height);
        console.log('originalWidth', pageData.originalWidth)
        console.log('originalHeight', pageData.originalHeight)
    }
    
    return (
        <div style={{
            border: '2px solid gray'
        }}>
            <div>
                <input id="file" type="file" onChange={onFileChange} />
                <button onClick={doStuff}>abc</button>
                <Document file={file} onLoadSuccess={({ numPages }) => {
                    setNumPages(numPages);
                    setRenderNavButtons(true);
                    onLoadSuccess();
                }}
                >
                    <Page pageNumber={pageNumber} onRenderSuccess={handleRenderSuccess} />
                </Document>
            </div>
            <div>
            {renderNavButtons && (
                    <div>
                        <div>
                            <p>
                                Page {pageNumber} of {numPages}
                            </p>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row"
                        }}>
                            <Button
                                disabled={pageNumber <= 1}
                                onClick={previousPage}
                                sx={{
                                    backgroundColor: "var(--button-color)",
                                    color: "white",
                                    alignSelf: "flex-start",
                                    justifySelf: "start"
                                }}
                            >   
                                Previous Page
                            </Button>
                            <Button
                                sx={{
                                    backgroundColor: "var(--button-color)",
                                    color: "white",
                                    alignSelf: "flex-end",
                                    justifySelf: "end"
                                }}
                                disabled={pageNumber === numPages}
                                onClick={nextPage}
                            >
                                Next Page
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default RenderPdfComponent;