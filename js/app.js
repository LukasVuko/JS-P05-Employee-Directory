const fetchUsers = async (endPoint) => {
  const data = await fetch(endPoint);
  return await data.json();
};

const directory = new Directory();
directory.initialize();

document.getElementById('gallery').addEventListener('click', (e) => {
  console.log(e.target.parentElement);
});
