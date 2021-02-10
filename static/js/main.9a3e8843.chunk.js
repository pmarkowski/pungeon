(this["webpackJsonppungeon-react"]=this["webpackJsonppungeon-react"]||[]).push([[0],{29:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var o,i=n(2),r=n.n(i),c=n(15),a=n.n(c),s=(n(29),n(3)),l=n(4),u=n(7),d=n(6),O=n(5),E={PNG_EXPORTED:"PNG_EXPORTED",EXPORT_TO_PNG_CLICKED:"EXPORT_TO_PNG_CLICKED",CLEAR_ONGOING_SPACE_POLYGON:"CLEAR_ONGOING_SPACE_POLYGON",ADD_ONGOING_SPACE_POLYGON:"ADD_ONGOING_SPACE_POLYGON",MOVE_VIEWPORT:"MOVE_VIEWPORT",SET_CURRENT_MOUSE_POSITION:"SET_CURRENT_MOUSE_POSITION",SCROLL_EVENT:"SCROLL_EVENT",MOUSE_DOWN:"MOUSE_DOWN",MOUSE_UP:"MOUSE_UP",SET_SCROLL_MOVES_VIEWPORT:"SET_SCROLL_MOVES_VIEWPORT",SELECT_TOOL:"SELECT_TOOL",SELECT_OBJECT:"SELECT_OBJECT",SELECT_OBJECTS:"SELECT_OBJECTS",SELECT_AT_POINT:"SELECT_AT_POINT",SELECT_IN_BOUNDING_BOX:"SELECT_IN_BOUNDING_BOX",KEY_PRESSED:"KEY_PRESSED",KEY_RELEASED:"KEY_RELEASED"},b=function(e,t){return{type:E.SELECT_OBJECTS,objectIds:e,shouldMultiSelect:t}},j=function(e,t){return{type:E.SET_CURRENT_MOUSE_POSITION,x:e,y:t}},h=n(11),y=n(10),x=n(0),f=70,T=n(47),_=function(e){return{id:Object(T.a)(),type:e}},p=function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,[{key:"dungeonObjectType",get:function(){return null}},{key:"translate",value:function(e,t,n){}},{key:"createRenderObject",value:function(){return new O.c}},{key:"renderObject",value:function(e,t,n){}}]),e}(),g="door",S=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"dungeonObjectType",get:function(){return g}},{key:"translate",value:function(e,t,n){e.start.x+=t,e.start.y+=n,e.end.x+=t,e.end.y+=n}},{key:"renderObject",value:function(e,t,n){e.zIndex=3,e.clear(),e.beginFill(11094,1),e.lineStyle(20,11094,1,.5),e.moveTo(t.start.x*f,t.start.y*f),e.lineTo(t.end.x*f,t.end.y*f),e.lineStyle();var o=10;e.endFill(),e.tint=n?16777011:16777215,e.hitArea=new O.f([t.start.x*f-o,t.start.y*f-o,t.start.x*f+o,t.start.y*f+o,t.end.x*f+o,t.end.y*f+o,t.end.x*f-o,t.end.y*f-o])}}]),n}(p),v="label",m=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"dungeonObjectType",get:function(){return v}},{key:"translate",value:function(e,t,n){e.position.x+=t,e.position.y+=n}},{key:"renderObject",value:function(e,t,n){if(e.zIndex=4,e.clear(),0===e.children.length){var o=new O.i(t.label);o.style.fontFamily="Serif",o.style.fontSize=36,e.addChild(o)}var i=e.children[0];i.style.fill=n?16777011:0,i.text=t.label,i.position.set(t.position.x*f,t.position.y*f)}}]),n}(p),N="wall",C=function(e,t,n,o){return Object(x.a)(Object(x.a)({},_(N)),{},{start:{x:e,y:t},end:{x:n,y:o}})},L=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"dungeonObjectType",get:function(){return N}},{key:"translate",value:function(e,t,n){e.start.x+=t,e.start.y+=n,e.end.x+=t,e.end.y+=n}},{key:"renderObject",value:function(e,t,n){e.zIndex=2,e.clear(),e.lineStyle(10,157414,1,.5),e.line.cap=O.d.ROUND,e.moveTo(t.start.x*f,t.start.y*f),e.lineTo(t.end.x*f,t.end.y*f),e.lineStyle();e.endFill(),e.tint=n?16777011:16777215,e.hitArea=this.createWallHitArea(t,5)}},{key:"createWallHitArea",value:function(e,t){if(e.start.x===e.end.x&&e.start.y===e.end.y)return new O.b(e.start.x*f,e.start.y*f,t);var n=e.start.x<=e.end.x?e.start:e.end,o=e.start.x>e.end.x?e.start:e.end,i=o.y-n.y,r=o.x-n.x,c=i/r,a=-1/c;if(0===c||0===a)return new O.g(n.x*f-t,Math.min(n.y,o.y)*f-t,r*f+2*t,Math.abs(i)*f+2*t);var s=this.getOffsetAlongSlope(c,t),l=s.xOffset,u=s.yOffset,d=this.getOffsetAlongSlope(a,t),E=d.xOffset,b=d.yOffset;return new O.f([n.x*f-l-E,n.y*f-u-b,n.x*f-l+E,n.y*f-u+b,o.x*f+l+E,o.y*f+u+b,o.x*f+l-E,o.y*f+u-b])}},{key:"getOffsetAlongSlope",value:function(e,t){var n=Math.atan(e);return{xOffset:Math.cos(n)*t,yOffset:Math.sin(n)*t}}}]),n}(p),P="space",w=function(e){var t=e.points,n=e.startX,o=e.startY,i=e.endX,r=e.endY;return t?Object(x.a)(Object(x.a)({},_(P)),{},{points:t}):Object(x.a)(Object(x.a)({},_(P)),{},{position:{x:n,y:o},size:{width:i-n,height:r-o}})},D=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"dungeonObjectType",get:function(){return P}},{key:"translate",value:function(e,t,n){e.position?(e.position.x+=t,e.position.y+=n):e.points.forEach((function(e){e.x+=t,e.y+=n}))}},{key:"renderObject",value:function(e,t,n){if(e.clear(),e.beginFill(14079445),t.position&&t.size)e.drawRect(t.position.x*f,t.position.y*f,t.size.width*f,t.size.height*f),e.endFill();else{var o=t.points[0];e.moveTo(o.x*f,o.y*f);for(var i=0;i<t.points.length;i++){var r=t.points[i];e.lineTo(r.x*f,r.y*f)}e.endFill()}e.tint=n?16777164:16777215}}]),n}(p),I="token",M=function(e,t,n,o,i,r){return Object(x.a)(Object(x.a)({},_(I)),{},{textureUrl:e,position:{x:t,y:n},size:{width:o,height:i},angle:r})},k=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"dungeonObjectType",get:function(){return I}},{key:"translate",value:function(e,t,n){e.position.x+=t,e.position.y+=n}},{key:"createRenderObject",value:function(){return new O.h}},{key:"renderObject",value:function(e,t,n){var o;(e.zIndex=4,e.texture=O.j.from("/pungeon-react"+t.textureUrl),e.x=t.position.x*f,e.y=t.position.y*f,e.width=t.size.width*f,e.height=t.size.height*f,e.angle=t.angle,n)?(0===e.children.length?(o=new O.c,e.addChild(o)):o=e.getChildAt(0),o.clear(),o.lineStyle(5,16776448),o.drawShape(e.getLocalBounds())):e.children.length>0&&e.removeChildAt(0)}}]),n}(p),A=[new S,new m,new L,new D,new k],B=function(e,t,n){return A.filter((function(t){return t.dungeonObjectType===e.type})).map((function(o){return o.translate(e,t,n)}))},R=function(e,t,n){return U(e,[t],n)},U=function(e,t,n){return e.map((function(e){if(t.includes(e.id)){var o=Object(x.a)({},e);return n(o),o}return e}))},G={NEW_DUNGEON:"NEW_DUNGEON",SET_DUNGEON_SIZE:"SET_DUNGEON_SIZE",MOVE_SELECTED_OBJECT:"MOVE_SELECTED_OBJECT",SET_SELECTED_OBJECT_TEXTURE_PATH:"SET_SELECTED_OBJECT_TEXTURE_PATH",SET_SELECTED_OBJECT_ANGLE:"SET_SELECTED_OBJECT_ANGLE",SET_SELECTED_OBJECT_LABEL:"SET_SELECTED_OBJECT_LABEL",SET_SELECTED_OBJECT_POSITION:"SET_SELECTED_OBJECT_POSITION",SET_SELECTED_OBJECT_SIZE:"SET_SELECTED_OBJECT_SIZE",SET_SELECTED_OBJECT_START:"SET_SELECTED_OBJECT_START",SET_SELECTED_OBJECT_END:"SET_SELECTED_OBJECT_END",ADD_OBJECT:"ADD_OBJECT",DELETE_OBJECTS:"DELETE_OBJECTS",SET_DUNGEON_NAME:"SET_DUNGEON_NAME"},J={name:"Dungeon",size:{width:28,height:32},objects:[M("/assets/stairs.png",2,4,1,2,0),w({startX:1,startY:1,endX:6,endY:6}),w({startX:6,startY:4,endX:13,endY:13}),w({startX:15,startY:15,endX:21,endY:22}),w({startX:21,startY:19,endX:25,endY:28}),C(1,1,1,6),C(6,6,1,6),C(6,13,6,6),C(13,13,6,13),C(13,4,13,13),C(6,4,13,4),C(6,1,6,4),C(1,1,6,1),C(15,15,15,22),C(21,22,15,22),C(21,15,15,15),C(21,19,21,15),C(25,19,21,19),C(21,22,21,28),C(21,28,25,28),C(25,19,25,28)]},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G.NEW_DUNGEON:return{name:"Untitled Dungeon",size:{width:24,height:32},objects:[]};case G.SET_DUNGEON_NAME:return Object(x.a)(Object(x.a)({},e),{},{name:t.name});case G.SET_DUNGEON_SIZE:return Object(x.a)(Object(x.a)({},e),{},{size:{width:t.width,height:t.height}});case G.MOVE_SELECTED_OBJECT:var n=U(e.objects,t.selectedObjectIds,(function(e){return B(e,t.deltaX,t.deltaY)}));return Object(x.a)(Object(x.a)({},e),{},{objects:n});case G.SET_SELECTED_OBJECT_TEXTURE_PATH:var o=R(e.objects,t.selectedObject,(function(e){return e.textureUrl=t.texturePath}));return Object(x.a)(Object(x.a)({},e),{},{objects:o});case G.SET_SELECTED_OBJECT_ANGLE:var i=R(e.objects,t.selectedObject,(function(e){return e.angle=t.angle}));return Object(x.a)(Object(x.a)({},e),{},{objects:i});case G.SET_SELECTED_OBJECT_LABEL:var r=R(e.objects,t.selectedObject,(function(e){return e.label=t.label}));return Object(x.a)(Object(x.a)({},e),{},{objects:r});case G.SET_SELECTED_OBJECT_POSITION:var c=R(e.objects,t.selectedObject,(function(e){return e.position={x:t.x,y:t.y}}));return Object(x.a)(Object(x.a)({},e),{},{objects:c});case G.SET_SELECTED_OBJECT_SIZE:var a=R(e.objects,t.selectedObject,(function(e){return e.size={width:t.width,height:t.height}}));return Object(x.a)(Object(x.a)({},e),{},{objects:a});case G.SET_SELECTED_OBJECT_START:var s=R(e.objects,t.selectedObject,(function(e){return e.start={x:t.x,y:t.y}}));return Object(x.a)(Object(x.a)({},e),{},{objects:s});case G.SET_SELECTED_OBJECT_END:var l=R(e.objects,t.selectedObject,(function(e){return e.end={x:t.x,y:t.y}}));return Object(x.a)(Object(x.a)({},e),{},{objects:l});case G.ADD_OBJECT:var u=e.objects.slice();return u=[].concat(Object(y.a)(u),[t.newObject]),Object(x.a)(Object(x.a)({},e),{},{objects:u});case G.DELETE_OBJECTS:var d=t.objectIds;if(d){var O=e.objects.filter((function(e){return!d.includes(e.id)}));return Object(x.a)(Object(x.a)({},e),{},{objects:O})}return e;default:return e}},X={SELECT:"select",NEW_WALL:"new_wall",NEW_SPACE_RECTANGLE:"new_space_rectangle",NEW_SPACE_POLYGON:"new_space_polygon",NEW_DOOR:"new_door",NEW_LABEL:"new_label",NEW_TOKEN:"new_token"},Y={scrollMovesViewport:!1,selectedTool:X.NEW_SPACE_RECTANGLE,scale:100,position:{x:0,y:0},mouse:{mouseDown:!1,startPosition:{x:0,y:0},currentPosition:{x:0,y:0}},keyboard:{heldKeys:{}},selectedObjectIds:[],selectingAtPoint:null,selectingInBoundingBox:null},V=Object(h.b)({editor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.KEY_PRESSED:var n=Object(x.a)({},e.keyboard.heldKeys);return n[t.key]=!0,Object(x.a)(Object(x.a)({},e),{},{keyboard:Object(x.a)(Object(x.a)({},e.keyboard),{},{heldKeys:n})});case E.KEY_RELEASED:var o=Object(x.a)({},e.keyboard.heldKeys);return delete o[t.key],Object(x.a)(Object(x.a)({},e),{},{keyboard:Object(x.a)(Object(x.a)({},e.keyboard),{},{heldKeys:o})});case E.PNG_EXPORTED:return Object(x.a)(Object(x.a)({},e),{},{exportToPngClicked:null});case E.EXPORT_TO_PNG_CLICKED:return Object(x.a)(Object(x.a)({},e),{},{exportToPngClicked:!0});case E.CLEAR_ONGOING_SPACE_POLYGON:return Object(x.a)(Object(x.a)({},e),{},{ongoingSpacePolygon:null});case E.ADD_ONGOING_SPACE_POLYGON:var i,r=[].concat(Object(y.a)(null!==(i=e.ongoingSpacePolygon)&&void 0!==i?i:[]),[t.position]);return Object(x.a)(Object(x.a)({},e),{},{ongoingSpacePolygon:r});case E.MOVE_VIEWPORT:return Object(x.a)(Object(x.a)({},e),{},{position:{x:e.position.x+t.deltaX,y:e.position.y+t.deltaY}});case E.SET_CURRENT_MOUSE_POSITION:return Object(x.a)(Object(x.a)({},e),{},{mouse:Object(x.a)(Object(x.a)({},e.mouse),{},{currentPosition:{x:t.x,y:t.y}})});case E.SCROLL_EVENT:if(!e.scrollMovesViewport||t.holdingCtrl){var c=10;t.scrollY>0&&(c*=-1);var a=10,s=200,l=Math.min(Math.max(e.scale+c,a),s);return e.scale!==l?Object(x.a)(Object(x.a)({},e),{},{scale:l,position:{x:e.position.x-e.mouse.currentPosition.x*(c/100),y:e.position.y-e.mouse.currentPosition.y*(c/100)}}):e}var u=.5;return Object(x.a)(Object(x.a)({},e),{},{position:{x:e.position.x-t.scrollX*u,y:e.position.y-t.scrollY*u}});case E.MOUSE_DOWN:return Object(x.a)(Object(x.a)({},e),{},{mouse:Object(x.a)(Object(x.a)({},e.mouse),{},{mouseDown:!0,startPosition:{x:e.mouse.currentPosition.x,y:e.mouse.currentPosition.y}})});case E.MOUSE_UP:return Object(x.a)(Object(x.a)({},e),{},{mouse:Object(x.a)(Object(x.a)({},e.mouse),{},{mouseDown:!1})});case E.SET_SCROLL_MOVES_VIEWPORT:return Object(x.a)(Object(x.a)({},e),{},{scrollMovesViewport:t.scrollMovesViewport});case E.SELECT_TOOL:var d=e.selectedObjectIds;return t.selectedTool!==X.SELECT&&(d=[]),Object(x.a)(Object(x.a)({},e),{},{selectedTool:t.selectedTool,selectedObjectIds:d});case E.SELECT_AT_POINT:return Object(x.a)(Object(x.a)({},e),{},{selectingAtPoint:{x:t.x,y:t.y,shouldMultiSelect:t.shouldMultiSelect}});case E.SELECT_IN_BOUNDING_BOX:return Object(x.a)(Object(x.a)({},e),{},{selectingInBoundingBox:{x:t.x,y:t.y,width:t.width,height:t.height,shouldMultiSelect:t.shouldMultiSelect}});case E.SELECT_OBJECT:var O;return O=t.shouldMultiSelect&&e.selectedObjectIds.includes(t.objectId)?e.selectedObjectIds.filter((function(e){return e!==t.objectId})):t.shouldMultiSelect?[].concat(Object(y.a)(e.selectedObjectIds),[t.objectId]):[t.objectId],Object(x.a)(Object(x.a)({},e),{},{selectedObjectIds:O,selectingAtPoint:null,selectingInBoundingBox:null});case E.SELECT_OBJECTS:var b;return b=t.shouldMultiSelect?Object(y.a)(new Set([].concat(Object(y.a)(e.selectedObjectIds),Object(y.a)(t.objectIds)))):t.objectIds,Object(x.a)(Object(x.a)({},e),{},{selectedObjectIds:b,selectingAtPoint:null,selectingInBoundingBox:null});case G.DELETE_OBJECTS:return Object(x.a)(Object(x.a)({},e),{},{selectedObjectIds:[]});case G.ADD_OBJECT:return Object(x.a)(Object(x.a)({},e),{},{selectedObjectIds:[t.newObject.id]});default:return Object(x.a)({},e)}},dungeon:W}),z=Object(h.c)(V,{},"undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),F=n(8),K=function(e){return{type:G.ADD_OBJECT,newObject:e}},Z=function(e){return{type:G.DELETE_OBJECTS,objectIds:e}},H=function(e,t,n){return{type:G.MOVE_SELECTED_OBJECT,selectedObjectIds:e,deltaX:t,deltaY:n}},q=function(e,t){return{type:G.SET_SELECTED_OBJECT_ANGLE,selectedObject:e,angle:t}},$=function(e){return e*e},Q=function(e,t){return Math.sqrt($(e.x-t.x)+$(e.y-t.y))},ee=function(e,t,n){var o=n.x-t.x,i=n.y-t.y,r=o*o+i*i,c=(e.x-t.x)*o+(e.y-t.y)*i,a=Math.min(1,Math.max(0,c/r));return{x:t.x+o*a,y:t.y+i*a}},te=function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,[{key:"onMouseUp",value:function(e){var t=e.getState(),n=t.editor.mouse.currentPosition,o=25,i=null,r=null;t.dungeon.objects.filter((function(e){return e.type===N})).forEach((function(e){var n={x:e.start.x*f,y:e.start.y*f},c={x:e.end.x*f,y:e.end.y*f},a=ee({x:t.editor.mouse.startPosition.x,y:t.editor.mouse.startPosition.y},n,c),s=Q(a,{x:t.editor.mouse.startPosition.x,y:t.editor.mouse.startPosition.y});(!o||s<o)&&(o=s,i=a,r=e.id)}));var c=t.dungeon.objects.find((function(e){return e.id===r}));if(c){var a,s,l,u,d={x:c.start.x*f,y:c.start.y*f},O={x:c.end.x*f,y:c.end.y*f},E=ee(n,d,O);e.dispatch(K((a=i.x/f,s=i.y/f,l=E.x/f,u=E.y/f,Object(x.a)(Object(x.a)({},_(g)),{},{start:{x:a,y:s},end:{x:l,y:u}}))))}}},{key:"renderTool",value:function(e,t){var n=e.editor.mouse.currentPosition;if(e.editor.mouse.mouseDown){var o=25,i=null,r=null;if(e.dungeon.objects.filter((function(e){return e.type===N})).forEach((function(t){var n={x:t.start.x*f,y:t.start.y*f},c={x:t.end.x*f,y:t.end.y*f},a=ee({x:e.editor.mouse.startPosition.x,y:e.editor.mouse.startPosition.y},n,c),s=Q(a,{x:e.editor.mouse.startPosition.x,y:e.editor.mouse.startPosition.y});(!o||s<o)&&(o=s,i=a,r=t.id)})),!i)return;var c=i.x,a=i.y,s=e.dungeon.objects.find((function(e){return e.id===r})),l={x:s.start.x*f,y:s.start.y*f},u={x:s.end.x*f,y:s.end.y*f},d=ee(n,l,u),E=d.x,b=d.y;t.lineStyle(5,16776448),t.line.cap=O.d.ROUND,t.moveTo(c,a),t.lineTo(E,b),t.lineStyle()}else{var j=25,h=null;e.dungeon.objects.filter((function(e){return e.type===N})).forEach((function(e){var t={x:e.start.x*f,y:e.start.y*f},o={x:e.end.x*f,y:e.end.y*f},i=ee(n,t,o),r=Q(i,n);(!j||r<j)&&(j=r,h=i)})),h&&(t.lineStyle(),t.beginFill(16776448),t.drawCircle(h.x,h.y,2.5),t.endFill())}}}]),e}(),ne=function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,[{key:"onMouseUp",value:function(e){var t,n,o,i=e.getState().editor.mouse.currentPosition,r=i.x/f,c=i.y/f;e.dispatch(K((t=r,n=c,o="Text Label",Object(x.a)(Object(x.a)({},_(v)),{},{label:o,position:{x:t,y:n}}))))}},{key:"renderTool",value:function(e,t){}}]),e}(),oe=function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,[{key:"onMouseUp",value:function(e){var t=e.getState(),n=t.editor.mouse.currentPosition,o=Math.floor(Math.min(t.editor.mouse.startPosition.x,n.x)/f),i=Math.floor(Math.min(t.editor.mouse.startPosition.y,n.y)/f),r=Math.ceil(Math.max(t.editor.mouse.startPosition.x,n.x)/f),c=Math.ceil(Math.max(t.editor.mouse.startPosition.y,n.y)/f);e.dispatch(K(w({startX:o,startY:i,endX:r,endY:c})))}},{key:"renderTool",value:function(e,t){var n,o,i,r,c=e.editor.mouse.currentPosition;if(e.editor.mouse.mouseDown){var a=Math.min(e.editor.mouse.startPosition.x,c.x),s=Math.min(e.editor.mouse.startPosition.y,c.y),l=Math.max(e.editor.mouse.startPosition.x,c.x),u=Math.max(e.editor.mouse.startPosition.y,c.y);n=Math.floor(a/f)*f,o=Math.floor(s/f)*f,i=(l=Math.floor(l/f)*f+f)-n,r=(u=Math.floor(u/f)*f+f)-o}else n=Math.floor(c.x/f)*f,o=Math.floor(c.y/f)*f,i=f,r=f;t.beginFill(0,0),t.lineStyle(1,16776448),t.drawRect(n,o,i,r),t.endFill()}}]),e}(),ie=function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,[{key:"onMouseUp",value:function(e){var t=e.getState(),n=t.editor.mouse.currentPosition,o=Math.round(t.editor.mouse.startPosition.x/f),i=Math.round(t.editor.mouse.startPosition.y/f),r=Math.round(n.x/f),c=Math.round(n.y/f);e.dispatch(K(C(o,i,r,c)))}},{key:"renderTool",value:function(e,t){var n=e.editor.mouse.currentPosition;if(e.editor.mouse.mouseDown){var o=Math.round(e.editor.mouse.startPosition.x/f)*f,i=Math.round(e.editor.mouse.startPosition.y/f)*f,r=Math.round(n.x/f)*f,c=Math.round(n.y/f)*f;t.lineStyle(5,16776448),t.line.cap=O.d.ROUND,t.moveTo(o,i),t.lineTo(r,c),t.lineStyle(),t.endFill()}else{var a=Math.round(n.x/f)*f,s=Math.round(n.y/f)*f;t.lineStyle(),t.beginFill(16776448),t.drawCircle(a,s,2.5),t.endFill()}}}]),e}(),re=function(e,t){return Math.abs(t.x-e.x)>5||Math.abs(t.y-e.y)>5},ce=function(e,t){return{x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),width:Math.abs(t.x-e.x),height:Math.abs(t.y-e.y)}},ae=function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,[{key:"onMouseUp",value:function(e){var t,n,o,i,r=e.getState(),c=r.editor.mouse.startPosition,a=r.editor.mouse.currentPosition,s=r.editor.keyboard.heldKeys.Shift;if(re(c,a)){var l=ce(c,a);e.dispatch((t=l.x,n=l.y,o=l.width,i=l.height,{type:E.SELECT_IN_BOUNDING_BOX,x:t,y:n,width:o,height:i,shouldMultiSelect:s}))}else e.dispatch(function(e,t,n){return{type:E.SELECT_AT_POINT,x:e,y:t,shouldMultiSelect:n}}(a.x,a.y,s))}},{key:"renderTool",value:function(e,t){var n=e.editor.mouse.startPosition,o=e.editor.mouse.currentPosition;if(e.editor.mouse.mouseDown&&re(n,o)){var i=ce(n,o);t.lineStyle(1,16776448).drawRect(i.x,i.y,i.width,i.height).lineStyle()}}}]),e}(),se=function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,[{key:"onMouseUp",value:function(e){var t,n=e.getState(),o=n.editor.mouse.currentPosition,i=Math.round(o.x/f),r=Math.round(o.y/f),c=null===(t=n.editor.ongoingSpacePolygon)||void 0===t?void 0:t[0];if(c&&c.x===i&&c.y===r){var a=n.editor.ongoingSpacePolygon;e.dispatch({type:E.CLEAR_ONGOING_SPACE_POLYGON}),e.dispatch(K(w({points:a})))}else e.dispatch(function(e,t){return{type:E.ADD_ONGOING_SPACE_POLYGON,position:{x:e,y:t}}}(i,r))}},{key:"renderTool",value:function(e,t){var n=e.editor.mouse.currentPosition,o=Math.round(n.x/f)*f,i=Math.round(n.y/f)*f;if(e.editor.ongoingSpacePolygon){t.lineStyle(2,16776448);var r=e.editor.ongoingSpacePolygon[0];t.moveTo(r.x*f,r.y*f);for(var c=1;c<e.editor.ongoingSpacePolygon.length;c++){var a=e.editor.ongoingSpacePolygon[c];t.lineTo(a.x*f,a.y*f)}t.lineTo(o,i),t.lineStyle()}else t.lineStyle(),t.beginFill(16776448),t.drawCircle(o,i,2.5),t.endFill()}}]),e}(),le=function(){function e(){Object(s.a)(this,e),this.tokenTextureUrl="/assets/stairs.png",this.height=2,this.width=1}return Object(l.a)(e,[{key:"onMouseUp",value:function(e){var t,n,o=e.getState().editor.mouse.currentPosition;t=Math.floor(o.x/f),n=Math.floor(o.y/f),e.dispatch(K(M(this.tokenTextureUrl,t,n,this.width,this.height,0)))}},{key:"renderTool",value:function(e,t){var n,o,i=e.editor.mouse.currentPosition;n=Math.floor(i.x/f)*f,o=Math.floor(i.y/f)*f,t.beginFill(0,0),t.lineStyle(1,16776448),t.drawRect(n,o,this.width*f,this.height*f),t.endFill()}}]),e}(),ue=(o={},Object(F.a)(o,X.NEW_DOOR,new te),Object(F.a)(o,X.NEW_SPACE_RECTANGLE,new oe),Object(F.a)(o,X.NEW_SPACE_POLYGON,new se),Object(F.a)(o,X.NEW_WALL,new ie),Object(F.a)(o,X.SELECT,new ae),Object(F.a)(o,X.NEW_LABEL,new ne),Object(F.a)(o,X.NEW_TOKEN,new le),o),de=function(e,t){var n=document.createElement("a");n.href=e,n.download=t,n.target="_blank",n.click()},Oe=function(e,t){var n=z.getState();if(function(e,t){e.stage.position.set(t.editor.position.x,t.editor.position.y)}(e,n),function(e,t){var n=e.editor.scale/100;t.stage.scale.x!==n&&t.stage.scale.set(n)}(n,e),function(e,t){if(e.editor.selectingAtPoint){var n=new O.e(e.editor.selectingAtPoint.x,e.editor.selectingAtPoint.y),o=t.stage.worldTransform.apply(n),i=t.renderer.plugins.interaction.hitTest(o);i?z.dispatch((c=i.id,a=e.editor.selectingAtPoint.shouldMultiSelect,{type:E.SELECT_OBJECT,objectId:c,shouldMultiSelect:a})):z.dispatch(b([],e.editor.selectingAtPoint.shouldMultiSelect))}else if(e.editor.selectingInBoundingBox){var r=[];t.stage.children.forEach((function(t){(function(e,t){var n=Math.max(e.x,t.x),o=Math.min(e.x+e.width,t.x+t.width),i=Math.max(e.y,t.y),r=Math.min(e.y+e.height,t.y+t.height);return o>=n&&r>=i})(t.getLocalBounds(),e.editor.selectingInBoundingBox)&&t.id&&r.push(t.id)})),r.length>0?z.dispatch(b(r,e.editor.selectingInBoundingBox.shouldMultiSelect)):z.dispatch(b([],!1))}var c,a}(n,e),t.clear(),Ee(e.stage,n),be(t,n.dungeon.size.width,n.dungeon.size.height),function(e,t){e.editor.exportToPngClicked&&function(e,t){var n=e.renderer.generateTexture(e.stage,null,1/e.stage.scale.x,new O.g(e.stage.position.x-1,e.stage.position.y-1,e.stage.width,e.stage.height)),o=t.dungeon.name.toLowerCase().replace(/\s/g,"_"),i="".concat(o,"_").concat(t.dungeon.size.width,"x").concat(t.dungeon.size.height,".png");de(e.renderer.extract.base64(n),i),z.dispatch({type:E.PNG_EXPORTED})}(t,e)}(n,e),e.renderer.plugins.interaction.mouseOverRenderer){!function(e,t){ue[e.editor.selectedTool].renderTool(e,t)}(n,t);var o=e.renderer.plugins.interaction.mouse.getLocalPosition(e.stage);z.dispatch(j(o.x,o.y))}else z.dispatch(j(null,null))},Ee=function(e,t){var n=t.dungeon.objects.reduce((function(e,t){return e[t.id]=t,e}),{}),o=new Set(e.children.map((function(e){return e.id})));Object.keys(n).forEach((function(t){if(!o.has(t)){var i=(r=n[t],A.filter((function(e){return e.dungeonObjectType===r.type})).map((function(e){return e.createRenderObject()}))[0]);i.id=t,i.interactive=!0,e.addChild(i)}var r})),e.children.forEach((function(o){if(o.id){var i=n[o.id];i?function(e,t,n){A.filter((function(e){return e.dungeonObjectType===t.type})).map((function(o){return o.renderObject(e,t,n)}))}(o,i,t.editor.selectedObjectIds.includes(o.id)):e.removeChild(o)}}))},be=function(e,t,n){e.lineStyle(1,4473924,1,.5);for(var o=0;o<=t;o++)e.moveTo(o*f,0),e.lineTo(o*f,n*f);for(var i=0;i<=n;i++)e.moveTo(0,i*f),e.lineTo(t*f,i*f)};var je=function(e,t){var n;e.repeat||t.dispatch((n=e.key,{type:E.KEY_PRESSED,key:n}));var o=t.getState();switch(e.key){case"Delete":return t.dispatch(Z(o.editor.selectedObjectIds));case"ArrowLeft":return t.dispatch(H(o.editor.selectedObjectIds,-1,0));case"ArrowRight":return t.dispatch(H(o.editor.selectedObjectIds,1,0));case"ArrowDown":return t.dispatch(H(o.editor.selectedObjectIds,0,1));case"ArrowUp":return t.dispatch(H(o.editor.selectedObjectIds,0,-1));default:return}},he=function(e,t){var n;t.dispatch((n=e.key,{type:E.KEY_RELEASED,key:n}))},ye=function(e,t){1===e.buttons&&t.dispatch({type:E.MOUSE_DOWN})},xe=function(e,t){t.getState().editor.mouse.mouseDown&&(t.dispatch({type:E.MOUSE_UP}),function(e){var t=e.getState();ue[t.editor.selectedTool].onMouseUp(e)}(t))},fe=function(e,t){var n,o;2===e.buttons&&t.dispatch((n=e.movementX,o=e.movementY,{type:E.MOVE_VIEWPORT,deltaX:n,deltaY:o}))},Te=function(e,t){var n,o,i;t.dispatch((n=e.deltaX,o=e.deltaY,i=e.getModifierState("Control"),{type:E.SCROLL_EVENT,scrollX:n,scrollY:o,holdingCtrl:i}))},_e=n(1),pe=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(_e.jsx)("div",{style:{height:"85vh"},tabIndex:-1,ref:function(t){return e.canvasDiv=t}})}},{key:"componentDidMount",value:function(){var e=new O.a({backgroundColor:6250335,sharedLoader:!0,sharedTicker:!0,antialias:!0});this.app=e,this.canvasDiv.appendChild(e.view),this.app.resizeTo=this.canvasDiv,this.app.resize();var t=new O.c;t.zIndex=Number.MAX_SAFE_INTEGER,e.stage.sortableChildren=!0,e.stage.addChild(t),this.setupInteractions(),e.ticker.add((function(){Oe(e,t)}))}},{key:"setupInteractions",value:function(){this.canvasDiv.addEventListener("wheel",(function(e){Te(e,z),e.preventDefault()})),this.canvasDiv.addEventListener("contextmenu",(function(e){e.preventDefault()})),this.canvasDiv.addEventListener("pointerdown",(function(e){ye(e,z)})),this.canvasDiv.addEventListener("pointerup",(function(e){xe(0,z)})),this.canvasDiv.addEventListener("pointermove",(function(e){fe(e,z)})),this.canvasDiv.addEventListener("keydown",(function(e){je(e,z)})),this.canvasDiv.addEventListener("keyup",(function(e){he(e,z)}))}}]),n}(r.a.Component),ge=n(12),Se=function(e){var t=e.title,n=e.children;return Object(_e.jsxs)("div",{className:"card bg-dark text-light border-secondary mb-3",children:[Object(_e.jsx)("div",{className:"card-header border-secondary",children:Object(_e.jsx)("h5",{children:t})}),Object(_e.jsx)("div",{className:"card-body",children:Object(_e.jsx)("div",{className:"form-group",children:n})})]})},ve=function(e){var t=e.title,n=e.x,o=e.y,i=e.onUpdate;return Object(_e.jsxs)(Se,{title:null!==t&&void 0!==t?t:"Position",children:[Object(_e.jsxs)("label",{children:["X:",Object(_e.jsx)("input",{className:"form-control bg-secondary text-light",type:"number",value:n,onChange:function(e){return i(parseInt(e.target.value),o)}})]}),Object(_e.jsxs)("label",{children:["Y:",Object(_e.jsx)("input",{className:"form-control bg-secondary text-light",type:"number",value:o,onChange:function(e){return i(n,parseInt(e.target.value))}})]})]})},me=function(e){var t=e.title,n=e.width,o=e.height,i=e.onUpdate;return Object(_e.jsxs)(Se,{title:null!==t&&void 0!==t?t:"Size",children:[Object(_e.jsxs)("label",{children:["Width:",Object(_e.jsx)("input",{className:"form-control bg-secondary text-light",type:"number",value:n,onChange:function(e){return i(parseInt(e.target.value),o)}})]}),Object(_e.jsxs)("label",{children:["Height:",Object(_e.jsx)("input",{className:"form-control bg-secondary text-light",type:"number",value:o,onChange:function(e){return i(n,parseInt(e.target.value))}})]})]})},Ne=function(e){var t=e.dispatch,n=e.selectedObjectId,o=e.selectedObject,i=e.dungeonName,c=e.dungeonSize,a=e.scrollPansViewport;return n?Object(_e.jsxs)(r.a.Fragment,{children:[void 0!==o.label&&Object(_e.jsx)(Se,{title:"Label",children:Object(_e.jsxs)("label",{children:["Label:",Object(_e.jsx)("input",{className:"form-control bg-secondary text-light",type:"text",value:o.label,onChange:function(e){return t(function(e,t){return{type:G.SET_SELECTED_OBJECT_LABEL,selectedObject:e,label:t}}(n,e.target.value))}})]})}),void 0!==o.textureUrl&&Object(_e.jsx)(Se,{title:"Texture Path",children:Object(_e.jsxs)("label",{children:["Path:",Object(_e.jsx)("input",{className:"form-control bg-secondary text-light",value:o.textureUrl,onChange:function(e){t(function(e,t){return{type:G.SET_SELECTED_OBJECT_TEXTURE_PATH,selectedObject:e,texturePath:t}}(n,e.target.value))}})]})}),o.position&&Object(_e.jsx)(ve,{x:o.position.x,y:o.position.y,onUpdate:function(e,o){return t(function(e,t,n){return{type:G.SET_SELECTED_OBJECT_POSITION,selectedObject:e,x:t,y:n}}(n,e,o))}}),o.size&&Object(_e.jsx)(me,{width:o.size.width,height:o.size.height,onUpdate:function(e,o){return t(function(e,t,n){return{type:G.SET_SELECTED_OBJECT_SIZE,selectedObject:e,width:t,height:n}}(n,e,o))}}),o.start&&Object(_e.jsx)(ve,{title:"Start",x:o.start.x,y:o.start.y,onUpdate:function(e,o){return t(function(e,t,n){return{type:G.SET_SELECTED_OBJECT_START,selectedObject:e,x:t,y:n}}(n,e,o))}}),o.end&&Object(_e.jsx)(ve,{title:"End",x:o.end.x,y:o.end.y,onUpdate:function(e,o){return t(function(e,t,n){return{type:G.SET_SELECTED_OBJECT_END,selectedObject:e,x:t,y:n}}(n,e,o))}}),void 0!==o.angle&&Object(_e.jsx)(Se,{title:"Angle",children:Object(_e.jsxs)("label",{children:["Angle:",Object(_e.jsx)("input",{className:"form-control bg-secondary text-light",type:"number",step:"45",min:"-360",max:"360",value:o.angle,onChange:function(e){t(q(n,e.target.value))}}),Object(_e.jsx)("input",{className:"form-control bg-secondary text-light",type:"range",step:"45",min:"-360",max:"360",style:{direction:"rtl"},value:o.angle,onChange:function(e){t(q(n,e.target.value))}})]})}),n&&Object(_e.jsx)(Se,{title:"Actions",children:Object(_e.jsx)("button",{className:"btn btn-outline-danger",onClick:function(){return t(Z([n]))},children:"Delete Object"})})]}):Object(_e.jsxs)(r.a.Fragment,{children:[Object(_e.jsxs)(Se,{title:"Instructions",children:[Object(_e.jsxs)("p",{children:[Object(_e.jsx)("i",{children:"Right click"})," to pan the view."]}),Object(_e.jsxs)("p",{children:[Object(_e.jsx)("i",{children:"Scroll"})," to zoom in and out."]}),Object(_e.jsxs)("p",{children:[Object(_e.jsx)("i",{children:"Left click and drag"})," to create new spaces with the New Space tool."]}),Object(_e.jsxs)("p",{children:[Object(_e.jsx)("i",{children:"Left click"})," to select spaces with the Select tool."]}),Object(_e.jsxs)("p",{children:[Object(_e.jsx)("i",{children:"Arrow keys"})," will move the currently selected space."]}),Object(_e.jsxs)("p",{children:[Object(_e.jsx)("i",{children:"Delete"})," will delete the currently selected space."]})]}),Object(_e.jsxs)(Se,{title:"Actions",children:[Object(_e.jsx)("button",{className:"btn btn-primary form-control mb-2",onClick:function(){return t({type:E.EXPORT_TO_PNG_CLICKED})},children:"Download Dungeon as PNG"}),Object(_e.jsx)("button",{className:"btn btn-outline-danger form-control mb-2",onClick:function(){return t({type:G.NEW_DUNGEON})},children:"New Dungeon"})]}),Object(_e.jsx)(Se,{title:"Dungeon Properties",children:Object(_e.jsxs)("label",{children:["Dungeon Name:",Object(_e.jsx)("input",{className:"form-control bg-secondary text-light",value:i,onChange:function(e){return t(function(e){return{type:G.SET_DUNGEON_NAME,name:e}}(e.target.value))}})]})}),Object(_e.jsx)(me,{title:"Dungeon Size",width:c.width,height:c.height,onUpdate:function(e,n){return t(function(e,t){return{type:G.SET_DUNGEON_SIZE,width:e,height:t}}(e,n))}}),Object(_e.jsx)(Se,{title:"Editor Options",children:Object(_e.jsx)("div",{className:"form-check",children:Object(_e.jsxs)("label",{className:"form-check-label",children:[Object(_e.jsx)("input",{className:"form-check-input",type:"checkbox",value:a,onChange:function(e){return t((n=e.target.checked,{type:E.SET_SCROLL_MOVES_VIEWPORT,scrollMovesViewport:n}));var n}}),"Scroll to pan"]})})})]})},Ce=Ne=Object(ge.b)((function(e){var t=1===e.editor.selectedObjectIds.length?e.editor.selectedObjectIds[0]:null,n=t?e.dungeon.objects.find((function(e){return e.id===t})):null;return{selectedObjectId:t,selectedObject:n,dungeonName:e.dungeon.name,dungeonSize:e.dungeon.size,scrollMovesViewport:e.editor.scrollMovesViewport}}))(Ne),Le=function(e){var t=e.toolName,n=e.toolId,o=e.selectedTool,i=e.onClick;return Object(_e.jsx)("button",{className:"btn btn-secondary"+(o===n?" active":""),onClick:function(){return i(n)},children:t})},Pe=function(e){var t=e.dispatch,n=e.selectedTool,o=function(e){return t({type:E.SELECT_TOOL,selectedTool:e})};return Object(_e.jsxs)("div",{className:"btn-group",role:"group",children:[Object(_e.jsx)(Le,{toolName:"Select",toolId:X.SELECT,selectedTool:n,onClick:o}),Object(_e.jsx)(Le,{toolName:"New Rectangular Space",toolId:X.NEW_SPACE_RECTANGLE,selectedTool:n,onClick:o}),Object(_e.jsx)(Le,{toolName:"New Polygonal Space",toolId:X.NEW_SPACE_POLYGON,selectedTool:n,onClick:o}),Object(_e.jsx)(Le,{toolName:"New Wall",toolId:X.NEW_WALL,selectedTool:n,onClick:o}),Object(_e.jsx)(Le,{toolName:"New Door",toolId:X.NEW_DOOR,selectedTool:n,onClick:o}),Object(_e.jsx)(Le,{toolName:"New Label",toolId:X.NEW_LABEL,selectedTool:n,onClick:o}),Object(_e.jsx)(Le,{toolName:"New Token",toolId:X.NEW_TOKEN,selectedTool:n,onClick:o})]})},we=Pe=Object(ge.b)((function(e){return{selectedTool:e.editor.selectedTool}}))(Pe);var De=function(){return Object(_e.jsxs)(r.a.Fragment,{children:[Object(_e.jsx)("nav",{className:"navbar navbar-dark bg-secondary",children:Object(_e.jsx)("span",{className:"navbar-brand",children:"Pungeon"})}),Object(_e.jsxs)("div",{className:"px-5",children:[Object(_e.jsx)("div",{className:"py-2",children:Object(_e.jsx)(we,{})}),Object(_e.jsxs)("div",{className:"row",children:[Object(_e.jsx)("div",{className:"col-md-9",children:Object(_e.jsx)(pe,{})}),Object(_e.jsx)("div",{className:"col-md-3",children:Object(_e.jsx)(Ce,{})})]})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(_e.jsx)(r.a.StrictMode,{children:Object(_e.jsx)(ge.a,{store:z,children:Object(_e.jsx)(De,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.9a3e8843.chunk.js.map