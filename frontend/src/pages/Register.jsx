import React from "react";
import {FormControl,Input,InputLabel,FormHelperText,Button,Grid, Checkbox} from '@material-ui/core';
import { useState } from "react";
import { storeToken } from "../utils/authentication";
import { register } from "../utils/api/auth";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [acceptedConditions, setAcceptedConditions] = useState(false);
    const history = useHistory();
  
    const onFinish = async () => {
      try {
        const response = await register(email, password);
        const { token } = response.data;
  
        storeToken(token);
        history.push("/");
      } catch (error) {
        message.error(error.data.error);
      }
    };
    
    return (
        <Grid container> 
        <Grid iten md ={12}> 
          <FormControl>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" type ="email" aria-describedby="email-helper"/>
            <FormHelperText id="email-helper"> Indica tu Email </FormHelperText>
          </FormControl>
        </Grid>
        <Grid iten md ={12}>
          <FormControl>
            <InputLabel htmlFor="pwd"> Pasword</InputLabel>
            <Input id="pwd" type= "password" aria-describedby="password-helper"/>
            <FormHelperText id="password-helper"> Indica tu Password </FormHelperText>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedB}
                  onChange={handleChange}
                  name="checkedB"
                  color="primary"
                />
            }
        label="Acepto las condiciones"
      />
          </FormControl>
        </Grid>
        <Grid iten ={12}>
          <Button variant="contained" color="primary">
            Registrate
          </Button>
        </Grid>
      </Grid>
    );
  } 

  export default register;