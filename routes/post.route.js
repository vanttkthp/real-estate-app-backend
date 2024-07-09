import {
  addPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/post.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
import express from "express";

const postRoute = express.Router();

postRoute.get("/", getPosts);
postRoute.get("/:id", getPost);
postRoute.post("/", verifyToken, addPost);
postRoute.put("/:id", verifyToken, updatePost);
postRoute.delete("/:id", verifyToken, deletePost);

export default postRoute;
