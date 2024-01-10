import './App.css';
import Layout from './layout/Layout';
import Appbarlogin from './components/AppbarLogin/Appbarlogin';
import Footer from './components/footer-area/Footer';
import Routing from './routes/Routing';
import Testing from './Testing';
import GroupDistribution from './pages/your-business/GroupDistribution';
import UserCards from './pages/Testimonials/UserCards';
import WorldBusiness from './pages/world-class-business/WorldBusiness';

function App() {
  return (
    <Layout>
      <Routing/>
      <GroupDistribution/>
      <UserCards />
      <WorldBusiness/>
      {/* <Appbarlogin /> */}
      <Footer />
    </Layout>
  );
}

export default App;
