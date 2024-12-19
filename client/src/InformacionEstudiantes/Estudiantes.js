import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Estudiantes.css';
import { codigoEstudiante } from '../config';; // Importar la constante centralizada

function Estudiantes() {
    const [estudiantes, setEstudiante] = useState({});
    // const [password, setPassword] = useState([]); //Resetear password

    // Obtener los medicamentos desde la API
    useEffect(() => {
        axios.get(`/api/estudiantes/${codigoEstudiante}`)
        .then(response => setEstudiante(response.data))
        .catch(error => console.log('Error fetching estudiante: ', error));
    }, [codigoEstudiante]);

    if (!estudiantes) {
        return <p>Cargando información del estudiante...</p>;
    }

    return (
        <div>
            <h2>Bienvenido, {estudiantes.nombre}</h2>
            <p>Código: {estudiantes.codigo}</p>
            <p>Saldo disponible: S/. {estudiantes.saldo}</p>
        </div>
    );
}

export default Estudiantes;