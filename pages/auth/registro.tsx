import { useState } from "react";
import { NextPage } from "next";
import FirstStep from '../../components/register/FirstStep';
import { FormProvider, useForm } from "react-hook-form";
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Stack, Step, StepContent, StepLabel, Stepper, TextField, Typography, Box } from '@mui/material';
import { TypeSpecimenOutlined } from "@mui/icons-material";
import Link from "next/link";


interface SignupType {
    email: string;
    password: string;
    password_confirm: string;
}


const steps = [
    'Información personal',
    'Información de tu veterinaria',
    'Resumen'
];

const handleSteps = (step: number) => {
    switch (step) {
        case 0:
            return <FirstStep />
        default:
            throw new Error('Unknown step')
    }
}

const RegistroPage: NextPage = () => {
    const methods = useForm<SignupType>({ mode: "onBlur" });
    const [activeStep, setActiveStep] = useState(0);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = methods;

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    
    const handleReset = () => {
      setActiveStep(0);
    };

    const onSubmit = async (data: SignupType) => {
        console.log(data);
    };

    return (
        <Stack sx={{ width: '100%', height: '100%', p: 8 }} spacing={4} justifyContent='center' alignContent='center'>
            <Card sx={{ boxShadow: 3, borderRadius: '16px' }}>
                <CardMedia 
                    component='img'
                    alt='Registro'
                    height='300'
                    image='/assets/images/medico.jpg'
                />
                <CardContent>
                    <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map( (label, index) => 
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                        )
                    }
                    </Stepper>
                    <Stack
                        sx={{ pl: 40, pr: 40, pt: 8 }}
                    >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormProvider {...methods}>
                                <form onSubmit={methods.handleSubmit(onSubmit)}>
                                    {handleSteps(activeStep)}
                                </form>
                            </FormProvider>
                        </Grid>
                    
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        {activeStep === steps.length 
                        ? <>
                            <Typography>verdadero</Typography>
                        </>
                        : <>
                            <Button onClick={handleNext} variant="contained">
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </>
                        }
                        </Grid>
                        <Link href='/'>Salir</Link>
                    </Grid>
                    </Stack>
                </CardContent>
            </Card>
        </Stack>
    )
};

export default RegistroPage
