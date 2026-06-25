import axios from "axios";
import {NextResponse,NextRequest} from "next/server";

export async function leetcodeActivity(username: string) {
  const response = await axios.post(
    "https://leetcode.com/graphql",
    {
      query: `
        query userProfileCalendar($username: String!) {
          matchedUser(username: $username) {
            submissionCalendar
          }
        }
      `,
      variables: {
        username,
      },
    }
  );

const calendarString=response.data.data.matchedUser.submissionCalendar;
const calendar=JSON.parse(calendarString);
  const activities = Object.entries(calendar).map(
    ([timestamp, count]) => ({
      date: new Date(Number(timestamp) * 1000)
        .toISOString()
        .split("T")[0],
      value: count,
      platform: "leetcode",
    })
  );

  return activities;
}
