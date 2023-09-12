import sendRequest from "./send-request";
const BASE_URL = '/api/posts';

export  function deletePost(id) {
  return sendRequest(`${BASE_URL}/${id}`,'DELETE');
}

export  function createPost(postdata) {
  return sendRequest(`${BASE_URL}/create`,'POST', postdata);
}

export function index(){
  return sendRequest(`${BASE_URL}`)
}

export  function update(id, editedpost) {
  return sendRequest(`${BASE_URL}/${id}`,'PUT',editedpost);
}