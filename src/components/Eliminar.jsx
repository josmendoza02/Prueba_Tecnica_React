import React, { useState, useEffect } from 'react'
{/*Reutilizamos codigo de listar */ }

export const Eliminar = () => {
    const obtenerRegistros = () => {
        var datos = localStorage.getItem("registroslogin");
        if (datos) {

            return JSON.parse(datos);
        } else {

            return [];
        }


    }

    const [registroslogin, setRegistrosLogin] = useState(obtenerRegistros());

    {/*Creamos la funcion para el boton eliminar */ }
    const botonEliminar = (miIndex) => {
        {/*Preguntamos si está seguro de eliminar al usuario*/ }
        if (window.confirm("Está seguro que desea eliminar a este usuario")) {
            var registrosFiltrados = registroslogin.filter((e, index) => {
                return miIndex !== index

            });
            setRegistrosLogin(registrosFiltrados);
        }

    }



    useEffect(() => {

        localStorage.setItem("registroslogin", JSON.stringify(registroslogin))
    }, [registroslogin])
    return (

        <div className="bg-light" style={{ marginTop: 20, padding: 20 }}>

            <div className="h3">
                Delete Users
            </div>

            <div className="table-responsive">

                <>
                    <table className="table table-bordered table-hover" style={{ marginTop: 12 }}>
                        <thead className="text-center" style={{ background: "yellow" }}>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th> Document Type</th>
                                <th>Document Number</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody className="text-center align-baseline">
                            {
                                registroslogin.map((x, index) => (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{x.nombres}</td>
                                        <td>{x.apellidos}</td>
                                        <td>{x.tipodoc}</td>
                                        <td>{x.numdoc}</td>
                                        <td className="text-center">
                                            <button className="btn btn-outline-danger" onClick={() => botonEliminar(index)}>

                                                <i class="bi bi-trash3-fill"></i>
                                            </button>
                                        </td>

                                    </tr>

                                ))

                            }
                        </tbody>
                    </table>
                </>

            </div>

        </div>

    )
}
