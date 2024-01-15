import { TDish } from '@/types';

export type TDishes = TDish[];

export type TOrder = {
  orderId: string;
  dishId: string;
  quantity: number;
  note: string;
};

export type TStateOrder = {
  dishes: TDishes;
  orders: TOrder[];
  loading: boolean;
};

export type TOrderStore = {
  state: TStateOrder;
  updateOrders: (orders: TOrder[]) => void;
  addOrder: (order: TOrder) => void;
  deleteOrder: (orderId: TOrder['orderId']) => void;
  cleanUpOrders: () => void;
};
