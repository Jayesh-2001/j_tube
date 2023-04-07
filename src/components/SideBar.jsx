import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utilities/constants'


const SideBar = ({ SelectedCategory, setSelectedCategory }) => {
   return (
      <Stack
         direction='row'
         sx={{ overflow: 'auto', height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column' } }}
      >
         {categories.map((category) => (
            <button
               className='category-btn'
               onClick={() => setSelectedCategory(category.name)}
               style={{ background: category.name === SelectedCategory && '#FC1530', color: 'white' }}
               key={category.name}
            >
               <span style={{ color: category.name === SelectedCategory ? 'white' : '#14d510', marginRight: '15px' }}>{category.icon}</span>
               <span style={{ opacity: category.name === SelectedCategory ? '1' : '0.8', }}>{category.name}</span>
            </button>
         ))
         }
      </Stack >
   )
}

export default SideBar;