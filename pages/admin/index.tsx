import dynamic from 'next/dynamic';
import { useAdmin } from '../../hooks/useAdmin';
import NotFound from '../404';

const AdminContainer = dynamic(() => import('../../components/Admin/AdminContainer'), { ssr: false });

const Admin = () => {
  const checkAdmin = useAdmin();
  return checkAdmin.admin ? <AdminContainer>{/* DashBoard */}</AdminContainer> : <NotFound />;
};

export default Admin;
