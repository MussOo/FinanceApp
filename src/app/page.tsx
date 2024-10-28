"use client";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import store from "@/context/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Main />
        <Footer />
      </Provider>
    </>
  );
}
