import React, { useState, useEffect, useRef } from 'react';

const LoginPage: React.FC<{}> = () => {
  const [count, setCount] = useState(10)
  const renderRef = useRef(true)

  useEffect(()=> {
    if(renderRef.current) { 
      renderRef.current = false
      return;
    }
    if(count > 0) {
      setTimeout(()=> {
        setCount(()=>count - 1)
      }, 1000)
    }
    console.log(count)
  }, [count])

  return (
    <div>
      登录页 倒计时 ({count})
    </div>
  )
};

export default LoginPage;