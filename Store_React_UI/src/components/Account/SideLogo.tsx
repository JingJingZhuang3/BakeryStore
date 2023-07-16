import { Box, Link, Typography } from "@mui/material";
import FNLogo from "../../img/flyingnanalogo.png";

function SideLogo(): JSX.Element {

  return (
    <>
      <Box>
        <Link
          href="/"
          underline="none"

        >
          <Box
            sx={{
              textAlign: "center",
              alignContent: "center"
            }}
          >
            <Box
              component="img"
              src={FNLogo}
              width={200}
            >
            </Box>

            <Typography variant='h5' align='center'
              sx={{ color: "black"}}
            >
              {"Bakery Store"}
            </Typography>
          </Box>

        </Link>

      </Box>
    </>
  );
}

export default SideLogo;