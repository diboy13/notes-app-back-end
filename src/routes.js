const {
  addNoteHandler,
  getAllNotes,
  getNoteByIdHandler,
  editNoteByHandler,
  deleteNoteByIdHandler,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
  },
  {
    method: "GET",
    path: "/notes",
    handler: getAllNotes,
  },
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getNoteByIdHandler,
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: editNoteByHandler,
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
