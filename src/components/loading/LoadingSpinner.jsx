import React from 'react'

const LoadingSpinner = () => {
    return (
        <div className="d-flex justify-content-center mt-5">
            <h4>Cargando...</h4>
            <div className="spinner-border text-info ms-4" role="status">
            </div>
        </div>
    )
}

export default LoadingSpinner;
