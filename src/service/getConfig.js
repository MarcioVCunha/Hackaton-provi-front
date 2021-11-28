const getConfig = () => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
};

export default getConfig;