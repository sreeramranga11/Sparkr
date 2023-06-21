// Generate action items based on the given technologies
function generateActionItems(technologies) {
    const actionItems = [];
    technologies.forEach(technology => {
  
      actionItems.push(`Learn the basics of ${technology}`);
      actionItems.push(`Complete a ${technology} tutorial`);
      actionItems.push(`Explore advanced features of ${technology}`);
      actionItems.push(`Join an online ${technology} community`);
      actionItems.push(`Build a small project using ${technology} and other areas of interest`);
    });
    return actionItems;
  }
  
  // Create an organized calendar spread across 7 days
  function createCalendar(actionItems) {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
    // Distribute action items evenly across the week
    const itemsPerDay = Math.floor(actionItems.length / 7); // Divide by the number of days
    const distributedItems = [];
    for (let i = 0; i < daysOfWeek.length; i++) {
      const startIndex = i * itemsPerDay;
      const endIndex = startIndex + itemsPerDay;
      const itemsForDay = actionItems.slice(startIndex, endIndex);
  
      // Remove duplicate technologies within a day
      const uniqueItems = removeDuplicateTechnologies(itemsForDay);
  
      distributedItems.push(uniqueItems);
    }
  
    // Output the calendar
    const calendarItems = [];
    daysOfWeek.forEach((day, index) => {
      calendarItems.push({
        day: day,
        items: distributedItems[index]
      });
    });
  
    return calendarItems;
  }
  
  // Utility function to remove duplicate technologies within a day
  function removeDuplicateTechnologies(itemsForDay) {
    const uniqueItems = [];
    const technologies = new Set();
  
    itemsForDay.forEach(item => {
      const technology = getTechnologyFromItem(item);
      if (!technologies.has(technology)) {
        uniqueItems.push(item);
        technologies.add(technology);
      }
    });
  
    return uniqueItems;
  }
  
  // Utility function to extract technology from an action item
  function getTechnologyFromItem(item) {
    const regex = /using (\w+)/;
    const matches = item.match(regex);
    if (matches && matches.length > 1) {
      return matches[1];
    }
    return '';
  }
  
  // Main method to test the functionality
  function main() {
    const technologies = ['React Native', 'AWS', 'PostgreSQL'];
    const actionItems = generateActionItems(technologies);
    const calendarItems = createCalendar(actionItems);
    const calendarLink = createCalendarEvents(calendarItems);
    console.log(`Google Calendar Link: ${calendarLink}`);
  }
  
  // Run the main method
  main();
  
  // Function to create Google Calendar events and return the link
  function createCalendarEvents(calendarItems) {
    const calendarEventLinks = [];
    const startDate = new Date(); // Start the event from the current day
    startDate.setHours(0, 0, 0, 0); // Set the start time to 00:00:00
  
    for (let i = 0; i < calendarItems.length; i++) {
      const endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + 1); // End the event after one day
      endDate.setHours(23, 59, 59, 999); // Set the end time to 23:59:59
  
      const eventTitle = `Tech Action Items - ${calendarItems[i].day}`;
      const eventDetails = calendarItems[i].items.join('\n');
  
      const encodedTitle = encodeURIComponent(eventTitle);
      const encodedDetails = encodeURIComponent(eventDetails);
  
      const startDateString = formatDate(startDate);
      const endDateString = formatDate(endDate);
  
      const calendarEventLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodedTitle}&details=${encodedDetails}&dates=${startDateString}/${endDateString}`;
      calendarEventLinks.push(calendarEventLink);
  
      startDate.setDate(startDate.getDate() + 1); // Move to the next day
    }
  
    return calendarEventLinks.join('\n');
  }
  
  // Utility function to format date as YYYYMMDD
  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  }
  