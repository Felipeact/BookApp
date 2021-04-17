import React, { createContext, useState, useEffect, useContext } from 'react';

import api from '../services/api'

interface AuthContextData {
  signed: boolean;
  user: object | null;
  Login(user: object): Promise<void>;
  Logout(): void;
  Register(user: object): Promise<void>;
  Update(user: object): Promise<void>;
  Get(user: object): Promise<void>;
  UpdateStatement(user: object): Promise<void>;
  CreateStatement(user: object): Promise<void>;

}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    const storagedUser = sessionStorage.getItem('@App:user');
    const storagedToken = sessionStorage.getItem('@App:token');

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  async function Login(userData: object) {
    const response = await api.post('/login', userData);
  
    setUser(response.data.user);
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    sessionStorage.setItem('@App:user', JSON.stringify(response.data.user));
    sessionStorage.setItem('@App:token', response.data.token);
    
  }

  async function Register(userData:object) {
      await api.post('/user', userData)
  }

  async function Update(userData:object) {
    await api.put('/users', userData)
}

async function Get(userData:object) {
  await api.get('/statement', userData)
}

async function UpdateStatement(userData:object) {
  await api.put('/statement', userData)
}

async function CreateStatement(userData:object) {
  await api.post('/statement', userData)
}


  function Logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, Login, Logout, Register, Update, Get, UpdateStatement, CreateStatement}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}