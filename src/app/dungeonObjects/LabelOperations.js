import * as PIXI from 'pixi.js';
import { GRID_TILE_SIZE } from '../utils/constants';
import { createDungeonObject } from './BaseDungeonObjectOperations';
import DUNGEON_OBJECT_TYPE from './dungeonObjectTypes';
import GraphicsDungeonObjectOperations from './GraphicsDungeonObjectOperations';

/**
 * @typedef {{
 *  position: {x: number, y: number},
 *  label: string
 * } & import('./BaseDungeonObjectOperations').BaseDungeonObject} Label
 */


/**
 * @returns {Label}
 */
export const createLabel = (x, y, label) => {
    return {
        ...createDungeonObject(DUNGEON_OBJECT_TYPE.LABEL),
        label,
        position: {
            x,
            y
        }
    }
}

export class LabelOperations extends GraphicsDungeonObjectOperations {
    get dungeonObjectType(){ return DUNGEON_OBJECT_TYPE.LABEL; }

    translate(object, x, y) {
        object.position.x += x;
        object.position.y += y;
    }

    renderObject(graphics, label, objectIsSelected) {
        graphics.zIndex = 4;
        graphics.clear();
        if (graphics.children.length === 0) {
            let labelText = new PIXI.Text(label.label);
            labelText.style.fontFamily = 'Serif';
            labelText.style.fontSize = 36;
            graphics.addChild(labelText);
        }

        let labelText = graphics.children[0];

        if (objectIsSelected) {
            labelText.style.fill = 0xffff33;
        }
        else {
            labelText.style.fill = 0x000000;
        }

        labelText.text = label.label;
        labelText.position.set(
            label.position.x * GRID_TILE_SIZE,
            label.position.y * GRID_TILE_SIZE);
    }
}
