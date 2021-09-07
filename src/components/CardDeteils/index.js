import "./style.css";
export function CardDeteils({
  infoCard: { name, image, gender, species, location, origin, status },
}) {
  const dados = {
    "Nome Completo": name,
    Sexo: gender,
    Espécie: species,
    Localização: location.name,
    "Planeta de origem": origin.name,
  };

  const teste = [];
  for (let key in dados) {
    teste.push([key, dados[key]]);
  }

  return (
    <>
      <ul
        className={
          status === "Alive"
            ? "infocard charCard--alive"
            : "infocard charCard--dead"
        }
      >
        {teste.map((item, index) => (
          <li key={index}>
            <h1>{item[0]}</h1>
            <span>{item[1]}</span>
          </li>
        ))}
        <li>
          <img className="imgCardInfo" src={image} alt="img card" />
        </li>
      </ul>
    </>
  );
}
