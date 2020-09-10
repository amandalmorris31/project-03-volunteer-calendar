import axios from "axios";

export default {
  addEvent: function (id) {
    return axios.put("/api/events/" + id);
  },
};
