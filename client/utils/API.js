import axios from "axios";

const repoData = (query) => {
  axios.get("https://api.github.com/users/jaxson-lybbert/repos?per_page=6");
};

export default repoData;
