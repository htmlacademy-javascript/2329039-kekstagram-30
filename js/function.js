function determineTime(startDay, endDay, startMeeting, duration) {
  const splitStart = startDay.split(':');
  const splitEnd = endDay.split(':');
  const splitMeeting = startMeeting.split(':');
  const startInMinutes = splitStart[0] * 60 + +splitStart[1];
  const endInMinutes = splitEnd[0] * 60 + +splitEnd[1];
  const meetingInMinutes = splitMeeting[0] * 60 + +splitMeeting[1];
  const difference = endInMinutes - meetingInMinutes;
  return startInMinutes <= meetingInMinutes && difference >= duration;
}

determineTime('08:00', '15:00', '14:00', 60);
