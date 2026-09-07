function getFlightTime(inTransitTime) {
  const time = new Date(inTransitTime);
  return time.toLocaleTimeString("en-us", {
    hour: "2-digit",
    minute: "2-digit",
  });
}
export { getFlightTime };
