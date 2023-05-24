import React from 'react';
import { useSelector } from 'react-redux';

import BoxItem from './BoxItem';
import itemsReducer from '../reducers/itemsReducers';
import { CircularProgress, Grid } from '@mui/material';

interface Props {
  setCurrentId: (id: string) => void;
}
const ContainerItems: React.FC<Props> = ({ setCurrentId }: Props) => {
  const items = useSelector((state: ReturnType<typeof itemsReducer>) => state.items);

  return (
    !items.length ? <CircularProgress /> : (
      <Grid container spacing={3}>
        {items.map((item: ReturnType<typeof itemsReducer>) => (
          <Grid
            key={item.id}
            item
            sx={{ mx: "30px" }}
          >
            <BoxItem post={item} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default ContainerItems;
