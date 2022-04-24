

import { createContext, useEffect, useState } from "react";
import { IUser } from "../models/user-model.tsx"
import { placeHolderData } from "../data/data.tsx"

interface UserContextModel {
  user: IUser,
  setUser: (user: IUser | null) => any,
  loading: boolean,
  setLoading: (loading: boolean) => any
};

export const UserContext = createContext<UserContextModel>({
  user: {},
  setUser: () => { },
  loading: false,
  setLoading: () => { }

});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState<IUser>({});
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setUser(placeHolderData)
    user ? setLoading(false) : setLoading(true)
  }, [])

  return (
    < UserContext.Provider value={{
      user,
      setUser,
      loading,
      setLoading
    }} >
      {children}
    </UserContext.Provider >
  )
}

export default UserProvider;
