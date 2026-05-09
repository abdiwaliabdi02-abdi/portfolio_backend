import { Router } from "express";

import {
  createProfile,
  getProfiles,
  getProfile,
  updateProfile,
  deleteProfile,
} from "../controllers/profile.controller";

const router = Router();

/**
 * @swagger
 * /api/profiles:
 *   post:
 *     summary: Create a new profile
 *     description: Add a new user profile to the database
 *     tags: [Profiles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Profile'
 *     responses:
 *       201:
 *         description: Profile created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/", createProfile);

/**
 * @swagger
 * /api/profiles:
 *   get:
 *     summary: Get all profiles
 *     description: Retrieve a list of all profiles
 *     tags: [Profiles]
 *     responses:
 *       200:
 *         description: List of profiles
 */
router.get("/", getProfiles);

/**
 * @swagger
 * /api/profiles/me:
 *   get:
 *     summary: Get current portfolio profile
 *     description: Retrieve the main portfolio profile
 *     tags: [Profiles]
 *     responses:
 *       200:
 *         description: Profile found
 *       404:
 *         description: Profile not found
 */
router.get("/me", getProfile);

/**
 * @swagger
 * /api/profiles/{id}:
 *   get:
 *     summary: Get a profile by ID
 *     description: Retrieve a single profile using its ID
 *     tags: [Profiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Profile ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Profile found
 *       404:
 *         description: Profile not found
 */
router.get("/:id", getProfile);

/**
 * @swagger
 * /api/profiles/{id}:
 *   put:
 *     summary: Update a profile
 *     description: Update an existing profile by ID
 *     tags: [Profiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Profile ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Profile'
 *     responses:
 *       200:
 *         description: Profile updated
 *       404:
 *         description: Profile not found
 */
router.put("/:id", updateProfile);

/**
 * @swagger
 * /api/profiles/{id}:
 *   delete:
 *     summary: Delete a profile
 *     description: Remove a profile from the database
 *     tags: [Profiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Profile ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Profile deleted
 *       404:
 *         description: Profile not found
 */
router.delete("/:id", deleteProfile);

export default router;
