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
      slack_name: slack_name || "",
      current_day: currentDayOfWeek,
      utc_time: date.toUTCString(),
      track: track || "",
      github_file_url: "",
      github_repo_url: "",
      status: 200,
    };
    return res.json({ details });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}
