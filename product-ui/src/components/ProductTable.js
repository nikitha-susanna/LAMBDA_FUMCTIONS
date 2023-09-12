import React, { useEffect, useState } from 'react';
import {
   Button,
   Table,
   TableBody,
   TableContainer,
   TableHead,
   TableRow,
   TableCell,
   Grid,
   Stack,
   Box,
   CircularProgress
} from '@mui/material';
import ActionsTab from './ActionsTab';
import { useDispatch, useSelector } from 'react-redux';
import {
   deleteProduct,
   getProduct,
   getProducts
} from '../redux/actions/products';
import AdditionalInfoDialog from './AdditionalInfoDialog';
function ProductTable() {
   const products = useSelector(state => state.products.products);
   const product = useSelector(state => state.products.product);

   const dispatch = useDispatch();

   useEffect(
      () => {
         dispatch(getProducts());
      },
      [dispatch]
   );

   const callGetProduct = id => {
      dispatch(getProduct(id));
      setOpenMoreDialog(true);
   };

   const callDeleteProduct = id => {
      dispatch(deleteProduct(id));
   };

   const [openMoreDialog, setOpenMoreDialog] = useState(false);

   const closeMoreDialog = () => {
      setOpenMoreDialog(false);
   };

   const header = ['Name', 'Category', 'Price', 'Actions'];

   return (
      <div>
         <Grid container direction='row'>
            <Grid item container justifyContent='right'>
               <ActionsTab />
            </Grid>
            <Grid item container>
               <TableContainer sx={{
                  maxHeight: 500, width: '80%',
                  margin: 'auto',
                  border: 'solid 1px darkslateblue',
               }}>
                  <Table>
                     <TableHead
                        sx={{
                           backgroundColor: 'darkslateblue',
                           color: 'white',
                           fontWeight: '900',
                        }}
                     >
                        <TableRow>
                           {header.map(title =>
                              <TableCell
                                 size='small'
                                 align='center'
                                 sx={{
                                    fontSize: '20px',
                                    color: 'white',
                                    fontFamily: 'monospace',
                                    fontWeight: '900'
                                 }}
                              >
                                 {title}
                              </TableCell>
                           )}
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {products && products.length > 0
                           ? products.map(product =>
                              <TableRow key={product.id}>
                                 <TableCell align='center'>
                                    {product.name}
                                 </TableCell>
                                 <TableCell align='center'>
                                    {product.category}
                                 </TableCell>
                                 <TableCell align='center'>
                                    {product.price}
                                 </TableCell>
                                 <TableCell>
                                    <Stack
                                       direction='row'
                                       spacing={2}
                                       justifyContent='center'
                                    >
                                       <Button
                                          variant='contained'
                                          onClick={e => {
                                             callGetProduct(product.id);
                                          }}
                                       >
                                          More
                                       </Button>
                                       <Button variant='contained' disabled='true'>
                                          Modify
                                       </Button>
                                       <Button
                                          variant='contained'
                                          onClick={() => {
                                             callDeleteProduct(product.id);
                                          }}
                                       >
                                          Delete
                                       </Button>
                                    </Stack>
                                 </TableCell>
                              </TableRow>
                           )
                           : <TableRow>
                              <TableCell colSpan={header.length} align='center'>
                                 Loading......
                                 <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2%' }} >
                                    <CircularProgress size={80} />
                                 </Box>
                              </TableCell>
                           </TableRow>}
                     </TableBody>
                  </Table>
               </TableContainer>
               <AdditionalInfoDialog
                  open={openMoreDialog}
                  close={closeMoreDialog}
                  product={product}
               />
            </Grid>
         </Grid>
      </div>
   );
}

export default ProductTable;
