const getLicense = async (value: string = '') => {
  if (value !== '') {
    try {
      const response = await fetch(`https://callook.info/${value}/json`);
      return await response.json();
    } catch (error) {
      console.error(error);
      return { status: 'OTHER' };
    }
  }

  return { status: 'EMPTY' };
};

export default getLicense;
