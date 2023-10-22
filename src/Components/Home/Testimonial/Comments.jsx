/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Comments = ({ data }) => {
    const { photo, name, address, comment } = data;
    return (
        <div className='col-3'>
            <div className="comments-prev">
                <p>{comment}</p>
                <div className="row between w-250 CommentedUser">
                    <div className="col-2 profile">
                        <img src={photo} alt={name} />
                    </div>
                    <div className="col-2">
                        <h4>{name}</h4>
                        <p>{address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comments;