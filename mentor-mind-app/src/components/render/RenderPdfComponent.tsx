import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button } from '@mui/material';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import axios from "axios";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

interface pdfId {
    id: number;
}

const RenderPdfComponent = (pdfId: pdfId) => {
    const [file, setFile] = useState<File | null>(null);
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState(1);
    const [renderNavButtons, setRenderNavButtons] = useState<Boolean>(false);
    useEffect(() => {
        let ignore = false;

        if (!ignore) {
            axios.get(`http://localhost:8080/api/material/data/${pdfId.id}`, { responseType: 'blob' })
            .catch((error) => {
                console.log(error);
            }).then((fileData: any) => {
                var blob = new Blob([fileData.data], { type: "application/pdf"})
                setFile(new File([blob], "pdf.pdf"));
            });
        }
        return () => { ignore = true; }
    }, []);
    
    function onLoadSuccess() {
        setPageNumber(1);
        setRenderNavButtons(true);
    }

    const changePage = (offset: number) => {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }
    const previousPage = () => { changePage(-1); }
    const nextPage = () => { changePage(+1); }

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