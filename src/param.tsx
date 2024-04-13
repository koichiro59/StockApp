import React, { createContext, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

type User={
  userName:string;
  password:any;
}

type InitialState = {
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
  formError:User;
  setFormError:React.Dispatch<React.SetStateAction<User>>,
  isSubmit:boolean,
  setIsSubmit:React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<InitialState | null>(null);

export const AuthProvider: React.VFC<Props> = ({ children }) => {
  const [value, setValue] = useState(false);
  const [formError, setFormError]=useState({userName:"",password:""});
  const [isSubmit,setIsSubmit]=useState(true);

  return (
    <AuthContext.Provider value={{ value, setValue,formError,setFormError,isSubmit,setIsSubmit }}>
      {children}
    </AuthContext.Provider>
  );
};