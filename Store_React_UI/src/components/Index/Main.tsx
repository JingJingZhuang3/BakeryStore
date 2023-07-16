import { Box } from "@mui/material";
import BgImage1 from "../../img/fnBG.jpeg";
import BgImage2 from "../../img/fnBG2.webp";
import BgImage3 from "../../img/fnBG3.jpg";

function Main(): JSX.Element {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          alignContent:"center"
        }}
      >
        <Box
          component="img"
          src={BgImage1}
        >
        </Box>
        <Box
          component="img"
          src={BgImage2}
        >
        </Box>
        <Box
          component="img"
          src={BgImage3}
        >
        </Box>
      </Box>


    </>
  );
}

export default Main;