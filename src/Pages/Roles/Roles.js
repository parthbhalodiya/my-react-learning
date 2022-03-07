import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';

import "./roles.scss";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,

}));

export default function Roles() {
  return (
    <Grid container spacing={2} rowSpacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} sm={12} md={12} >
        <Item elevation={1}>
        <div className="flex-container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
      </div>
        </Item>
    </Grid>
     
    </Grid>
  );
}