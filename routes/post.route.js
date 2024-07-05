import express from "express";

const postRoute = express.Router();

postRoute.get("/test", () => {
    console.log("It works!")
})

export default postRoute;