import React, { useState } from 'react'
import { Menu } from './Menu'

export const Login = () => {


    const [usu, setUsu] = useState("");
    const [pas, setPas] = useState("");


    const comprobarSesion = () => {

        var sesion = localStorage.getItem("miLogin");
        if (sesion) {
            return JSON.parse(sesion);

        } else {

            return false;
        }
    }
        {/* Variable para controlar el login */ }
    const [miLogin, setLogin] = useState(comprobarSesion());

    function iniciarSesion(e) {
        e.preventDefault();
        var txtusu = document.getElementById("txtusu").value;
        var txtpas = document.getElementById("txtpas").value;
        if (txtusu.length === 0 || txtpas.length === 0) {
            alert("Complete los datos")

        } else {
            if (usu === "admin" && pas === "123") {
                setLogin(true);
                localStorage.setItem("miLogin", true);
                localStorage.setItem("usu", usu);
                document.getElementById("form_login").style.display = "none";
            } else {

                setLogin(false);
                alert("Error, Verifique Datos");
                document.getElementById("txtusu").value = "";
                document.getElementById("txtpas").value = "";
                document.getElementById("txtusu").focus();
            }
        }
    }
    return (

        <div className="container" style={{ background: "white", marginTop: 20, padding: 20 }}>

            {miLogin === false ?
                /* Creacion de formulario*/
                <form id="form_login">
                    <div>

                        <h1 style={{ color: "white", textalign: "center" }}>LOGIN</h1>
                        <label htmlFor="txtusu"><strong>Username</strong></label>
                        <input type="text" id="txtusu" style={{ textAlign: "center" }} className="form-control" onChange={(e) => setUsu(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="txtpas"><strong>Password</strong></label>
                        <input type="password" id="txtpas" style={{ textAlign: "center" }} className="form-control" onChange={(e) => setPas(e.target.value)} required />
                    </div><br />
                    <input type="submit" className="btn btn-primary" value="Login" onClick={iniciarSesion} />
                </form>
                :
                <Menu />}
        </div>

    )
}

