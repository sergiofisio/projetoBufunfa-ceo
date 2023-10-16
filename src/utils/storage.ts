export function setItem(key: string, value: string, local: boolean) {
  if (local) return localStorage.setItem(key, value);
  sessionStorage.setItem(key, value);
}

export function getItem(key: string) {
  if (localStorage.getItem(key)) return localStorage.getItem(key);
  sessionStorage.getItem(key);
}

export function clear() {
  localStorage.clear();
  sessionStorage.clear();
}

export function removeItem(key: string) {
  localStorage.removeItem(key);
  sessionStorage.removeItem(key);
}
