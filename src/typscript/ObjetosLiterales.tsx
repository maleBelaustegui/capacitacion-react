interface Persona {
  nombre: string;
  apellido: string;
  edad: number;
  direccion: string;
}

export const ObjetosLiterales = () => {
  const persona: Persona = {
    nombre: "Magdalena",
    apellido: "Belaustegui",
    edad: 43,
    direccion: "pellegrini 1326"
  };
  return (
    <div>
      <h3>Objetos Literales</h3>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </div>
  );
};
