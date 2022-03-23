
// components
import Layout from "./components/layout";
import Profile from "./components/profile";
import Sidebar from "./components/sidebar";
import Content from "./components/content";
import Searcher from "./components/searcher";
import Navbar from "./components/navbar";
import Repositories from "./components/repositories/";
import GithubProvider from "./providers/github-provider";


function App() {
  return (
    <>
    <GithubProvider>
    <Navbar>
      <Searcher />
    </Navbar>
      <Layout>
        <Sidebar >
          <Profile />
        </Sidebar>
        <Content >
          <Repositories />
        </Content>
      </Layout>
      </GithubProvider>
    </>
  );
}

export default App;
