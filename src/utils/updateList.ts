export const updateList = (value: string) => {
  return value.split(",").filter(item => item !== "");
}