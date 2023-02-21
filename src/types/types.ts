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
  id: string;
  username: string;
  token: string;
}

export interface UserState extends User {
  isLogged: boolean;
}
