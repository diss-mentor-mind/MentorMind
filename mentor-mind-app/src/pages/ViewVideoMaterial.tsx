import { Box } from '@mui/material';
import RenderVideoComponent from '../components/render/RenderVideoComponent'

const ViewVideoMaterial = () => {
    return (
        <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            alignItems="center"
        >
            <RenderVideoComponent />
            <div>abcd</div>
        </Box>
    )
};

export default ViewVideoMaterial;