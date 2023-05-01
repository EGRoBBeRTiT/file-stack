import React from 'react';
import cnBind from 'classnames/bind';

import type { TestComponentProps } from './TestComponent.types';
import styles from './TestComponent.module.css';

const cx = cnBind.bind(styles);

export const TestComponent = ({ title }: TestComponentProps) => (
    <>
        <h1 className={cx('header')}>{title}</h1>
        <button
            type="button"
            onClick={() => {
                throw new Error('Error!');
            }}
        >
            Make an error
        </button>
    </>
);
