import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase';

const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000); // Multiplicamos por 1000 para convertir de segundos a milisegundos
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses empiezan en 0
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  
  return `${day}-${month}-${year} ${hours}:${minutes}`;
};

export const Record = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Referencia a los datos en la base de datos
    const dataRef = ref(database, 'don_pancho/registros/todos/'); // Cambia 'path/to/your/data' a tu ruta en la base de datos

    // Lee los datos
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const dataObj = snapshot.val();
      const formattedData = [];

      // Procesar datos
      for (const [dateTimestamp, sensors] of Object.entries(dataObj)) {
        const formattedDate = formatDate(Number(dateTimestamp));
        for (const [sensor, readings] of Object.entries(sensors)) {
          formattedData.push({
            date: formattedDate,
            sensor: sensor.replace('sensor', 'Sensor '),
            humidity: `${readings.porcentaje}%`,
            timestamp: Number(dateTimestamp) // Añadimos el timestamp para ordenar
          });
        }
      }

      // Ordenar los datos en orden descendente por timestamp
      formattedData.sort((a, b) => b.timestamp - a.timestamp);

      // Eliminar el campo timestamp antes de guardar el estado
      const finalData = formattedData.map(({ timestamp, ...rest }) => rest);

      setData(finalData);
      setLoading(false);
    });

    // Limpia la suscripción cuando el componente se desmonte
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className='text-white text-center'>Cargando información de los sensores...</div>;
  }

  return (
    <div className='container-fluid min-vh-100 p-0 animate__animated animate__fadeIn animate__faster p-0'>
      <table className="col-md-10 mx-auto table table-responsive table-bordered table-striped bg-light text-dark">
        <thead className="thead-dark">
          <tr>
            <th>FECHA</th>
            <th>SENSOR</th>
            <th>HUMEDAD</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center">No hay datos disponibles</td>
            </tr>
          ) : (
            data.map((row, index) => (
              <tr key={index}>
                <td>{row.date}</td>
                <td>{row.sensor}</td>
                <td>{row.humidity}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
