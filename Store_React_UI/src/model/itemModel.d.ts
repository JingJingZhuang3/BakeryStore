
interface IModel {
    title: string,
    price: number,
    info: string,
    selectedFile: string,
    id: string,
    createdAt?: Date,
  }
  
  type Props = {
    item: IModel
  }
  
  type ApiDataType = {
    message: string
    status: string
    items: IModel[]
    item?: IModel
  }