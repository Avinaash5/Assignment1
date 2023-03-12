import  { Component } from 'react';
import Cookies from 'js-cookie';
import {Grid,Typography,Stack,Box,Avatar} from '@mui/material'
import ZaperonLogo from './zaperon_logo.png'
import UserIcon from './ic_user1.png'

export default class HomePage extends Component {
    
  render() {
    const email = Cookies.get('email')
  if (email === undefined) {
    return window.location.href='/login'
  } 
  else{
    return (
        <Box 
            sx={{
                width:{
                    xs:100,
                    sm:200,
                    md:300,
                    lg:400,
                    xl:500
                }
            }}
            >
        <Grid container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        style={{ minHeight: '100vh' }}>
            
            <Grid direction='column'  
            style={{ alignSelf:'center',minWidth:'100vw',marginTop:'10%' }}>
                <Avatar src={UserIcon} alt='user-icon' 
                style={{padding:"25px",marginLeft:'auto',marginRight:'auto', backgroundColor:'#EFEFEF', minWidth:'50px', minHeight:'50px'}}/>
                
                <Typography variant='h2' style={{marginLeft:'35%',color:'#0B3558'}}> Welcome Avinash!</Typography>
            
            </Grid>
            <Stack direction='row' 
                justifyContent="space-between"
                spacing={2}
                style={{ minWidth:'90vw' }}>
                    <Typography variant='h6' style={{color:'#728391',marginLeft:'12px'}}> Powered by
                         <Box
                        component="img"
                        sx={{
                        height: 15,
                        width: 80, marginLeft:'10px'
                        }} src={ZaperonLogo} alt='logo'/>       
                    </Typography>  
                        <Stack direction='row' spacing={1} style={{color:'#003FB9',fontWeight:'900'}}>
                            <Typography variant='body1'> Need Help?</Typography>
                            <Typography variant='body1'> Privacy Policy 
                            <span style={{color:'#A2A2A2',}}>&</span>Terms</Typography>
                        </Stack>
                </Stack>
      </Grid>
      </Box>
    )

  }

    
  }
}
