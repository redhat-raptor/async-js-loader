var iAJSLoader = {
    scripts: [],
    stateTracker: [],
    curGroupIndex: 0,
    onCompleteCalled: false,
    onComplete: function() {},
    onStateChange: function(groupIndex, group, path, callbackName) {
        this.stateTracker[groupIndex] = this.stateTracker[groupIndex] || {};
        this.stateTracker[groupIndex].total = group.length;

        var _success = false;
        return function() {
          if (!_success && (!this.readyState || (this.readyState == 'complete'))) {
            _success = true;
            iAJSLoader.stateTracker[groupIndex].loaded = iAJSLoader.stateTracker[groupIndex].loaded || 0;
            iAJSLoader.stateTracker[groupIndex].loaded++;

            if(iAJSLoader.stateTracker[groupIndex].loaded == iAJSLoader.stateTracker[groupIndex].total) {
                iAJSLoader[callbackName]();
            }
          }
        };
    },
    init: function(scripts) {
        this.scripts = scripts;
        this.loadNextGroup();
    },
    loadNextGroup: function() {
        if (!this.scripts.length) {
            if(this.onCompleteCalled) return;

            this.onCompleteCalled = true;
            return this.onComplete();
        }

        var group = this.scripts.shift();

        for(var si=0; si<group.length; si++) {
            var path = group[si];
            var scriptElm = document.createElement('script');
            scriptElm.type = 'text/javascript';
            scriptElm.async = 'async';
            scriptElm.src = path;
            scriptElm.onload = scriptElm.onreadystatechange = this.onStateChange(this.curGroupIndex, group, path, 'loadNextGroup');

            var headElm = document.head || document.getElementsByTagName('script')[0];
            headElm.appendChild(scriptElm);
        }

        this.curGroupIndex++;
    }
};