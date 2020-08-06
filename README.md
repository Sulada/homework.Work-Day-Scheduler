# 05 Third-Party APIs: Work Day Scheduler
Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

I use the [Moment.js](https://momentjs.com/) library to work with date and time.

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule for 1 day 9Am-5PM
WHEN I open the planner
THEN the current day and time is displayed at the top of the calendar

WHEN I scroll down
THEN I am presented with timeblocks for standard business hours

WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
The past color's is gray
The present color's is red
The future color's is green

WHEN I click into a timeblock
THEN I can enter an event

WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage

WHEN I refresh the page
THEN the saved events persist

WHEN I delete an event and click the save button
THEN the text for that event is deleted in local storage
```