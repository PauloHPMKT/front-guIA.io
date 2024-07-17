export const useOnMounted = () => {
  function dateTimeFormated(): string {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const today = new Date();
    const date = Intl.DateTimeFormat("pt-BR", options).format(today);
    return date;
  }

  return {
    dateTimeFormated,
  }
}