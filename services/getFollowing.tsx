import axios from 'axios';

function getFollowing() {
  return axios.get('https://avl-frontend-exam.herokuapp.com/api/users/friends?page=1&pageSize=10')
    .then((response) => response.data.data);
}

export default getFollowing;
