import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../actions/Actions';
import { Card, CardMedia, Box, CardContent, Typography, Button, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';

interface Props {
  post: IModel;
  setCurrentId: (id: string) => void;
}
const BoxItem: React.FC<Props> = ({ post, setCurrentId }: Props) => {
  const dispatch = useDispatch();

  return (
    <>
      <Card
        sx={{
          display: 'flex',
          pt: 5,
        }}
        variant="outlined"
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={4}>
            <CardMedia
              component="img"
              sx={{ objectFit: "contain" }}
              height="200"
              image={post.selectedFile}
              alt="Live from space album cover"
            />
          </Grid>

          <Grid item xs={12} sm={8} md={8}>
            <Box
              sx={{ display: 'flex', flexDirection: 'column' }}
            >
              <CardContent>
                <Typography component="div" variant="h5">
                  <Box
                    sx={{ textAlign: 'left' }}
                  >
                    {post.title}
                  </Box>

                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  {post.info}
                </Typography>
                <Typography component="div" variant="h5">
                  {"$" + post.price}
                </Typography>

                <Box
                  sx={{ textAlign: 'right', pt: 2 }}
                >
                  <Button
                    sx={{ mr: 3 }}
                    size="small"
                    color="primary"
                    onClick={() => dispatch(deleteItem(post.id))}>
                    <DeleteIcon fontSize="small" /> Delete
                  </Button>
                  <Button
                    sx={{}}
                    size="small"
                    color="primary"
                    onClick={() => setCurrentId(post.id)}>
                    <SettingsIcon fontSize="small" /> Update
                  </Button>
                </Box>
              </CardContent>
            </Box>
          </Grid>
        </Grid>


      </Card>
    </>
  );
};

export default BoxItem;
