const fetchUsers = async (endPoint) => {
  const data = await fetch(endPoint);
  return await data.json();
};

const directory = new Directory();
directory.initialize();
