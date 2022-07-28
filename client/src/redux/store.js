import {configureStore} from '@reduxjs/toolkit'
import textSlice from "./slices/textSlice";

export default configureStore({reducer: {textSlice}})