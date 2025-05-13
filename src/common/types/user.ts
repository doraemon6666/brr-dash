export interface User {
  id: string;
  email: string;
  username?: string;
  firstname?: string;
  lastname?: string;
  role?: string;
}

export interface UserContextValue {
  user: User | null;
  loading: boolean;
  error: Error | null;
}
