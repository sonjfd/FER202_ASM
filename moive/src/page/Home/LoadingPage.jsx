import React from 'react';

const LoadingPage = () => {
  const containerStyle = {
    height: '100vh',
    backgroundColor: '#111',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const spinnerStyle = {
    width: '50px',
    height: '50px',
    border: '5px solid #444',
    borderTop: '5px solid #e50914',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    marginBottom: '16px',
  };

  const styleSheet = document.styleSheets[0];
  if (styleSheet && !document.getElementById('spin-keyframe')) {
    const keyframes = `
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `;
    const styleEl = document.createElement('style');
    styleEl.id = 'spin-keyframe';
    styleEl.innerHTML = keyframes;
    document.head.appendChild(styleEl);
  }

  return (
    <div style={containerStyle}>
      <div style={spinnerStyle}></div>
      <p>Đang tải trang...</p>
    </div>
  );
};

export default LoadingPage;
