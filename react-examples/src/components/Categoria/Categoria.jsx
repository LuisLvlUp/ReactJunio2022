import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import { CategoriaItem } from '../CategoriaItem/CategoriaItem';
import { categorias } from '../../shared/categorias';


const Categoria = () => {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Categorías
        </ListSubheader>
      }
    >
        { 
          categorias.map( ( categoria ) => {
            return(
              <CategoriaItem categoria={categoria} />
            )
          } )
        }
    </List>
  );
}

export default Categoria;