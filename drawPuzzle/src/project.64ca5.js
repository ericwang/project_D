__require=function t(e,o,n){function i(c,s){if(!o[c]){if(!e[c]){var a=c.split("/");if(a=a[a.length-1],!e[a]){var l="function"==typeof __require&&__require;if(!s&&l)return l(a,!0);if(r)return r(a,!0);throw new Error("Cannot find module '"+c+"'")}}var u=o[c]={exports:{}};e[c][0].call(u.exports,function(t){return i(e[c][1][t]||t)},u,u.exports,t,e,o,n)}return o[c].exports}for(var r="function"==typeof __require&&__require,c=0;c<n.length;c++)i(n[c]);return i}({CommonEnum:[function(t,e,o){"use strict";cc._RF.push(e,"ebd65ilRd5AS5yZr46iX7LL","CommonEnum"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,i=n.ccclass,r=(n.property,function(){function t(t){this._line=e.INVALID_LINE,this._gridNode=t}var e;return e=t,Object.defineProperty(t.prototype,"line",{get:function(){return this._line},set:function(t){this._line=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"gridNode",{get:function(){return this._gridNode},set:function(t){this._gridNode=t},enumerable:!0,configurable:!0}),t.prototype.pointValid=function(){return this._line==e.INVALID_LINE},t.INVALID_LINE=-1,t=e=__decorate([i],t)}());o.default=r;var c=function(){function t(){}return t.DRAWING=1,t.DELETE_LINE=2,t.PAUSE=3,t=__decorate([i],t)}();o.GAME_STATE=c,cc._RF.pop()},{}],EditorDefine:[function(t,e,o){"use strict";cc._RF.push(e,"732a8wYa4pIN7I+grggFcOj","EditorDefine"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,i=n.ccclass,r=(n.property,function(){function t(){}return t.COLOR_DEFINE=[28,63,88,255,44,100,138,255,74,143,185,255,129,217,222,255,36,74,16,255,61,121,32,255,96,198,49,255,138,233,95,255,138,117,2,255,184,158,0,255,208,172,0,255,227,198,0,255,130,72,21,255,184,100,25,255,220,121,33,255,245,256,75,255,115,39,29,255,162,57,43,255,208,74,57,255,245,106,87,255,67,40,78,255,103,61,119,255,152,88,177,255,203,115,239,255,245,0,0,255,245,148,0,255,245,245,0,255,0,245,0,255,0,0,0,255,82,82,82,255,163,163,163,255,245,245,245,255],t.EDITOR_DRAWING=1,t.EDITOR_EARSERING=2,t.X_MIN=5,t.X_MAX=25,t.Y_MIN=5,t.Y_MAX=25,t.GRID_WIDTH=25,t.GRID_HEIGHT=25,t=__decorate([i],t)}());o.default=r;var c=function(){function t(t,e){this._index=t,this._color=e,this._mark=!1,this._num=0}return Object.defineProperty(t.prototype,"index",{get:function(){return this._index},set:function(t){this._index=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"color",{get:function(){return this._color},set:function(t){this._color=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"mark",{get:function(){return this._mark},set:function(t){this._mark=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"num",{get:function(){return this._num},set:function(t){this._num=t},enumerable:!0,configurable:!0}),t=__decorate([i],t)}();o.GridData=c,cc._RF.pop()},{}],Editor:[function(t,e,o){"use strict";cc._RF.push(e,"d0ec93Be2NGUYjC/chACHz6","Editor"),Object.defineProperty(o,"__esModule",{value:!0});var n=t("./EditorDefine"),i=(t("../Common/PuzzleGenerateUtils"),t("../Common/PuzzleLevel")),r=cc._decorator,c=r.ccclass,s=r.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.XLabel=null,e.YLable=null,e.colorPanel=null,e.canvasPanel=null,e.colorFilter=null,e.colorGrid=null,e._colorGridPool=null,e._X_COUNT=10,e._Y_COUNT=10,e._state=n.default.EDITOR_DRAWING,e._curColor=null,e}return __extends(e,t),e.prototype.start=function(){for(var t=n.default.COLOR_DEFINE,e=0;e<t.length;e+=4){var o=cc.instantiate(this.colorFilter);this.colorPanel.addChild(o),o.on(cc.Node.EventType.TOUCH_END,this.setPenColor,this),o.color=cc.color(t[e],t[e+1],t[e+2],t[e+3])}this._colorGridPool=new cc.NodePool;for(var i=0;i<this._X_COUNT*this._Y_COUNT;++i){var r=cc.instantiate(this.colorGrid);this._colorGridPool.put(r)}this.refreshCanvas()},e.prototype.setPenColor=function(t){this._curColor=t.target.color,console.log(t.target.color,this._curColor)},e.prototype.btnReturnClick=function(){cc.director.loadScene("Game")},e.prototype.btnPenClick=function(){this._state=n.default.EDITOR_DRAWING},e.prototype.btnEraserClick=function(){this._state=n.default.EDITOR_EARSERING},e.prototype.btnGenerateClick=function(){this.loadConfig()},e.prototype.sliderX=function(t){var e=n.default.X_MIN+Math.round(t.progress*(n.default.X_MAX-n.default.X_MIN));e!=this._X_COUNT&&(this._X_COUNT=e,this.refreshCanvas())},e.prototype.sliderY=function(t){var e=n.default.Y_MIN+Math.round(t.progress*(n.default.Y_MAX-n.default.Y_MIN));e!=this._Y_COUNT&&(this._Y_COUNT=e,this.refreshCanvas())},e.prototype.createColorGrid=function(){return cc.instantiate(this.colorGrid)},e.prototype.drawGrid=function(t){var e=t.target;this._state==n.default.EDITOR_DRAWING?this._curColor&&e.getComponent("GridUnit").setColor(this._curColor):this._state==n.default.EDITOR_EARSERING&&e.getComponent("GridUnit").setColor(null)},e.prototype.refreshCanvas=function(){this.XLabel.string="X: "+this._X_COUNT,this.YLable.string="Y: "+this._Y_COUNT,this.canvasPanel.width=this._X_COUNT*n.default.GRID_WIDTH,this.canvasPanel.height=this._Y_COUNT*n.default.GRID_HEIGHT,this.canvasPanel.removeAllChildren(),console.log("canvas children: ",this.canvasPanel.children.length);for(var t=0;t<this._X_COUNT*this._Y_COUNT;++t){var e=this.createColorGrid();e.on(cc.Node.EventType.TOUCH_END,this.drawGrid,this),e.getComponent("GridUnit").setNum(t),e.name="colorgrid"+t,this.canvasPanel.addChild(e)}},e.prototype.loadConfig=function(){var t=this;cc.loader.loadRes("sampleLevel",function(e,o){if(e)console.log(e);else{var n=new i.default(o.json);t._X_COUNT=n._width,t._Y_COUNT=n._height,t.refreshCanvas();for(var r=0;r<t._X_COUNT*t._Y_COUNT;++r){var c=String(r);if(n.isOriginGrid(c)){var s=t.canvasPanel.getChildByName("colorgrid"+r),a=new cc.Color;a=a.fromHEX(n.getColorByIdx(c)),console.log("clr = ",a),s.getComponent("GridUnit").setColor(a)}}}})},__decorate([s(cc.Label)],e.prototype,"XLabel",void 0),__decorate([s(cc.Label)],e.prototype,"YLable",void 0),__decorate([s(cc.Node)],e.prototype,"colorPanel",void 0),__decorate([s(cc.Node)],e.prototype,"canvasPanel",void 0),__decorate([s(cc.Prefab)],e.prototype,"colorFilter",void 0),__decorate([s(cc.Prefab)],e.prototype,"colorGrid",void 0),e=__decorate([c],e)}(cc.Component);o.default=a,cc._RF.pop()},{"../Common/PuzzleGenerateUtils":"PuzzleGenerateUtils","../Common/PuzzleLevel":"PuzzleLevel","./EditorDefine":"EditorDefine"}],Game:[function(t,e,o){"use strict";cc._RF.push(e,"5a103Ie2VZJXKMtf3TR0agT","Game"),Object.defineProperty(o,"__esModule",{value:!0});var n=t("./Common/CommonEnum"),i=t("./Common/CommonEnum"),r=cc._decorator,c=r.ccclass,s=r.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.lbState=null,e.continer=null,e.bgGrid=null,e.linePrefab=null,e.row_grid_num=15,e.vol_grid_num=15,e._lineOBjects={},e._curDrawingLineNode=null,e._moveIdx=-1,e._arrPointsData=[],e._gameState=0,e}return __extends(e,t),e.prototype.start=function(){for(var t=0;t<this.row_grid_num;++t)for(var e=0;e<this.vol_grid_num;++e){var o=cc.instantiate(this.bgGrid);this._arrPointsData.push(new n.default(o)),this.continer.addChild(o),(t+e)%2==1&&(o.color=cc.Color.BLUE)}this.continer.on(cc.Node.EventType.TOUCH_START,this.onTouch,this),this.continer.on(cc.Node.EventType.TOUCH_MOVE,this.onTouch,this),this.continer.on(cc.Node.EventType.TOUCH_END,this.onTouch,this),this.continer.on(cc.Node.EventType.TOUCH_CANCEL,this.onTouch,this),this.switchState(i.GAME_STATE.DRAWING)},e.prototype.onTouch=function(t){var e=t.type,o=t.touch._point,n=this.continer.convertToNodeSpace(o);if(!(n.x<0||n.y<0||n.x>this.continer.width||n.y>this.continer.height)){var r=Math.floor(n.x/40),c=Math.floor(n.y/40)*this.row_grid_num+r,s=this._arrPointsData[c].gridNode;"touchstart"==e?(console.log(c,s.x,s.y),this._moveIdx=c,this._gameState==i.GAME_STATE.DRAWING?this.drawLine(this._moveIdx):this._gameState==i.GAME_STATE.DELETE_LINE&&this.deleteLine(this._moveIdx)):"touchmove"==e?this._gameState==i.GAME_STATE.DRAWING&&this._curDrawingLineNode&&c!=this._moveIdx&&(this._moveIdx=c,this._curDrawingLineNode.getComponent("LineObject").setPoint(c)):"touchend"!=e&&"touchcancel"!=e||(this.checkCurrentLine(),this._curDrawingLineNode=null,this._moveIdx=-1)}},e.prototype.touchGrid=function(t){this.drawLine(t)},e.prototype.drawLine=function(t){if(!this._arrPointsData[t].pointValid()){var e=this._arrPointsData[t].line;return this._curDrawingLineNode=this._lineOBjects[e],-1}return console.log("\u7ed8\u5236\u4e00\u6761\u65b0\u7ebf",t,this._arrPointsData[t].pointValid()),this._curDrawingLineNode=cc.instantiate(this.linePrefab),this._curDrawingLineNode.getComponent("LineObject").setContainer(this.continer,this._arrPointsData),this._curDrawingLineNode.getComponent("LineObject").setPoint(t),this.node.addChild(this._curDrawingLineNode),this._lineOBjects[t]=this._curDrawingLineNode,0},e.prototype.checkCurrentLine=function(){if(1==this._curDrawingLineNode.getComponent("LineObject").getPointCount()){var t=this._curDrawingLineNode.getComponent("LineObject").getLineIndex();this._curDrawingLineNode.getComponent("LineObject").deleteLine(),this._lineOBjects[t]=null}},e.prototype.deleteLine=function(t){var e=this._arrPointsData[t].line;e!=n.default.INVALID_LINE&&(console.log("lineIdx",e,this._lineOBjects[e]),this._lineOBjects[e].getComponent("LineObject").deleteLine(),this._lineOBjects[e]=null)},e.prototype.btnSwitchStateClick=function(){cc.director.loadScene("Editor")},e.prototype.switchState=function(t){this._gameState=t,this._gameState==i.GAME_STATE.DRAWING?this.lbState.string="DRAWING":this._gameState==i.GAME_STATE.DELETE_LINE&&(this.lbState.string="DELETING")},e.prototype.dispose=function(){this._lineOBjects={},this._curDrawingLineNode=null},__decorate([s(cc.Label)],e.prototype,"lbState",void 0),__decorate([s(cc.Node)],e.prototype,"continer",void 0),__decorate([s(cc.Prefab)],e.prototype,"bgGrid",void 0),__decorate([s(cc.Prefab)],e.prototype,"linePrefab",void 0),__decorate([s],e.prototype,"row_grid_num",void 0),__decorate([s],e.prototype,"vol_grid_num",void 0),e=__decorate([c],e)}(cc.Component);o.default=a,cc._RF.pop()},{"./Common/CommonEnum":"CommonEnum"}],GridUnit:[function(t,e,o){"use strict";cc._RF.push(e,"e823djSAKVEk76TRTtM4DlZ","GridUnit"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,i=n.ccclass,r=n.property,c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.emptyNode=null,e.colorNode=null,e.lbNum=null,e}return __extends(e,t),e.prototype.onLoad=function(){this.setColor(null)},e.prototype.start=function(){},e.prototype.setColor=function(t){console.log("setColor -> ",t),t?(this.emptyNode.active=!1,this.colorNode.active=!0,this.colorNode.color=t):(this.emptyNode.active=!0,this.colorNode.active=!1)},e.prototype.painted=function(){return this.colorNode.active},e.prototype.paintColor=function(){return this.colorNode.color},e.prototype.unuse=function(){console.log("unuse")},e.prototype.reuse=function(){console.log("reuse")},e.prototype.setNum=function(t){this.lbNum.string=t},__decorate([r(cc.Node)],e.prototype,"emptyNode",void 0),__decorate([r(cc.Node)],e.prototype,"colorNode",void 0),__decorate([r(cc.Label)],e.prototype,"lbNum",void 0),e=__decorate([i],e)}(cc.Component);o.default=c,cc._RF.pop()},{}],LineObject:[function(t,e,o){"use strict";cc._RF.push(e,"8f27aP8ZGdFNIIL3YrDTO51","LineObject"),Object.defineProperty(o,"__esModule",{value:!0});var n=t("./Common/CommonEnum"),i=cc._decorator,r=i.ccclass,c=i.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.lineUnit=null,e._containNode=null,e._arrPointsData=[],e._pointsStack=[],e._startPointIdx=-1,e}return __extends(e,t),e.prototype.start=function(){},e.prototype.setContainer=function(t,e){this._containNode=t,this.node.width=this._containNode.width,this.node.height=this._containNode.height,this._arrPointsData=e},e.prototype.setPoint=function(t){var e=this.findPointIndex(t);if(-1!=e)return console.log("findPoint",e,this._pointsStack.length),void(e==this._pointsStack.length-2&&this.popPoint());var o=this._pointsStack.length;o>=1?this.drawUnitLine(this._pointsStack[o-1],t)&&this.pushPoint(t):(this._startPointIdx=t,this.pushPoint(t))},e.prototype.findPointIndex=function(t){return this._pointsStack.indexOf(t)},e.prototype.pushPoint=function(t){console.log("push",this._startPointIdx,t),this._pointsStack.push(t),this._arrPointsData[t].line=this._startPointIdx},e.prototype.popPoint=function(){var t=this._pointsStack.pop();this._arrPointsData[t].line=n.default.INVALID_LINE,this.node.getChildByName("idx"+t).removeFromParent()},e.prototype.deleteLine=function(){var t=this;this._pointsStack.forEach(function(e){t._arrPointsData[e].line=n.default.INVALID_LINE}),this.node.destroy(),console.log("\u5220\u9664\u4e86\u4e00\u6761\u7ebf",this._startPointIdx)},e.prototype.getPointCount=function(){return this._pointsStack.length},e.prototype.getLineIndex=function(){return this._startPointIdx},e.prototype.drawUnitLine=function(t,e){console.log("drawUnitLine",t,e);var o=Math.floor(t/15),n=t%15,i=Math.floor(e/15),r=e%15,c=this._arrPointsData[t].gridNode,s=0,a=0,l=0,u=0;if(r==n?i==o+1?(s=1,a=90,l=c.x,u=c.y+c.height/2):i==o-1&&(s=2,a=90,l=c.x,u=c.y-c.height/2):i==o&&(r==n-1?(s=3,a=0,l=c.x-c.width/2,u=c.y):r==n+1&&(s=4,a=0,l=c.x+c.width/2,u=c.y)),console.log("dir",s),!(s>=1&&s<=4))return!1;console.log(o,n,i,r,s,a);var d=cc.instantiate(this.lineUnit);return d.rotation=a,d.x=l,d.y=u,d.name="idx"+e,this.node.addChild(d),!0},e.prototype.dispose=function(){this._pointsStack=[],this._containNode=null,this._arrPointsData=null,this._startPointIdx=-1},__decorate([c(cc.Label)],e.prototype,"label",void 0),__decorate([c(cc.Prefab)],e.prototype,"lineUnit",void 0),e=__decorate([r],e)}(cc.Component);o.default=s,cc._RF.pop()},{"./Common/CommonEnum":"CommonEnum"}],PuzzleGenerateUtils:[function(t,e,o){"use strict";cc._RF.push(e,"67150JxXEVOmIOBITCb5LZm","PuzzleGenerateUtils"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,i=n.ccclass,r=(n.property,function(){function t(){this._arr=null}var e;return e=t,t.getInstance=function(){return this._generate||(this._generate=new e),this._generate},t.prototype.getCoordinateByIndex=function(t){},t.prototype.getIndexByCoordinate=function(t){},t.prototype.generate=function(t,e,o){this._arr=t,this._X=e,this._Y=o,this._tmpArrIndex=[];var n={width:this._X,height:this._Y,colors:[],grids:{}};this._arr.forEach(function(t){""!=t.color&&-1==n.colors.indexOf(t.color)&&n.colors.push(t.color)});for(var i=0;i<this._arr.length;i++){var r=this._arr[i];if(""!=r.color){var c=n.colors.indexOf(r.color);n.grids[""+i]=c}}var s=JSON.stringify(n),a=new File([s],"imageRawColor.json",{type:"text/plain;charset=utf-8"});window.saveAs(a)},t.prototype.generatePuzzle=function(){this._tmpArrIndex=[];this.findSameColorArea(1)},t.prototype.findSameColorArea=function(t){var e=1,o=(this._arr[t].color,this.getCoordinateByIndex(t),this.getIndexByCoordinate(void 0));return e+=this.findSameColorArea(o),e+=this.findSameColorArea(void 0)},t=e=__decorate([i],t)}());o.default=r,cc._RF.pop()},{}],PuzzleLevel:[function(t,e,o){"use strict";cc._RF.push(e,"e855fz2xbVFG47h87dYjhBu","PuzzleLevel"),Object.defineProperty(o,"__esModule",{value:!0});var n=function(){function t(t){this._width=t.width,this._height=t.height,this._colors=t.colorArr,this._grids=t.gridIndex}return Object.defineProperty(t.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"colors",{get:function(){return this._colors},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"grids",{get:function(){return this._grids},enumerable:!0,configurable:!0}),t.prototype.isOriginGrid=function(t){return!!this._grids[t]},t.prototype.getColorByIdx=function(t){var e=this._grids[t];return this._colors[e]},t}();o.default=n,cc._RF.pop()},{}],PuzzleStuct:[function(t,e,o){"use strict";cc._RF.push(e,"90d30e0htFOvp1oN0oVUong","PuzzleStuct"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,i=n.ccclass,r=(n.property,function(){function t(){this._arrGrid=[]}return Object.defineProperty(t.prototype,"X",{get:function(){return this._X},set:function(t){this._X=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"Y",{get:function(){return this._Y},set:function(t){this._Y=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"arrGrid",{get:function(){return this._arrGrid},set:function(t){this._arrGrid=t},enumerable:!0,configurable:!0}),t=__decorate([i],t)}());o.default=r,cc._RF.pop()},{}],Utils:[function(t,e,o){"use strict";cc._RF.push(e,"0449124vUBDuaYUjjRa32rh","Utils");cc._RF.pop()},{}]},{},["CommonEnum","PuzzleGenerateUtils","PuzzleLevel","PuzzleStuct","Utils","Editor","EditorDefine","GridUnit","Game","LineObject"]);