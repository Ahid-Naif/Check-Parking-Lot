const axios = require('axios')

function post(parking_lot_status){
    axios({
        method: 'post',
        // url: 'http://localhost:8080/parking_lot_status',
        url: 'https://rocky-cove-98552.herokuapp.com/parking_lot_status',
        data: parking_lot_status,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
};

module.exports = post;