import { ScanCommand } from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import { ddbClient } from "./ddbClient.js";

export const getAllProducts = async () => {
   console.log("getAllProducts");
   try {
      const params = {
         TableName: 'product'
      };

      const { Items } = await ddbClient.send(new ScanCommand(params));
      console.log(Items);

      return Items ? Items.map(item => unmarshall(item)) : {};
   } catch (e) {
      console.log(e);
      throw e;
   }
};