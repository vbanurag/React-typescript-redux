import { actionTypeEnum } from "./../enums/actionTypeEnum";
import { item } from '../components/indexContainer';

const API = "http://localhost:3000/user";

export function fetchData(url: string) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return dispatch => 
    fetch(url, {
      method: 'GET',
      headers: headers,
    })
    .then((response)=>{
      return response.json();
    })
    .then(res=>res)
    .catch((err)=>console.error('Error in fetch.',err));
}

export function fetchAllData() {
  return dispatch => dispatch(fetchData(API))
  .then(
      response => {
        return dispatch({ type: actionTypeEnum[actionTypeEnum.fetchAllData], payload: response })
      },
      err => dispatch({ type: "error", err })
    );
}

export function handleDeleteItem(itemId: string) {

  fetch(API+itemId, {
      method: 'DELETE',
    })
    .then((response)=>{
      return response.json();
    })
    .then(res=>res)
    .catch((err)=>console.error('Error in delete.',err));

  return {
      type: actionTypeEnum[actionTypeEnum.deleteItem],
      payload: itemId
  };
}

export function handleAddItem(item: item) {

  fetch(API, {
      method: 'POST',
      body: JSON.stringify(item),
    })
    .then((response)=>{
      return response.json();
    })
    .then(res=>res)
    .catch((err)=>console.error('Error in adding.',err));

  return {
      type: actionTypeEnum[actionTypeEnum.addItem],
      payload: item
  };
}