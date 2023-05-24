import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from 'globals.style';
import { RouterProvider } from 'react-router-dom';
import { AppRouter } from 'App';
import { AlertErrorProvider } from 'components/AlertErrorProvider';
import { ToastProviderProvider } from 'components/ToastProvider/ToastProvider';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <GlobalStyles />
        <Provider store={store}>
            <AlertErrorProvider>
                <ToastProviderProvider>
                    <RouterProvider router={AppRouter} />
                </ToastProviderProvider>
            </AlertErrorProvider>
        </Provider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
