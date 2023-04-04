export const getValueFromLocalStorageByKey = (key) => {
  const value = localStorage.getItem(key)

  return JSON.parse(value)
} 