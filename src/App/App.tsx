import React from 'react';
import { TestComponent } from 'components/TestComponent';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from 'react-router-dom';
import { ErrorPage } from 'pages/ErrorPage';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={
                <header>
                    Header
                    <Outlet />
                </header>
            }
            errorElement={<ErrorPage />}
        >
            <Route errorElement={<div>Oops... children error!</div>}>
                <Route index element={<div>Index</div>} />
                <Route path="contacts" element={<TestComponent title="File Stacker" />} />
            </Route>
        </Route>,
    ),
);
