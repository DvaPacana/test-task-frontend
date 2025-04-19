export function toggleSelection(list, item, max) {
  const exists = list.find((i) => i.id === item.id);
  if (exists) {
    return list.filter((i) => i.id !== item.id);
  } if (list.length < max) {
    return [...list, item];
  }

  return list;
}

export function selectSingle(current, item) {
  return current && current.id === item.id ? null : item;
}
