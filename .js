let person = {
    name: 'Allen',
    age: 42,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM'
  };
  let day = 'Wednesday';
    let alarm;
  if (day === 'Saturday' || day === 'Sunday' ) {
    alarm = 'weekendAlarm';
  } else {
    alarm = 'weekAlarm';
  }
  console.log(person[alarm]);
  console.log(person['name']);
  console.log(person['age']);