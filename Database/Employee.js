const axios = require('axios'); 


exports.viewjobroles = async () => {
    const results = await axios.get('http://localhost:8080/api/viewjobroles')

    return results
}