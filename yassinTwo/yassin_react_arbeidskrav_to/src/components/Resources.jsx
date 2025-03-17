import { resources } from "../data/resusser";

const Resources = ({ category }) => {
  const filteredResources = resources.filter((r) => r.category === category);

  return (
    <section>
      {filteredResources.length > 0 ? (
        <>
          <h1>{filteredResources[0].category.toUpperCase()}</h1>
          <p>{filteredResources[0].text}</p>
          <ul>
            {filteredResources[0].sources.map((source, index) => (
              <li key={index}>
                <a href={source.url} target="_blank" rel="noopener noreferrer">
                  {source.title}
                </a>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Ingen ressurser funnet.</p>
      )}
    </section>
  );
};

export default Resources;
