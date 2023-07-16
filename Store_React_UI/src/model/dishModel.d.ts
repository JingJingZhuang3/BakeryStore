
interface IDishModel {
    title: string,
    info: string,
    price: number,
    selectedFile: string,
    _id: string,
    createdAt?: Date,
  }

type DishProps = {
    dish: IDishModel
}

type ApiDishDataType = {
    message: string
    status: string
    dishs: IDishModel[]
    dish?: IDishModel
}