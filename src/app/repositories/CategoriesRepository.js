const db = require('../../database/index');

class CategoryRepository {
  async findAll(orderBy = '') {
    const order = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    // placeholders $1, $2, etc. só funcionam para VALUES
    const rows = await db.query(`SELECT * FROM categories ORDER BY name ${order}`);

    return rows;
  }

  async findById(id) {
    const [category] = await db.query('SELECT * FROM categories WHERE id = $1', [id]);

    return category;
  }

  async delete(id) {
    const deleteOp = await db.query('DELETE FROM categories WHERE id = $1', [id]);

    return deleteOp;
  }

  async create({ name }) {
    const [row] = await db.query(`
    INSERT INTO categories(name)
    VALUES($1)
    RETURNING *
    `, [name]);

    return row;
  }

  async update(id, { name }) {
    const categoryUpdated = await db.query(`
    UPDATE categories
    SET name = $1
    WHERE id = $2
    RETURNING *
    `, [name, id]);

    return categoryUpdated;
  }
}

module.exports = new CategoryRepository();
