function getTodaysDate() {
  const today = new Date();
  const todayFormated =
    String(today.getFullYear()) +
    "-" +
    String(today.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(today.getDate()).padStart(2, "0");
    return todayFormated;
}
export {getTodaysDate}
