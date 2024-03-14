export const getHelloMessage = (username?: string) => {
  if (!username || username.length === 0) {
    throw new Error('user name is not provided yet')

  }

  return `Hello ${username}!`;
}
