import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase';
import { Modal } from '../components/Modal';

export const Home = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [modalData, setModalData] = useState({});
  const [activeModal, setActiveModal] = useState(false);

  useEffect(() => {
    // Referencia a los datos en la base de datos para modalData
    const modalDataRef = ref(database, 'don_pancho/registros/ultimo/sensor_1/porcentaje');

    // Lee datos específicos para modalData
    const unsubscribe = onValue(modalDataRef, (snapshot) => {
      const percentage = snapshot.val();
      setModalData({ porcentaje: percentage });
    });

    // Limpia la suscripción cuando el componente se desmonte
    return () => unsubscribe();
  }, []);

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  const handleClick = () => {
    setActiveModal(prevState => !prevState);
  };

  return (
    <div className='container-fluid min-vh-100 p-0 animate__animated animate__fadeIn animate__faster p-0'>
      <Modal showModal={activeModal} toggleModal={handleClick} data={modalData} />

      <div className="row col-12 m-0 mt-3">
        <div className="col-10 mx-auto text-center">
          <div className="card mx-auto bg-white">
            <div className="card-header">
              <b><small className='card-title'>Información climática</small></b>
            </div>
            <div className="card-body m-0 text-center row col-12">
              <div className="col-6">
                <i className="fs-1 fa-solid fa-temperature-three-quarters"></i>
                <br />
                <small>19 °C</small>
              </div>
              <div className="col-6">
                <i className="fs-1 fa-solid fa-cloud-sun" style={{ "color": "#FFD43B" }}></i>
                <br />
                <small>Parcialmente soleado</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row col-12 m-0">
        <div className="container mt-5">
          <div className="row text-center justify-content-between">
            <div onClick={handleClick} className="col-md-3 col-6">
              <div className={`bg-${(modalData.porcentaje < 70 && modalData.porcentaje > 60) ? "success" : (modalData.porcentaje > 70) ? "primary": "danger"} text-white p-3 mb-3 card`}>Zona 1</div>
            </div>
            <div onClick={handleClick} className="col-md-3 col-6 rounded">
              <div className="bg-danger text-white p-3 mb-3 card">Zona 2</div>
            </div>
            <div onClick={handleClick} className="col-md-3 col-6">
              <div className="bg-success text-white p-3 mb-3 card">Zona 3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
