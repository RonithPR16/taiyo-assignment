import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ContactDetailsProp } from '../../types/contact-info.type'

export interface ContactsState {
  contacts: ContactDetailsProp[]
}

const initialState: ContactsState = {
    contacts: [
        {
            firstName: 'Ronith',
            id: 'kejhf',
            lastName: 'PR',
            phoneNumber: '98037876',
            status:'active'
        },
         {
            firstName: 'Test',
            id: 'kejerfhf',
            lastName: 'PR',
            phoneNumber: '98037234876',
            status:'inactive'
      }
  ],
}

export const contactsSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
      addContact: (state, action: PayloadAction<ContactDetailsProp>) => {
      state.contacts.push( action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addContact } = contactsSlice.actions

export default contactsSlice.reducer