export const NameList = () => {
  const names = ["Bruce", "Clark", "Diana"];

  const NameList = names.map((name) => <h2 key={names}>{name}</h2>);

  return <div>{NameList}</div>;
};
