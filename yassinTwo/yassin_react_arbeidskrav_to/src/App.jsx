import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Resources from "./components/Resources";
import PageTitle from "./components/PageTitle";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/html"
            element={
              <>
                <PageTitle title="HTML - Ressursarkiv" />
                <Resources category="html" />
              </>
            }
          />
          <Route
            path="/css"
            element={
              <>
                <PageTitle title="CSS - Ressursarkiv" />
                <Resources category="css" />
              </>
            }
          />
          <Route
            path="/javascript"
            element={
              <>
                <PageTitle title="JavaScript - Ressursarkiv" />
                <Resources category="javascript" />
              </>
            }
          />
          <Route
            path="/react"
            element={
              <>
                <PageTitle title="React - Ressursarkiv" />
                <Resources category="react" />
              </>
            }
          />
          <Route
            path="/sanity"
            element={
              <>
                <PageTitle title="Sanity - Ressursarkiv" />
                <Resources category="sanity_and_headless_cms" />
              </>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
