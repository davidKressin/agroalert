import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase';
import { Modal } from '../components/Modal';


export const Home = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [modalData, setModalData] = useState({});
  const [activeModal, setActiveModal] = useState(false);
  const [firebaseData, setFirebaseData] = useState();

  useEffect(() => {
    // Referencia a los datos en la base de datos para modalData
    const modalDataRef = ref(database, 'don_pancho/registros/ultimo/');

    // Lee datos específicos para modalData
    const unsubscribe = onValue(modalDataRef, (snapshot) => {
      const sensores = snapshot.val();
      setFirebaseData(sensores);
    });
    console.log("firebaseData", firebaseData);

    // Limpia la suscripción cuando el componente se desmonte
    return () => unsubscribe();
  }, []);

  const handleClick = (data) => {
    setModalData(data);
    setActiveModal(prevState => !prevState);
    console.log(data);
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

      <div className="row col-12 m-0 text-white text-center">
        <div className="container mt-5">
          <div className="col-5 mb-3 mx-auto card text-black">
              <b className='mt-1'>Humedad óptima:</b>
            <div className="card-body drop-icon d-flex row align-items-center">
              <i className="fas fa-tint raindrop fs-4 text-primary "></i>
              <i className="fas fa-tint raindrop fs-4 text-primary"></i>
              <i className="fas fa-tint raindrop fs-4 text-primary"></i>
              <i className="fas fa-tint raindrop fs-4 text-primary"></i>
              <h5 className='fs-4 me-2 ms-2 text-center' style={{"ZIndex": "9999"}}>60%-70%</h5>
            </div>
          </div>

          <div className="row text-center justify-content-center">
            {/* <div onClick={() => handleClick(firebaseData.sensor_1)} className="col-md-3 col-6">
              {
                !!firebaseData
                  ? <div className={`bg-${(firebaseData.sensor_1.porcentaje < 70 && firebaseData.sensor_1.porcentaje > 60) ? "success" : (firebaseData.sensor_1.porcentaje > 70) ? "primary" : "danger"} text-white p-3 mb-3 card`}>Zona 1<br /> {firebaseData.sensor_1.porcentaje}%</div>
                  : <div className={`bg-danger text-white p-3 mb-3 card`}>Zona 1</div>
              }

            </div>
            <div onClick={() => handleClick(firebaseData.sensor_2)} className="col-md-3 col-6 rounded">
              {
                !!firebaseData
                  ? <div className={`bg-${(firebaseData.sensor_2.porcentaje < 70 && firebaseData.sensor_2.porcentaje > 60) ? "success" : (firebaseData.sensor_2.porcentaje > 70) ? "primary" : "danger"} text-white p-3 mb-3 card`}>Zona 2<br />{firebaseData.sensor_2.porcentaje}%</div>
                  : <div className={`bg-danger text-white p-3 mb-3 card`}>Zona 2</div>
              }

            </div> */}
            <div onClick={() => handleClick(firebaseData.sensor_3)} className="col-md-3 col-6">
              {
                !!firebaseData
                  ? <div className={`bg-${(firebaseData.sensor_3.porcentaje < 70 && firebaseData.sensor_3.porcentaje > 60) ? "success" : (firebaseData.sensor_3.porcentaje > 70) ? "primary" : "danger"} text-white p-3 mb-3 card`}>Humedad Zona<br />{firebaseData.sensor_3.porcentaje}%</div>
                  : <div className={`bg-danger text-white p-3 mb-3 card`}>Accediendo a la información...</div>
              }
            </div>
            {/* <div onClick={() => handleClick(firebaseData.sensor_4)} className="col-md-3 col-6">
              {
                !!firebaseData
                  ? <div className={`bg-${(firebaseData.sensor_4.porcentaje < 70 && firebaseData.sensor_4.porcentaje > 60) ? "success" : (firebaseData.sensor_4.porcentaje > 70) ? "primary" : "danger"} text-white p-3 mb-3 card`}>Zona 4<br />{firebaseData.sensor_4.porcentaje}%</div>
                  : <div className={`bg-danger text-white p-3 mb-3 card`}>Zona 4</div>
              }
            </div>
            <div onClick={() => handleClick(firebaseData.sensor_5)} className="col-md-3 col-6">
              {
                !!firebaseData
                  ? <div className={`bg-${(firebaseData.sensor_5.porcentaje < 70 && firebaseData.sensor_5.porcentaje > 60) ? "success" : (firebaseData.sensor_5.porcentaje > 70) ? "primary" : "danger"} text-white p-3 mb-3 card`}>Zona 5<br />{firebaseData.sensor_5.porcentaje}%</div>
                  : <div className={`bg-danger text-white p-3 mb-3 card`}>Zona 5</div>
              }
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
