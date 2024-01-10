export type TUser = {
  userName: string;
  displayName: string;
  accessToken: string;
};

export type TStateUser = {
  dataUser: TUser;
  loading: boolean;
};

export type TUserStore = {
  state: TStateUser;
  signIn: () => void;
  logout: () => void;
};
