const getLicense = async (value: string = '') => {
  const response = await fetch(`https://api.hamdb.org/${value}/json/hamsearch`);
  const { hamdb } = await response.json();

  return hamdb;
};

export default getLicense;
