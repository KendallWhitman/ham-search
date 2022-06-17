const isProd = process.env.NODE_ENV !== 'development';

const getLicense = async (value: string = '') => {
  const headers = isProd ? {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  } : {};

  const response = await fetch(`https://api.hamdb.org/${value}/json/hamsearch`, headers);
  const { hamdb } = await response.json();

  return hamdb;
};

export default getLicense;
