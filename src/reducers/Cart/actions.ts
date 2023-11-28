import { IProductItem } from './reducer'

export enum ActionTypes {
  ADD_NEW_PRODUCT_TO_CART = 'ADD_NEW_PRODUCT_TO_CART',
  INCREASE_PRODUCT_AMOUNT = 'INCREASE_PRODUCT_AMOUNT',
  DECREASE_PRODUCT_AMOUNT = 'DECREASE_PRODUCT_AMOUNT',
  DELETE_PRODUCT_FROM_CART = 'DELETE_PRODUCT_FROM_CART',
}

export function addProductToCartAction(product: IProductItem) {
  return {
    type: ActionTypes.ADD_NEW_PRODUCT_TO_CART,
    payload: {
      product,
      productId: product.id,
    },
  }
}

export function increaseProductAmountAction(productId: number) {
  return {
    type: ActionTypes.INCREASE_PRODUCT_AMOUNT,
    payload: { productId },
  }
}

export function decreaseProductAmountAction(productId: number) {
  return {
    type: ActionTypes.DECREASE_PRODUCT_AMOUNT,
    payload: { productId },
  }
}

export function deleteProductFromCartAction(productId: number) {
  return {
    type: ActionTypes.DELETE_PRODUCT_FROM_CART,
    payload: { productId },
  }
}
