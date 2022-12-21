// TODO: add tests
// hint: analyze the existing tests for the coding katas
// the docs for jest can be found here: https://jestjs.io/docs/expect

import { attendanceCheck } from "./attendance-check";

describe("attendanceCheck", function () {
  it("should return a person that did not attend all meetings", function () {
    const meeting1 = {
      meetingName: "meeting 1",
      attendees: ["Peter", "Paul", "Mary"],
    };
    const meeting2 = { meetingName: "meeting 2", attendees: ["Paul"] };
    const meetings = [meeting1, meeting2];
    const requiredAttendees = ["Peter", "Paul"];

    const result = attendanceCheck(meetings, requiredAttendees);
    expect(result).toEqual([
      { attendee: "Peter", missedMeetings: ["meeting 2"] },
    ]);
  });
  it("should return a list of people that did not attend all meetings", function () {
    const meeting1 = { meetingName: "meeting 1", attendees: ["Mary", "Paul"] };
    const meeting2 = { meetingName: "meeting 2", attendees: ["Peter"] };
    const meeting3 = { meetingName: "meeting 3", attendees: ["Mary", "Paul"] };
    const meetings = [meeting1, meeting2, meeting3];
    const requiredAttendees = ["Peter", "Paul"];

    const result = attendanceCheck(meetings, requiredAttendees);
    expect(result).toEqual([
      { attendee: "Peter", missedMeetings: ["meeting 1", "meeting 3"] },
      { attendee: "Paul", missedMeetings: ["meeting 2"] },
    ]);
  });
});
