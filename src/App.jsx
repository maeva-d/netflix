import "./App.css";
import data from "../data.json";
import netflix from "../src/assets/netflix-logo.png";

const App = () => {
  <header>
    <img src={netflix} />
  </header>;
  const dataArray = data.map((elem) => {
    return (
      <section>
        <h2 key={elem.category}>{elem.category}</h2>
        <article>
          {elem.images.map((elem) => {
            return <img src={elem} />;
          })}
        </article>
      </section>
    );
  });

  return dataArray;
};

export default App;
