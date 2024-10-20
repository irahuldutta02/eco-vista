import { getLocations } from "./location-util";

export async function GET(request) {
  const locationData = getLocations();

  return Response.json(locationData);
}