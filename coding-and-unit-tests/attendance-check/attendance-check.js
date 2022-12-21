/* Accepts an array of past meetings with their attendees and a list of all requiredAttendees for all meetings. 
The function should return a list of names that did not attend all meetings.

  Example 1

  const meeting1 = {
    meetingName: "meeting 1",
    attendees: ["Peter", "Paul", "Mary"],
  };
  const meeting2 = { meetingName: "meeting 2", attendees: ["Paul"] };
  const meetings = [meeting1, meeting2];

  const requiredAttendees = ["Peter", "Paul"];

  const result = attendanceCheck(meetings, requiredAttendees);
  [{ attendee: "Peter", missedMeetings: ["meeting 2"] }];

  
  Example 2

const meeting1 = { meetingName: "meeting 1", attendees: ["Mary", "Paul"] };
const meeting2 = { meetingName: "meeting 2", attendees: ["Peter"] };
const meeting3 = { meetingName: "meeting 3", attendees: ["Mary, Paul"] };
const meetings = [meeting1, meeting2, meeting3];

const requiredAttendees = ["Peter", "Paul"];

const result = attendanceCheck(meetings, requiredAttendees);
// [
//  { attendee: "Peter", missedMeetings: ["meeting 1", "meeting 3"] },
//  { attendee: "Paul", missedMeetings: ["meeting 2"]}
// ]
 */

export function attendanceCheck(meetings, requiredAttendees) {
  let result = [];
  for (let i = 0; i < requiredAttendees.length; i++) {
    const currentAttendee = requiredAttendees[i];
    meetings.forEach((meeting) => {
      if (!meeting.attendees.find((attendee) => attendee === currentAttendee)) {
        result.push({
          attendee: currentAttendee,
          missedMeetings: [meeting.meetingName],
        });
      }
    });
  }
  for (let i = 0; i < result.length; i++) {
    if (
      result[i] !== undefined &&
      result[i + 1] !== undefined &&
      result[i].attendee === result[i + 1].attendee
    ) {
      result[i + 1] = {
        attendee: result[i].attendee,
        missedMeetings: [
          result[i].missedMeetings,
          result[i + 1].missedMeetings,
        ].flatMap((el) => el),
      };
      result.splice(0, 1);
    }
  }
  return result;
}
