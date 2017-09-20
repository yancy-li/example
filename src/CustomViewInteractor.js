/**
 * 交互器
 */
ui.CustomViewInteractor = function (comp) {
    ui.CustomViewInteractor.superClass.constructor.call(this, comp);
}

def(ui.CustomViewInteractor, ui.Interactor, {
    handle_mousedown: function (e) {
        this.handle_touchstart(e);
    },
    handle_touchstart: function (e) {
        var self = this;
        Default.preventDefault(e);
        if (Default.isLeftButton(e)) {
            var customView = self.getComponent();
            if (customView.getShape() === 'circle') {
                customView.setShape('rect');
            }
            else {
                customView.setShape('circle');
            }
        }
    }
});
