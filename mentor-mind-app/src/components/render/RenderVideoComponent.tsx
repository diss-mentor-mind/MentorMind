import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import axios from "axios";

interface videoId {
    id: number;
}

const RenderVideoComponent = (videoId: videoId) => {
    const [videoUrl, setVideoUrl] = useState<string>();
    useEffect(() => {
        let ignore = false;

        if (!ignore) {
            axios.get(`http://localhost:8080/api/material/data/${videoId.id}`, { responseType: 'blob' })
            .catch((error) => {
                console.log(error);
            }).then((fileData: any) => {
                var blob = new Blob([fileData.data], { type: "video/mp4"})
                setVideoUrl(URL.createObjectURL(blob));
            });
        }
        return () => { ignore = true; }
    }, []);
    
    return (
        <div style={{
            border: '2px solid gray'
        }}>
            <ReactPlayer url={videoUrl} playing controls/>
        </div>
    )
}

export default RenderVideoComponent;