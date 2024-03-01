import Header from "@/components/Header";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Welcome from "@/components/Welcome";
import Features from "@/components/Features";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Agencia - Marketing</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Welcome />
      <Features />
      <Contato />
      <Footer />
    </>
  );
}
