import React from 'react';
import styled from 'styled-components';
import { Typography, Stack, Button} from '@mui/material';
import BioformServices from '../../services/BioformServices';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


export interface BSData {
    stateChanger: () => void;
    id: any;
    image: any;
    name: string;
    issue: string;
}

const CSCard: React.FC<BSData> = ({stateChanger, id, image, name, issue}: BSData) =>  {

    const deleteBioform = () => {
        BioformServices.remove(id)
            .then((response: any)=>{
                console.log(response);
            })
            .catch((e: Error) =>{
                console.log(e);
            });
        stateChanger();
    };

    return (
        <div className="BSCard">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{name}</Typography>
                    <Typography variant="body2" color="text.secondary">{issue}</Typography>
                </CardContent>
                <CardActions>
                        <Stack direction="row" spacing={5} justifyContent="right"
                        sx={{
                            width:"170ch"
                        }}>
                            <Button variant="contained" onClick={deleteBioform} style={{maxWidth:'90px',maxHeight:'30px', minWidth:'90px',minHeight:'30px'}}>Fixed</Button>
                        </Stack>           
                </CardActions>
            </Card>
        </div>
    )
}

export default CSCard