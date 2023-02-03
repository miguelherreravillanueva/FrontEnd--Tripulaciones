import React from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { updateProfile } from "../../features/auth/authSlice";

const EditProfile = () => {

    const dispatch = useDispatch()

    const { id } = useParams();

    const onSubmit = (event) => {

        event.preventDefault();

        const formData = new FormData(event.target);

        const userCreated = Object.fromEntries(formData.entries());

        console.log(userCreated)

        const test = { id, userCreated }

        console.log(test)

        dispatch(updateProfile(test))

    };



    return (

        <div className="Padre-register">
            <div className="header-register">Editar Perfil</div>
            <div className="register">
                <form onSubmit={onSubmit}>

                    <label>Nombre Perfil</label>
                    <br />

                    <div className="name-surname">
                        <input className="name" type="text" name="name" />
                        <input className="surname"
                            type="text"
                            name="surname"
                        />
                    </div>

                    <br />
                    <label>Fecha de nacimiento</label>
                    <br />

                    <input
                        type="text"
                        name="birthdate"
                        placeholder="mm-dd-yyyy"
                    />

                    <br />
                    <label>Correo electrónico</label>
                    <br />

                    <input type="email" name="email" />
                    <br />

                    <label>Código</label>

                    <br />
                    <input
                        type="text"
                        name="codephone"
                    />
                    <br />

                    <label>Teléfono</label>
                    <br />
                    <input
                        type="text"
                        name="telephone"

                    />
                    <br />

                    <label>Dirección</label>
                    <br />
                    <input
                        type="text"
                        name="address"
                    />
                    <br />

                    <label>Contraseña</label>
                    <br />
                    <input
                        type="password"
                        name="password"
                    />
                    <br />
                    <Link to="/profile/:id">
                        <button type="submit">Guardar </button>
                    </Link>

                </form>
            </div>
        </div>
    );
};

export default EditProfile;