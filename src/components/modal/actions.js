export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOUSE_MODAL = 'CLOUSE_MODAL';

export function openModal(options) {
    const { title, btnText, content } = options;

    return {
        type: OPEN_MODAL,
        title, btnText, content
    };
}

export function closeModal() {
    return {
        type: CLOUSE_MODAL
    };
}