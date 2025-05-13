import { UserProvider } from './common/contexts/UserContext'
import {SnackbarProvider} from './common/contexts/snackbar'
import MainLayout from './pages/layout/components/AppLayout';
import AppRoutes from './pages/nav/components/AppRoutes';

function App() {
  return (
    <UserProvider>
      <SnackbarProvider>
         <MainLayout>
            <AppRoutes />
        </MainLayout>
      </SnackbarProvider>
    </UserProvider>
  );
}

export default App;
