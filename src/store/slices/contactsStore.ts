import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ContactDetailsProp } from '../../types/contact-info.type'
import { getUniqueId } from '../../utils/utils'

export interface ContactsState {
  contacts: ContactDetailsProp[]
}

const initialState: ContactsState = {
    contacts: [
        {
            firstName: 'Ronith',
            id: getUniqueId(),
            lastName: 'PR',
            phoneNumber: '8908767899',
            status:'active'
        },
  ],
}

export const contactsSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
     addOrEditContact: (state, action: PayloadAction<ContactDetailsProp>) => {
      const index = state.contacts.findIndex((ele) => ele.id === action.payload.id);
      if (index === -1) {
      state.contacts.push( {...action.payload, id: getUniqueId()})
      } else {
        const temp = [...state.contacts];
        temp[index] = action.payload;
        state.contacts = temp;
      }
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      const updatedContacts = state.contacts.filter((item) => item.id !== action.payload)
      state.contacts = updatedContacts
    },
  },
})

export const { addOrEditContact ,deleteContact} = contactsSlice.actions

export default contactsSlice.reducer