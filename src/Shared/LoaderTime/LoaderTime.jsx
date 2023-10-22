/* eslint-disable no-unused-vars */
import React from 'react';
import { Watch } from 'react-loader-spinner';

const LoaderTime = () => {
    return (
        <div className="loadingBody">
            <Watch
                height="80"
                width="80"
                radius="48"
                color="#0FCFEC"
                ariaLabel="watch-loading"
                wrapperStyle={{}}
                wrapperClassName="loadingTime"
                visible={true}
            />
        </div>
    );
};

export default LoaderTime;