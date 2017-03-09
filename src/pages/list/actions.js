export const EDIT_ITEMS = 'EDIT_ITEMS';

export function editItem(item) {
    const { id, name, youtube } = item;
    return {
        type: EDIT_ITEMS,
        id, name, youtube
    };
}
