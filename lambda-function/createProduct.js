import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
import { v4 as uuidv4 } from "uuid";
import { ddbClient } from "./ddbClient.js";

export const createProduct = async event => {
   try {
      console.log(`createProduct function. event: "${event}"`);

      // const requestBody = JSON.parse(event.body);
      const productRequest = JSON.parse(event.body);
      const productId = uuidv4();
      productRequest.id = productId;

      const params = {
         TableName: 'product',
         Item: marshall(productRequest || {})
      };

      const createResult = await ddbClient.send(new PutItemCommand(params));
      console.log(createResult);
      return createResult;
   } catch (e) {
      console.log(e);
      throw e;
   }
};