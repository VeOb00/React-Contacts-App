const Address = {
	country: String,
	strAddress: String,
	strAddressLn2: String,
	postcode: String,
	city: String,
};

const ContactAPI = {
	createdAt: Date,
	firstName: String,
	lastName: String,
	avatar: String,
	companyName: String,
	address: Address,
};

export default ContactAPI;
