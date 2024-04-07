export const Api = "https://api.escuelajs.co/api/v1/products/4";

export const getData = () => {
  let fetchResoult
  fetch(Api)
    .then((res) => res.json())
    .then((data) => fetchResoult);
};