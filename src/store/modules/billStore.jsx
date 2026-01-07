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
        },
        addBill: (state, action) => {
            state.billList.push(action.payload);
        },

    }
})

export const {setBillList,addBill} = billSlice.actions;
//编写异步
const getBillList = () => {
    return async (dispatch) => {
        const res = await axios.get("http://localhost:8888/ka");
        dispatch(setBillList(res.data));
    }
}
const addBillList = (data) => {
    return async (dispatch) => {
        const res = await axios.post("http://localhost:8888/ka", data);
        dispatch(addBill(res.data));
    }
}

export {
    getBillList,addBillList
}

const reducer = billSlice.reducer;
export default reducer;
