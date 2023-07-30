import { Card } from "antd";
import ErrorImg from "@/assets/images/404_Error_Page.png";
import Link from "next/link";
const { Meta } = Card;
function Cards({ product, category }) {
  return (
    <Link
      href={
        !category
          ? `/products/${product?.id}`
          : `/products/${category + "/" + product?.id}`
      }
    >
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={
          <img alt="example" src={!product.image ? ErrorImg : product?.image} />
        }
      >
        <Meta title={product?.name} description={product?.price + " BDT"} />
      </Card>
    </Link>
  );
}

export default Cards;
