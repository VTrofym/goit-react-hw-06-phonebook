import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  filter: ''
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContactAction: (state, action) => {
      state.filter=action.payload
    },
  }
})

export const { filterContactAction } = filterSlice.actions
export default filterSlice.reducer