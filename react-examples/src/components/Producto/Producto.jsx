import { StarBorder } from '@mui/icons-material'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

export const Producto = ( {producto} ) => {
  return (
    <ListItemButton sx={{ pl: 4 }} key={producto.id}>
      <ListItemIcon>
        <StarBorder />
      </ListItemIcon>
      <ListItemText primary={`${producto.nombre} | ${producto.marca}`} />
    </ListItemButton>
  )
}
