export const LOAD_ITEMS = 'LOAD_ITEMS';
import load from '../../utils/load';

export function loadItems(initialData) {
    return {
        type: LOAD_ITEMS,
        initialData
    };
}
