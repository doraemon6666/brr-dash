import React, { createContext, useContext, useState, useEffect } from 'react';

import { User, UserContextValue } from '../types/common';

import { fetchCurrentUser } from '../mockData/userFetch';

const UserContext = createContext<UserContextValue | undefined>(undefined);

export const useCurrentUser = (): UserContextValue => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useCurrentUser must be used within a UserProvider');
  }

  return context;
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // get current user info
    async function getUser() {
      try {
        const user = await fetchCurrentUser();

        setUser(user);
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setLoading(false);
      }
    }
    getUser();
  }, []);

  return <UserContext.Provider value={{ user, loading, error }}>{children}</UserContext.Provider>;
};
