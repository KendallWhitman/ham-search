const getLicense = async (value: string = '') => {
  if (value !== '') {
    const response = await fetch(`http://localhost:3001/hamdb/${value}`);
    return await response.json();
  }

  return { status: 'EMPTY' };
};

export default getLicense;
