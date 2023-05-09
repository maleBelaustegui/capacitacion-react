export const Funciones = () => {
  const sumar = (a: number, b: number) => {
    return a + b;
  };

  return (
    <div>
      <h3>Funciones</h3>
      <span> El resultado es: {sumar(10, 8)}</span>
    </div>
  );
};
