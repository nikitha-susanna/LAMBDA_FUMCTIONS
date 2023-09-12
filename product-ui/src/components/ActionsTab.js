import { Button, Stack } from '@mui/material';
import React, { useState } from 'react';
import style from '../css/common.module.css'
import AddProductDialog from './AddProductDialog';
import ProductListDialog from './ProductListDialog';

function ActionsTab(props) {

   const [openAdd, setAdd] = useState(false);
   const [openList, setList] = useState(false);

   const closeListDialog = () => {
      setList(false)
   }

   const closeAddDilog = () => {
      setAdd(false)
   }

   const addProduct = () => {
      setAdd(true)
   }

   return (
      <div className={style.actionButtonsAlignment}>
         <Stack direction='row' spacing={2}>
            <Button color='primary' variant='contained' onClick={(e)=>{addProduct()}}>Add a Product</Button>
            <Button color='primary' variant='contained' onClick={(e)=>{setList(true)}}>List all products</Button>
         </Stack>
         <ProductListDialog open={openList} close={closeListDialog}/>
         <AddProductDialog open={openAdd} close={closeAddDilog}/>
      </div>
   );
}

export default ActionsTab;