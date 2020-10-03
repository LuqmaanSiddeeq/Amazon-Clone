import axios from "axios";

const instance = axios.create({
	baseURL:
		"https://us-central1-fullstack-challenge-9e814.cloudfunctions.net/api", //The API (Cloud function URL)
});

export default instance;

//

// http://localhost:5001/fullstack-challenge-9e814/us-central1/api
