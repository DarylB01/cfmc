const contentful = require('contentful');
const client = contentful.createClient({
	// This is the space ID. A space is like a project folder in Contentful terms
	space: process.env.REACT_APP_SPACE,
	// This is the access token for this space. Normally you get both ID and the token in the Contentful web app
	accessToken: process.env.REACT_APP_TOKEN
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.

let fetchData = {
	fetchAll: async (contentId) => {
		let data = await client.getEntries({
			content_type: contentId
		});
		try {
			return data.items;
		} catch (err) {
			console.log(err);
		}
	},
	fetchOne: async (id) => {
		let data = await client.getEntry(id);
		try {
			return data.fields;
		} catch (err) {
			console.log(err);
		}
	},
	fetchAsset: async (id) => {
		let data = await client.getAsset(id);
		try {
			return data;
		} catch (err) {
			console.log(err);
		}
	}
};

export default fetchData;
