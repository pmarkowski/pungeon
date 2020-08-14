import { GRID_TILE_SIZE } from "../utils/constants";
import { addLabel } from "../reducers/dungeonReducer";

export default class AddLabelTool {
    onMouseUp(store) {
        let state = store.getState();
        let mousePoint = state.editor.mouse.dungeonPosition;
        let dungeonSpaceX = mousePoint.x / GRID_TILE_SIZE;
        let dungeonSpaceY = mousePoint.y / GRID_TILE_SIZE;
        store.dispatch(addLabel(dungeonSpaceX, dungeonSpaceY, "Text Label"))
    }

    renderTool(state, graphics) {
    }
}