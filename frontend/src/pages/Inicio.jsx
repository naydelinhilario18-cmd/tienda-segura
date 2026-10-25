import Contador from '../components/Contador.jsx';
export default function Inicio() {
  const nombre = 'estudiante'; // JSX: expresiones entre llaves
  return (
    <>
      <h1>Hola, {nombre}</h1>
      <p>Esta SPA consume una API protegida con JWT, CORS y consultas parametrizadas.</p>
      <p>2 + 2 = {2 + 2}</p>
      <Contador />
    </>
  );
}
