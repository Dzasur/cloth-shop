import { createContext } from "react";

export const Context = createContext<Array<Object> | null>([]);
export const CartContext = createContext((product: any) => {});
export const RemoveCart = createContext((id: number) => {});
export const ProductContext = createContext([]);
