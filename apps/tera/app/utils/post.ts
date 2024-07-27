export function getTotalPages(count: number, size: number): number {
  return Math.ceil(count / size);
}

export function isValidPage(
  page: number,
  start: number,
  end?: number,
): boolean {
  return (
    !Number.isNaN(page) && page >= start && (end === undefined || page < end)
  );
}
