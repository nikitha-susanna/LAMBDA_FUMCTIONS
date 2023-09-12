import { QueryCommand } from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import { ddbClient } from "./ddbClient.js";

export const getproductsByCategory = async event => {
   console.log("getProductByCategory");
   try {
      const productId = event.pathParameters.id;
      const category = event.queryStringParameters.category;

      const params = {
         KeyConditionExpression: "id = :productId",
         FilterExpression: "contains (category, :category)",
         ExpressionAttributeValues: {
            ":productId": { S: productId },
            ":category": { S: category }
         },
         TableName: "product"
      };
      const { Items } = await ddbClient.send(new QueryCommand(params));
      console.log(Items);
      return Items.map(item => unmarshall(item));
   } catch (e) {
      console.log(e);
      throw e;
   }
};
