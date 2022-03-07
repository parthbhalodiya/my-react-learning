import React,{useEffect} from 'react';
import { useSelector,useDispatch} from "react-redux";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,

}));





const PostsList = () => {

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    
    {
      field: 'title',
      headerName: 'Title',
      width: 550,
      editable: true,
    },
    {
      field: "action",
      headerName: 'Action',
      sortable: false,
      renderCell: (params) => {
        
        return (<Button 
         align="right" onClick={()=>dispatch({ type: 'FETCH_POST_COMMENT_BY_POST_ID',payload:params.id })} variant="contained" startIcon={<AddIcon />} size="small">
                      get Data
                      </Button>)
        
      }
  
    }
    
  ];

  const dispatch = useDispatch()
  const rows = useSelector(
    (state) => state.posts.posts
  )
  
  useEffect(() => {
    dispatch({ type: 'FETCH_POST_DATA' })
    dispatch({ type: 'FETCH_POST_BY_ID' })
    dispatch({ type: 'FETCH_POST_COMMENT_BY_POST_ID' })
    


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

export default PostsList