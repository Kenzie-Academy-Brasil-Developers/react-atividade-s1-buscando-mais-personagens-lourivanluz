import "./style.css";

export function CharCard({ char: { name, image, status } }) {
  const nome = name.length > 15 ? name.slice(0, 12) + "..." : name;
  return (
    <div className="container-card">
      <div
        className={
          status === "Alive"
            ? "charCard charCard--alive"
            : "charCard charCard--dead"
        }
      >
        <h2>{nome}</h2>
        <img src={image} alt="img card" />
      </div>
    </div>
  );
}
