import  { Component } from 'react'
import Cookies from 'js-cookie'

import {Grid,Typography,InputAdornment,Button,CircularProgress ,IconButton, Stack, TextField,
    Box,Avatar} from '@mui/material'
import ZaperonLogo from './zaperon_logo.png'
import UserIcon from './ic_user1.png'



export default class LoginPage extends Component {
    state={onSignin:false,email:'', password:'', pswrdErr:false,emailErr:false}


   
    getEmail=(e: { target: { value: any } })=>{
        this.setState({email:e.target.value})
    }

    getPassword=(e: {target: { value: any } })=>{
        this.setState({password:e.target.value})
        const{password}= this.state
        if(password.length<8){
            this.setState({pswrdErr:true})
        }
        else {
            this.setState({pswrdErr:false})
        }
    }

    onSubmitSuccess=(email: string)=>{
       
        var date = new Date();
        date.setTime(date.getTime() + (30 * 1000));
        console.log(date)
        Cookies.set('email', email, { expires: date });
        window.location.href = '/'
    }

    onSubmit=()=>{
      const{email,password}= this.state
        this.setState({onSignin:true})
        if(password.length<8){
            this.setState({pswrdErr:true})
        }
        if(email!=='avinash@email.com'){
            this.setState({emailErr:true})
        }
        if((email==='avinash@email.com') && (password.length>8)){
            this.onSubmitSuccess(email)

           
        }
    }

  render() {
    const{onSignin,pswrdErr,emailErr,password}=this.state
    const email = Cookies.get('email')
    if (email !== undefined) {
      return window.location.href='/'
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
                <Grid container direction='column' alignItems='center' >
                    <Avatar src={UserIcon} alt='user-icon' 
                    style={{padding:"25px", marginLeft:'auto',marginRight:'auto',
                    backgroundColor:'#EFEFEF', minWidth:'50px', minHeight:'50px'}}/>
                        <Typography variant='h2' style={{color:'#0B3558'}}> Welcome!</Typography>
                        <Typography variant='body1' style={{color:'#0B3558'}}> Let's connect to your workspace.</Typography>
                        <Typography variant='body1' style={{color:'#0B3558'}}> Please enter your email to continue.</Typography>
                        <Stack spacing={2}>
                            

                            {emailErr ? 
                             <TextField
                             style={{color:'#A2A2A2'}} 
                             label='Email Address' size='small' type='email'
                             error id="outlined-error-helper-text"
                             defaultValue={email}
                            helperText="Please enter a valid email."
                            onChange={this.getEmail} />
                            : <TextField 
                            style={{color:'#A2A2A2'}} 
                            label='Email Address' size='small' type='email' 
                            onChange={this.getEmail}/>
                            
                            }

                            {pswrdErr ? 

                            <TextField 
                                error id="outlined-error-helper-text"
                                defaultValue={password}
                                helperText="Password must be 8 character long."
                                style={{color:'#A2A2A2'}} label='Password' type='password' size='small' 
                                onChange={this.getPassword}
                                InputProps={{
                                endAdornment:<InputAdornment position='end'>
                                    <IconButton aria-label="toggle password visibility" edge="end"/>
                                </InputAdornment>
                                }}/>
                            : <TextField style={{color:'#A2A2A2'}} label='Password' type='password' size='small' 
                                onChange={this.getPassword}
                                InputProps={{
                                endAdornment:<InputAdornment position='end'>
                                    <IconButton aria-label="toggle password visibility" edge="end"/>
                                </InputAdornment>
                                }}/>
                            
                            }
                        
                        
                        <Button style ={{color:'#003FB9'}} variant='text' > Forgot Password?</Button>
                        <Button style ={{backgroundColor:'#003FB9', color:'#ffffff',textTransform:'capitalize'}} variant='contained' onClick={this.onSubmit}>
                            {onSignin? <CircularProgress />:'Sign In'} 
                            </Button>
                        </Stack>
                    
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


