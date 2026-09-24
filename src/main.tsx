import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Gracefully handle benign Vite HMR websocket disconnects in sandboxed preview
if (typeof window !== 'undefined') {
  window.addEventListener('unhandledrejection', (event) => {
    if (
      event.reason &&
      (typeof event.reason === 'string'
        ? event.reason.includes('WebSocket') || event.reason.includes('ws')
        : event.reason?.message?.includes('WebSocket') || event.reason?.message?.includes('ws'))
    ) {
      event.preventDefault();
    }
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);



