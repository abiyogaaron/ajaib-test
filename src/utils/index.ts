export const reformatDate = (dateStr: string) => {
  if (!dateStr) {
    return dateStr;
  }
  function pad(s: number | string) { return (s < 10) ? `0${s}` : s; }

  const d = new Date(dateStr);
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
};
