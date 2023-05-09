import { Box, Button, FormLabel, Link, TextField, Typography } from '@mui/material'
import {useState} from 'react';
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";

const Auth = () => {
    const InitialState = {
        username: '',
        email: '',
        password: ''
    }
    const [signUp, setSignup] = useState(true);
    const [inputs, setInputs] = useState(InitialState);

    const handleChange = (e) => {
      setInputs({...inputs, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs)
    }

    const resetState = () => {
        setSignup(!signUp)
        setInputs(InitialState)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          marginX={70}
          marginY={10}
          boxShadow={2}
          sx={{ width: 500, height: 500 }}
        >
          <Typography variant="h5" sx={{ marginTop: -10 }}>
            {signUp ? "Sign up" : "Login"}
          </Typography>
          {signUp && (
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              marginTop={2}
            >
              <FormLabel sx={{ marginLeft: 4, maxWidth: 60 }}>
                Username
              </FormLabel>
              <TextField
                placeholder="username"
                name="username"
                sx={{ width: 350, marginLeft: 2.7 }}
                value={inputs.username}
                onChange={handleChange}
              />
            </Box>
          )}
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            marginTop={2}
          >
            <FormLabel sx={{ marginLeft: 4, maxWidth: 60 }}>Email</FormLabel>
            <TextField
              placeholder="email"
              type="email"
              name="email"
              sx={{ width: 350, marginLeft: 5 }}
              value={inputs.email}
              onChange={handleChange}
            />
          </Box>
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            marginTop={2}
          >
            <FormLabel sx={{ marginLeft: 4, maxWidth: 60 }}>Password</FormLabel>
            <TextField
              placeholder="password"
              type="password"
              name="password"
              sx={{ width: 350, marginLeft: 2.7 }}
              value={inputs.password}
              onChange={handleChange}
            />
          </Box>
          <Button
            endIcon={signUp ? <HowToRegOutlinedIcon/> : <LoginOutlinedIcon/>}
            type='submit'
            variant="contained"
            sx={{
              width: 20,
              marginY: 2,
              marginX: 22,
              paddingX: 10,
              paddingY: 2,
              borderRadius: 2,
            }}
          >
            {signUp ? "Signup" : "Login"}
          </Button>
          <Box
            display={"flex"}
            flexDirection={"row"}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 4,
            }}
          >
            {signUp ? (
              <>
                <Typography>Already Registered?</Typography>
                <Link onClick={resetState}>Click Here</Link>
              </>
            ) : (
              <>
                <Typography>Not registered yet?</Typography>
                <Link onClick={() => setSignup(true)}>Click Here</Link>
              </>
            )}
          </Box>
        </Box>
      </form>
    </div>
  );
}

export default Auth