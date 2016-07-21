/**
 * Attach submit event handler.
 * @param {EventTarget} target
 * @param {function} handler
 */
function submit(target, handler) {
    target.addEventListener("submit", function(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        handler.call(this);
    });
}

module.exports = submit;

