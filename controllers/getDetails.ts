import { Request, Response } from "express";

export function getDetails(req: Request, res: Response) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = new Date();

  const currentDayOfWeek = daysOfWeek[date.getDay()];
  try {
    const track = req.query.track;
    const slack_name = req.query.slack_name;

    const details = {
      slack_name: slack_name,
      current_day: currentDayOfWeek,
      utc_time: date.toUTCString(),
      track: track,
      github_file_url:
        "https://github.com/ansman58/HNGx-task-one/blob/main/controllers/getDetails.ts",
      github_repo_url: "https://github.com/ansman58/HNGx-task-one/tree/main",
      status: 200,
    };
    return res.status(200).json({ details });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}
