export function setItem(key: string, value: string, local?: boolean) {
  if (local) {
    window.localStorage.setItem(key, value);
    return localStorage.setItem(key, value)
  };
  window.sessionStorage.setItem(key, value);
  sessionStorage.setItem(key, value);
}

export function getItem(key: string, local?: boolean) {
  if (local) {
    window.localStorage.getItem(key);
    return localStorage.getItem(key);
  }
  window.sessionStorage.getItem(key);
  sessionStorage.getItem(key);
}

export function clear() {
  window.localStorage.clear();
  window.sessionStorage.clear();
  localStorage.clear();
  sessionStorage.clear();
}

export function removeItem(key: string) {
  localStorage.removeItem(key);
  sessionStorage.removeItem(key);
}
