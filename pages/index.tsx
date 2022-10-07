import type { NextPage } from 'next'
import NextLink from 'next/link'
import Image from 'next/image'
import { AppBar, Box, Container, Toolbar, Typography, Link as MuiLink, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { Copyright } from '@mui/icons-material'




const HomePage: NextPage = () => {
  return (
    <>
    <AppBar position='relative'>
      <Toolbar>
        <Typography variant='h6' color='inherit' noWrap component="div" sx={{ flexGrow: 1 }}>VETI Software</Typography>
        <NextLink href='/auth/registro' passHref>
          <MuiLink color='inherit' 
            sx={{ pr: 2}}
            style={{
              textDecoration: 'none'
            }}
          >Registrate</MuiLink>
        </NextLink>

        <NextLink href='/auth/login' passHref>
          <MuiLink color='inherit'
            style={{
              textDecoration: 'none'
            }}
          >Acceso</MuiLink>
        </NextLink>

      </Toolbar>
    </AppBar>
    <main>
      <Box component='div' sx={{ pt:8 }}>
          <Grid container alignContent='center' justifyContent='center' alignItems='center'>

            <Grid item>
              <Typography component='h1' variant='h2' align='center'
                sx={{ fontWeight: 'bold', fontSize: '5rem' }}
              >
                VETI Software
              </Typography>
            </Grid>
            <Grid item>
              <Image src='/assets/images/home.jpg' width="800" height="500" alt='Veti Software' />
            </Grid>

          </Grid>
      </Box>
      <Box component='div' sx={{ pt:12, pb: 12 }}>
          <Grid container alignContent='center' justifyContent='center' alignItems='center'>

            <Grid item>
              <Image src='/assets/images/medico.jpg' width="400" height="300" alt='Veti Software' />
            </Grid>
            <Grid item sx={{ pl: 8}}>
              <Typography component='h1' variant='h2' align='center'
                sx={{ fontWeight: 'bold', fontSize: '5rem' }}
              >
                VETI Software
              </Typography>
            </Grid>
        
          </Grid>
      </Box>

      <Box component='div' sx={{ pt:12, pb: 12 }}>
          <Grid container alignContent='center' justifyContent='center' alignItems='center'>

          <Grid item sx={{ pr: 8}}>
              <Typography component='h1' variant='h2' align='center'
                sx={{ fontWeight: 'bold', fontSize: '5rem' }}
              >
                VETI Software
              </Typography>
            </Grid>
            <Grid item>
              <Image src='/assets/images/datos.jpg' width="400" height="300" alt='Veti Software' />
            </Grid>
            
          </Grid>
      </Box>

      <Box component='div' sx={{ pt:8 }}>
          <Grid container spacing={2} alignContent='center' justifyContent='center' alignItems='center'>

              <Grid item>
                <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: '16px' }}>
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Mensual
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>

                  <CardActions>
                    <Button size="small">Contactanos</Button>
                  </CardActions>


                  </CardContent>
                </Card>  
              </Grid>    

              <Grid item>
                <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: '16px' }}>
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Mensual
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>

                  <CardActions>
                    <Button size="small">Contactanos</Button>
                  </CardActions>


                  </CardContent>
                </Card>  
              </Grid>  

              <Grid item>
                <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: '16px' }}>
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Mensual
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>

                  <CardActions>
                    <Button size="small">Contactanos</Button>
                  </CardActions>


                  </CardContent>
                </Card>  
              </Grid>  


          </Grid>
      </Box>

    </main>
    {/* Footer */}
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          <Copyright />
          Something here to give the footer a purpose!
        </Typography>
      </Box>
      {/* End footer */}
    </>
  )
}

export default HomePage
