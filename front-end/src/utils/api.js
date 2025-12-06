export const getAllTours = async () => {
  const res = await fetch(`http://localhost:5000/tours`);
  const data = await res.json();
  return data;
};
