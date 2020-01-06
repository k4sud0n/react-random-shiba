import React from 'react';
import styles from './Viewer.scss';
import classNames from 'classnames/bind';
import { ChasingDots } from 'better-react-spinkit';

const cx = classNames.bind(styles);

const Viewer = ({ url, loading }) => {

    if(loading) {
        return (
            <div className={cx('viewer')}>
                <ChasingDots color="white" size={60}/>
            </div>
        )
    }

    if(!url) return null;

    return (
        <div className={cx('viewer')}>
            {
                <img onClick={() => window.open(url)} src={url} alt="shiba"/>
            }
        </div>
    )
}

export default Viewer;