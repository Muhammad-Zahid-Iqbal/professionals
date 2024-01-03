import './App.css';
import Layout from './layout/Layout';
import Appbarlogin from './components/AppbarLogin/Appbarlogin';
import Footer from './components/footer-area/Footer';
import Routing from './routes/Routing';
import Testing from './Testing';

function App() {
  return (
    <Layout>
      <Routing/>
      {/* <Appbarlogin /> */}
      <Footer />
    </Layout>
  );
}

export default App;
