export const html = String.raw;

export async function readFile(path: string) {
  return import(path);
}
