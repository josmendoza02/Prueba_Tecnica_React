import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Registrar } from './Registrar'
import { Listar } from './Listar'
import { Eliminar } from './Eliminar'




export const Menu = (props) => {

    const [usu] = useState(localStorage.getItem("usu"));
    const [reg, setReg] = useState("");
    const [lis, setLis] = useState("");
    const [eli, setEli] = useState("");



    function op_registrar() {
        setReg("1");
        setLis("0");
        setEli("0");



    }
    function op_listar() {
        setReg("0");
        setLis("1");
        setEli("0");


    }
    function op_eliminar() {
        setReg("0");
        setLis("0");
        setEli("1");


    }




    function cerrarSesion() {
        localStorage.removeItem("usu");
        localStorage.removeItem("miLogin");
        document.getElementById("caja_menu").style.display = "none";
        document.getElementById("form_login").style.display = "block";
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpas").value = "";
        document.getElementById("txtpas").focus();

    }



    return (
        <>

            <div id="caja_menu" style={{ textAlign: "center" }}>

                <strong style={{ fontWeight: "bold", background: "whitesmoke", padding: 15 }} className="h3">
                    Bienvenido Usuario : {usu.toUpperCase()}
                </strong>

                <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ marginTop: 20, padding: 40 }}>
                    <div className="container-fluid">

                        <label className="navbar-brand  h5" href=" ">Menú Principal</label>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink to="" className="nav-link  h5  text-center" onClick={op_registrar} >Registrar Usuarios</NavLink>
                                <NavLink to="" className="nav-link  h5  text-center" onClick={op_listar} >Listar Usuarios</NavLink>
                                <NavLink to="" className="nav-link  h5  text-center" onClick={op_eliminar} >Eliminar Usuarios</NavLink>

                                <a className="nav-link  h5  text-center" style={{ color: "red" }} href=" " onClick={cerrarSesion}  >Cerrar Sesión</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            {reg === "1" && <Registrar />}
            {lis === "1" && <Listar />}
            {eli === "1" && <Eliminar />}



        </>

    )
}

