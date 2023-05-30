import React, { useEffect, useState } from "react";
import { AppBar, Container, createTheme, CssBaseline, Grid, Paper, Stack, ThemeProvider } from '@mui/material';
import { useDispatch } from "react-redux";
import CreateForm from "./CreateForm";
import ContactUs from "./ContactUs"
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
      <> {/*幽灵节点*/}
        {/* 
          (MUI)Stack - container component for arranging elements vertically or horizontally.
            prop: spacing - spacing btw children.
            prop: sx - allows you to specify any other CSS rules you may need.
        */}
        <Stack spacing={0} sx={{ flexGrow: 1 }}>
          {/* (MUI)AppBar - The top App bar provides content and actions related to the current screen. It's used for branding, screen titles, navigation, and actions. */}
          <AppBar>
            <MenuBar />
          </AppBar>
        </Stack>
        {/* (MUI)ThemeProvider - parent component that allows you to customize all design aspects of your project. */}
        <ThemeProvider theme={theme}>
          {/* (MUI)CssBaseline - The CssBaseline component helps to kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Container maxWidth="lg">
            <Paper sx={{mt:"100px"}}>
              <Grid container spacing={3} padding={3}>
                {/* prop: xs={12} sm={6} sizes a component to occupy half of the viewport width (6 columns) 
                    when viewport width is 600 or more pixels. 
                    For smaller viewports, the component fills all 12 available columns. 
                */}
                <Grid item xs={12} sm={4}>
                  <CreateForm currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <ContainerItems setCurrentId={setCurrentId} />
                </Grid>
              </Grid>
            </Paper>
            
            <Paper sx={{mt:"30px", padding:1}}>
              <ContactUs />
            </Paper>
          </Container>
        </ThemeProvider>
  
        {/* <Bar /> */}


      </>
    );
  }
  
  export default Bakery;
  