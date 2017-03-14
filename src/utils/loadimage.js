import config from '../config';

export default class Load {
    static get() {
        if (this._isExists()) {
            this._isExists().then(images => {
                this.initialData = JSON.parse(images);
            });
        }
        return;
    }

    static _isExists() {
        return new Promise((success, fail) => {
            const request = new XMLHttpRequest();
            request.open('GET', config.localImages.path, true);

            request.addEventListener('load', () => {
                request.status >= 200 && request.status < 400
                    ? success(request.responseText)
                    : fail(new Error(`Request Failed: ${request.statusText}`));
            });

            request.addEventListener('error', () => {
                fail(new Error('Network Error'));
            });

            request.send();
        });
    }
}
