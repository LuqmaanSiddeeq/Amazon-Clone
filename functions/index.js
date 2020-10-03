const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
	"sk_test_51HSOSlANjYvAz1ziAex0idMk1nj6eLNZ86UIp8mlj1qEn0PJVAbdVpK02IdSM4br48hU5yNjUFAV1slhiFLyML0000Oct9PL3O"
);

// - API

// - App Config
const app = express();

// - MiddleWare
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
	const total = request.query.total;
	console.log("Payment Request Received BOOM!!! for this amount >>>", total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total, //subunits of currency
		currency: "usd",
	});

	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

// - Listen command
exports.api = functions.https.onRequest(app);

// example Endpoint
// http://localhost:5001/fullstack-challenge-9e814/us-central1/api
