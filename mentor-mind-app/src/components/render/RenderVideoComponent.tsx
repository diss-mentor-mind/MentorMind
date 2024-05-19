import { useState } from 'react';
import ReactPlayer from 'react-player';
import { Console } from 'console';

const RenderVideoComponent = () => {
    const [testFile, setTestFile] = useState<File>();
    const [videoUrl, setVideoUrl] = useState<string>();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
          setTestFile(e.target.files[0]);
        }
    };

    function doStuff() {
        var reader = new FileReader();
        reader.readAsArrayBuffer(testFile!);
        reader.onloadend = function (evt) {
            if (evt.target!.readyState === FileReader.DONE) {
                console.log(reader.result)
                var blob = new Blob([reader.result as ArrayBuffer], { type: "video/mp4" });
                console.log(blob);
                console.log(URL.createObjectURL(blob));
                setVideoUrl(URL.createObjectURL(blob));
            }
        }
    }
    
    return (
        <div style={{
            border: '2px solid gray'
        }}>
            <input id="file" type="file" onChange={handleFileChange} />
            <button onClick={doStuff}>abc</button>
            <ReactPlayer url={videoUrl} playing controls/>
        </div>
    )
}

export default RenderVideoComponent;