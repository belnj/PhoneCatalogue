//CRUD Phones API
import axios from 'axios';

const API = process.env.REACT_APP_API;

//query to get all phones 
export const getPhones = async () => {   
    try {
        const response = await axios.get(`${API}/phones`);
        return response;
    } catch (error) {
        return "error";
    }  
}

//query to a phones by id
export const getPhoneById = async (id) => { 
    try {
        const response = await axios.get(`${API}/phones/${id}`);
        return response;
    } catch (error) {
        return "error";
    }    
}

//query to create a new phone
export const postPhone = async (phone) => { 
    try {
        const response = await axios.post(`${API}/phones`,phone);
        return response;
    } catch (error) {
        return "error";
    }   
}

//query to update a phone
export const updatePhone = async (id, phone) => { 
    try {
        const response = await axios.put(`${API}/phones/${id}`,phone);
        return response;
    } catch (error) {
        return "error";
    }  
}

//query to create a new phone
export const deletePhone = async (id) => { 
    try {
        const response = await axios.delete(`${API}/phones/${id}`);
        return response;
    } catch (error) {
        return "error";
    }  
}