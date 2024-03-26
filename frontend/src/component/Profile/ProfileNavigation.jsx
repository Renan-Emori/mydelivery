import React from 'react'
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { AccountBalanceWallet, AddReaction } from '@mui/icons-material';
import { Drawer } from '@mui/material'
import { useMediaQuery } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';

const menu = [
    { title: "Orders", icon: <ShoppingBagIcon /> },
    { title: "Favorites", icon: <FavoriteIcon /> },
    { title: "Address", icon: <AddReaction /> },
    { title: "Payments", icon: <AccountBalanceWallet /> },
    { title: "Notification", icon: <NotificationsIcon /> },
    { title: "Events", icon: <EventIcon /> },
    { title: "Logout", icon: <LogoutIcon /> }
]

const ProfileNavigation = ({ open, handleClose }) => {
    const isSmallScreen = useMediaQuery("(max-width:900px)")
    const navigate = useNavigate()
    const handleNavigate = (item) => {
        navigate(`/my-profile/${item.title.toLowerCase()}`)
    }
    return (
        <div>
            <Drawer variant={isSmallScreen ? "temporary" : "permanent"} onClose={handleClose}
                open={isSmallScreen ? open : true} anchor="left" sx={{ zIndex: -1, position:"sticky" }}>
                <div className='w-[50vw] lg:w-[20vw] h-[90vh] flex flex-col justify-center text-xl gap-8 pt-20'>
                    {menu.map((item, index) => (
                        < React.Fragment key={item.title + index}>
                            <div onClick={() => handleNavigate(item)} className='px-5 flex items-center space-x-5 cursor-pointer'>
                                {item.icon}
                                <span>
                                    {item.title}
                                </span>
                            </div>
                            {index !== menu.length && <Divider />}
                        </ React.Fragment>
                    ))}
                </div>
            </Drawer>
        </div>
    )
}

export default ProfileNavigation