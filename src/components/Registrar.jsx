

import React, { useState, useEffect } from 'react'


export const Registrar = () => {

    const obtenerRegistros = () => {
        {/*Aca recuperamos el arreglo que se llama registrologin*/ }
        var datos = localStorage.getItem("registroslogin");

        {/*Si la variable quedó con datos, quiere decir que el arreglo existe y si es así lo retornamos*/ }
        if (datos) {
            return JSON.parse(datos);

        } else {

            {/*Si no existió retornamos un arreglo vacio*/ }
            return [];
        }


    }
    {/*Arreglo para guardar el contenido*/ };
    const [registroslogin, setRegistrosLogin] = useState(obtenerRegistros());

    {/*Variables de estados para controlar los campos*/ }
    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [tipodoc, setTipoDoc] = useState("");
    const [numdoc, setNumDoc] = useState("");

    {/*Funcion para guardar datos*/ }
    const botonGuardar = (e) => {
        {/*Evitamos que la pagina se recargue cuando pulsemos el boton*/ }
        e.preventDefault();
        {/*Creamos un objeto para obtener los datos*/ }

        var miObjeto = { nombres, apellidos, tipodoc, numdoc };
        {/*y esos datos los guardamos en el arreglo*/ }
        {/*los 3 puntos permiten que la estructura que se genere se pueda iterar, y recorrer*/ }

        setRegistrosLogin([...registroslogin, miObjeto]);

        {/*Aca limpiamos el formulario*/ }
        limpiarFormulario();

    }
    {/*Guardar en el local storage*/ }

    {/*Aca verificamos cuando haya algun cambio en el arreglo*/ }
    useEffect(() => {

        {/*guardamos el arreglo en formato JSON como cadena de texto*/ }
        localStorage.setItem("registroslogin", JSON.stringify(registroslogin));

        {/*lo llamos para que no se vuelva ejecutar*/ }
    }, [registroslogin]);


    {/*Funcion para limpiar formularios*/ }
    function limpiarFormulario() {
        setNombres("");
        setApellidos("");
        setTipoDoc("");
        setNumDoc("");

        {/*Luego restauramos el formulario*/ }
        document.getElementById("miFormulario").reset();

    }

    return (

        <div className="bg-light" style={{ marginTop: 20, padding: 20 }}>

            <div className="h3">
                Registrar Usuarios
                <br />
                {/*Aca llamos a la funcion guardar y se la asignamos al boton*/}
                <form id="miFormulario" onSubmit={botonGuardar} >

                    <div className="row" style={{ marginTop: 20 }}>

                        <div className="col-6">
                            <input id="nom" className="form-control form-control-lg text-center" type="text" placeholder="Nombres" onChange={(e) => setNombres(e.target.value)} required />
                        </div>

                        <div className="col-6">
                            <select className="form-select form-select-lg text-center" onChange={(e) => setTipoDoc(e.target.value)} required  >
                                <option value="">Tipo de Documento</option>
                                <option value="cc">CC</option>
                                <option value="ti">TI</option>
                                <option value="pasaporte">Pasaporte</option>
                            </select>
                        </div>
                    </div>

                    <div className="row" style={{ marginTop: 20 }}>
                        <div className="col-6">
                            <input className="form-control form-control-lg text-center" type="text" placeholder="Apellidos" onChange={(e) => setApellidos(e.target.value)} required />
                        </div>

                        <div className="col-6">
                            <input className="form-control form-control-lg text-center" type="text" placeholder="Numero de Documento" onChange={(e) => setNumDoc(e.target.value)} required />
                        </div>
                    </div>

                    <div className="row" style={{ marginTop: 20 }}>
                        <div className="col">
                            <button className="btn btn-primary btn-lg">Registrar Usuario</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>


    )
}