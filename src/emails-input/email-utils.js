export const EMAIL_RE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function generateEmail() {
  let chars = 'abcdefghijklmnopqrstuvwxyz';
  return (
    chars[Math.floor(Math.random() * 26)] +
    Math.random()
      .toString(36)
      .substring(1, 4) +
    '@miro.com'
  );
}
