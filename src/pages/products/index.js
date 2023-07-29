import RootLayout from "@/components/Layouts/RootLayout";

const index = () => {
  return <h1>Products</h1>;
};

export default index;

index.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
