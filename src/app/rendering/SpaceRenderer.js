import * as PIXI from 'pixi.js';
import { GRID_TILE_SIZE } from "../utils/constants";
import store from '../store';
import { selectTool, selectObject } from '../reducers/dungeonReducer';
import TOOL_TYPE from '../tools/toolType';

export const RESIZE_HANDLE_PADDING = 10;

/**
 * @param {PIXI.Graphics} graphics
 * @param {*} space
 * @param {Boolean} objectIsSelected
 */
const renderResizeHandle = (graphics, space, objectIsSelected) => {
    let handleLength = 15;
    let handleWidth = 5;
    // Want to draw a handle like this: _|

    // Start with the right one...
    graphics.clear();

    if (objectIsSelected) {
        graphics.beginFill(0x00ffff);
        graphics.drawRect(
            (space.position.x + space.size.width) * GRID_TILE_SIZE + RESIZE_HANDLE_PADDING,
            (space.position.y + space.size.height) * GRID_TILE_SIZE - handleLength,
            handleWidth,
            handleLength + RESIZE_HANDLE_PADDING
        );
        graphics.drawRect(
            (space.position.x + space.size.width) * GRID_TILE_SIZE - handleLength,
            (space.position.y + space.size.height) * GRID_TILE_SIZE + RESIZE_HANDLE_PADDING,
            handleLength + RESIZE_HANDLE_PADDING + handleWidth,
            handleWidth
        );
        graphics.endFill();
    }
}

export default class SpaceRenderer {
    createRenderObject(spaceObject) {
        let spaceContainer = new PIXI.Container();

        let spaceGraphics = new PIXI.Graphics();
        spaceContainer.spaceGraphics = spaceGraphics;
        spaceContainer.addChild(spaceContainer.spaceGraphics);

        /**
         * Oh no... the handler that makes things selectable
         * is on the container itself. This makes the handle
         * part of the select bounding box, probably.
         * What should be done about this...?
         * Most likely the correct way is
         * to pull the complexity of setting the on click
         * event downwards into these modules rather than
         * having the DungeonRenderer set it on these objects
         */
        let resizeHandle = new PIXI.Graphics();
        resizeHandle.interactive = true;
        resizeHandle.cursor = "nwse-resize";
        resizeHandle.mousedown = () => {
            store.dispatch(selectTool(TOOL_TYPE.RESIZE));
            store.dispatch(selectObject(spaceObject.id))
        };

        spaceContainer.resizeHandle = resizeHandle;
        spaceContainer.addChild(spaceContainer.resizeHandle);

        return spaceContainer;
    }

    renderObject(container, space, objectIsSelected) {
        let graphics = container.spaceGraphics;
        graphics.clear();
        graphics.beginFill(0xd6d5d5);
        if (space.position && space.size) {
            graphics.drawRect(
                space.position.x * GRID_TILE_SIZE,
                space.position.y * GRID_TILE_SIZE,
                space.size.width * GRID_TILE_SIZE,
                space.size.height * GRID_TILE_SIZE);
            graphics.endFill();
        }
        else {
            let firstPoint = space.points[0];
            graphics.moveTo(firstPoint.x * GRID_TILE_SIZE, firstPoint.y * GRID_TILE_SIZE);
            for (let index = 0; index < space.points.length; index++) {
                const point = space.points[index];
                graphics.lineTo(point.x * GRID_TILE_SIZE, point.y * GRID_TILE_SIZE);
            }
            graphics.endFill();
        }

        if (objectIsSelected) {
            graphics.tint = 0xffffcc;
        }
        else {
            graphics.tint = 0xffffff;
        }

        renderResizeHandle(container.resizeHandle, space, objectIsSelected);
    }
}
