import {
   Box,
   CircularProgress,
   Dialog,
   DialogContent,
   DialogTitle,
   List,
   ListItem,
   ListItemText
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

function AdditionalInfoDialog({ open, close }) {
   const product = (useSelector(state => state.products.product));
   return (
      <div>
         <Dialog open={open} onClose={close} maxWidth={400}>
            <DialogTitle sx={{ backgroundColor: "darkslateblue", color: "white" }}>
               More Info
            </DialogTitle>
            <DialogContent>
               <List>
                  {typeof(product) === 'undefined' || !product.name || !product.category || !product.price  ? (
                     <Box sx={{ display: 'flex', justifyContent:'center'}} >
                        <CircularProgress size={50}/>
                     </Box>
                  ) : (
                     <ListItem>
                        <ListItemText
                           primary={product.name}
                           secondary={`Category: ${product.category} | Price: $${product.price}`}
                        />
                     </ListItem>
                  )}
               </List>
            </DialogContent>
         </Dialog>
      </div>
   );
}

export default AdditionalInfoDialog;
