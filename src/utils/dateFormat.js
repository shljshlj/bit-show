export default function dateFormat(dateStr) {
  const dateObj = new Date(dateStr);
  const year = dateObj.getFullYear();
  const monthNum = dateObj.getMonth();
  const dateDay = dateObj.getDate();

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  return `${dateDay} ${monthNames[monthNum]} ${year}`;
}