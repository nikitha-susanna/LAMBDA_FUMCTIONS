import {
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogTitle,
   Divider,
   FormControlLabel,
   FormLabel,
   Radio,
   RadioGroup,
   Stack,
   TextField
} from '@mui/material';
import React from 'react';

function AddProductDialog({ open, close }) {
   return (
      <div>
         <Dialog open={open} onClose={close} >
            <DialogTitle sx={{ backgroundColor: 'darkslateblue', color: 'white' }}>
               Add a new Product
            </DialogTitle>
            <DialogContent maxWidth={400} sx={{ marginTop: '10%', width:'400px' }}>
               <Stack spacing={2}>
                  <TextField fullWidth placeholder='Product Name'  type='text'/>
                  <FormLabel>Category</FormLabel>
                  <RadioGroup
                     aria-labelledby='demo-radio-buttons-group-label'
                     defaultValue='Phones'
                     name='radio-buttons-group'
                  >
                     <FormControlLabel
                        value='female'
                        control={<Radio />}
                        label='Phones'
                     />
                     <FormControlLabel value='male' control={<Radio />} label='PC' />
                     <FormControlLabel
                        value='other'
                        control={<Radio />}
                        label='Other'
                     />
                  </RadioGroup>
                  <TextField fullWidth placeholder='Price'  type='text'/>
               </Stack>
            </DialogContent>
            <Divider/>
            <DialogActions>
               <Button variant='contained'>Submit</Button>
            </DialogActions>
         </Dialog>
      </div>
   );
}

export default AddProductDialog;
