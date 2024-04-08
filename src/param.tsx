import React, { createContext, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

type InitialState = {
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthContext = createContext<InitialState | null>(null);

export const AuthProvider: React.VFC<Props> = ({ children }) => {
  const [value, setValue] = useState(false);
  return (
    <AuthContext.Provider value={{ value, setValue }}>
      {children}
    </AuthContext.Provider>
  );
};