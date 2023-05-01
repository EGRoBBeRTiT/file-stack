import React from 'react';
import { Logo } from 'assets';
import cnBind from 'classnames/bind';
import { TestComponent } from 'components/TestComponent';

import styles from './App.module.css';

const cx = cnBind.bind(styles);

export const App: React.FC = () => (
    <div className={cx('App')}>
        <header className={cx('App-header')}>
            <Logo className={cx('App-logo')} />
            <TestComponent title="THMOON" />
        </header>
    </div>
);
