import { TDish } from '@/types';
import { create } from 'zustand';
import { TUserStore } from './types/user.type';
import { TOrder, TOrderStore } from './types/order.type';

const defaultValue = {
  dishes: [],
  orders: [],
  loading: false,
};

export const useUserStore = create<TOrderStore>((set) => ({
  state: defaultValue,
  updateOrders: (orders: TOrder[]) => {},
  addOrder: () => {},
  deleteOrder: () => {},
  cleanUpOrders: () => {},
}));
