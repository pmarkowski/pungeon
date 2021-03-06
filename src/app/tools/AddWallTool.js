import * as PIXI from 'pixi.js';
import { createWall } from "../dungeonObjects/WallOperations";
import { addObject } from "../reducers/dungeonActions";
import { GRID_TILE_SIZE } from "../utils/constants";

export default class AddWallTool {
    onMouseUp(store) {
        let state = store.getState();
        let mousePoint = state.editor.mouse.currentPosition;
        let startX = Math.round(state.editor.mouse.startPosition.x / GRID_TILE_SIZE);
        let startY = Math.round(state.editor.mouse.startPosition.y / GRID_TILE_SIZE);
        let endX = Math.round(mousePoint.x / GRID_TILE_SIZE);
        let endY = Math.round(mousePoint.y / GRID_TILE_SIZE);
        store.dispatch(addObject(createWall(startX, startY, endX, endY)));
    }

    renderTool(state, graphics) {
        let mousePoint = state.editor.mouse.currentPosition;
        if (state.editor.mouse.mouseDown) {
            let startX = Math.round(state.editor.mouse.startPosition.x / GRID_TILE_SIZE) * GRID_TILE_SIZE;
            let startY = Math.round(state.editor.mouse.startPosition.y / GRID_TILE_SIZE) * GRID_TILE_SIZE;
            let endX = Math.round(mousePoint.x / GRID_TILE_SIZE) * GRID_TILE_SIZE;
            let endY = Math.round(mousePoint.y / GRID_TILE_SIZE) * GRID_TILE_SIZE;
            graphics.lineStyle(5, 0xfffd00);
            graphics.line.cap = PIXI.LINE_CAP.ROUND;
            graphics.moveTo(startX, startY);
            graphics.lineTo(endX, endY);
            graphics.lineStyle();
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
