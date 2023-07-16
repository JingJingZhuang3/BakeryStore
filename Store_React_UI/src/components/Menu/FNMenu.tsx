import { Box, Paper, Typography } from "@mui/material";
import ItemContainer from "./ItemContainer";
import BgImage1 from "../../img/fnBG.jpeg";


function FNMenu(): JSX.Element {
  return (
    <>
      <Paper
        sx={{
          backgroundImage: `url(${BgImage1})`,
          backgroundRepeat: "repeat-y",
          backgroundPosition: "center",
          display: { md: 'center' }
        }}
        component="div"
      >
        <Paper
          sx={{
            width: "900px",
            marginTop: "200px",
            marginX: "auto",
            backgroundColor: "white",
            display: { md: 'center' }
          }}
          component="div"
        >
          <Box
            // sx={{ display: "flex" }}
          >
            <Typography variant='h2' align='center' sx={{ mt: 2 }}>
            Mille Cakes
            </Typography>
            <ItemContainer />
          </Box>
        </Paper>


      </Paper>




    </>
  );
}

export default FNMenu;