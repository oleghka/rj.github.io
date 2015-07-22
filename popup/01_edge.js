/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'bg',
                type: 'image',
                rect: ['0px', '0px','1024px','727px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg.jpg",'0px','0px']
            },
            {
                id: 'window',
                type: 'image',
                rect: ['184px', '113px','656px','502px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"window.png",'0px','0px']
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['14px', '214px','83px','82px','auto', 'auto'],
                cursor: ['pointer'],
                opacity: 0,
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'RectangleCopy',
                type: 'rect',
                rect: ['806px', '114px','38px','38px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_bg}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_window}": [
                ["style", "top", '113px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '184px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "width", '1024px'],
                ["style", "height", '727px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Rectangle}": [
                ["style", "top", '214px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '82px'],
                ["style", "opacity", '0'],
                ["style", "left", '14px'],
                ["style", "width", '83px']
            ],
            "${_RectangleCopy}": [
                ["style", "top", '114px'],
                ["style", "left", '806px'],
                ["style", "height", '38px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '38px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid16", tween: [ "style", "${_bg}", "opacity", '0.5', { fromValue: '1'}], position: 0, duration: 500, easing: "easeInQuad" },
                { id: "eid15", tween: [ "style", "${_window}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInOutBack" },
                { id: "eid20", tween: [ "transform", "${_window}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInOutBack" },
                { id: "eid18", tween: [ "transform", "${_window}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInOutBack" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-72952345");
