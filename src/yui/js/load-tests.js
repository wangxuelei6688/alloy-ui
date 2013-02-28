/* This file is auto-generated by (yogi loader --expand --js js/aui-loader.js --json js/aui-loader.json --mix --name aui-loader --start ../ --yes) */
var add = Y.Features.add;
// aui-event-input
add('load', '0', {
    "name": "aui-event-input",
    "test": function (A) {
    var supportsDOMEvent  = A.supportsDOMEvent,
        testFeature = A.Features.test,
        addFeature = A.Features.add;

    if (testFeature('event', 'input') === undefined) {
        addFeature('event', 'input', {
            test: function() {
                return supportsDOMEvent(document.createElement('textarea'), 'input');
            }
        });
    }

    return !testFeature('event', 'input');
},
    "trigger": "aui-event"
});
// aui-node-html5
add('load', '1', {
    "name": "aui-node-html5",
    "trigger": "aui-node",
    "ua": "ie"
});