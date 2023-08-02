const app = require('./app');
require('dotenv').config(); //Require da biblioteca de variaveis de ambiente

const PORT = process.env.PORT || 3333; //Pegar a variavel de ambiente PORT lá do dotenv, porém caso ela não esteja disponivel, usa a 3333

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));