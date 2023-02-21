import { JwtPayload } from "jwt-decode";

export interface RobotStructure {
  id: string;
  name: string;
  url: string;
  stats: {
    speed: number;
    endurance: number;
    creationDate: string;
  };
}

export type RobotsStructure = RobotStructure[];

export interface User {
  username: string;
  token: string;
}

export interface UserState extends User {
  isLogged: boolean;
}

export interface UserCredentials {
  username: string;
  password: string;
}

export interface UserApiResponseStructure {
  token: string;
}

export interface CustomTokenPayload extends JwtPayload {
  username: string;
}
