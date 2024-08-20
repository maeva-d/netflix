import "./App.css";
import data from "../data.json";
import netflix from "../src/assets/netflix-logo.png";

const App = () => {
  return (
    <>
      <header>
        <img src={netflix} />
      </header>
      {data.map((elem) => {
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
      })}
    </>
  );
};

export default App;
