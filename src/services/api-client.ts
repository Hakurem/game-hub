import axios from "axios";

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: 'f3b8b86e5f0e47a3b968c013a58e56ed'
	}
})