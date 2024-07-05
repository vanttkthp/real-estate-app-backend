import express from "express";
import bodyParser from "body-parser";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());
// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Alternatively, if you are using Express 4.16.0 or later, you can use:
// app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/post", postRoute);
app.use("/api/auth", authRoute);

app.listen(8080, () => {
  console.log("Server is running on!");
});
