import React,{useEffect} from 'react';
import { useSelector,useDispatch} from "react-redux";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,

}));


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'username',
    headerName: 'User name',
    width: 150,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 110,
    editable: true,
  },
  {
    field: 'website',
    headerName: 'Website',
    sortable: false,
    width: 160,
    
  },
];


const UserList = () => {

  const dispatch = useDispatch()
  const rows = useSelector(
    (state) => state.users.users
  )
  
  useEffect(() => {
    dispatch({ type: 'FETCH_DATA_SAGA' })
  }, [dispatch])
  
  return (
    <>
      <Grid item xs={12} sm={12} md={12} >

        <Item elevation={1}>
          <div style={{ display: 'flex', height: '440px' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
            />
          </div>
        </Item>
      </Grid>
    </>
  )
}

export default UserList