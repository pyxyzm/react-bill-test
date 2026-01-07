import { NavBar, DatePicker } from 'antd-mobile'
import './index.scss'
import {useState} from "react";
import classNames from "classnames";
import dayjs from "dayjs";
const Month = () => {
    //控制弹窗的打开和关闭
    const [disVisible, setDisVisible] = useState(false)
    //控制时间显示状态
    const [currentDate, setCurentDate] = useState(()  => {

        return dayjs(new Date()).format('YYYY-MM')
    })
    const onConfirm = (date) => {
        setDisVisible( false)
        console.log( date)
        setCurentDate(dayjs(date).format('YYYY-MM'))
    }
    return (
        <div className="monthlyBill">
            <NavBar className="nav" backArrow={false}>
                月度收支
            </NavBar>
            <div className="content">
                <div className="header">
                    {/* 时间切换区域 */}
                    <div className="date" onClick={()  => setDisVisible(true)}>
            <span className="text">
             {currentDate + ''}月账单
            </span>
                        {/*根据弹窗打开的状态来控制expand类名是否存在*/}
                        <span className={classNames('arrow', { expand: disVisible })}></span>
                    </div>
                    {/* 统计区域 */}
                    <div className='twoLineOverview'>
                        <div className="item">
                            <span className="money">{100}</span>
                            <span className="type">支出</span>
                        </div>
                        <div className="item">
                            <span className="money">{200}</span>
                            <span className="type">收入</span>
                        </div>
                        <div className="item">
                            <span className="money">{200}</span>
                            <span className="type">结余</span>
                        </div>
                    </div>
                    {/* 时间选择器 */}
                    <DatePicker
                        className="kaDate"
                        title="记账日期"
                        precision="month"
                        visible={disVisible}
                        onCancel={() => setDisVisible(false)}
                        onConfirm={onConfirm}
                        onclose={() => setDisVisible(false)}
                        max={new Date()}
                    />
                </div>
            </div>
        </div >
    )
}

export default Month