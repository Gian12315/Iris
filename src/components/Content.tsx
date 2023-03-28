import AddCliente from "./AddCard";
import Card from "./Card";

const data = [
  {
    id: "1",
    nombre: "María Agustina Carmona Rosas",
  },
  {
    id: "2",
    nombre: "Mario Augusto Gómez Apellido",
  },
];

async function getAllProveedores() {
  const res = await window.modelAPI.getAllProveedores();
  return res[0].dataValues;
}


function Content() {
  function renderCards() {
    return data.map((card) => {
      return <Card key={card.id} name={card.nombre} />;
    });
  }

  return (
    <>
      <AddCliente />
      {renderCards()}
    </>
  );
}

export default Content;
