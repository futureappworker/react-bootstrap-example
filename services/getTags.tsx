import axios from 'axios';

function getTags() {
  return axios.get('https://avl-frontend-exam.herokuapp.com/api/tags');
}

export default getTags;
