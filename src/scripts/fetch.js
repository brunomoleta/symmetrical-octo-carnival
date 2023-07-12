export const getUserInfo = async (inputValue) => {
    const baseURL = `https://api.github.com/users/`;
    const userInfo = await fetch(baseURL + inputValue, {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Sem resultados");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  
    return userInfo;
  };
  