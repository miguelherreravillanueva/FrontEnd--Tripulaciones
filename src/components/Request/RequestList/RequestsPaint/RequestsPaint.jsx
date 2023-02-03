import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "./RequestsPaint.css";
import { getAll } from '../../../../features/requests/requestSlice';

const RequestsPaint = () => {
    const { requests, isLoading } = useSelector(state => state.requests)
    console.log(requests)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAll())
    }, []);

    const requestN = requests.map((a) => {

        if (isLoading) {
            return <h1>cargando...</h1>
        }

        const imageUrl = "http://localhost:8000/images/requests/"

        return (

            <div className='requestslist-container'>

                <div className="requestsmap-box">
                    <div className='info-request'>
                        <span className='title-request'>{a.title}</span>
                        <br />
                    </div>
                    <img className='requests-pics' src={imageUrl + a.image} />
                    <span className='body-request'>{a.body}</span>
                    <br />
                    <div className='request-details'>
                        <div className='address-box'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#3D5656" />
                            </svg>
                            <span className='address-request'>{a.address}</span>
                        </div>
                        <div className='date-box'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 11H7V13H9V11ZM13 11H11V13H13V11ZM17 11H15V13H17V11ZM19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20Z" fill="#A1AEB7" />
                            </svg>
                            <span className='date-request'>Hace 5 días</span>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        );
    });

    return <div>{requestN}</div>;
};

export default RequestsPaint;