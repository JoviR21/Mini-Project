import express from "express";
import movieRouter from "./routes/movie-route";
import userRouter from "./routes/user-route";
import { notFoundMiddleware } from "./middlewares/not-found-middleware";
import { error } from "./middlewares/catch-handle-middleware";

const app = express();

app.use(express.json());

const PORT = 8000;

app.use("/api/v1/movies", movieRouter);
app.use("/api/v1/users", userRouter);
app.use(notFoundMiddleware);
app.use(error);

app.listen(PORT, () => {
  console.log("Server started and listening on port ", PORT);
});
