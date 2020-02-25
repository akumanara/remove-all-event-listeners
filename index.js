Element.prototype.removeEventListeners = function (type) {
    let listeners = window.getEventListeners(this)[type];
    if (listeners !== undefined && listeners.length > 0) {
        listeners.forEach(element => {
            this.removeEventListener(type, element.listener)
        });
    }
};
