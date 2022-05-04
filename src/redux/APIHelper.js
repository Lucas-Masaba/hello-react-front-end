const messageURL = 'http://localhost:3000/api/greetings'

const getMessage = async () => {
  const response = await fetch(messageURL)
  const data = await response.json()
  return data
}

export default getMessage