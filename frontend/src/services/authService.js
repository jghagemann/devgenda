import api from "./api";

const createUser = (firstName, lastName, email, password) => {
  api.post("/signup", {
    firstName,
    lastName,  
    email,
    password,
  });
};

export default createUser;
