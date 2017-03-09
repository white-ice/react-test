export const EDIT_ITEMS = 'EDIT_ITEMS';
export const DELETE_ITEM = 'DELETE_ITEM';

export function editItem(item) {
    const { id, name, youtube } = item;
    return {
        type: EDIT_ITEMS,
        id, name, youtube
    };
}

export function deleteItem(id) {
    return {
        type: DELETE_ITEM,
        id
    };
}
