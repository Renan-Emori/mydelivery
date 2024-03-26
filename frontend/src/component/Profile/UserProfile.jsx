import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react'
import Button from '@mui/material/Button'

const UserProfile = () => {
  const handleLogout = () => {

  }
  return (
    <div className='min-h-[80vh] flex flex-col justify-center items-center text-center'>
      <div className='flex flex-col items-center justify-center'>
        <AccountCircleIcon dx={{fontSize:"9rem"}}/>
        <h1 className='py-5 text-2xl font-semibold'>Coding with Renan</h1>
        <p>Email: renanemori@gmail.com</p>
        <Button onClick={handleLogout()} sx={{margin:"2rem 0rem"}} variant='contained'>
          Logout
        </Button>
      </div>
    </div>
  )
}

export default UserProfile