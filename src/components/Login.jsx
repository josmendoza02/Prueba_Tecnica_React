{/*Importamos Librerias a Utilizar*/ }
import React, { useState } from 'react'
import { Menu } from './Menu'
import "./styles/Login.css"

export const Login = () => {

    {/*Creamos variables de estado*/ }
    const [usu, setUsu] = useState("");
    const [pas, setPas] = useState("");

    {/*Aca validamos la sesion para que cuando presionemos F5 No se salga */ }
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

    {/*Cuando se presione el boton de login*/ }
    function iniciarSesion(e) {
        {/*Primero evitamos que la pagina se recargue*/ }
        e.preventDefault();

        {/*Capturamos el nombre de usuario y la contraseña*/ }
        var txtusu = document.getElementById("txtusu").value;
        var txtpas = document.getElementById("txtpas").value;

        {/*Si el usuario deja los campos vacios arrojamos un alert*/ }
        if (txtusu.length === 0 || txtpas.length === 0) {
            alert("Complete los datos faltantes")
            {/*Aca validamos si ya tenemos contenido en los input*/ }
        } else {
            {/*Aca validamos si el usuario es admin y la contraseña es 123. de ser así puede entrar*/ }
            if (usu === "admin" && pas === "123") {

                {/*Con esto ocultamos el formulario de login*/ }
                setLogin(true);

                localStorage.setItem("miLogin", true);
                {/*Con esto guardamos le nombre de usuario para poder mostrarlo*/ }
                localStorage.setItem("usu", usu);
                document.getElementById("form_login").style.display = "none";


            } else {
                {/*Si no es así mostramos un alert*/ }

                setLogin(false);
                alert("Verifique Credenciales");

                {/*Aca limpiamos los campos*/ }
                document.getElementById("txtusu").value = "";
                document.getElementById("txtpas").value = "";
                document.getElementById("txtusu").focus();
            }
        }
    }
    return (

        <div>
            {/*Formulario */}
            {/*Si la sesion no se ha iniciado muestro el formulario*/}
            {miLogin === false ?

                <form id="form_login">
                    <div>

                        <h1 >LOGIN</h1>
                        <label htmlFor="txtusu"><strong>Username</strong></label>
                        <input autoComplete='off' className="input" type="text" id="txtusu" onChange={(e) => setUsu(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="txtpas"><strong>Password</strong></label>
                        <input autoComplete='off' className="input" type="password" id="txtpas" onChange={(e) => setPas(e.target.value)} required />
                    </div><br />
                    <input id="login_bottom" type="submit" value="Iniciar Sesión" onClick={iniciarSesion} />
                </form>


                :

                <Menu />}   {/*de lo contrario siemore me va a mostrar el menu*/}
        </div>

    )
}

