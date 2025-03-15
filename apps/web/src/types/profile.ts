export type Profile = {
  id: string;
  name: string;
  bio?: string;
  skills: string[];
  causes: string[];
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};
