import { UpdateItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
import { ddbClient } from "./ddbClient.js";

export const updateProduct = async event => {
   try {

      const { id, category } = event.pathParameters;
      const columnNameToUpdate = `${category}`;
      const requestBody = JSON.parse(event.body);
      const new_Value = requestBody[category];
      const expressionAttributeValues = {
         ":newValue": `${new_Value}`
      };

      const params = {
         TableName: 'product',
         Key: marshall({ id }),
         UpdateExpression: `SET ${columnNameToUpdate} = :newValue`,
         ExpressionAttributeValues: expressionAttributeValues
      };

      const updateResult = await ddbClient.send(new UpdateItemCommand(params));
      console.log(updateResult);
      return updateResult;
   } catch (e) {
      console.log(e);
      throw e;
   }
};