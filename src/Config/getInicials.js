const _getFirstLetter = (text = '') => {
  return text.charAt(0)
}

const getInicials = (firstName = '', lastName = '') => {
  return `${_getFirstLetter(firstName)}${_getFirstLetter(lastName)}`
}

export { getInicials };
