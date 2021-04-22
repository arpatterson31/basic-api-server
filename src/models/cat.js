'use strict';

class CatModel {
  constructor() {
    this.id = 0;
    this.db = [];
  }

  create(obj) {
    let record = {
      id: ++this.id,
      record: obj
    }

    this.db.push(record);
    return record;
  }

  read(id) {
    if (id) {
      return this.db.find(record => record.id === id);
    } else {
      return this.db;
    }
  }

  update(id, obj) {
    if (id) {
      let index = this.db.indexOf(this.db.find(record => record.id === id));
      let updatedObj = {
        id: id,
        record: obj
      }
      this.db[index] = updatedObj;
      return updatedObj;
    }
  }

  delete(id) {
    if (id) {
      let index = this.db.indexOf(this.db.find(record => record.id === id));
      this.db.splice(index, 1);
      return null;
    }
  }
}

module.exports = CatModel;