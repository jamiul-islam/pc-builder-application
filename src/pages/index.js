import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>PC Builder App</title>
        <meta name="description" content="..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Homepage</h1>
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:3000/api/products");
//   const data = await res.json();

//   return {
//     props: {
//       products: data,
//     },
//     revalidate: 10, //rebuild the page in each 10 secs
//   };
// };
