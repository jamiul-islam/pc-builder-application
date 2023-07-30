import { Card } from "antd";
const { Meta } = Card;
function Cards({ product }) {
  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt="example" src={product?.image} />}
    >
      <Meta title={product?.name} description={product?.price + " BDT"} />
    </Card>
  );
}

export default Cards;
