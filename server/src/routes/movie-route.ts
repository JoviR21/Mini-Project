import express from "express";
import {
  createMovie,
  getAllMovie,
  searchMovie,
  searchSingleMovie,
} from "../controller/movie-controller";

const router = express.Router();

router.route("/").get(getAllMovie).post(createMovie);
router.route("/search").get(searchMovie);
router.route("/search/:id").get(searchSingleMovie);

export default router;
