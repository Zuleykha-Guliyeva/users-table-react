import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState } from "./store";
import { az } from "../assets/lang/az";
import { en } from "../assets/lang/en";
import { environment } from "../core/configs/app.config";
import { ILang } from "../assets/lang/lang";

const initialState: IState = {
  loader: false,
  leftMenu: true,
  languages: [
    {
      id: 1,
      key: "az",
      value: "Az",
    },
    {
      id: 2,
      key: "en",
      value: "En",
    }
  ],
  locale: az
};

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setLoader: (state: IState, action: PayloadAction<boolean>) => {
      state.loader = action.payload;
    },
    toggleLeftMenu: (state: IState) => {
      state.leftMenu = !state.leftMenu;
    },
    setLocale: (state: IState, action: PayloadAction<ILang>) => {
      const lang = {
        az,
        en,
      };
      state.locale = lang[action.payload];
      localStorage.setItem(
        `${environment.applicationName}-locale`,
        action.payload
      );
    },
  },
});

export const { setLoader, toggleLeftMenu, setLocale } = rootSlice.actions;

export default rootSlice.reducer;
