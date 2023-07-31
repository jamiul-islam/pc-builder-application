import connectToDatabase from "@/helper/connectToDatabase";

async function run(req, res) {
  try {
    const productCollection = await connectToDatabase();

    if (req.method === "GET") {
      const products = await productCollection.find().toArray();
      res.send({ message: "success", status: 200, data: products });
    }
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

export default run;
