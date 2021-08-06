// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function helloAPI(req, res) {
  const URL = "https://jsonplaceholder.typicode.com/todos";
  res.status(200).json(URL)
  const allPersons = res.data;
  console.log(allPersons);
}
