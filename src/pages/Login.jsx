import React from 'react'
import { NavLink } from 'react-router-dom'

export const Login = () => {
  return (
    <div className="container-fluid bg-light vh-100 d-flex justify-content-center align-items-center">
      <div className="card p-3 shadow">
        <h2 className="card-title text-center mb-4">Ingresar</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Nombre de usuario</label>
            <input type="text" className="form-control" id="username" name="username" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="password" name="password" required />
          </div>
          {/* <button type="submit" className="">Login</button> */}
          <NavLink className="nav-link active btn btn-primary w-100" to="/home">Acceder</NavLink>
        </form>
      </div>
    </div>
  )
}
