function status(request, response) {
  response.status(200).json({ chave: "Teste bem-sucedido" });
}

export default status;
