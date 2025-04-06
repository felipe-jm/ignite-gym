import { createContext, useState } from "react";

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
  const [user, setUser] = useState<UserDTO>({} as UserDTO);

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn: async () => {},
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
