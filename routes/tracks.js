const express = require("express");
const router = express.Router();
const {authMiddleware} = require("../middleware/session");
const {checkRol} = require("../middleware/rol");
const {validatorCreateItem, validatorGetItem} = require("../validators/tracks")
const customHeader = require("../middleware/customHeader")
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks") 

/**
 * Lista los items
 */
router.get("/", authMiddleware, getItems);
/**
 * Obtener detalle de item
 */
 router.get("/:id",  authMiddleware, validatorGetItem, getItem);
/**
 * crear un registro
 */
router.post("/", authMiddleware, checkRol(["user", "admin"]), validatorCreateItem, createItem);
 /**
 * Actualizar un registro
 */
  router.put("/:id", authMiddleware, validatorGetItem, validatorCreateItem, updateItem);
  /**
 * Eliminar un registro
 */
 router.delete("/:id", authMiddleware, validatorGetItem, deleteItem);

module.exports = router;