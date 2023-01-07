
import React, { useState, useEffect } from 'react'


export const Registrar = () => {

    const obtenerRegistros = () => {

        var datos = localStorage.getItem("registroslogin");


        if (datos) {
            return JSON.parse(datos);

        } else {


            return [];
        }


    }

    const [registroslogin, setRegistrosLogin] = useState(obtenerRegistros());


    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [tipodoc, setTipoDoc] = useState("");
    const [numdoc, setNumDoc] = useState("");


    const botonGuardar = (e) => {

        e.preventDefault();


        var miObjeto = { nombres, apellidos, tipodoc, numdoc };


        setRegistrosLogin([...registroslogin, miObjeto]);


        limpiarFormulario();

    }

    useEffect(() => {


        localStorage.setItem("registroslogin", JSON.stringify(registroslogin));


    }, [registroslogin]);



    function limpiarFormulario() {
        setNombres("");
        setApellidos("");
        setTipoDoc("");
        setNumDoc("");


        document.getElementById("miFormulario").reset();

    }

    return (

        <div className="bg-light" style={{ marginTop: 20, padding: 20 }}>

            <div className="h3">
                Registrar Usuarios
                <br />

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
