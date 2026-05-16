import { Router } from "express";
import {
    getNotes,
    createNote,
    getNoteById,
    updateNote,
    deleteNote,
} from "../controllers/projectnote.controllers.js";

import { verifyJWT, validateProjectPermission } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validator.middleware.js";

import {
    createNoteValidator,
    updateNoteValidator,
} from "../validators/index.js";

import { UserRolesEnum, AvailableUserRole } from "../utils/constants.js";

const router = Router();

router.use(verifyJWT);


// 🔹 Get all notes (all members)
router.get(
    "/:projectId",
    validateProjectPermission(AvailableUserRole),
    getNotes
);


// 🔹 Create note (admin + project_admin)
router.post(
    "/:projectId",
    validateProjectPermission([
        UserRolesEnum.ADMIN,
        UserRolesEnum.PROJECT_ADMIN,
    ]),
    createNoteValidator(),
    validate,
    createNote
);


// 🔹 Get single note
router.get(
    "/:projectId/n/:noteId",
    validateProjectPermission(AvailableUserRole),
    getNoteById
);


// 🔹 Update note (admin + project_admin)
router.put(
    "/:projectId/n/:noteId",
    validateProjectPermission([
        UserRolesEnum.ADMIN,
        UserRolesEnum.PROJECT_ADMIN,
    ]),
    updateNoteValidator(),
    validate,
    updateNote
);


// 🔹 Delete note (admin only)
router.delete(
    "/:projectId/n/:noteId",
    validateProjectPermission([UserRolesEnum.ADMIN]),
    deleteNote
);

export default router;