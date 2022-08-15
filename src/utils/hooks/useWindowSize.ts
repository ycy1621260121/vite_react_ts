// An highlighted block
import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  // 第一步：声明能够体现视口大小变化的状态
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // 第二步：通过生命周期 Hook 声明回调的绑定和解绑逻辑
  useEffect(() => {
    const updateSize = () => setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return windowSize;
}

//获取id并开始执行
export const scrollTop = (id: string, topNum: number) => {
  let box = document.getElementById(id);
  let num = 0;
  if (box) {
    topScoll(num, topNum, box)
  }
}

//滚动到指定数字
const topScoll = (num: number, topNum: number, box: any) => {
  if (num < topNum) {
    setTimeout(() => {
      num += 3;
      topScoll(num, topNum, box) //num小于topNum，再次执行topScroll
    })
  } else {
    num = topNum
  }
  //console.log(num, scroll)
  //setTimeout(() => {
    box.scrollTop += 3;
  //})
}

//获取每个item的高度 className类名， floorid列表父级ID， floorIndex：floor在floorList的下标， floorListLength： floorList列表数据长度
export const classNameHeight = (className: string, floorid: string, floorIndex: number, floorListLength: number) => {
  if (floorIndex > 0) {
      const classBox: any = document.querySelectorAll('.' + className)[floorIndex]; //选中的class
      const box: any = document.getElementById(floorid);
      const boxHeight: number = box.offsetHeight,
      boxCenterHeight = boxHeight / 2,
      floorCenterListHeight = (floorListLength * classBox.offsetHeight) / 2; //列表中点
    let classBoxOffsetTop = classBox.offsetTop + boxCenterHeight;
    if (classBox.offsetTop >= floorCenterListHeight) {
      return classBoxOffsetTop
    } else {
      return 0 //如果滚动距离比中点还小，则不需要滚动，距离为0
    }
  }
}