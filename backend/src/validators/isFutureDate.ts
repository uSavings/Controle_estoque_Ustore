export const isFutureDate = (date: Date | string): boolean => {
    const now = new Date();
    const inputDate = new Date(date);
  
    return inputDate > now;
  };