import React from 'react'
import {Card, Button} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';

const AdressCard = ({item, showButton}) => {
    const handleSelectAddress = () => {

    }

  return (
    <div>
        <Card className='flex gap-5 w-64 p-5'>
            <HomeIcon />
            <div className='space-y-3 text-gray-500'>
                <h1 className='font-semibold text-lg text-white'>Home</h1>
                <p>Contorno Major Abelardo José da Cruz, Conjunto Habitacional Requião,	Maringá, PR	87047426</p>
                {showButton && (<Button variant="contained" fullWidth  onClick={() => {handleSelectAddress()}}>select</Button>)}
            </div>
        </Card>
    </div>
  )
}

export default AdressCard