const getLicense = async (value: string) => {
  if (value !== '') {
    const response = await fetch(`https://backend.hamsearch.io/hamdb/${value}`);
    return await response.json();
  }

  return { messages: { status: 'EMPTY' } };
};

export default getLicense;
