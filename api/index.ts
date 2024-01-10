const headerDefaults = {
  'Content-Type': 'application/json',
};

const get = async (url: string, headerOption: any) => {
  const headers = { ...headerDefaults, ...headerOption };
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    headers,
  });
  return response.json();
};

const post = async (url: string, data: any, headerOption: any) => {
  const headers = { ...headerDefaults, ...headerOption };
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers,
    body: JSON.stringify(data),
  });
  return response.json();
};

const put = async (url: string, data: any, headerOption: any) => {
  const headers = { ...headerDefaults, ...headerOption };
  const response = await fetch(url, {
    method: 'GET',
    headers,
    body: JSON.stringify(data),
  });
  return response.json();
};

export default {
  get,
  post,
  put,
};
