import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

const SelectedCategory = 'New';

const SideBar = () => {
   return (
      <Stack
         direction='row'
         sx={{ overflow: 'auto', height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column' } }}
      >
         {categories.map((category) => (
            <button
               className='category-btn'
               style={{ background: category.name === SelectedCategory && '#FC1530', color: 'white' }}
               key={category.name}
            >
               <span style={{ color: category.name === SelectedCategory ? 'white' : 'red', marginRight: '15px' }}>{category.icon}</span>
               <span style={{ opacity: category.name === SelectedCategory ? '1' : '0.8', }}>{category.name}</span>
            </button>
         ))
         }
      </Stack >
   )
}

export default SideBar