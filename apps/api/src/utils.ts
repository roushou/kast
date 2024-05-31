type Faillable<TData> = { success: true; data: TData } | { success: false };

export async function asyncFaillable<TData>(
  fn: Promise<TData>,
): Promise<Faillable<TData>> {
  try {
    const data = await fn;
    return { success: true, data };
  } catch {
    return { success: false };
  }
}
