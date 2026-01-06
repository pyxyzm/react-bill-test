import {Outlet} from "react-router-dom";
import {Button} from "antd-mobile";

const Layout = () => {
  return (
    <div>
        Layout
        <Outlet/>
        <Button color={"primary"}>测试全局</Button>
        <div className={"test"}>
            <Button color={"primary"}>测试局部</Button>
        </div>
    </div>
  )
}
export default Layout