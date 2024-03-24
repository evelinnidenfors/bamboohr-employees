import { formatData } from "./formatData.js";

export const getEmployees = () => {
  const subDomain = process.env.SUBDOMAIN;
  const apiUrl = `https://api.bamboohr.com/api/gateway.php/${subDomain}/v1/employees/directory`;
  const apiKey = process.env.API_KEY;
  const request = new Request(apiUrl, {
    headers: {
      Authorization: `Basic ${btoa(`${apiKey}:''`)}`,
      accept: "application/json",
    },
  });
  return fetch(request)
    .then((response) => {
      return response.json().then((a) => formatData(a));
    })
    .catch(console.log);
};
