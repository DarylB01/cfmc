const contentful = require('contentful');
const client = contentful.createClient({
	// This is the space ID. A space is like a project folder in Contentful terms
	space: '7nv5lmzwxo7h',
	// This is the access token for this space. Normally you get both ID and the token in the Contentful web app
	accessToken: 'qUBr3Z2kg2VXZRoAOmvM9axaXZfC62wBnTRPE1jq76U'
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.

let fetchData = {
	fetchAll: async () => {
		let data = await client.getEntries();
		try {
			return data.items;
		} catch (err) {
			return data;
		}
	},
	fetchOne: async (id) => {
		let data = await client.getEntry(id);
		try {
			console.log(data);
			return data;
		} catch (err) {
			console.log(err);
		}
	}
};

export default fetchData;
