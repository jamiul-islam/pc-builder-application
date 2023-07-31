import connectToDatabase from "@/helper/connectToDatabase";

export default async function handler(req, res) {
  const productCollection = await connectToDatabase();
  // find product in productCollection based on id
  const { id } = req.query;
  const response = await productCollection.findOne({ id: id });
  //   const result = await response.JSON();

  res.send(response);
}
