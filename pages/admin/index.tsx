import dynamic from 'next/dynamic';

const AdminContainer = dynamic(() => import('../../components/Admin/AdminContainer'), { ssr: false });

const Admin = () => {
  return <AdminContainer>{/* DashBoard */}</AdminContainer>;
};

export default Admin;
