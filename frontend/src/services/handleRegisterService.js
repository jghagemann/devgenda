import api from "../services/api";

const handleRegister = (firstName, lastName, email,) => {
  e.preventDefault();
  return new Promise ((resolve, reject) => {
    const data = { firstName, lastName, email };
    if (data) {
      resolve(api.post("users", data));
    }
    reject("Erro no cadastro, tente novamente!");
  });
};

handleRegister
  .then(result => {
    alert("Usuário Cadastrado com sucesso!")
  })
  .catch(err => {
    alert("Erro 401 - Tente novamente!", err);
  })

// const handleRegister = async (e) => {
//   e.preventDefault();
//   try {
//     const response = await api.post('users', data);
//     alert("Usuário cadastrado com sucesso!");
//     history.push('/');
//   } catch (err) {
//     alert("Erro no cadastro, tente novamente!");
//     console.log(err);
//   }
// }

export default handleRegister;