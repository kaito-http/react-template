import {api} from '../../server/api';

export default api({
	GET: async () => ({
		name: 'John Doe',
	}),
});
