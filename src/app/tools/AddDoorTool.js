import * as PIXI from 'pixi.js';
import { createDoor } from "../dungeonObjects/DoorOperations";
import { WALL_TYPE } from "../dungeonObjects/WallOperations";
import { addObject } from "../reducers/dungeonActions";
import { GRID_TILE_SIZE } from "../utils/constants";
import { getClosestPointOnLine, lineLength } from "../utils/geometry";

export default class AddDoorTool {
    onMouseUp(store) {
        let state = store.getState();
        let mousePoint = state.editor.mouse.currentPosition;
        let minDistance = 25;
        let snapPoint = null;
        let minWallId = null;
        state.dungeon.objects
            .filter(object => object.type === WALL_TYPE)
            .forEach(wall =>{
                // try each point and get the shortest distance
                let scaledStart = {
                    x: wall.start.x * GRID_TILE_SIZE,
                    y: wall.start.y * GRID_TILE_SIZE
                };
                let scaledEnd = {
                    x: wall.end.x * GRID_TILE_SIZE,
                    y: wall.end.y * GRID_TILE_SIZE
                }
                let closestPoint = getClosestPointOnLine({
                        x: state.editor.mouse.startPosition.x,
                        y: state.editor.mouse.startPosition.y
                    }, scaledStart, scaledEnd);
                // if the shortest distance of one is < snapping threshold, snap to it
                let distance = lineLength(closestPoint, {
                    x: state.editor.mouse.startPosition.x,
                    y: state.editor.mouse.startPosition.y
                });
                if (!minDistance || distance < minDistance) {
                    minDistance = distance;
                    snapPoint = closestPoint;
                    minWallId = wall.id;
                }
            });

        let doorWall = state.dungeon.objects.find(wall => wall.id === minWallId);

        if (!doorWall) {
            return;
        }

        let scaledStart = {
            x: doorWall.start.x * GRID_TILE_SIZE,
            y: doorWall.start.y * GRID_TILE_SIZE
        };
        let scaledEnd = {
            x: doorWall.end.x * GRID_TILE_SIZE,
            y: doorWall.end.y * GRID_TILE_SIZE
        }
        let endPoint = getClosestPointOnLine(mousePoint, scaledStart, scaledEnd);
        store.dispatch(addObject(createDoor(
            snapPoint.x / GRID_TILE_SIZE,
            snapPoint.y / GRID_TILE_SIZE,
            endPoint.x / GRID_TILE_SIZE,
            endPoint.y / GRID_TILE_SIZE)));
    }

    renderTool(state, graphics) {
        let mousePoint = state.editor.mouse.currentPosition;
        if (!state.editor.mouse.mouseDown) {
            // try to snap to the nearest line:
            // for each line, get the nearest point on the line
            let minDistance = 25;
            let snapPoint = null;
            state.dungeon.objects
                .filter(object => object.type === WALL_TYPE)
                .forEach(wall => {
                    // try each point and get the shortest distance
                    let scaledStart = {
                        x: wall.start.x * GRID_TILE_SIZE,
                        y: wall.start.y * GRID_TILE_SIZE
                    };
                    let scaledEnd = {
                        x: wall.end.x * GRID_TILE_SIZE,
                        y: wall.end.y * GRID_TILE_SIZE
                    }
                    let closestPoint = getClosestPointOnLine(mousePoint, scaledStart, scaledEnd);
                    // if the shortest distance of one is < snapping threshold, snap to it
                    let distance = lineLength(closestPoint, mousePoint);
                    if (!minDistance || distance < minDistance) {
                        minDistance = distance;
                        snapPoint = closestPoint;
                    }
                });
            if (snapPoint) {
                graphics.lineStyle();
                graphics.beginFill(0xfffd00);
                graphics.drawCircle(snapPoint.x, snapPoint.y, 2.5);
                graphics.endFill();
            }
        }
        else {
            let minDistance = 25;
            let snapPoint = null;
            let minWallId = null;
            state.dungeon.objects
                .filter(object => object.type === WALL_TYPE)
                .forEach(wall => {
                    // try each point and get the shortest distance
                    let scaledStart = {
                        x: wall.start.x * GRID_TILE_SIZE,
                        y: wall.start.y * GRID_TILE_SIZE
                    };
                    let scaledEnd = {
                        x: wall.end.x * GRID_TILE_SIZE,
                        y: wall.end.y * GRID_TILE_SIZE
                    }
                    let closestPoint = getClosestPointOnLine({
                            x: state.editor.mouse.startPosition.x,
                            y: state.editor.mouse.startPosition.y
                        }, scaledStart, scaledEnd);
                    // if the shortest distance of one is < snapping threshold, snap to it
                    let distance = lineLength(closestPoint, {
                        x: state.editor.mouse.startPosition.x,
                        y: state.editor.mouse.startPosition.y
                    });
                    if (!minDistance || distance < minDistance) {
                        minDistance = distance;
                        snapPoint = closestPoint;
                        minWallId = wall.id;
                    }
                });
            // draw a line from the start point
            if (!snapPoint) {
                return;
            }

            let startX = snapPoint.x;
            let startY = snapPoint.y;

            let doorWall = state.dungeon.objects.find(wall => wall.id === minWallId);
            let scaledStart = {
                x: doorWall.start.x * GRID_TILE_SIZE,
                y: doorWall.start.y * GRID_TILE_SIZE
            };
            let scaledEnd = {
                x: doorWall.end.x * GRID_TILE_SIZE,
                y: doorWall.end.y * GRID_TILE_SIZE
            }
            let endPoint = getClosestPointOnLine(mousePoint, scaledStart, scaledEnd);

            let endX = endPoint.x;
            let endY = endPoint.y;

            graphics.lineStyle(5, 0xfffd00);
            graphics.line.cap = PIXI.LINE_CAP.ROUND;
            graphics.moveTo(startX, startY);
            graphics.lineTo(endX, endY);
            graphics.lineStyle();
        }
    }
}
