import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase64 from '../constants/FileBase64';
import { createItem, updateItem } from '../actions/Actions';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { rootReducers } from '../reducers/rootReducers';

interface Props {
  currentId: string,
  setCurrentId: (id: string) => void
}
const CreateForm: React.FC<Props> = ({ currentId, setCurrentId }: Props) => {

  const [postData, setItemData] = useState<IModel>({
    price: 0,
    title: '',
    info: '',
    selectedFile: '',
    createdAt: new Date(),
    id: ''
  });

  const post = useSelector((state: ReturnType<typeof rootReducers>) =>
  (currentId ? state.items.find((message: { id: string; }) =>
    message.id === currentId) : null)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (post)
      setItemData(post);
  }, [post]);

  const clear = () => {
    setCurrentId('');
    setItemData({
      price: 0,
      title: '',
      info: '',
      selectedFile: '',
      createdAt: new Date(),
      id: ''
    });
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (currentId === '') {
      dispatch(createItem(postData));
      clear();
    } else {
      dispatch(updateItem(currentId, postData));
      clear();
    }
  }

  return (
    <Paper sx={{padding:1}}>
      <form
        autoComplete="off"
        noValidate
        onSubmit={(e) => handleSubmit(e)}
      >
        <Typography variant="h6">
          {currentId ? `Editing "${postData.title}"` : 'Add a Dish'}
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          sx={{ mt: 1 }}
          value={postData.title}
          onChange={(e: any) => setItemData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="price"
          variant="outlined"
          label="Price"
          type="number"
          fullWidth
          sx={{ mt: 3 }}
          value={postData.price}
          onChange={(e: any) => setItemData({ ...postData, price: parseInt(e.target.value) })}
        />
        <TextField
          name="info"
          variant="outlined"
          label="Info"
          fullWidth multiline rows={4}
          sx={{ mt: 3 }}
          value={postData.info}
          onChange={(e: any) => setItemData({ ...postData, info: e.target.value })}
        />
        <Box
          sx={{ mt: 3 }}
        >
          <FileBase64
            multiple={false}
            onDone={(file: any) =>
              setItemData({ ...postData, selectedFile: file.base64 })
            } />
        </Box>

        <Button
          variant='contained'
          sx={{ mt: 3, mx: 4 }}
          color='primary'
          type="submit"
        >
          submit
        </Button>
        <Button
          variant='contained'
          sx={{ mt: 3, mx: 4 }}
          color='primary'
          onClick={clear}
        >
          Clear
        </Button>

      </form>
    </Paper>
  );
};

export default CreateForm;
