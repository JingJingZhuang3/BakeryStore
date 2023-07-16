import { AppBar, Stack } from '@mui/material';
import IndexHeaderTopInfo from './IndexHeaderTopInfo';
import MenuBar from './MenuBar';
import TopMessage from './TopMessage';
import { useAuth0 } from '@auth0/auth0-react';

function Header(): JSX.Element {
  const { isLoading, error } = useAuth0();

  return (
    <>
      <Stack>
        <AppBar>
          <IndexHeaderTopInfo />
          {error &&
            <TopMessage
              message={"Authentication Error"}
            />}
          {!error && isLoading &&
            <TopMessage
              message={"Loading..."}
            />}
          <MenuBar />
        </AppBar>
      </Stack>
    </>
  );
}

export default Header;