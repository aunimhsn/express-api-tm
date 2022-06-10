const express = require('express')
const colors = require('colors');
const dotenv = require('dotenv').config()
const swaggerUI = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")
const port = process.env.PORT || 5000
const { errorHandler } = require('./middlewares/error')
const connectDB = require('./config/db')

connectDB();
const app = express()


const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Goals API",
			version: "1.0.0",
			description: "Define your goals API",
		},
		servers: [
			{
				url: "http://localhost:5000",
			},
		],
	},
	apis: ["./routes/user.js"],
};


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const swaggerDoc = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));
app.use('/api/goals', require('./routes/goal'))
app.use('/api/users', require('./routes/user'))
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});