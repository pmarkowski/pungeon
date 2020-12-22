import * as PIXI from 'pixi.js';
import { GRID_TILE_SIZE } from '../utils/constants';
import GraphicsRenderer from './GraphicsRenderer';

export default class LabelRenderer extends GraphicsRenderer {
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