import type { Location } from "./Location";
import type { Route } from "./Route";

export type Stop = {
  description: string;

  timestamp: number;

  location: Location;

  nextRoute?: Route;
};
