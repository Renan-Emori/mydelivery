import React from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions, IconButton} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
    return (
        <div>
            <Card>
                <CardMedia sx={{ height: 345 }} image='https://www.tastingtable.com/img/gallery/20-japanese-dishes-you-need-to-try-at-least-once/l-intro-1664219638.jpg' />
                <CardContent>
                    <Typography variant="h5" component={"div"}>
                        Japanese Food
                    </Typography>
                    <Typography variant="body2" component={"div"}>
                        50% off on you first order
                    </Typography>
                    <div className='space-y-2 py-2'>

                    </div>
                </CardContent>

                {false && <CardActions>
                    <IconButton aria-label="" >
                        <DeleteIcon />
                    </IconButton >
                </CardActions>}
            </Card>
        </div>
    )
}

export default EventCard