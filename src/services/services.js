const apiUri = process.env.API_URI;

export const getAllStack = () => {
  return fetch(`${apiUri}/stack`)
    .then((res) => res.json())
    .then((data) => data);
};

export const getStack = (stackId) => {
  return fetch(`${apiUri}/stack/${stackId}`)
    .then((res) => res.json())
    .then((data) => data);
};
