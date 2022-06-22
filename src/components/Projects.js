import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const Projects = () => {
    return (
        <div className='mt-14 ml-20 mb-10 flex flex-row justify-between mr-20'>
            <Card sx={{ maxWidth: 345, backgroundColor: '#161717', color: 'white', borderRadius: '16px', boxShadow: 100, alignSelf: 'center', alignContent: 'center' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height='100%'
                        image="https://i.ibb.co/yp1KGMR/screen1.png"
                        alt="Booking App"
                        width='100%'
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                            Booking App
                        </Typography>
                        <Typography variant="body2" color="white">
                            This app will manage your real life easily. You can book a man for your specific work at your home.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345, backgroundColor: '#161717', color: 'white', borderRadius: '16px', boxShadow: 100 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height='100%'
                        image="https://i.ibb.co/d2KKp55/screen1-1.png"
                        alt="Booking App"
                        width='100%'
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                            Food Delivery App
                        </Typography>
                        <Typography variant="body2" color="white">
                            This app will manage favourit food in realtime. You can order your loved snacks.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345, backgroundColor: '#161717', color: 'white', borderRadius: '16px', boxShadow: 100 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height='100%'
                        image="https://i.ibb.co/1K5g4nG/screen1-2.png"
                        alt="Booking App"
                        width='100%'
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                            News App
                        </Typography>
                        <Typography variant="body2" color="white">
                            This app will provide you the update of the world of every second.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default Projects;