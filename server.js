import express from "express";
import routes from "./src/routes/postsRoutes.js";

function buscarPostPorId(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

const app = express();
app.use(express.static("uploads"));
routes(app);

app.listen(3010, () => {
  console.log("Servidor escutando...");
});
