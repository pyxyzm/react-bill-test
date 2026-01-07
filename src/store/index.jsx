//组合子模块，导出store实例
import billStore from "@/store/modules/billStore.jsx";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore( {
    reducer: {
        bill: billStore
    }
})

export default store;