import { createContext } from "react";

import { UserDTO } from "@dtos/user-dto";

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: () => Promise<void>;
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export const AuthProvider = ({ children }: AuthContextProviderProps) => {
  return (
    <AuthContext.Provider
      value={{
        user: {
          id: 1,
          name: "Felipe",
          email: "felipe@teste.com",
          avatar: "https://github.com/felipe-jm.png",
        },
        signIn: async () => {},
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
