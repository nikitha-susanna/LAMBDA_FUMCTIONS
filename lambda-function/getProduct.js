import { GetItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
import { ddbClient } from "./ddbClient.js";

export const getProduct = async productId => {
   console.log("getProduct by Id");
   try {
      const params = {
         TableName: 'product',
         //marshall - is the utlities for dynamodb
         Key: marshall({ id: productId })
      };

      const { Item } = await ddbClient.send(new GetItemCommand(params));

      console.log(Item);
      return Item ? unmarshall(Item) : {};
   } catch (e) {
      console.log(e);
      throw e;
   }
};
