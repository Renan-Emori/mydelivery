import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { CalendarToday as CalendarTodayIcon } from '@mui/icons-material';
import Radio from '@mui/material/Radio';
import Divider from '@mui/material/Divider';
import { Typography, FormControl, RadioGroup, FormControlLabel } from '@mui/material'
import MenuCard from './MenuCard';

const categories = [
    "Sushi",
    "Ramen",
    "Tempura",
    "Udon",
    "Okonomiyaki",
    "Sashimi",
    "Miso Soup",
    "Yakitori",
    "Tonkatsu",
    "Matcha"
]
const foodTypes = [
    { label: "All", value: "All" },
    { label: "Vegetarian Only", value: "vegetarian" },
    { label: "Non-vegetarian", value: "non_vegetarian" },
    { label: "Seasonal", value: "seasonal" },
]

const menu = [1, 1, 1, 1, 1, 1, 1]

const RestaurantDetails = () => {
    const [foodType, setFoodType] = useState("")
    const handleFilter = (e) => {
        console.log(e.target.value, e.target.name)
    }
    return (
        <div className='px-5 lg:px-20'>
            <section>
                <h3 className='text-gray-500 py-2 mt-10'>Home/Japan/Japanese Fast Food/3</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <img className='w-full h-[40vh] object-cover ' src="https://media.timeout.com/images/105982764/image.jpg" alt="" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={6}>
                            <img className='w-full h-[40vh] object-cover ' src="https://media.architecturaldigest.com/photos/572a34ffe50e09d42bdfb5e0/master/pass/japanese-restaurants-la-01.jpg" alt="" />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img className='w-full h-[40vh] object-cover ' src="https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/194/2021/02/22084630/Takumi_Atmosphere_2-3-724x357.jpg" alt="" />
                        </Grid>
                    </Grid>
                </div>
                <div className='pt-3 pb-5'>
                    <h1 className='text-4xl font-semibold'>Japanese Food</h1>
                    <div className='space-y-3 mt-3'>
                        <h1 className='text-gray-500 mt-1'>RATO MANO COOL</h1>
                        <p className='text-gray-500 flex items-center gap-3'>
                            <LocationOnIcon />
                            <span>
                                Maringá, Paraná
                            </span>
                        </p>
                        <p className='text-gray-500 flex items-center gap-3'>
                            <CalendarTodayIcon />
                            <span>
                                Segunda-Sexta: 11:00 - 23:00 (hoje)
                            </span>
                        </p>
                    </div>
                </div>
            </section>
            <Divider />
            <section className='pt-[2rem] lg:flex relative'>
                <div className='space-y-10 lg:w-[20%] filter '>
                    Filter
                    <div className='box space-y-5 lg:sticky top-28 p-5 shadow-md'>
                        <div>
                            <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                                Food type
                            </Typography>
                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                                    {foodTypes.map((item) => (
                                        <FormControlLabel key={item.value} value={item.value} label={item.label} control={<Radio />} />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider />
                        <div>
                            <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                                Food Category
                            </Typography>
                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                                    {categories.map((item) => (
                                        <FormControlLabel key={item} value={item} label={item} control={<Radio />} />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                    {menu.map((item, index) => (<MenuCard key={index} />))}
                </div>
            </section>
        </div>

    )
}

export default RestaurantDetails