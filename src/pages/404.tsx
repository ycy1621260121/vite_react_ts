import React from 'react';

const NoFoundPage: React.FC<{}> = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      很遗憾，此处无银~
    </div>
  )
};

export default NoFoundPage;