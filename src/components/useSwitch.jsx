import { useState } from "react";

export default function useSwitch() {
  // Inizialmente false
  const [isOn, setIsOn] = useState(false);

  // Ritorna il valore attuale e una funzione per cambiarlo
  const toggle = () => setIsOn((curr) => !curr);

  return [isOn, toggle];
}
