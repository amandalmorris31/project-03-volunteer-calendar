import axios from 'axios';

export default {
//easier to write a function for this--prepare the request to be sent to controller
    addEvent: function(userData){
        console.log("boop", userData)
        return axios.put("/api/events/:id", userData)
    },
    removeEvent: function(userData){
        return axios.delete("/api/events/:id", userData)
    }
}
