//@ts-nocheck

export const html = String.raw;

export async function readFile(path: string) {
  return import(path);
}

export function setSearch(searchValue: string) {
  const url = new URL(window.location);
  if (searchValue) {
    url.searchParams.set("search", searchValue);
  } else {
    url.searchParams.delete("search");
  }

  history.replaceState(null, "", url);
  window.location.reload();
}

export function setSearchFromUrl() {
  const currentUrl = new URL(window.location);
  searchInput.value = currentUrl.searchParams.get("search") || "";
  searchInput.focus();
}
