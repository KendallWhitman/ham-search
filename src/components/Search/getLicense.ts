const getLicense = async (value: string = '') => {
  if (value !== '') {
    const response = await fetch(`http://localhost:8005/hamdb/${value}`);
    return await response.json();
  }

  return { status: 'EMPTY' };
};

export default getLicense;
