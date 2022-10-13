import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProductBox from '../components/ProductBox';


// list of compomnents
//product image
// favourit icon
// productcontent
// rating icon
// add to curt button
// Sale tag component

const App = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 16 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <ProductBox/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default App;
