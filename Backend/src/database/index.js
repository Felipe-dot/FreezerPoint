import Sequelize from 'sequelize';
import Usuario from '../app/models/usuario';
import Livro from '../app/models/livro';
import databaseConfig from '../config/database';
import MyList from '../app/models/mylist';
import MyCartList from '../app/models/cartlist'

const models = [Usuario, Livro , MyList, MyCartList];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
    models.map((model) => model.associate && model.associate(this.connection.models));
  }
}
export default new Database();
