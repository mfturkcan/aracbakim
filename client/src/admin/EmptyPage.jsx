import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CreateButton, List, useListContext } from 'react-admin';
import { useHistory } from 'react-router';

const Empty = () => {
    const { basePath, resource } = useListContext();
    let history = useHistory();

    function handleClick() {
        history.push("/kullanicilar/create");
    }
    return (
        <Box textAlign="center" m={1} style={{ marginTop: "5%" }} >
            <Typography variant="h4" paragraph color="textPrimary">
                Birim bulunamadı
            </Typography>
            <Typography variant="body1" color="textPrimary">
                Birimler ancak BirimMüdür ile birlikte oluşturabilir.
            </Typography>
            <Button onClick={handleClick} style={{ marginTop: "20px", backgroundColor: "blueviolet", color: "white" }}>Oluştur</Button>
        </Box>
    );
};

export default Empty;
