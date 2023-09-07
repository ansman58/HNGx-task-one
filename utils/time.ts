export function getTimeInUtc() {
  const currentUTCTime = Date.now();

  // Get the target time which is 2 seconds ahead and 2 seconds behind the current time
  const targetTime = currentUTCTime - 2000; // 2 seconds behind

  // Get the actual time now
  const actualTime = Date.now();

  // Check if the actual time falls within the +/-2 seconds range
  if (actualTime >= targetTime && actualTime <= currentUTCTime) {
    // Convert the actual time to a readable string
    const formattedTime = new Date(actualTime).toISOString();

    return formattedTime;
  } else {
    return "Current time is outside the +/-2 seconds range.";
  }
}
