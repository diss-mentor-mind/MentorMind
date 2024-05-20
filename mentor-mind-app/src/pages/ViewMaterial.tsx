import { Box } from '@mui/material';
import RenderPdfComponent from '../components/render/RenderPdfComponent'

const ViewMaterial = () => {
    return (
        <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            alignItems="center"
        >
            <RenderPdfComponent />
            <div>abcd</div>
        </Box>
    )
};

export default ViewMaterial;