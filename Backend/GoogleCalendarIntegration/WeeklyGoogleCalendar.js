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
    const itemsPerDay = Math.floor(actionItems.length / 5); // Divide by the number of weekdays
    const distributedItems = [];
    for (let i = 0; i < daysOfWeek.length - 2; i++) { // Exclude Saturday and Sunday
      const startIndex = i * itemsPerDay;
      const endIndex = startIndex + itemsPerDay;
      const itemsForDay = actionItems.slice(startIndex, endIndex);
  
      // Remove duplicate technologies within a day
      const uniqueItems = removeDuplicateTechnologies(itemsForDay);
  
      distributedItems.push(uniqueItems);
    }
  
    // Shuffle and assign extra items for Saturday and Sunday
    const extraItems = [
      'Research emerging technology trends for business innovation',
      'Develop a digital marketing strategy for your tech products',
      'Attend technology-focused business conferences or expos',
      'Read industry publications on tech entrepreneurship',
      'Analyze market competitors and identify unique tech opportunities'
    ];
  
    const shuffledItems = shuffle(extraItems);
    distributedItems.push([shuffledItems[0]]); // Saturday
    distributedItems.push([shuffledItems[1]]); // Sunday
  
    // Output the calendar
    const calendarItems = [];
    daysOfWeek.forEach((day, index) => {
      calendarItems.push(`${day}:\n${distributedItems[index].join('\n')}`);
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
  
  // Utility function to shuffle an array using Fisher-Yates algorithm
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Main method to test the functionality
  function main() {
    const technologies = ['React Native', 'AWS', 'PostgreSQL'];
    const actionItems = generateActionItems(technologies);
    const calendarItems = createCalendar(actionItems);
    const calendarLink = createCalendarEvent(calendarItems);
    console.log(`Google Calendar Link: ${calendarLink}`);
  }
  
  // Run the main method
  main();
  
// Function to create a Google Calendar event and return the link
function createCalendarEvent(calendarItems) {
    const startDate = new Date(); // Start the event from the current day
    startDate.setHours(0, 0, 0, 0); // Set the start time to 00:00:00
  
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + calendarItems.length - 1); // End the event after the number of action items
    endDate.setHours(23, 59, 59, 999); // Set the end time to 23:59:59
  
    const eventTitle = 'Tech Action Items';
    const eventDetails = calendarItems.join('\n\n');
  
    const encodedTitle = encodeURIComponent(eventTitle);
    const encodedDetails = encodeURIComponent(eventDetails);
  
    const startDateString = formatDate(startDate);
    const endDateString = formatDate(endDate);
  
    const calendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodedTitle}&details=${encodedDetails}&dates=${startDateString}/${endDateString}`;
  
    return calendarLink;
  }
  
  // Utility function to format date as YYYYMMDD
  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  }
  