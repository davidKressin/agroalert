import React from 'react'

export const Services = () => {
  return (
    <div className='bg-color1 text-white pt-5 text-center vh-100 animate__animated animate__fadeIn animate__faster'>
      <h3>Mis Servicios</h3>
      <div className="header-footer h-75 px-0 w-100 bg-color1 d-flex flex-row justify-content-around align-items-center flex-wrap">
        <div className="item w-25 m-1 p-3 bg-color1 text-white">
          <div className="icon text-center fs-2">
          <i class="fa-solid fa-brain"></i>

          </div>
          <div className="text text-wrap text-center mt-1">
            <h5 className='fw-bold color4'>

            Evaluación Psicológica
            </h5>
            <br />
            <p className='text-justify'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quae quasi dolor quaerat provident iusto.
            </p>

          </div>
        </div>
        <div className="item w-25 m-1 p-3 bg-color1 text-white">
          <div className="icon text-center fs-2">
          <i class="fa-solid fa-brain"></i>

          </div>
          <div className="text text-wrap text-center mt-1">
            <h5 className='fw-bold color4'>

            Diagnóstico y tratamiento
            </h5>
            <br />
            <p className='text-justify'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quae quasi dolor quaerat provident iusto.
            </p>

          </div>
        </div>

        <div className="item w-25 m-1 p-3 bg-color1 text-white">
          <div className="icon text-center fs-2">
          <i class="fa-solid fa-brain"></i>

          </div>
          <div className="text text-wrap text-center mt-1">
            <h5 className='fw-bold color4'>

            Terapia en pareja
            </h5>
            <br />
            <p className='text-justify'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quae quasi dolor quaerat provident iusto.
            </p>

          </div>
        </div>
      </div>

    </div>
  )
}
