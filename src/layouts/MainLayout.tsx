// Main layout
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps>  = ({ children }) => {
  return (
    <div className=''>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;