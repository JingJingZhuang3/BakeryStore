import axios, { AxiosResponse } from 'axios';

const myUrl = 'http://localhost:5000/api/store/item';

export const fetchItems = () => axios.get(myUrl);

export const updateItem = (id: any, updatedItem: any) => axios.put(`${myUrl}/${id}`, updatedItem);
export const deleteItem = (id: any) => axios.delete(`${myUrl}/${id}`);


export const fetchAllItemItems = () => axios.get(myUrl);

export const createItem = async (
  formData: IModel
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const product: Omit<IModel, 'id'> = {
      title: formData.title,
      price: formData.price,
      info: formData.info,
      selectedFile: formData.selectedFile,
    }
    const saveProduct: AxiosResponse<ApiDataType> = await axios.post(
      myUrl,
      product
    )
    return saveProduct
  } catch (error) {
    throw new Error()
  }
}
