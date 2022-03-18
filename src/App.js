
// components
import Layout from "./components/layout";
import Profile from "./components/profile";
import Sidebar from "./components/sidebar";
import Content from "./components/content";
import Searcher from "./components/searcher";
import Navbar from "./components/navbar";


function App() {
  return (
    <>
    <Navbar>
      <Searcher />
    </Navbar>
      <Layout>
        <Sidebar >
          <Profile />
        </Sidebar>
        <Content > </Content>
      </Layout>
    </>
  );
}

export default App;
