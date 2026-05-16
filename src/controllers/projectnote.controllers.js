import { ProjectNote } from "../models/projectnote.models.js";
import { Project } from "../models/project.models.js";
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/async-handler.js";


// 🔹 Get all notes of a project
const getNotes = asyncHandler(async (req, res) => {
    const { projectId } = req.params;

    const notes = await ProjectNote.find({ project: projectId })
        .populate("createdBy", "username fullName avatar");

    return res.status(200).json(
        new ApiResponse(200, notes, "Notes fetched successfully")
    );
});


// 🔹 Create note
const createNote = asyncHandler(async (req, res) => {
    const { projectId } = req.params;
    const { content } = req.body;

    const project = await Project.findById(projectId);

    if (!project) {
        throw new ApiError(404, "Project not found!");
    }

    const note = await ProjectNote.create({
        project: projectId,
        content,
        createdBy: req.user._id,
    });

    return res.status(201).json(
        new ApiResponse(201, note, "Note created successfully")
    );
});


// 🔹 Get single note
const getNoteById = asyncHandler(async (req, res) => {
    const { noteId } = req.params;

    const note = await ProjectNote.findById(noteId)
        .populate("createdBy", "username fullName avatar");

    if (!note) {
        throw new ApiError(404, "Note not found!");
    }

    return res.status(200).json(
        new ApiResponse(200, note, "Note fetched successfully")
    );
});


// 🔹 Update note
const updateNote = asyncHandler(async (req, res) => {
    const { noteId } = req.params;
    const { content } = req.body;

    const note = await ProjectNote.findById(noteId);

    if (!note) {
        throw new ApiError(404, "Note not found!");
    }

    note.content = content || note.content;

    await note.save();

    return res.status(200).json(
        new ApiResponse(200, note, "Note updated successfully")
    );
});


// 🔹 Delete note
const deleteNote = asyncHandler(async (req, res) => {
    const { noteId } = req.params;

    const note = await ProjectNote.findByIdAndDelete(noteId);

    if (!note) {
        throw new ApiError(404, "Note not found!");
    }

    return res.status(200).json(
        new ApiResponse(200, note, "Note deleted successfully")
    );
});


export {
    getNotes,
    createNote,
    getNoteById,
    updateNote,
    deleteNote,
};