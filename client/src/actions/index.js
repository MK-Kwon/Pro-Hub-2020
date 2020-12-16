import axios from 'axios'
import { FETCH_USER, UPDATE_USER } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')
  dispatch({ type: FETCH_USER, payload: res.data })
}

export const handleToken = (token) => async dispatch => {
  const res = await axios.post('api/stripe', token)
  dispatch({ type: FETCH_USER, payload: res.data })
}

// go here
export const updateUser = (id, data) => async dispatch => {
  // console.log("actions index.js")
  // console.log(id)
  // console.log(data)
  const res = await axios.put("/api/user/" + id, data);
  dispatch({ type: UPDATE_USER, payload: res.data })

}