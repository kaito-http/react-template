import {createAPI} from 'nextkit';

export const api = createAPI({
	onError: async (req, res, error) => {
		return {
			status: 500,
			message: error.message,
		};
	},

	getContext: async (req, res) => {
		return {};
	},
});
