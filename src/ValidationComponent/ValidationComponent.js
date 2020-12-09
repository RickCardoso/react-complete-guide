const ValidationComponent = ({ text }) => {
  if (text.length > 10) return 'text too long';
  if (text.length < 5) return 'text too short';
  return 'text is fine'
}

export default ValidationComponent;