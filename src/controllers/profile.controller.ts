import { Request, Response } from "express";
import { Profile } from "../models/profile.model";

/* Helper to get a safe error message */
const getErrorMessage = (err: unknown): string => {
  if (err instanceof Error) return err.message;
  return "Unknown error";
};

/* ---------------- CREATE ---------------- */
export const createProfile = async (req: Request, res: Response) => {
  try {
    const profile = await Profile.create(req.body);

    return res.status(201).json(profile);
  } catch (error: unknown) {
    console.error("Create Error 👉", error);

    return res.status(500).json({
      message: getErrorMessage(error),
    });
  }
};

/* ---------------- GET ALL ---------------- */
export const getProfiles = async (_: Request, res: Response) => {
  try {
    const profiles = await Profile.findAll();

    return res.json(profiles);
  } catch (error: unknown) {
    console.error("Get Profiles Error 👉", error);

    return res.status(500).json({
      message: getErrorMessage(error),
    });
  }
};

/* ---------------- GET ONE ---------------- */
export const getProfile = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    /* If NO ID → return first profile */
    if (!id) {
      const profile = await Profile.findOne();

      if (!profile) {
        return res.status(404).json({
          message: "No profiles found",
        });
      }

      return res.json(profile);
    }

    /* If ID exists → return specific profile */
    const profile = await Profile.findByPk(Number(id));

    if (!profile) {
      return res.status(404).json({
        message: "Profile not found",
      });
    }

    return res.json(profile);
  } catch (error: unknown) {
    console.error("Get Profile Error 👉", error);

    return res.status(500).json({
      message: getErrorMessage(error),
    });
  }
};

/* ---------------- UPDATE ---------------- */
export const updateProfile = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        message: "Invalid ID",
      });
    }

    const profile = await Profile.findByPk(id);

    if (!profile) {
      return res.status(404).json({
        message: "Profile not found",
      });
    }

    await profile.update(req.body);

    return res.json(profile);
  } catch (error: unknown) {
    console.error("Update Error 👉", error);

    return res.status(500).json({
      message: getErrorMessage(error),
    });
  }
};

/* ---------------- DELETE ---------------- */
export const deleteProfile = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        message: "Invalid ID",
      });
    }

    const profile = await Profile.findByPk(id);

    if (!profile) {
      return res.status(404).json({
        message: "Profile not found",
      });
    }

    await profile.destroy();

    return res.json({
      message: "Deleted successfully",
    });
  } catch (error: unknown) {
    console.error("Delete Error 👉", error);

    return res.status(500).json({
      message: getErrorMessage(error),
    });
  }
};
