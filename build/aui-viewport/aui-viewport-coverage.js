if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-viewport/aui-viewport.js']) {
   __coverage__['build/aui-viewport/aui-viewport.js'] = {"path":"build/aui-viewport/aui-viewport.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0]},"f":{"1":0,"2":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":24},"end":{"line":1,"column":43}}},"2":{"name":"(anonymous_2)","line":24,"loc":{"start":{"line":24,"column":21},"end":{"line":24,"column":32}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":74,"column":71}},"2":{"start":{"line":3,"column":0},"end":{"line":22,"column":93}},"3":{"start":{"line":24,"column":0},"end":{"line":60,"column":2}},"4":{"start":{"line":25,"column":4},"end":{"line":25,"column":20}},"5":{"start":{"line":27,"column":4},"end":{"line":27,"column":71}},"6":{"start":{"line":28,"column":4},"end":{"line":28,"column":35}},"7":{"start":{"line":29,"column":4},"end":{"line":29,"column":43}},"8":{"start":{"line":31,"column":4},"end":{"line":31,"column":50}},"9":{"start":{"line":33,"column":4},"end":{"line":33,"column":13}},"10":{"start":{"line":34,"column":4},"end":{"line":34,"column":12}},"11":{"start":{"line":36,"column":4},"end":{"line":51,"column":5}},"12":{"start":{"line":37,"column":8},"end":{"line":50,"column":9}},"13":{"start":{"line":38,"column":12},"end":{"line":38,"column":38}},"14":{"start":{"line":40,"column":12},"end":{"line":47,"column":13}},"15":{"start":{"line":41,"column":16},"end":{"line":41,"column":28}},"16":{"start":{"line":43,"column":16},"end":{"line":43,"column":71}},"17":{"start":{"line":46,"column":16},"end":{"line":46,"column":28}},"18":{"start":{"line":49,"column":12},"end":{"line":49,"column":49}},"19":{"start":{"line":53,"column":4},"end":{"line":53,"column":49}},"20":{"start":{"line":55,"column":4},"end":{"line":55,"column":41}},"21":{"start":{"line":57,"column":4},"end":{"line":59,"column":5}},"22":{"start":{"line":58,"column":8},"end":{"line":58,"column":38}},"23":{"start":{"line":62,"column":0},"end":{"line":62,"column":68}},"24":{"start":{"line":63,"column":0},"end":{"line":63,"column":68}},"25":{"start":{"line":65,"column":0},"end":{"line":65,"column":17}},"26":{"start":{"line":67,"column":0},"end":{"line":71,"column":2}}},"branchMap":{"1":{"line":9,"type":"binary-expr","locations":[{"start":{"line":9,"column":23},"end":{"line":9,"column":39}},{"start":{"line":9,"column":44},"end":{"line":14,"column":5}}]},"2":{"line":16,"type":"binary-expr","locations":[{"start":{"line":16,"column":27},"end":{"line":16,"column":46}},{"start":{"line":16,"column":51},"end":{"line":16,"column":74}}]},"3":{"line":37,"type":"if","locations":[{"start":{"line":37,"column":8},"end":{"line":37,"column":8}},{"start":{"line":37,"column":8},"end":{"line":37,"column":8}}]},"4":{"line":40,"type":"if","locations":[{"start":{"line":40,"column":12},"end":{"line":40,"column":12}},{"start":{"line":40,"column":12},"end":{"line":40,"column":12}}]},"5":{"line":57,"type":"if","locations":[{"start":{"line":57,"column":4},"end":{"line":57,"column":4}},{"start":{"line":57,"column":4},"end":{"line":57,"column":4}}]}},"code":["(function () { YUI.add('aui-viewport', function (A, NAME) {","","var getClassName = A.getClassName,","","    defaults = A.namespace('config.viewport'),","","    CSS_PREFIX = getClassName('view') + A.config.classNameDelimiter,","","    DEFAULTS_COLUMNS = defaults.columns || (defaults.columns = {","        12: 960,","        9: 720,","        6: 480,","        4: 320","    }),","","    DEFAULTS_MIN_COLUMNS = defaults.minColumns || (defaults.minColumns = 4),","","    DOC_EL = A.config.doc.documentElement,","","    WIN = A.getWin(),","","    REGEX_CLASSNAMES = new RegExp('(\\\\s|\\\\b)+' + CSS_PREFIX + '(lt|gt)*\\\\d+(\\\\b|\\\\s)+', 'g');","","var viewportChange = function() {","    var buffer = [];","","    var oldClassNames = DOC_EL.className.replace(REGEX_CLASSNAMES, '');","    var classNames = oldClassNames;","    var viewportWidth = DOC_EL.clientWidth;","","    var viewportMaxColumns = DEFAULTS_MIN_COLUMNS;","","    var gtLt;","    var col;","","    for (var i in DEFAULTS_COLUMNS) {","        if (DEFAULTS_COLUMNS.hasOwnProperty(i)) {","            col = DEFAULTS_COLUMNS[i];","","            if (viewportWidth >= col) {","                gtLt = 'gt';","","                viewportMaxColumns = Math.max(viewportMaxColumns, col);","            }","            else {","                gtLt = 'lt';","            }","","            buffer.push(CSS_PREFIX + gtLt + col);","        }","    }","","    buffer.push(CSS_PREFIX + viewportMaxColumns);","","    classNames += ' ' + buffer.join(' ');","","    if (oldClassNames !== classNames) {","        DOC_EL.className = classNames;","    }","};","","var resizeHandle = WIN.on('resize', A.debounce(viewportChange, 50));","var orientationHandle = WIN.on('orientationchange', viewportChange);","","viewportChange();","","A.Viewport = {","    viewportChange: viewportChange,","    _orientationHandle: orientationHandle,","    _resizeHandle: resizeHandle","};","","","}, '3.0.3-deprecated.33', {\"requires\": [\"aui-node\", \"aui-component\"]});","","}());"]};
}
var __cov_JgkhXtGQ5I63ZLMyvj6yog = __coverage__['build/aui-viewport/aui-viewport.js'];
__cov_JgkhXtGQ5I63ZLMyvj6yog.s['1']++;YUI.add('aui-viewport',function(A,NAME){__cov_JgkhXtGQ5I63ZLMyvj6yog.f['1']++;__cov_JgkhXtGQ5I63ZLMyvj6yog.s['2']++;var getClassName=A.getClassName,defaults=A.namespace('config.viewport'),CSS_PREFIX=getClassName('view')+A.config.classNameDelimiter,DEFAULTS_COLUMNS=(__cov_JgkhXtGQ5I63ZLMyvj6yog.b['1'][0]++,defaults.columns)||(__cov_JgkhXtGQ5I63ZLMyvj6yog.b['1'][1]++,defaults.columns={12:960,9:720,6:480,4:320}),DEFAULTS_MIN_COLUMNS=(__cov_JgkhXtGQ5I63ZLMyvj6yog.b['2'][0]++,defaults.minColumns)||(__cov_JgkhXtGQ5I63ZLMyvj6yog.b['2'][1]++,defaults.minColumns=4),DOC_EL=A.config.doc.documentElement,WIN=A.getWin(),REGEX_CLASSNAMES=new RegExp('(\\s|\\b)+'+CSS_PREFIX+'(lt|gt)*\\d+(\\b|\\s)+','g');__cov_JgkhXtGQ5I63ZLMyvj6yog.s['3']++;var viewportChange=function(){__cov_JgkhXtGQ5I63ZLMyvj6yog.f['2']++;__cov_JgkhXtGQ5I63ZLMyvj6yog.s['4']++;var buffer=[];__cov_JgkhXtGQ5I63ZLMyvj6yog.s['5']++;var oldClassNames=DOC_EL.className.replace(REGEX_CLASSNAMES,'');__cov_JgkhXtGQ5I63ZLMyvj6yog.s['6']++;var classNames=oldClassNames;__cov_JgkhXtGQ5I63ZLMyvj6yog.s['7']++;var viewportWidth=DOC_EL.clientWidth;__cov_JgkhXtGQ5I63ZLMyvj6yog.s['8']++;var viewportMaxColumns=DEFAULTS_MIN_COLUMNS;__cov_JgkhXtGQ5I63ZLMyvj6yog.s['9']++;var gtLt;__cov_JgkhXtGQ5I63ZLMyvj6yog.s['10']++;var col;__cov_JgkhXtGQ5I63ZLMyvj6yog.s['11']++;for(var i in DEFAULTS_COLUMNS){__cov_JgkhXtGQ5I63ZLMyvj6yog.s['12']++;if(DEFAULTS_COLUMNS.hasOwnProperty(i)){__cov_JgkhXtGQ5I63ZLMyvj6yog.b['3'][0]++;__cov_JgkhXtGQ5I63ZLMyvj6yog.s['13']++;col=DEFAULTS_COLUMNS[i];__cov_JgkhXtGQ5I63ZLMyvj6yog.s['14']++;if(viewportWidth>=col){__cov_JgkhXtGQ5I63ZLMyvj6yog.b['4'][0]++;__cov_JgkhXtGQ5I63ZLMyvj6yog.s['15']++;gtLt='gt';__cov_JgkhXtGQ5I63ZLMyvj6yog.s['16']++;viewportMaxColumns=Math.max(viewportMaxColumns,col);}else{__cov_JgkhXtGQ5I63ZLMyvj6yog.b['4'][1]++;__cov_JgkhXtGQ5I63ZLMyvj6yog.s['17']++;gtLt='lt';}__cov_JgkhXtGQ5I63ZLMyvj6yog.s['18']++;buffer.push(CSS_PREFIX+gtLt+col);}else{__cov_JgkhXtGQ5I63ZLMyvj6yog.b['3'][1]++;}}__cov_JgkhXtGQ5I63ZLMyvj6yog.s['19']++;buffer.push(CSS_PREFIX+viewportMaxColumns);__cov_JgkhXtGQ5I63ZLMyvj6yog.s['20']++;classNames+=' '+buffer.join(' ');__cov_JgkhXtGQ5I63ZLMyvj6yog.s['21']++;if(oldClassNames!==classNames){__cov_JgkhXtGQ5I63ZLMyvj6yog.b['5'][0]++;__cov_JgkhXtGQ5I63ZLMyvj6yog.s['22']++;DOC_EL.className=classNames;}else{__cov_JgkhXtGQ5I63ZLMyvj6yog.b['5'][1]++;}};__cov_JgkhXtGQ5I63ZLMyvj6yog.s['23']++;var resizeHandle=WIN.on('resize',A.debounce(viewportChange,50));__cov_JgkhXtGQ5I63ZLMyvj6yog.s['24']++;var orientationHandle=WIN.on('orientationchange',viewportChange);__cov_JgkhXtGQ5I63ZLMyvj6yog.s['25']++;viewportChange();__cov_JgkhXtGQ5I63ZLMyvj6yog.s['26']++;A.Viewport={viewportChange:viewportChange,_orientationHandle:orientationHandle,_resizeHandle:resizeHandle};},'3.0.3-deprecated.33',{'requires':['aui-node','aui-component']});
