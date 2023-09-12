import { createProduct } from "./createProduct.js";
import { deleteProduct } from "./deleteProduct.js";
import { getAllProducts } from "./getAllProducts.js";
import { getProduct } from "./getProduct.js";
import { getproductsByCategory } from "./getProductsByCategory.js";
import { updateProduct } from "./updateProduct.js";

export const handler = async event => {
   console.log("request", JSON.stringify(event, undefined, 2));
   let body;
   // TODO implement
   try {
      switch (event.httpMethod) {
         case "GET":
            if (event.queryStringParameters != null) {
               body = await getproductsByCategory(event);
            } else if (event.pathParameters != null) {
               body = await getProduct(event.pathParameters.id);
            } else {
               body = await getAllProducts();
            }
         break;
         case "POST":
            body = await createProduct(event);
         break;
         case "DELETE":
            body = await deleteProduct(event.pathParameters.id);
         break;
         case "PUT":
            body = await updateProduct(event);
         break;
         default:
            console.log(`Unsupported route:${event.path}`);
      }
      console.log(body);
      return {
         statusCode: 200,
         body: JSON.stringify({
            message: `Successfully finished operation: "${event.httpMethod}"`,
            body: body
         })
      };
   } catch (e) {
      console.log(e);
      return {
         statusCode: 500,
         body: JSON.stringify({
            message: "Failed to perform operation.",
            errorMsg: e.message,
            errorStack: e.stack
         })
      };
   }
};










