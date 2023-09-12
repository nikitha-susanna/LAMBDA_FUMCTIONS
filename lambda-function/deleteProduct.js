import { DeleteItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
import { ddbClient } from "./ddbClient.js";

export const deleteProduct = async productId => {
   console.log("deleteProduct by Id");
   try {
      const params = {
         TableName: 'product',
         //marshall - is the utlities for dynamodb
         Key: marshall({ id: productId })
      };

      const deleteResult = await ddbClient.send(new DeleteItemCommand(params));
      console.log(deleteResult);
      return deleteResult;
   } catch (e) {
      console.log(e);
      throw e;
   }
};