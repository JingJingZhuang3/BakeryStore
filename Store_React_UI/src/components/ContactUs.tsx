import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase64 from '../constants/FileBase64';
import { createItem, updateItem } from '../actions/Actions';
import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material';
import { rootReducers } from '../reducers/rootReducers';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

export default function ContactUs(): JSX.Element {
    const [contactInfo, setContactData] = useState<IContactInfo>({
        name: '',
        email: '',
        message: ''
    })
    async function submitForm(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log(`Contact info submitted!
            Name: ${contactInfo.name}, 
            Email: ${contactInfo.email}, 
            Message: ${contactInfo.message}`
        )
    }
    return (
        <div className="ContactUs">
            
            <Typography 
                variant="h6"
                component="div"
            >
                <ContactSupportIcon sx={{mr:1}}/>
                 {"Contact Us"}
            </Typography>
            <Stack
                component="form"
                sx={{
                    width: '50ch',
                }}
                spacing={2}
                noValidate
                autoComplete="off"
                onSubmit={(e) => submitForm(e)}
            >
                <span>Name: </span>
                <TextField
                    required
                    name="name"
                    variant='outlined'
                    label="Enter your full name..."
                    value={contactInfo.name}
                    onChange={(e:any) => setContactData({...contactInfo, name: e.target.value})}
                />
                <span>Email: </span>
                <TextField
                    required
                    name="email"
                    variant='outlined'
                    label="Enter your Email..."
                    value={contactInfo.email}
                    onChange={(e:any) => setContactData({...contactInfo, email: e.target.value})}
                />
                <span>Message: </span>
                <TextField
                    required
                    name="message"
                    variant='outlined'
                    label="Enter your message..."
                    value={contactInfo.message}
                    onChange={(e:any) => setContactData({...contactInfo, message: e.target.value})}
                />
                <Button
                    variant='contained'
                    sx={{ mt: 3, mx: 4 }}
                    color='primary'
                    type="submit"
                >
                    submit
                </Button>
            </Stack>
        </div>
    )
}