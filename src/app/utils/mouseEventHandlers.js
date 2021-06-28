import { mouseDown, mouseUp, moveViewport, scroll } from "../reducers/editorActions";

export const handleMouseDown = (mouseEvent, store, app, toolManager) => {
    if (mouseEvent.buttons === 1) {
        store.dispatch(mouseDown());
        toolManager.onMouseDown(store, app);
    }
}

export const handleMouseUp = (mouseEvent, store, app, toolManager) => {
    let state = store.getState();
    if (state.editor.mouse.mouseDown) {
        store.dispatch(mouseUp());
        toolManager.onMouseUp(store, app);
    }
}

export const handleMouseMove = (mouseEvent, store) => {
    if (mouseEvent.buttons === 2) {
        let mouseMovementScaledByDisplayScaling = {
            movementX: mouseEvent.movementX / window.devicePixelRatio,
            movementY: mouseEvent.movementY / window.devicePixelRatio
        }
        store.dispatch(moveViewport(
            mouseMovementScaledByDisplayScaling.movementX,
            mouseMovementScaledByDisplayScaling.movementY));
    }
}

export const handleWheelEvent = (wheelEvent, store) => {
    store.dispatch(scroll(
        wheelEvent.deltaX,
        wheelEvent.deltaY,
        wheelEvent.getModifierState('Control')));
}
