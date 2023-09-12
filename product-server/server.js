import express from 'express';
import axios from 'axios';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const lambdaUrl = "https://f329g341md.execute-api.us-east-1.amazonaws.com/prod/product";

app.get("/getProducts", async (req, res) => {
   try {
      const response = await axios.get(lambdaUrl);
      res.json(response.data);
   } catch (error) {
      console.error("Error calling Lambda function:", error);
      res
         .status(500)
         .json({ error: "An error occurred while calling the Lambda function" });
   }
   console.log(res)
});

app.get('/getProduct/:id', async (req, res) => {
   try {
     const { id } = req.params;
   //   const url = `https://f329g341md.execute-api.us-east-1.amazonaws.com/prod/product/${id}`;
     
     const response = await axios.get(lambdaUrl+`/${id}`);
     const product = response.data;
     
     res.json(product);
   } catch (error) {
     console.error('Error:', error);
     res.status(500).json({ error: 'An error occurred while fetching data' });
   }
 });

 app.delete('/deleteProduct/:id', async (req, res) => {
   try {
     const { id } = req.params;
   //   const url = `https://f329g341md.execute-api.us-east-1.amazonaws.com/prod/product/${id}`;
     
     const response = await axios.delete(lambdaUrl+`/${id}`);
     const product = response.data;
     
     res.json(product);
   } catch (error) {
     console.error('Error:', error);
     res.status(500).json({ error: 'An error occurred while fetching data' });
   }
 });

app.listen(5001, () => {
   console.log("server started on port 5001");
});
