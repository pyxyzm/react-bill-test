//账单相关store
import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const billSlice = createSlice({
    name: "bill",
    initialState: {
        billList: [],
    },
    reducers: {
        setBillList: (state, action) => {
            state.billList = action.payload;
        }

    }
})

export const {setBillList} = billSlice.actions;
//编写异步
const getBillList = () => {
    return async (dispatch) => {
        const res = await axios.get("http://localhost:8888/ka");
        dispatch(setBillList(res.data));
    }
}
export {
    getBillList
}

const reducer = billSlice.reducer;
export default reducer;
