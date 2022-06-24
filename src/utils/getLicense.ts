const getLicense = async (value: string) => {
  const isProd = process.env.NODE_ENV === 'production'
  const fetchUrl = isProd
    ? 'https://backend.hamsearch.io/'
    : 'http://localhost:8005/';

  if (value !== '') {
    const response = await fetch(`${fetchUrl}${value}`);
    return await response.json();
  }

  return { messages: { status: 'EMPTY' } };
};

export default getLicense;
