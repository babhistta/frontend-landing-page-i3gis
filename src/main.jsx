import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import HomePage from "./pages/home";
import ArticlePage from "./pages/article";
import FAQPage from "./pages/faq";
import DetailArticle from "./pages/article/detailArticle";
import "./styles/index.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { MainProvider } from "./contexts/MainContext";
import { ThemeOne } from "./theme/themeOne";
import Footer from "./components/footer";
import DialogRequestLiveDemo from "./components/dialogs/dialogRequestLiveDemo";

const element = (
  <React.StrictMode>
    <MainProvider>
      <ThemeProvider theme={ThemeOne}>
        <CssBaseline />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles" element={<ArticlePage />} />
            <Route path="/faqs" element={<FAQPage />} />
            <Route path="/articles/:artiCleName" element={<DetailArticle />} />
            {/* <Route path="*" element={<PageNotFound />} /> */}
          </Routes>
          <Footer />
          <DialogRequestLiveDemo />
        </BrowserRouter>
      </ThemeProvider>
    </MainProvider>
  </React.StrictMode>
);

const root = createRoot(document.getElementById("root"));
root.render(element);
