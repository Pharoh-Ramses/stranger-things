export const getPosts = async () => {
  const url =
    "https://strangers-things.herokuapp.com/api/2112-ftb-et-web-pt/posts";
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

export const registerUser = async (username, password) => {
  const url =
    "https://strangers-things.herokuapp.com/api/2112-ftb-et-web-pt/users/register";
  
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const json = await response.json();
    
    const token = json.data.token;
    localStorage.setItem('token', token);
    //localStorage.getItem('token');

    
      
    console.log(json);
    return json;
  } catch (err) {
    console.error("Could not register user", err);
  }
};
