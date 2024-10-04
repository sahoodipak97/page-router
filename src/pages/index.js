// import Head from "next/head";
// import Image from "next/image";
// import localFont from "next/font/local";
// import styles from "@/styles/Home.module.css";

import axios from "axios";
import Products from "../../components/Products";

export const getStaticProps = async () => {
  const res = await axios.get('https://fakestoreapi.com/products/category/jewelery');
  const data = res.data;
  if(data) {
    console.log('Data Received: ', data);
    
    return {
      props: {data}
      
    }
  }
  
}




export default function Home({data}) {
  return (
    <>
      <h1>Hello World! </h1>
      <Products productsData={data}/>
    </>
  );
}
