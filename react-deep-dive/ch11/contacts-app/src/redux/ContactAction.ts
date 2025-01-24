import { createAsyncThunk, Dispatch, ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import axios from "axios";

export type ContactItemType = {
  no: string;
  name: string;
  tel: string;
  address: string;
  photo: string;
};
export type ContactStateType = {
  contacts: ContactItemType[];
  isLoading: boolean;
  status: string;
};

type ThunkErrorType = {
  message: string;
};

export type AppDispatch = ThunkDispatch<ContactStateType, undefined, UnknownAction> & Dispatch<UnknownAction>;

export const searchContactsAsync = createAsyncThunk<
  { contacts: ContactItemType[] },
  { name: string },
  { dispatch: AppDispatch; state: ContactStateType; rejectValue: ThunkErrorType }
>("searchContacts", async ({ name }) => {
  const url = "http://localhost:3000/contacts_long/search/" + name;
  const response = await axios.get(url);
  return { contacts: response.data };
});
