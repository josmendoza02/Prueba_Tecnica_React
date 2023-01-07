import React, { useState, useEffect } from 'react'


export const Listar = () => {
    const obtenerRegistros = () => {
        var datos = localStorage.getItem("registroslogin");
        if (datos) {

            return JSON.parse(datos);
        } else {

            return [];
        }


    }

    const [registroslogin] = useState(obtenerRegistros());



    useEffect(() => {

        localStorage.setItem("registroslogin", JSON.stringify(registroslogin))
    }, [registroslogin])
    return (

        <div className="bg-light" style={{ marginTop: 20, padding: 20 }}>

            <div className="h3">
                Lista de Usuarios Registrados
            </div>

            <div className="table-responsive">



                <>
                    <table className="table table-bordered table-hover" style={{ marginTop: 12 }}>
                        <thead className="text-center" style={{ background: "lightgray" }}>
                            <tr>
                                <th>#</th>
                                <th>Nombres</th>
                                <th>Apellidos</th>
                                <th>Tipo de Documento</th>
                                <th>Numero de Documento</th>
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