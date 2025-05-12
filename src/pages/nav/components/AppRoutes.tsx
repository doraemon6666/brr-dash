import { Routes, Route } from 'react-router-dom';
import Home from '../../home/components/Home';
import Staff from '../../staff/components/Staff';
import { ROUTES } from '../../../common/constants';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.STAFF} element={<Staff />} />
    </Routes>
  );
}
