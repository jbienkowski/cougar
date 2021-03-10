const PouchDB = require("pouchdb");

class DBManager {
  constructor() {
    this.db = new PouchDB("cougar_db");
  }

  addWorkspace(name) {
    const doc = {
      _id: `ws-${name}`,
      name: name,
    };
    this.db.put(doc);
  }

  getWorkspaces() {
    this.db.allDocs(
      {
        include_docs: true,
        descending: true,
      },
      (err, doc) => {
        doc.rows.forEach((e) => {
          console.log(e.doc);
        });
      }
    );
  }
}

module.exports = DBManager;
