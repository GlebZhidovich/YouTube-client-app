export function capitalize(s: string): string {
  if (typeof s !== 'string') {
    return '';
  }
  return s[0].toUpperCase() + s.substring(1);
}
