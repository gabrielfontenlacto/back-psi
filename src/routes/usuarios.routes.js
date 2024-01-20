import { Router } from "express";
import { getUsers } from "../controller/usuarios.controller.js";
import { createUser } from "../controller/usuarios.controller.js";
import { getUserById } from "../controller/usuarios.controller.js";
import { deleteUserById } from "../controller/usuarios.controller.js";
import { updateUserById } from "../controller/usuarios.controller.js";
import { getUsersByGender } from "../controller/usuarios.controller.js";
import { getUsersByName } from "../controller/usuarios.controller.js";
import { getUsersBySurname } from "../controller/usuarios.controller.js";
import { getUsersByEmail } from "../controller/usuarios.controller.js";
import { getUsersByBirthdate } from "../controller/usuarios.controller.js";
import { getUsersByCoordinates } from "../controller/usuarios.controller.js";


const router = Router();

router.get('/users' , getUsers)
router.get('/user/:id' , getUserById)
router.get('/users/gender/:gender' , getUsersByGender)
router.get('/users/name/:name' , getUsersByName)
router.get('/users/surname/:surname' , getUsersBySurname)
router.get('/users/email/:email' , getUsersByEmail)
router.get('/users/birthdate/:birthdate' , getUsersByBirthdate)
router.get('/users/coordinates/:coordinates' , getUsersByCoordinates)

router.post ('/users' , createUser)

router.delete('/user/:id' , deleteUserById)

router.put('/user/:id' , updateUserById)


export default router;

