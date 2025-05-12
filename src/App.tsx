import { UserProvider } from './common/contexts/UserContext'
import MainLayout from './pages/layout/components/AppLayout';
import AppRoutes from './pages/nav/components/AppRoutes';

function App() {
  return (
    <UserProvider>
        <MainLayout>
            <AppRoutes />
        </MainLayout>
    </UserProvider>
  );
}

export default App;
