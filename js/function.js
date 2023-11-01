function itsTime(beginDay, endDay, beginMeeting, duration) {
  let splitBegin = beginDay.split(':');
  let splitEnd = endDay.split(':');
  let splitMeeting = beginMeeting.split(':');
  let beginInMinutes = splitBegin[0] * 60 + +splitBegin[1];
  let endInMinutes = splitEnd[0] * 60 + +splitEnd[1];
  let meetingInMinutes = splitMeeting[0] * 60 + +splitMeeting[1];
  let difference = endInMinutes - meetingInMinutes;
  if(beginInMinutes > meetingInMinutes) {
    return false;
  } else if(difference >= duration) {
    return true;
  } else {
    return false;
  }
}

itsTime('08:00', '15:00', '14:00', 60);
