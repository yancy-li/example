/**
 * 自定义组件
 */
ui.CustomView = function () {
    ht.ui.CustomView.superClass.constructor.call(this);
};

def(ui.CustomView, ht.ui.View, {

    // 样式属性
    ui_ac: ['shape', 'shapeWidth', 'shapeHeight'],

    __shape: 'circle',
    __shapeWidth: 100,
    __shapeHeight: 100,

    getInteractorClasses: function() {
        return ui.CustomView.superClass.getInteractorClasses.call(this).concat([ui.CustomViewInteractor]);
    },

    /**
     * 计算首选大小
     * @override
     */
    figurePreferredSize: function () {
        var self = this,
            shapeWidth = self.getShapeWidth(),
            shapeHeight = self.getShapeHeight(),
            size = {
                width: self.getPaddingLeft() + self.getPaddingRight() +
                    self.getBorderLeft() + self.getBorderRight(),
                height: self.getPaddingTop() + self.getPaddingBottom() +
                    self.getBorderTop() + self.getBorderBottom()
            };
        size.width += shapeWidth;
        size.height += shapeHeight;

        return size;
    },

    /**
     * 绘制组件
     * @param {Number} x
     * @param {Number} y
     * @param {Number} width
     * @param {Number} height
     * @override
     */
    validateImpl: function (x, y, width, height) {
        var self = this;
        ht.ui.CustomView.superClass.validateImpl.call(self, x, y, width, height);

        var g = self.getRootContext(),
            shape = self.getShape(),
            shapeWidth = self.getShapeWidth(),
            shapeHeight = self.getShapeHeight();

        g.beginPath();
        g.fillStyle = 'yellow';
        if (shape === 'rect') {
            g.rect(x, y, width, height);
        } else {
            g.arc(x + width / 2, y + height / 2, Math.min(width, height) / 2, 0, Math.PI * 2);
        }
        g.fill();
    },

    /**
     * 注册可序列化的属性
     * @return {Object}
     * @override
     */
    getPreferredSizeProperties: function () {
        var preferredSizeProperties = ui.CustomView.superClass.getPreferredSizeProperties.call(this);
        preferredSizeProperties = Default.clone(preferredSizeProperties);

        preferredSizeProperties.shape = true;
        preferredSizeProperties.shapeWidth = true;
        preferredSizeProperties.shapeHeight = true;
        
        return preferredSizeProperties;
    }
});