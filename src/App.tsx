import CustomCanvas from "./components/CustomCanvas";
import { AdamHead } from "./../public/AdamHead";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <div></div>
      <CustomCanvas>
        <AdamHead />
      </CustomCanvas>
    </Layout>
  );
}

export default App;
