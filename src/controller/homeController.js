import db from "../models/index";
import CRUDservice from "../services/CRUDservice";
let getHomePage = async (req, res) => {
	try {
		let data = await db.User.findAll();
		console.log(data);
		return res.render("homepage.ejs", {
			data: JSON.stringify(data),
		});
	} catch (e) {
		console.log(e);
	}
};

let getAboutPage = (req, res) => {
	return res.render("test/about.ejs");
};
let getCRUD = (req, res) => {
	return res.render("crud.ejs");
};
let postCRUD = async (req, res) => {
	let message = await CRUDservice.createNewUser(req.body);
	console.log(message);
	return res.send("post crud from server");
};

let displayGetCRUD = async (req, res) => {
	let data = await CRUDservice.getAllUser();
	console.log(data);
	return res.render("displayCRUD.ejs", {
		dataTable: data,
	});
};

let getEditCRUD = async (req, res) => {
	let userId = req.query.id;
	if (userId) {
		let userData = CRUDservice.getUserInforById(userId);
		return res.send("Found a user ");
	} else {
		return res.send("User not found");
	}
};

module.exports = {
	getHomePage: getHomePage,
	getAboutPage: getAboutPage,
	getCRUD: getCRUD,
	postCRUD: postCRUD,
	displayGetCRUD: displayGetCRUD,
	getEditCRUD: getEditCRUD,
};
