import * as React from 'react'
import { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useNavigate, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { cloudinaryService } from '../services/cloudinary.service.js'
import { login, signup, getLoggedinUser, signUpGoogle } from '../store/actions/user.actions.js'
import { showErrorMsg } from '../services/event-bus.service.js'
import { UserMsg } from '../cmps/user-msg.jsx'
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google"
import jwt_decode from 'jwt-decode'

export const LoginSignup = () => {
    let { loggedInUser } = useSelector((storeState) => storeState.userModule)
    const [isImg, setIsImg] = useState(false)
    const [imgUrl, setImgUrl] = useState('')
    const [isLogin, setIsLogin] = useState(true)
    const theme = createTheme()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleGoogleSignUp = (response) => {
        let userObject = jwt_decode(response.credential)
        dispatch(signUpGoogle(userObject))
        console.log(loggedInUser)
        navigate('/')
        window.location.reload(true)
        dispatch(getLoggedinUser())
    }

    const uploadImg = (ev) => {
        const CLOUD_NAME = cloudinaryService.getCloudName()
        const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
        const formData = new FormData()
        formData.append('file', ev.target.files[0])
        formData.append('upload_preset', cloudinaryService.getPreset())
        setIsImg(true)
        return fetch(UPLOAD_URL, {
            method: 'POST',
            body: formData
        }).then(res => res.json()).then(res => {
            setImgUrl(res.url)
        }).catch(err => console.error(err))
    }

    const handleSubmit = (ev) => {
        try {
            ev.preventDefault()
            const data = new FormData(ev.currentTarget)
            const loginInfo = {
                userName: data.get('userName'),
                password: data.get('password'),
            }
            if (isLogin) {
                dispatch(login(loginInfo))
                dispatch(getLoggedinUser())
                navigate('/')
            } else {
                loginInfo.fullname = data.get('fullname')
                loginInfo.imgUrl = imgUrl
                dispatch(signup(loginInfo))
                dispatch(getLoggedinUser())
                navigate('/')
            }
        } catch (err) {
            console.log('err', err)
            showErrorMsg('Username or password invalid')
        }
    }

    const onChangePage = () => {
        setIsLogin(!isLogin)
    }

    return (
        <main className="login-sign-up-container container flex flex-column">

            <ThemeProvider theme={theme} >
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: '#1cbf73' }} />
                        <Typography component="h1" variant="h5">
                            {isLogin ? 'Login' : 'Sign Up'}
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <label htmlFor='file-input' className='file-img'>
                                {(!isLogin) ? (!isImg) ?
                                    <input className='file-input' type={'file'} name="imgUrl" value={''} onChange={uploadImg} />
                                    : <Avatar alt="profile" src={imgUrl} />
                                    : <span></span>}
                            </label>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="userName"
                                label="UserName"
                                name="userName"
                                autoComplete="userName"
                                autoFocus
                            />
                            {!isLogin &&
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="fullname"
                                    label="Full Name"
                                    name="fullname"
                                    autoComplete="fullname"
                                />}
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                {isLogin ? 'Login' : 'Sign in'}
                            </Button>
                            <div className="signInDiv flex flex-column">
                                <GoogleOAuthProvider clientId="1014583727450-rbjogeikugg0srpmbmbgkfe4j7d6f5jl.apps.googleusercontent.com">
                                    <div className="App">
                                        <GoogleLogin
                                            onSuccess={(credentialResponse) => {
                                                handleGoogleSignUp(credentialResponse)
                                            }}
                                            onError={() => {
                                                console.log("Login Failed")
                                            }}
                                        />
                                    </div>
                                </GoogleOAuthProvider>
                            </div>
                            <Grid container>
                                <Grid item>
                                    <NavLink to="/signup" variant="body2" onClick={onChangePage}>
                                        {isLogin ? 'Don\'t have an account? Sign Up' : 'Already have an account? Login'}
                                    </NavLink>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
            <UserMsg />
        </main>
    )
}

