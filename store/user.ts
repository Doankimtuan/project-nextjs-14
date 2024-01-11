import { create } from 'zustand';
import { TUserStore } from './types/user.type';

const defaultValue = {
  dataUser: {
    userName: '',
    displayName: '',
    accessToken: '',
  },
  loading: false,
};

export const useUserStore = create<TUserStore>((set) => ({
  state: defaultValue,
  signIn: () => {},
  logout: () => {},
}));
