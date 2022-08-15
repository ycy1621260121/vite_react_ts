import React, { useState, useEffect, useCallback, useRef } from 'react';
// @ts-ignore
import './index.css';
import QRCode from 'qrcode.react';
import { useWindowSize, scrollTop, classNameHeight } from '@/utils/hooks/useWindowSize';
import { useNavigate } from 'react-router-dom';

const IndexPage: React.FC<{}> = () => {
    const navigate = useNavigate();
    const [floor, setFloor] = useState('泰然大厦G座')
    const [layer, setLayer] = useState('A8')
    const { width, height } = useWindowSize()
    const [visible, setVisible] = useState(false)
    const [tab, setTab] = useState(0)
    const [floorList, setFloorList] = useState(['泰然大厦A座', '泰然大厦B座', '泰然大厦C座', '泰然大厦D座', '泰然大厦E座', '泰然大厦F座', '泰然大厦G座', '泰然大厦H座', '泰然大厦I座', '泰然大厦J座', '泰然大厦K座'])
    const [layerList, setLayerList] = useState(['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11', 'A12'])
    const renderRef = useRef(true)

    useEffect(() => {
        if (renderRef.current) {
            renderRef.current = false
            return;
        }
        const devicePixelRatio = window.devicePixelRatio;
        console.log(devicePixelRatio)
    }, [])

    // function animate() {
    //     // @ts-ignore
    //     requestAnimationFrame(animate)
    // }

    //楼栋自动滚动到指定位置事件
    const run = () => {
        setVisible(true)
        let floorIndex = floorList.findIndex((item: any) => item === floor)
        setTimeout(() => {
            let scrollNum = classNameHeight('floor-item', 'floorList', floorIndex - 1, floorList.length);
            scrollNum ? scrollTop('floorList', scrollNum) : null;
        })
    }

    //楼层自动滚动到指定位置事件
    const changeZero = () => {
        let layerIndex = layerList.findIndex((item: any) => item === layer)
        setTimeout(() => {
            let scrollNum = classNameHeight('floor-item', 'layerList', layerIndex - 1, layerList.length);
            scrollNum ? scrollTop('layerList', scrollNum) : null;
        }, 100)
    }

    //跳转到登录页
    const handleClick = () => {
        navigate('/login');
    }

    return (
        <div>
            <div className="container">
                <div className="content">
                    <div className="floorLayer" onClick={run}>{floor}：{layer} {'>'}</div>
                    <QRCode value="https://t.sjjz.com/" renderAs="canvas" size={(300 * width) / 375} />
                    <div className="qrcode-btn" onClick={handleClick}>二维码自动&nbsp;&nbsp;刷新</div>
                </div>
            </div>
            {visible ? (<div className="model active">
                <div className='mask' onClick={() => {
                    setVisible(false);
                    setTab(0)
                }}></div>
                <div className="container2">
                    <div className="content">
                        <div className='content-inner' style={{ width: (300 * width) / 375 }}>
                            <div>请选择您的楼栋</div>
                            <div className="content-tab-box">
                                <div className={tab === 0 ? "active content-tab left" : 'content-tab'} onClick={() => { setTab(0); run(); }}>{floor}</div>
                                <div className={tab === 1 ? "active content-tab right" : 'content-tab'} onClick={() => { setTab(1); changeZero() }}>{layer}</div>
                            </div>
                            {tab === 0 ? (
                                <div className='floorList-box' id='floorList'>
                                    {floorList.length ? floorList.map((item: any, index: number) => {
                                        return (
                                            <div className={floor === item ? 'floor-item active' : 'floor-item'} key={index} onClick={(e) => {
                                                e.preventDefault()
                                                setFloor(item);
                                                setTab(1);
                                                changeZero()
                                            }}>{item}<span></span></div>
                                        )
                                    }
                                    ) : null}
                                </div>
                            ) : null}
                            {tab === 1 ? (
                                <div className='floorList-box' id='layerList'>
                                    {layerList.length ? layerList.map((item: any, index: number) => {
                                        return (
                                            <div className={layer === item ? 'floor-item active' : 'floor-item'} key={index} onClick={(e) => {
                                                e.preventDefault()
                                                setLayer(item);
                                                setVisible(false);
                                                setTab(0)
                                            }}>{item}<span></span></div>
                                        )
                                    }) : null}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>) : null}
        </div>
    )
};

export default IndexPage;