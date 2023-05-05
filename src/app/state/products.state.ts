export enum DataStateEnum{
    LOADING,
    LOADER,
    ERROR
}
export interface  AppDataState<T>{
  dataState?:DataStateEnum,
  data?:T,
  errorMessage?:string
}
