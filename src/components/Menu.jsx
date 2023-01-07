{/*Importamos librerias*/ }

{/* Importamos useState Para controlar las variables de estado*/ }
import React, { useState } from 'react';

{/*Importamos a los componentes que necesito*/ }
import { NavLink } from 'react-router-dom';
import { Registrar } from './Registrar';
import { Listar } from './Listar';
import { Eliminar } from './Eliminar';

{/*Importamos la hoja de estilos*/ }
import "./styles/Menu.css";


{/*Utilizo props para obtener la propiedad usu del login, eso lo hago para dar un mensaje de bienvenida
al usuario que inició sesion*/ }

export const Menu = (props) => {

    {/*Recuperamos el nombre del usuario*/ }
    const [usu] = useState(localStorage.getItem("usu"));
    {/* Creamos las variables de estados*/ }
    const [reg, setReg] = useState("");
    const [lis, setLis] = useState("");
    const [eli, setEli] = useState("");


    {/*Aca representamos la opcion de registrar
el valor inicial que tiene es 0, entonces cuando hacemos click se abre, y las otras opciones se mantienen cerradas*/ }
    function op_registrar() {
        setReg("1");
        setLis("0");
        setEli("0");

    }
    {/*Aca representamos la opcion de listar
el valor inicial que tiene es 0, entonces cuando hacemos click se abre, y las otras opciones se mantienen cerradas*/ }
    function op_listar() {
        setReg("0");
        setLis("1");
        setEli("0");


    }
    {/*Aca representamos la opcion de eliminar
el valor inicial que tiene es 0, entonces cuando hacemos click se abre, y las otras opciones se mantienen cerradas*/ }
    function op_eliminar() {
        setReg("0");
        setLis("0");
        setEli("1");


    }


    {/*Funcion para cerrar sesion*/ }

    function cerrarSesion() {
        localStorage.removeItem("usu");
        localStorage.removeItem("miLogin");

        {/*Aca ocultamos el menu y mostramos el formulario*/ }
        document.getElementById("caja_menu").style.display = "none";
        document.getElementById("form_login").style.display = "block";

        {/*Y limpiamos los registros*/ }
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpas").value = "";
        document.getElementById("txtpas").focus();

    }



    return (
        <>
            <div className="container" >

                <div id="caja_menu">

                    <strong style={{ fontWeight: "bold", background: "whitesmoke", padding: 15 }} className="h3">
                        {/*Aca obetenmos la propiedad y la mostramos en mayusculas*/}
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
                                    {/*Aca le añadimos la funcion correspondiente a los hipervivulos*/}

                                    <NavLink id="nav-link" to="" className="nav-link  h5  text-center" onClick={op_registrar} >Registrar Usuarios</NavLink>
                                    <NavLink id="nav-link" to="" className="nav-link  h5  text-center" onClick={op_listar} >Listar Usuarios</NavLink>
                                    <NavLink id="nav-link" to="" className="nav-link  h5  text-center" onClick={op_eliminar} >Eliminar Usuarios</NavLink>

                                    <a id="nav-link" className="nav-link  h5  text-center" style={{ color: "red" }} href=" " onClick={cerrarSesion}  >Cerrar Sesión</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                {/*Aca validamos para llamar a las funciones*/}

                {/*Si hacemos click en registrar solo se llama la funcion registrar*/}
                {reg === "1" && <Registrar />};
                {/*Si hacemos click en Listar solo se llama la funcion Listar*/}
                {lis === "1" && <Listar />};
                {/*Si hacemos click en Eliminar solo se llama la funcion Eliminar*/}
                {eli === "1" && <Eliminar />};


            </div>
        </>

    )
}

