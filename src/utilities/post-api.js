import sendRequest from "./send-request";
const BASE_URL = '/api/posts';

export  function deletedPost(id) {
  return sendRequest(`${BASE_URL}/${id}`,'DELETE');
}

export  function createPost(postdata) {
  return sendRequest(`${BASE_URL}/create`,'POST', postdata);
}
