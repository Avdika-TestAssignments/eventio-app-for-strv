const firstLetter = (text = '') => {
  return text.charAt(0);
}

const getInicials = (firstName = '', lastName = '') => {
  return `${firstLetter(firstName)}${firstLetter(lastName)}`
}

export { getInicials };
