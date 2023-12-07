'use client'

import io from 'socket.io-client';
import { useState, useEffect } from 'react';

const socket = io('http://35.173.210.244:3002/directorio1');

const socket2 = io('http://35.173.210.244:3002/directorio2');
function App() {
  const [mensajes, setMensajes] = useState([]);
  const [mens, setMensajes2] = useState([]);

  useEffect(() => {
    // Escuchamos el canal "message" por el cual se emiten los datos desde el WebSocket
    socket2.on('message', (data) => {
      console.log("Soy los datos de Humedad: ", data);
      // Almacenamos los datos en un estado para posteriormente presentarlos
      setMensajes2((mens) => [...mens, data]);
    });
  }, []);

  useEffect(() => {
    // Escuchamos el canal "message" por el cual se emiten los datos desde el WebSocket
    socket.on('message', (datahum) => {
      console.log("Soy los datos de luz: ", datahum);
      // Almacenamos los datos en un estado para posteriormente presentarlos
      setMensajes((mensajes) => [...mensajes, datahum]);
    });
  }, []);


  return (
    <div className="App">
       <ul>
          <li key={mens.length - 1}>{mens.length > 0 ? mens[mens.length - 1] : "No hay mensajes humedad"}</li>
       </ul>
       <ul>
          <li key={mensajes.length - 1}>{mensajes.length > 0 ? mensajes[mensajes.length - 1] : "No hay mensajes Luz"}</li>
       </ul>
    </div>
  );
}

export default App;
