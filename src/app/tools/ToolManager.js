import AddDoorTool from "./AddDoorTool";
import AddLabelTool from "./AddLabelTool";
import AddSpacePolygonTool from "./AddSpacePolygonTool";
import AddSpaceRectangleTool from "./AddSpaceRectangleTool";
import AddTokenTool from "./AddTokenTool";
import AddWallTool from "./AddWallTool";
import SelectTool from "./SelectTool";
import TOOL_TYPE from "./toolType";

const toolMap = {
    [TOOL_TYPE.NEW_DOOR]: new AddDoorTool(),
    [TOOL_TYPE.NEW_SPACE_RECTANGLE]: new AddSpaceRectangleTool(),
    [TOOL_TYPE.NEW_SPACE_POLYGON]: new AddSpacePolygonTool(),
    [TOOL_TYPE.NEW_WALL]: new AddWallTool(),
    [TOOL_TYPE.SELECT]: new SelectTool(),
    [TOOL_TYPE.NEW_LABEL]: new AddLabelTool(),
    [TOOL_TYPE.NEW_TOKEN]: new AddTokenTool()
}

export default class ToolManager {
    constructor(initialSelectedTool) {
        this.selectTool(initialSelectedTool);
    }

    onMouseDown = (store, app) => {
        this.mouseDownCurrentTool(store, app);
    }

    onMouseUp = (store, app) => {
        this.mouseUpCurrentTool(store, app);
    }

    renderTool = (state, graphics) => {
        const newToolIsSelected = this.selectedTool !== state.editor.selectedTool;
        if (newToolIsSelected) {
            this.deselectCurrentTool();
            this.selectTool(state.editor.selectedTool);
        }
        this.renderCurrentTool(state, graphics);
    }

    /** @private */
    selectTool(tool) {
        this.selectedTool = tool;
        toolMap[this.selectedTool].toolSelected?.();
    }

    /** @private */
    deselectCurrentTool() {
        toolMap[this.selectedTool].toolDeselected?.();
        this.selectedTool = null;
    }

    /** @private */
    renderCurrentTool(state, graphics) {
        toolMap[this.selectedTool].renderTool(state, graphics);
    }

    /** @private */
    mouseDownCurrentTool(store, app) {
        toolMap[this.selectedTool].onMouseDown?.(store, app);
    }

    /** @private */
    mouseUpCurrentTool(store, app) {
        toolMap[this.selectedTool].onMouseUp?.(store, app);
    }
}
