import React from 'react';
import {Measure} from "./Measure";

export const Modal = ({ showModal, toggleModal, data }) => {
    return (
        <>
            {showModal && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ "display": 'block' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Humedad Zona</h5>
                                <button type="button" className="btn-close" aria-label="Close" onClick={toggleModal}></button>
                            </div>
                            <div className="modal-body">
                                <Measure data={data}/>
                                {(data.porcentaje < 70 && data.porcentaje > 60) 
                                    ? <>Porcentaje de humedad: <strong>{data.porcentaje}%</strong><br/><h5>Su zona se encuentra con humedad óptima.</h5></>
                                    : (data.porcentaje > 70) 
                                        ? <>Porcentaje de humedad: <strong>{data.porcentaje}%</strong><br/><h5>Su zona se encuentra con exceso de humedad.</h5></>
                                        : <>Porcentaje de humedad: <strong>{data.porcentaje}%</strong><br/><h5>A su zona le falta humedad.</h5></>}
                            </div>
                            
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
