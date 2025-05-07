import React from "react";
import BaseTemplate from "./pages/BaseTemplate";
import Template1 from "./pages/Template1";
import Template5 from "./pages/Template5";
import Template6 from "./pages/Template6";
import Template7 from "./pages/Template7";
import Template8 from "./pages/Template8";
import { Routes, Route } from "react-router-dom";
// import Template3 from "./pages/Template3";
// import Template4 from "./pages/Template4";
// import Template5 from "./pages/Template5";
// import Template6 from "./pages/Template6";
// import TemplateForCheck from "./pages/TemplateForCheck";

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<BaseTemplate />} />
        <Route path="/base-template-1" element={<Template1 />} />
        <Route path="/base-template-5" element={<Template5 />} />
        <Route path="/base-template-6" element={<Template6 />} />
        <Route path="/base-template-7" element={<Template7 />} />
        <Route path="/base-template-8" element={<Template8 />} />
        {/* <Route path="/base-template-2" element={<Template2 />} /> */}
        {/* <Route path="/base-template-3" element={<Template3 />} />
        <Route path="/base-template-4" element={<Template4 />} />
        <Route path="/template-for-check" element={<TemplateForCheck />} />
        <Route path="/template-5" element={<Template5 />} />
        <Route path="/template-6" element={<Template6 />} /> */}
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
