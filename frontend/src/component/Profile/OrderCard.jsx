import React from 'react'
import {Card, Button} from '@mui/material'

const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p5'>
        <div className='flex items-center space-x-5'>
            <img className='h-16 w-16' src="https://static.itdg.com.br/images/1200-630/a4880db5302563b309e2cd9664c8981c/303370-original.jpg" alt="" />
        </div>
        <div>
            <p>Sushi</p>
            <p>R$ 2,00</p>
        </div>
        <Button disabled className='cursor-not-allowed' variant="text">
            Complete
        </Button>
    </Card>
  )
}

export default OrderCard