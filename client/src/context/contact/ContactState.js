import React, {useReducer} from "react";
import {v4 as uuid} from 'uuid';
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from "../types";

const ContactState = props =>{
    const initialState ={
        contacts: [
            {
                id:1 ,
                name:'Dupy Sren',
                email: 'jaka@gmail.com',  
                phone: '234 234 234',
                type: 'personal'
            },
            {
                id:2 ,
                name: 'Młody Hed',
                email: 'lubie@placki.pl',  
                phone: '213721377',
                type: 'personal'
            },
            {
                id:3 ,
                name: 'Stary Dzied',
                email: 'asd@asd.ug',  
                phone: '1111111111',
                type: 'professional'
            }
        ],
        current: null
    }
    const [state, dispatch] = useReducer(contactReducer, initialState)

    //add contact
    const addContact = contact =>{
        contact.id = uuid();
        dispatch({type:ADD_CONTACT, payload: contact})
    }

    //delete contat
    const deleteContact = id =>{
        dispatch({type:DELETE_CONTACT, payload: id})
    }

    //set current contact
    const setCurrent = contact =>{
        dispatch({type:SET_CURRENT, payload: contact})
    }

    //clear curent contact
    const clearCurrent = () =>{
        dispatch({type:CLEAR_CURRENT})
    }

    //update contact
    const updateContact = contact =>{
        dispatch({type:UPDATE_CONTACT, payload: contact})
    }

    //filter contactts

    //clear filter

    return(
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                addContact,
                deleteContact,
                updateContact,
                setCurrent,
                clearCurrent
            }}
        >
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState