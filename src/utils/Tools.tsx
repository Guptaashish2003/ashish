const mappedMonths: { [key: number]: string } = {
  1: "Jan",
  2: "Feb",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "Aug",
  9: "Sept",
  10: "Oct",
  11: "Nov",
  12: "Dec"
  }
export const formatDate = (date: string) => {
  const d = new Date(date);
  return {
      day: d.getDate(),
      month: mappedMonths[d.getMonth() + 1],
      year: d.getFullYear()
  }
}

export const  wrap = (min: number, max: number, value: number) => {
  const rangeSize = max - min;
  return ((((value - min) % rangeSize) + rangeSize) % rangeSize) + min;
};