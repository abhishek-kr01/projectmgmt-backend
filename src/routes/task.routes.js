import { Router } from "express";
import {
    getTasks,
    createTask,
    getTaskById,
    updateTask,
    deleteTask,
    createSubTask,
    updateSubTask,
    deleteSubTask,
} from "../controllers/task.controllers.js";

import { verifyJWT, validateProjectPermission } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validator.middleware.js";

import {
    createTaskValidator,
    updateTaskValidator,
    createSubTaskValidator,
    updateSubTaskValidator,
} from "../validators/index.js";

import { UserRolesEnum, AvailableUserRole } from "../utils/constants.js";

const router = Router();

// 🔐 All routes protected
router.use(verifyJWT);


// ================= TASK ROUTES =================

// Get all tasks (all members allowed)
router.get(
    "/:projectId",
    validateProjectPermission(AvailableUserRole),
    getTasks
);

// Create task (admin + project_admin)
router.post(
    "/:projectId",
    validateProjectPermission([
        UserRolesEnum.ADMIN,
        UserRolesEnum.PROJECT_ADMIN,
    ]),
    createTaskValidator(),
    validate,
    createTask
);

// Get single task
router.get(
    "/:projectId/t/:taskId",
    validateProjectPermission(AvailableUserRole),
    getTaskById
);

// Update task (admin + project_admin)
router.put(
    "/:projectId/t/:taskId",
    validateProjectPermission([
        UserRolesEnum.ADMIN,
        UserRolesEnum.PROJECT_ADMIN,
    ]),
    updateTaskValidator(),
    validate,
    updateTask
);

// Delete task (admin only)
router.delete(
    "/:projectId/t/:taskId",
    validateProjectPermission([UserRolesEnum.ADMIN]),
    deleteTask
);


// ================= SUBTASK ROUTES =================

// Create subtask (all members allowed)
router.post(
    "/:projectId/t/:taskId/subtasks",
    validateProjectPermission(AvailableUserRole),
    createSubTaskValidator(),
    validate,
    createSubTask
);

// Update subtask (all members allowed)
router.put(
    "/:projectId/st/:subTaskId",
    validateProjectPermission(AvailableUserRole),
    updateSubTaskValidator(),
    validate,
    updateSubTask
);

// Delete subtask (admin + project_admin)
router.delete(
    "/:projectId/st/:subTaskId",
    validateProjectPermission([
        UserRolesEnum.ADMIN,
        UserRolesEnum.PROJECT_ADMIN,
    ]),
    deleteSubTask
);

export default router;