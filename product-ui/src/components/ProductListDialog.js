import {
   Box,
   CircularProgress,
   Dialog,
   DialogContent,
   DialogTitle,
   Divider,
   List,
   ListItem,
   ListItemText
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import AdditionalInfoDialog from "./AdditionalInfoDialog";

function ProductListDialog({ open, close }) {
   const products = useSelector(state => state.products.products);
   return (
      <div>
         <Dialog open={open} onClose={close}>
            <DialogTitle sx={{ backgroundColor: "darkslateblue", color: "white" }}>
               List All Products
            </DialogTitle>
            <DialogContent sx={{ width: "400px" }}>
               <List>
                  {products && products.length > 0
                     ? products.map(product =>
                        <div>
                           <ListItem>
                              <ListItemText
                                 primary={product.name}
                                 secondary={`Category: ${product.category} | Price: $${product.price}`}
                              />
                           </ListItem>
                           <Divider />
                        </div>
                     )
                     : <div>
                        <Box
                           sx={{
                              display: "flex",
                              justifyContent: "center",
                              marginTop: "2%"
                           }}
                        >
                           <CircularProgress size={80} />
                        </Box>
                     </div>}
               </List>
            </DialogContent>
         </Dialog>
      </div>
   );
}

export default ProductListDialog;
