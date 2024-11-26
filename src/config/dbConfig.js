import { MongoClient } from "mongodb";

export default async function conectarBanco(stringConexao) {
  let mongoClient;

  try {
    mongoClient = new MongoClient(stringConexao);
    console.log("Conectando ao cluster do MongoDB");
    await mongoClient.connect();
    console.log("Conectado ao MongoDB com sucesso");

    return mongoClient;
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
    process.exit();
  }
}
