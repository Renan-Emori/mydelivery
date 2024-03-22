import React from 'react'
import Divider from '@mui/material/Divider';
import CartItem from './CartItem';
import AdressCard from './AdressCard';
import { Card, Button, Grid } from '@mui/material'
import { TextField } from '@mui/material';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const itens = [1, 1, 1, 1]

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outlined: 'none',
    boxShadow: 24,
    p: 4,
};

const Cart = () => {
    const handleOpenAddress = () => { setOpen(true) }
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const initialValues = {
        streetAddress: "",
        state: "",
        pincode: "",
        city: ""
    }
    const validationSchema = Yup.object().shape({
        streetAddress: Yup.string().required("Street address is required"),
        state: Yup.string().required("State is required"),
        pincode: Yup.string().required("Pincode is required"),
        city: Yup.string().required("City is required"),
    })
    const handleSubmit = (value, { setSubmitting }) => {
        console.log("value: ", value )
        setSubmitting(false);
    }

    return (
        <>
            <main className='lg:flex justify-between'>
                <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
                    {itens.map((item, index) => <CartItem key={item + 'iten' + index} />)}
                    <Divider />
                    <div className='billDetails px-5 text-sm'>
                        <p className='font-extralight py-5'>Bill details</p>
                        <div className='space-y-3'>
                            <div className='flex justify-between text-gray-400'>
                                <p>Item Total</p>
                                <p>$8,00</p>
                            </div>
                            <div className='flex justify-between text-gray-400'>
                                <p>Delivery fee</p>
                                <p>$6,00</p>
                            </div>
                            <Divider />
                        </div>
                        <div className='flex justify-between text-gray-400'>
                            <p>Total pay</p>
                            <p>$14,00</p>
                        </div>
                    </div>
                </section>
                <Divider orientation='vertical' flexItem />
                <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
                    <div>
                        <h1 className='text-center font-semibold text-2xl py-10'>Choose delivery address</h1>
                        <div className='flex gap-5 flex-wrap justify-center'>
                            {[1, 1, 1, 1, 1].map((item, index) => (<AdressCard key={item + 'endereco' + index} item={item} showButton={true} />))}
                            <div className='flex gap-5 flex-wrap justify-center'>
                                <Card className='flex gap-5 w-64 p-5'>
                                    <AddLocationIcon />
                                    <div className='space-y-3 text-gray-500'>
                                        <h1 className='font-semibold text-lg text-white'>Add new address</h1>
                                        <Button variant="contained" fullWidth onClick={() => { handleOpenAddress() }}>Add</Button>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched }) => (
                             <Form>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Field
                                            as={TextField}
                                            name="streetAddress"
                                            label="Street Address"
                                            fullWidth
                                            variant="outlined"
                                            error={touched.streetAddress && !!errors.streetAddress}
                                            helperText={touched.streetAddress && errors.streetAddress}
                                        />
                                        <ErrorMessage name="streetAddress" component="div" className="text-red-600" />
                                    </Grid>
                                    {/* Other form fields */}
                                    <Grid item xs={6}>
                                        <Field
                                            as={TextField}
                                            name="state"
                                            label="State"
                                            fullWidth
                                            variant="outlined"
                                            error={touched.state && !!errors.state}
                                            helperText={touched.state && errors.state}
                                        />
                                        <ErrorMessage name="state" component="div" className="text-red-600" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Field
                                            as={TextField}
                                            name="pincode"
                                            label="Pincode"
                                            fullWidth
                                            variant="outlined"
                                            error={touched.pincode && !!errors.pincode}
                                            helperText={touched.pincode && errors.pincode}
                                        />
                                        <ErrorMessage name="pincode" component="div" className="text-red-600" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            as={TextField}
                                            name="city"
                                            label="City"
                                            fullWidth
                                            variant="outlined"
                                            error={touched.city && !!errors.city}
                                            helperText={touched.city && errors.city}
                                        />
                                        <ErrorMessage name="city" component="div" className="text-red-600" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button fullWidth variant="contained" type="submit" color="primary">
                                            Deliver here
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Modal>
        </>
    )
}

export default Cart