const store = new Map<string, { expiresAt: number; value: unknown }>();
const TTL_MS = 30_000;

export const cached = async <T>(
  key: string,
  loader: () => Promise<T>,
): Promise<T> => {
  const hit = store.get(key);
  if (hit && Date.now() < hit.expiresAt) {
    return hit.value as T;
  }

  const value = await loader();
  store.set(key, { expiresAt: Date.now() + TTL_MS, value });
  if (store.size > 100) store.clear();
  return value;
};
