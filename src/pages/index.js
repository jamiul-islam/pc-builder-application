import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import Slide from "@/components/UI/Slide";
import Cards from "@/components/UI/Card";

const HomePage = ({ products }) => {
  // insert first 6 products into a variable
  const homeData = products.slice(0, 6);
  return (
    <>
      <Head>
        <title>PC Builder App</title>
        <meta name="description" content="..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Slide />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "2rem",
        }}
      >
        <h1 style={{ margin: "2vh 0" }}>products</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px",
          }}
        >
          {/* <Cards /> */}
          {homeData.map((product) => (
            <Cards key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  // TODO: comment out for production

  // if (typeof window === "undefined") {
  //   return {
  //     props: {
  //       products: [],
  //     },
  //   };
  // }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/products`
  );
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
    revalidate: 10, //rebuild the page in each 10 secs
  };
};
