import React, { useEffect, useState } from "react";
import { AppBar, Container, createTheme, CssBaseline, Grid, Paper, Stack, ThemeProvider } from '@mui/material';
import { useDispatch } from "react-redux";
import CreateForm from "./CreateForm";

import MenuBar from './MenuBar';
import { getItems } from "../actions/Actions";
import ContainerItems from "./ContainerItems";

function Bakery(): JSX.Element {
    const [currentId, setCurrentId] = useState("");
    const dispatch = useDispatch();
    const theme = createTheme();
    useEffect(() => {
    dispatch(getItems());
    }, [currentId, dispatch]);
  
    return (
      <>
        <Stack spacing={0} sx={{ flexGrow: 1 }}>
          <AppBar>
            <MenuBar />
          </AppBar>
        </Stack>
  
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth="lg">
  
            <Paper sx={{mt:"100px"}}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <CreateForm currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <ContainerItems setCurrentId={setCurrentId} />
                </Grid>
              </Grid>
            </Paper>
  
          </Container>
        </ThemeProvider>
  
        {/* <Bar />
  
        */}
      </>
    );
  }
  
  export default Bakery;
  