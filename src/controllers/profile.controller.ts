import { Request, Response } from "express";
import { Profile } from "../models/profile.model";

export const createProfile = async (req: Request, res: Response) => {
  try {
    const profile = await Profile.create(req.body);
    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getProfiles = async (_: Request, res: Response) => {
  const profiles = await Profile.findAll();
  res.json(profiles);
};

export const getProfile = async (req: Request, res: Response) => {
  const profile = await Profile.findByPk(Number(req.params.id));
  res.json(profile);
};

export const updateProfile = async (req: Request, res: Response) => {
  const profile = await Profile.findByPk(Number(req.params.id));

  if (!profile) return res.status(404).json({ message: "Not found" });

  await profile.update(req.body);
  res.json(profile);
};

export const deleteProfile = async (req: Request, res: Response) => {
  const profile = await Profile.findByPk(Number(req.params.id));

  if (!profile) return res.status(404).json({ message: "Not found" });

  await profile.destroy();
  res.json({ message: "Deleted successfully" });
};
