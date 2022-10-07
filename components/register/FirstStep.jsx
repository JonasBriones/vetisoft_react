import { Google } from "@mui/icons-material"
import { Button, Grid, TextField } from "@mui/material"
import { signIn } from 'next-auth/react'
const FirstStep = () => {
    return (
        <Grid container spacing={2} direction='column'>
            <Grid item>
                <TextField 
                    fullWidth
                    id="Nombre completo"
                    label="Nombre completo"
                />
            </Grid>

            <Grid item>
                <TextField 
                    fullWidth
                    id="Correo electrónico"
                    label="Correo electrónico"
                    type="email"
                />
            </Grid>

            <Grid item>
                <hr />
            </Grid>

            <Grid item>
                <Button
                    fullWidth
                    variant="contained" size="large"
                    startIcon={<Google />}
                    onClick={ () => signIn() }
                >
                    Inscribite con Google
                </Button>
            </Grid>

        </Grid>
    )
}

export default FirstStep