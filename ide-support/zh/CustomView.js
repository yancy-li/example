/**
 * 自定义组件<br>
 * 样式属性(不含从父类继承)：shape, shapeWidth, shapeHeight
 * @constructor
 * @extends {ht.ui.View}
 */
ht.ui.CustomView = function() {}

/**
 * 获取形状
 * @return {String} 形状，值为：circle|shape
 */
ht.ui.CustomView.prototype.getShape = function() {}

/**
 * 设置形状
 * @param {String} shape 形状，值为：circle|shape
 */
ht.ui.CustomView.prototype.setShape = function(shape) {}

/**
 * 获取形状宽度
 * @return {Number} 宽度值
 */
ht.ui.CustomView.prototype.getShapeWidth = function() {}

/**
 * 设置形状宽度
 * @param {Number} shapeWidth 宽度值
 */
ht.ui.CustomView.prototype.setShapeWidth = function(shapeWidth) {}


/**
 * 获取形状高度
 * @return {Number} 高度值
 */
ht.ui.CustomView.prototype.getShapeHeight = function() {}

/**
 * 设置形状高度
 * @param {Number} shapeHeight 高度值
 */
ht.ui.CustomView.prototype.setShapeHeight = function(shapeHeight) {}