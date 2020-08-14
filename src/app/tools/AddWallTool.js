import { GRID_TILE_SIZE } from "../utils/constants";
import { addWall } from "../reducers/dungeonReducer";

export default class AddWallTool {
    onMouseUp(store) {
        let state = store.getState();
        let mousePoint = state.editor.mouse.dungeonPosition;
        let startX = Math.round(state.mouseStartX / GRID_TILE_SIZE);
        let startY = Math.round(state.mouseStartY / GRID_TILE_SIZE);
        let endX = Math.round(mousePoint.x / GRID_TILE_SIZE);
        let endY = Math.round(mousePoint.y / GRID_TILE_SIZE);
        store.dispatch(addWall(startX, startY, endX, endY));
    }

    renderTool(state, graphics) {
        let mousePoint = state.editor.mouse.dungeonPosition;
        if (state.mouseDown) {
            let startX = Math.round(state.mouseStartX / GRID_TILE_SIZE) * GRID_TILE_SIZE;
            let startY = Math.round(state.mouseStartY / GRID_TILE_SIZE) * GRID_TILE_SIZE;
            let endX = Math.round(mousePoint.x / GRID_TILE_SIZE) * GRID_TILE_SIZE;
            let endY = Math.round(mousePoint.y / GRID_TILE_SIZE) * GRID_TILE_SIZE;
            graphics.lineStyle(5, 0xfffd00);
            graphics.moveTo(startX, startY);
            graphics.lineTo(endX, endY);
            graphics.lineStyle();
            graphics.beginFill(0xfffd00);
            graphics.drawCircle(startX, startY, 2.5);
            graphics.drawCircle(endX, endY, 2.5);
            graphics.endFill();
        }
        else {
            // get nearest center point
            let hoverX = Math.round(mousePoint.x / GRID_TILE_SIZE) * GRID_TILE_SIZE;
            let hoverY = Math.round(mousePoint.y / GRID_TILE_SIZE) * GRID_TILE_SIZE;

            graphics.lineStyle();
            graphics.beginFill(0xfffd00);
            graphics.drawCircle(hoverX, hoverY, 2.5);
            graphics.endFill();
        }
    }
}