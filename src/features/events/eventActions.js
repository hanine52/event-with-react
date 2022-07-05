import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from "./eventConstant";

export function createEvent(event) {
    return {
        type: CREATE_EVENT,
        payload: event
    }
}

export function updateEvent(event) {
    return {
        type: UPDATE_EVENT,
        payload: event
    }
}

export function deleteEvent(eventID) {
    return {
        type: DELETE_EVENT,
        payload: eventID
    }
}