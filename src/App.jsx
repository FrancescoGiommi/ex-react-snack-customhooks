import { useState } from "react";
import useSwitch from "./components/useSwitch";
import useDate from "./components/useDate";
import "./App.css";

//! Snack 1: useSwitch() – Toggle Booleano

/* Creare un custom hook per alternare un valore booleano tra true e false.

Cosa deve fare?

    Inizialmente false.
    Ritorna il valore attuale e una funzione toggle() per cambiarlo.
    Quando toggle() viene chiamato, il valore passa da true → false e viceversa.


*/

//! Snack 2: useDate() – Ottenere la Data Attuale

/* Creare un custom hook che restituisca la data e l'ora correnti,
 aggiornandosi automaticamente ogni secondo.

Cosa deve fare?

    Restituisce un oggetto con data e ora formattata.
    Si aggiorna automaticamente ogni secondo.
    Usa useEffect() per gestire l’aggiornamento.

*/

function App() {
  const [isOn, toggle] = useSwitch(false);
  const currentDate = useDate();

  return (
    <>
      <div>
        <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>

        {/* Bottone per cambiare il valore */}
        <button onClick={toggle}>Cambia Stato</button>
      </div>

      <div>
        <h1>Data e ora attuali:</h1>
        <p>{currentDate.toLocaleString()}</p>
      </div>
    </>
  );
}

export default App;
