import { Box, Button, Typography } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import { Outlet, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
const ActionButton = styled('div')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
  float: "right",
  
});

export default function Posts() {
    const dispatch = useDispatch()

  return (
    <>
      <Box sx={{ pb: 1 }} >
        <Grid container spacing={1}>
          <Grid item xs={12} md={8} sm={12} >
            <Typography align="left" variant="h6">Hi, Welcome back</Typography>
          </Grid>
          <Grid item xs={12} md={4} sm={12}>
            <ActionButton >
              <Button component={Link}  to={"/users/add"} align="right" variant="contained" startIcon={<AddIcon />} size="small">
              Add
              </Button>
              {" "}
              <Button onClick={()=> dispatch({ type: 'FETCH_POST_BY_ID' })
} align="right" variant="contained" startIcon={<AddIcon />} size="small">
              get Data
              </Button>
            </ActionButton>
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={2} rowSpacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Outlet />  
      </Grid>
    </>

  );
}
