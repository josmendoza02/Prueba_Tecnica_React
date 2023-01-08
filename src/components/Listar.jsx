import React, { useState, useEffect } from 'react'


export const Listar = () => {
    {/*Reutilizamos el codigo de registrar para retornar los datos*/ }
    const obtenerRegistros = () => {
        var datos = localStorage.getItem("registroslogin");
        if (datos) {

            return JSON.parse(datos);
        } else {

            return [];
        }


    }
    {/*obtenemos los datos que tenemos en el local Storage*/ }
    const [registroslogin] = useState(obtenerRegistros());



    useEffect(() => {

        localStorage.setItem("registroslogin", JSON.stringify(registroslogin))
    }, [registroslogin])
    return (

        <div className="bg-light" style={{ marginTop: 20, padding: 20 }}>

            <div className="h3">
            List Of Registered Users

            </div>

            <div className="table-responsive">

                <>
                    <table className="table table-bordered table-hover" style={{ marginTop: 12 }}>
                        <thead className="text-center" style={{ background: "yellow" }}>
                            <tr>
                                <th>#</th>
                                <th>Firt Name</th>
                                <th>Last Name</th>
                                <th>Document Type</th>
                                <th>Document Number</th>
                            </tr>
                        </thead>
                        <tbody className="text-center align-baseline">
                            {/*Aca recuperamos un elemento por cada iteracion y creamos la tabla*/}
                            {
                                registroslogin.map((x, index) => (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{x.nombres}</td>
                                        <td>{x.apellidos}</td>
                                        <td>{x.tipodoc}</td>
                                        <td>{x.numdoc}</td>
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