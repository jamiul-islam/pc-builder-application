import RootLayout from "@/components/Layouts/RootLayout";
import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";

const ProcessorDetails = ({ result }) => {
  const data = Object.keys(result).slice(5);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "2rem",
        }}
      >
        <h1 style={{ margin: "2vh 0" }}>{result?.category} details</h1>

        <div>
          <Row style={{ alignItems: "flex-start", paddingTop: "2rem" }}>
            <Col md={6} lg={12}>
              <Image
                alt="example"
                src={result?.image}
                width={500}
                height={500}
                responsive
              />
            </Col>
            <Col md={6} lg={12} style={{ paddingLeft: "20px" }}>
              <h1
                style={{
                  fontSize: "30px",
                  fontWeight: 400,
                  color: "#3749bb",
                  marginBottom: "5px",
                }}
              >
                {result?.name}
              </h1>
              <hr />
              <div style={{ paddingTop: "1rem" }}>
                {data.map((item, index) => (
                  <p style={{ fontSize: "1rem", margin: "10px 0" }} key={index}>
                    {item}: {result[item]}
                  </p>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ProcessorDetails;

ProcessorDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/products`
  );
  const data = await res.json();

  const paths = data.data.map((item) => ({
    params: { id: item.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/products/${params.id}`
  );
  const result = await res.json();
  return { props: { result } };
};
