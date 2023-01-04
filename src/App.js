import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from '~/Routes'
import DefaultLayout from "~/layouts/DefaultLayout";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }
            // các component lấy từ pages 
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Layout> <Page /> </Layout>} />
          })}


        </Routes>
      </div>
    </Router>
  );
}

export default App;
