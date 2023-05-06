import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "./Layout";
import Work from "../pages/Work";
import Works from "../pages/Works";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Works />} />
          <Route path="works" element={<Works />} />
          <Route path="work/:id" element={<Work />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
