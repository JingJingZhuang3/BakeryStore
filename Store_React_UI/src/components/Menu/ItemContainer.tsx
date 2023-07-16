import { Box, Card, CardContent, CardMedia, CircularProgress, Typography } from '@mui/material';
import green from '../../img/cranberryGreen.jpg'
import { useEffect, useState } from 'react';
import postsReducer from '../../reducers/postsReducer';
import { retrieveAllitems } from '../Api/apiUtils';

const ItemContainer = () => {
  // const posts = useSelector((state: ReturnType<typeof postsReducer>) => state.posts);
  const [products, setProducts] = useState([]);
  const [hasData, setHasData] = useState(false);
  // const dispatch = useDispatch();



  useEffect(() => {
    const getAllProducts = async () => {
      const allProducts = await retrieveAllitems();
      if (allProducts) {
        setProducts(allProducts);
        setHasData(true);
      }
    };

    if (!hasData) {
      getAllProducts();
    }

  }, [hasData]);

  return (
    !products.length ? <CircularProgress /> : (
      <>
        {products.map((post: ReturnType<typeof postsReducer>) => (
          <Card
            sx={{
              display: 'flex',
              width: "900px",
              pt: 5,
            }}
          >

            <CardMedia
              component="img"
              sx={{ objectFit: "contain" }}
              image={post.selectedFile || green}
              height="200"
              alt="Live from space album cover"
            />

            <Box
              sx={{ width: 1300, display: 'flex', flexDirection: 'column' }}
            >
              <CardContent sx={{ flex: '1 0 auto' }}>
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
                  <Box
                    sx={{ textAlign: 'left', pt: "15px" }}
                  >
                    {"$" + post.price}
                  </Box>
                </Typography>
              </CardContent>
            </Box>

          </Card>

        ))}




      </>
    )
  );
};

export default ItemContainer;
