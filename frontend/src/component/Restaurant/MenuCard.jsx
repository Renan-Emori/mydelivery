import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button'


const demo = [
    {
        category: "Arroz",
        ingredient: ["Arroz japonês"]
    },
    {
        category: "Alga",
        ingredient: ["Alga nori"]
    },
    {
        category: "Verduras",
        ingredient: ["Cenoura", "Gengibre", "Vagem"]
    },
    {
        category: "Proteína",
        ingredient: ["Salmão"]
    },
]

const MenuCard = () => {
    const handleCheckBoxChange = (value) => {
        console.log(value)
    }
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <div className='lg:flex items-center lg:gap-5'>
                    <div className='w-[7rem] h-[7rem] object-cover'>
                        <img className='lg:flex items-center justify-between' src="https://miro.medium.com/v2/resize:fit:800/1*alIDjEtgdjutNpmof2EMSQ.jpeg" alt="" />
                    </div>
                </div>
                <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                    <p className='font-semibold  text-xl'>
                        Sushi
                    </p>
                    <p>
                        R$ 2,00
                    </p>
                    <p className='text-gray-400'> Giga Biga food</p>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <form action="">
                    <div className='flex gap-5 flex-wrap'>
                        {demo.map((item, index) => (
                            <div key={`category-${index}`}>
                                <p>{item.category}</p>
                                <FormGroup>
                                    {item.ingredient.map((ingredient, i) => (
                                        <FormControlLabel key={`ingredient-${index}-${i}`} control={<Checkbox onChange={() => handleCheckBoxChange(item)} />} label={ingredient} />
                                    ))}
                                </FormGroup>
                            </div>
                        ))}
                    </div>
                    <div>
                        <Button variant="contained" disabled={false} type='submit' >
                          {true?"Add to cart" : "Out of stock"}
                        </Button>
                    </div>
                </form>
            </AccordionDetails>
        </Accordion>
    )
}

export default MenuCard