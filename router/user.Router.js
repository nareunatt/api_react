const express = require('express');
const userRouter = express.Router();
const registerController = require('../controller/post.controller');
const getUserController = require('../controller/get.controller');
const updateUserController = require('../controller/update.controller');
const deleteUserController = require('../controller/delete.controller');

//curd
userRouter.get('/user', getxUserController.getUser);
userRouter.post('/create',registerController.createUser);
userRouter.delete('/delete/:id',deleteUserController.deleteUser);
userRouter.put('/update/:id',updateUserController.updateUser);

module.exports = userRouter;