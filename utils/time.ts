import { DateTime } from "luxon";

export function getTimeInUtc() {
  const currentUTCTime = DateTime.utc();

  // Format the current UTC time as a string in the desired format
  const formattedTime = currentUTCTime.toFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");

  return formattedTime;
}
