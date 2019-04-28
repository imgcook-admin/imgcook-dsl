/* eslint-disable */
module.exports = {
  "units": [
    "ch",
    "cm",
    "deg",
    "dpcm",
    "dpi",
    "dppx",
    "em",
    "ex",
    "fr",
    "grad",
    "Hz",
    "in",
    "kHz",
    "mm",
    "ms",
    "pc",
    "pt",
    "px",
    "Q",
    "rad",
    "rem",
    "s",
    "turn",
    "vh",
    "vmax",
    "vmin",
    "vw",
    "x"
  ],
  "properties": {
    "--*": {
      "syntax": "<declaration-value>",
      "initial": "seeProse"
    },
    "-ms-accelerator": {
      "syntax": "false | true",
      "initial": "false"
    },
    "-ms-block-progression": {
      "syntax": "tb | rl | bt | lr",
      "initial": "tb"
    },
    "-ms-content-zoom-chaining": {
      "syntax": "none | chained",
      "initial": "none"
    },
    "-ms-content-zooming": {
      "syntax": "none | zoom",
      "initial": "zoomForTheTopLevelNoneForTheRest"
    },
    "-ms-content-zoom-limit": {
      "syntax": "<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>",
      "initial": [
        "-ms-content-zoom-limit-max",
        "-ms-content-zoom-limit-min"
      ]
    },
    "-ms-content-zoom-limit-max": {
      "syntax": "<percentage>",
      "initial": "400%"
    },
    "-ms-content-zoom-limit-min": {
      "syntax": "<percentage>",
      "initial": "100%"
    },
    "-ms-content-zoom-snap": {
      "syntax": "<'-ms-content-zoom-snap-type'> || <'-ms-content-zoom-snap-points'>",
      "initial": [
        "-ms-content-zoom-snap-type",
        "-ms-content-zoom-snap-points"
      ]
    },
    "-ms-content-zoom-snap-points": {
      "syntax": "snapInterval( <percentage>, <percentage> ) | snapList( <percentage># )",
      "initial": "snapInterval(0%, 100%)"
    },
    "-ms-content-zoom-snap-type": {
      "syntax": "none | proximity | mandatory",
      "initial": "none"
    },
    "-ms-filter": {
      "syntax": "<string>",
      "initial": "\"\""
    },
    "-ms-flow-from": {
      "syntax": "[ none | <custom-ident> ]#",
      "initial": "none"
    },
    "-ms-flow-into": {
      "syntax": "[ none | <custom-ident> ]#",
      "initial": "none"
    },
    "-ms-high-contrast-adjust": {
      "syntax": "auto | none",
      "initial": "auto"
    },
    "-ms-hyphenate-limit-chars": {
      "syntax": "auto | <integer>{1,3}",
      "initial": "auto"
    },
    "-ms-hyphenate-limit-lines": {
      "syntax": "no-limit | <integer>",
      "initial": "no-limit"
    },
    "-ms-hyphenate-limit-zone": {
      "syntax": "<percentage> | <length>",
      "initial": "0"
    },
    "-ms-ime-align": {
      "syntax": "auto | after",
      "initial": "auto"
    },
    "-ms-overflow-style": {
      "syntax": "auto | none | scrollbar | -ms-autohiding-scrollbar",
      "initial": "auto"
    },
    "-ms-scrollbar-3dlight-color": {
      "syntax": "<color>",
      "initial": "dependsOnUserAgent"
    },
    "-ms-scrollbar-arrow-color": {
      "syntax": "<color>",
      "initial": "ButtonText"
    },
    "-ms-scrollbar-base-color": {
      "syntax": "<color>",
      "initial": "dependsOnUserAgent"
    },
    "-ms-scrollbar-darkshadow-color": {
      "syntax": "<color>",
      "initial": "ThreeDDarkShadow"
    },
    "-ms-scrollbar-face-color": {
      "syntax": "<color>",
      "initial": "ThreeDFace"
    },
    "-ms-scrollbar-highlight-color": {
      "syntax": "<color>",
      "initial": "ThreeDHighlight"
    },
    "-ms-scrollbar-shadow-color": {
      "syntax": "<color>",
      "initial": "ThreeDDarkShadow"
    },
    "-ms-scrollbar-track-color": {
      "syntax": "<color>",
      "initial": "Scrollbar"
    },
    "-ms-scroll-chaining": {
      "syntax": "chained | none",
      "initial": "chained"
    },
    "-ms-scroll-limit": {
      "syntax": "<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>",
      "initial": [
        "-ms-scroll-limit-x-min",
        "-ms-scroll-limit-y-min",
        "-ms-scroll-limit-x-max",
        "-ms-scroll-limit-y-max"
      ]
    },
    "-ms-scroll-limit-x-max": {
      "syntax": "auto | <length>",
      "initial": "auto"
    },
    "-ms-scroll-limit-x-min": {
      "syntax": "<length>",
      "initial": "0"
    },
    "-ms-scroll-limit-y-max": {
      "syntax": "auto | <length>",
      "initial": "auto"
    },
    "-ms-scroll-limit-y-min": {
      "syntax": "<length>",
      "initial": "0"
    },
    "-ms-scroll-rails": {
      "syntax": "none | railed",
      "initial": "railed"
    },
    "-ms-scroll-snap-points-x": {
      "syntax": "snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )",
      "initial": "snapInterval(0px, 100%)"
    },
    "-ms-scroll-snap-points-y": {
      "syntax": "snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )",
      "initial": "snapInterval(0px, 100%)"
    },
    "-ms-scroll-snap-type": {
      "syntax": "none | proximity | mandatory",
      "initial": "none"
    },
    "-ms-scroll-snap-x": {
      "syntax": "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>",
      "initial": [
        "-ms-scroll-snap-type",
        "-ms-scroll-snap-points-x"
      ]
    },
    "-ms-scroll-snap-y": {
      "syntax": "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>",
      "initial": [
        "-ms-scroll-snap-type",
        "-ms-scroll-snap-points-y"
      ]
    },
    "-ms-scroll-translation": {
      "syntax": "none | vertical-to-horizontal",
      "initial": "none"
    },
    "-ms-text-autospace": {
      "syntax": "none | ideograph-alpha | ideograph-numeric | ideograph-parenthesis | ideograph-space",
      "initial": "none"
    },
    "-ms-touch-select": {
      "syntax": "grippers | none",
      "initial": "grippers"
    },
    "-ms-user-select": {
      "syntax": "none | element | text",
      "initial": "text"
    },
    "-ms-wrap-flow": {
      "syntax": "auto | both | start | end | maximum | clear",
      "initial": "auto"
    },
    "-ms-wrap-margin": {
      "syntax": "<length>",
      "initial": "0"
    },
    "-ms-wrap-through": {
      "syntax": "wrap | none",
      "initial": "wrap"
    },
    "-moz-appearance": {
      "syntax": "none | button | button-arrow-down | button-arrow-next | button-arrow-previous | button-arrow-up | button-bevel | button-focus | caret | checkbox | checkbox-container | checkbox-label | checkmenuitem | dualbutton | groupbox | listbox | listitem | menuarrow | menubar | menucheckbox | menuimage | menuitem | menuitemtext | menulist | menulist-button | menulist-text | menulist-textfield | menupopup | menuradio | menuseparator | meterbar | meterchunk | progressbar | progressbar-vertical | progresschunk | progresschunk-vertical | radio | radio-container | radio-label | radiomenuitem | range | range-thumb | resizer | resizerpanel | scale-horizontal | scalethumbend | scalethumb-horizontal | scalethumbstart | scalethumbtick | scalethumb-vertical | scale-vertical | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | separator | sheet | spinner | spinner-downbutton | spinner-textfield | spinner-upbutton | splitter | statusbar | statusbarpanel | tab | tabpanel | tabpanels | tab-scroll-arrow-back | tab-scroll-arrow-forward | textfield | textfield-multiline | toolbar | toolbarbutton | toolbarbutton-dropdown | toolbargripper | toolbox | tooltip | treeheader | treeheadercell | treeheadersortarrow | treeitem | treeline | treetwisty | treetwistyopen | treeview | -moz-mac-unified-toolbar | -moz-win-borderless-glass | -moz-win-browsertabbar-toolbox | -moz-win-communicationstext | -moz-win-communications-toolbox | -moz-win-exclude-glass | -moz-win-glass | -moz-win-mediatext | -moz-win-media-toolbox | -moz-window-button-box | -moz-window-button-box-maximized | -moz-window-button-close | -moz-window-button-maximize | -moz-window-button-minimize | -moz-window-button-restore | -moz-window-frame-bottom | -moz-window-frame-left | -moz-window-frame-right | -moz-window-titlebar | -moz-window-titlebar-maximized",
      "initial": "noneButOverriddenInUserAgentCSS"
    },
    "-moz-binding": {
      "syntax": "<url> | none",
      "initial": "none"
    },
    "-moz-border-bottom-colors": {
      "syntax": "<color>+ | none",
      "initial": "none"
    },
    "-moz-border-left-colors": {
      "syntax": "<color>+ | none",
      "initial": "none"
    },
    "-moz-border-right-colors": {
      "syntax": "<color>+ | none",
      "initial": "none"
    },
    "-moz-border-top-colors": {
      "syntax": "<color>+ | none",
      "initial": "none"
    },
    "-moz-context-properties": {
      "syntax": "none | [ fill | fill-opacity | stroke | stroke-opacity ]#",
      "initial": "none"
    },
    "-moz-float-edge": {
      "syntax": "border-box | content-box | margin-box | padding-box",
      "initial": "content-box"
    },
    "-moz-force-broken-image-icon": {
      "syntax": "<integer>",
      "initial": "0"
    },
    "-moz-image-region": {
      "syntax": "<shape> | auto",
      "initial": "auto"
    },
    "-moz-orient": {
      "syntax": "inline | block | horizontal | vertical",
      "initial": "inline"
    },
    "-moz-outline-radius": {
      "syntax": "<outline-radius>{1,4} [ / <outline-radius>{1,4} ]?",
      "initial": [
        "-moz-outline-radius-topleft",
        "-moz-outline-radius-topright",
        "-moz-outline-radius-bottomright",
        "-moz-outline-radius-bottomleft"
      ]
    },
    "-moz-outline-radius-bottomleft": {
      "syntax": "<outline-radius>",
      "initial": "0"
    },
    "-moz-outline-radius-bottomright": {
      "syntax": "<outline-radius>",
      "initial": "0"
    },
    "-moz-outline-radius-topleft": {
      "syntax": "<outline-radius>",
      "initial": "0"
    },
    "-moz-outline-radius-topright": {
      "syntax": "<outline-radius>",
      "initial": "0"
    },
    "-moz-stack-sizing": {
      "syntax": "ignore | stretch-to-fit",
      "initial": "stretch-to-fit"
    },
    "-moz-text-blink": {
      "syntax": "none | blink",
      "initial": "none"
    },
    "-moz-user-focus": {
      "syntax": "ignore | normal | select-after | select-before | select-menu | select-same | select-all | none",
      "initial": "none"
    },
    "-moz-user-input": {
      "syntax": "auto | none | enabled | disabled",
      "initial": "auto"
    },
    "-moz-user-modify": {
      "syntax": "read-only | read-write | write-only",
      "initial": "read-only"
    },
    "-moz-window-dragging": {
      "syntax": "drag | no-drag",
      "initial": "drag"
    },
    "-moz-window-shadow": {
      "syntax": "default | menu | tooltip | sheet | none",
      "initial": "default"
    },
    "-webkit-appearance": {
      "syntax": "none | button | button-bevel | caret | checkbox | default-button | inner-spin-button | listbox | listitem | media-controls-background | media-controls-fullscreen-background | media-current-time-display | media-enter-fullscreen-button | media-exit-fullscreen-button | media-fullscreen-button | media-mute-button | media-overlay-play-button | media-play-button | media-seek-back-button | media-seek-forward-button | media-slider | media-sliderthumb | media-time-remaining-display | media-toggle-closed-captions-button | media-volume-slider | media-volume-slider-container | media-volume-sliderthumb | menulist | menulist-button | menulist-text | menulist-textfield | meter | progress-bar | progress-bar-value | push-button | radio | searchfield | searchfield-cancel-button | searchfield-decoration | searchfield-results-button | searchfield-results-decoration | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical | square-button | textarea | textfield",
      "initial": "noneButOverriddenInUserAgentCSS"
    },
    "-webkit-border-before": {
      "syntax": "<'border-width'> || <'border-style'> || <'color'>",
      "initial": [
        "border-width",
        "border-style",
        "color"
      ]
    },
    "-webkit-border-before-color": {
      "syntax": "<'color'>",
      "initial": "currentcolor"
    },
    "-webkit-border-before-style": {
      "syntax": "<'border-style'>",
      "initial": "none"
    },
    "-webkit-border-before-width": {
      "syntax": "<'border-width'>",
      "initial": "medium"
    },
    "-webkit-box-reflect": {
      "syntax": "[ above | below | right | left ]? <length>? <image>?",
      "initial": "none"
    },
    "-webkit-mask": {
      "syntax": "[ <mask-reference> || <position> [ / <bg-size> ]? || <repeat-style> || [ <box> | border | padding | content | text ] || [ <box> | border | padding | content ] ]#",
      "initial": [
        "-webkit-mask-image",
        "-webkit-mask-repeat",
        "-webkit-mask-attachment",
        "-webkit-mask-position",
        "-webkit-mask-origin",
        "-webkit-mask-clip"
      ]
    },
    "-webkit-mask-attachment": {
      "syntax": "<attachment>#",
      "initial": "scroll"
    },
    "-webkit-mask-clip": {
      "syntax": "[ <box> | border | padding | content | text ]#",
      "initial": "border"
    },
    "-webkit-mask-composite": {
      "syntax": "<composite-style>#",
      "initial": "source-over"
    },
    "-webkit-mask-image": {
      "syntax": "<mask-reference>#",
      "initial": "none"
    },
    "-webkit-mask-origin": {
      "syntax": "[ <box> | border | padding | content ]#",
      "initial": "padding"
    },
    "-webkit-mask-position": {
      "syntax": "<position>#",
      "initial": "0% 0%"
    },
    "-webkit-mask-position-x": {
      "syntax": "[ <length-percentage> | left | center | right ]#",
      "initial": "0%"
    },
    "-webkit-mask-position-y": {
      "syntax": "[ <length-percentage> | top | center | bottom ]#",
      "initial": "0%"
    },
    "-webkit-mask-repeat": {
      "syntax": "<repeat-style>#",
      "initial": "repeat"
    },
    "-webkit-mask-repeat-x": {
      "syntax": "repeat | no-repeat | space | round",
      "initial": "repeat"
    },
    "-webkit-mask-repeat-y": {
      "syntax": "repeat | no-repeat | space | round",
      "initial": "repeat"
    },
    "-webkit-mask-size": {
      "syntax": "<bg-size>#",
      "initial": "auto auto"
    },
    "-webkit-overflow-scrolling": {
      "syntax": "auto | touch",
      "initial": "auto"
    },
    "-webkit-tap-highlight-color": {
      "syntax": "<color>",
      "initial": "black"
    },
    "-webkit-text-fill-color": {
      "syntax": "<color>",
      "initial": "currentcolor"
    },
    "-webkit-text-stroke": {
      "syntax": "<length> || <color>",
      "initial": [
        "-webkit-text-stroke-width",
        "-webkit-text-stroke-color"
      ]
    },
    "-webkit-text-stroke-color": {
      "syntax": "<color>",
      "initial": "currentcolor"
    },
    "-webkit-text-stroke-width": {
      "syntax": "<length>",
      "initial": "0"
    },
    "-webkit-touch-callout": {
      "syntax": "default | none",
      "initial": "default"
    },
    "-webkit-user-modify": {
      "syntax": "read-only | read-write | read-write-plaintext-only",
      "initial": "read-only"
    },
    "align-content": {
      "syntax": "normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>",
      "initial": "normal"
    },
    "align-items": {
      "syntax": "normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]",
      "initial": "normal"
    },
    "align-self": {
      "syntax": "auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>",
      "initial": "auto"
    },
    "all": {
      "syntax": "initial | inherit | unset | revert",
      "initial": "noPracticalInitialValue"
    },
    "animation": {
      "syntax": "<single-animation>#",
      "initial": [
        "animation-name",
        "animation-duration",
        "animation-timing-function",
        "animation-delay",
        "animation-iteration-count",
        "animation-direction",
        "animation-fill-mode",
        "animation-play-state"
      ]
    },
    "animation-delay": {
      "syntax": "<time>#",
      "initial": "0s"
    },
    "animation-direction": {
      "syntax": "<single-animation-direction>#",
      "initial": "normal"
    },
    "animation-duration": {
      "syntax": "<time>#",
      "initial": "0s"
    },
    "animation-fill-mode": {
      "syntax": "<single-animation-fill-mode>#",
      "initial": "none"
    },
    "animation-iteration-count": {
      "syntax": "<single-animation-iteration-count>#",
      "initial": "1"
    },
    "animation-name": {
      "syntax": "[ none | <keyframes-name> ]#",
      "initial": "none"
    },
    "animation-play-state": {
      "syntax": "<single-animation-play-state>#",
      "initial": "running"
    },
    "animation-timing-function": {
      "syntax": "<single-timing-function>#",
      "initial": "ease"
    },
    "appearance": {
      "syntax": "auto | none",
      "initial": "auto"
    },
    "azimuth": {
      "syntax": "<angle> | [ [ left-side | far-left | left | center-left | center | center-right | right | far-right | right-side ] || behind ] | leftwards | rightwards",
      "initial": "center"
    },
    "backdrop-filter": {
      "syntax": "none | <filter-function-list>",
      "initial": "none"
    },
    "backface-visibility": {
      "syntax": "visible | hidden",
      "initial": "visible"
    },
    "background": {
      "syntax": "[ <bg-layer> , ]* <final-bg-layer>",
      "initial": [
        "background-image",
        "background-position",
        "background-size",
        "background-repeat",
        "background-origin",
        "background-clip",
        "background-attachment",
        "background-color"
      ]
    },
    "background-attachment": {
      "syntax": "<attachment>#",
      "initial": "scroll"
    },
    "background-blend-mode": {
      "syntax": "<blend-mode>#",
      "initial": "normal"
    },
    "background-clip": {
      "syntax": "<box>#",
      "initial": "border-box"
    },
    "background-color": {
      "syntax": "<color>",
      "initial": "transparent"
    },
    "background-image": {
      "syntax": "<bg-image>#",
      "initial": "none"
    },
    "background-origin": {
      "syntax": "<box>#",
      "initial": "padding-box"
    },
    "background-position": {
      "syntax": "<bg-position>#",
      "initial": "0% 0%"
    },
    "background-position-x": {
      "syntax": "[ center | [ left | right | x-start | x-end ]? <length-percentage>? ]#",
      "initial": "left"
    },
    "background-position-y": {
      "syntax": "[ center | [ top | bottom | y-start | y-end ]? <length-percentage>? ]#",
      "initial": "top"
    },
    "background-repeat": {
      "syntax": "<repeat-style>#",
      "initial": "repeat"
    },
    "background-size": {
      "syntax": "<bg-size>#",
      "initial": "auto auto"
    },
    "block-overflow": {
      "syntax": "clip | ellipsis | <string>",
      "initial": "clip"
    },
    "block-size": {
      "syntax": "<'width'>",
      "initial": "auto"
    },
    "border": {
      "syntax": "<line-width> || <line-style> || <color>",
      "initial": [
        "border-width",
        "border-style",
        "border-color"
      ]
    },
    "border-block-end": {
      "syntax": "<'border-width'> || <'border-style'> || <'color'>",
      "initial": [
        "border-width",
        "border-style",
        "color"
      ]
    },
    "border-block-end-color": {
      "syntax": "<'color'>",
      "initial": "currentcolor"
    },
    "border-block-end-style": {
      "syntax": "<'border-style'>",
      "initial": "none"
    },
    "border-block-end-width": {
      "syntax": "<'border-width'>",
      "initial": "medium"
    },
    "border-block-start": {
      "syntax": "<'border-width'> || <'border-style'> || <'color'>",
      "initial": [
        "border-width",
        "border-style",
        "color"
      ]
    },
    "border-block-start-color": {
      "syntax": "<'color'>",
      "initial": "currentcolor"
    },
    "border-block-start-style": {
      "syntax": "<'border-style'>",
      "initial": "none"
    },
    "border-block-start-width": {
      "syntax": "<'border-width'>",
      "initial": "medium"
    },
    "border-bottom": {
      "syntax": "<line-width> || <line-style> || <color>",
      "initial": [
        "border-bottom-width",
        "border-bottom-style",
        "border-bottom-color"
      ]
    },
    "border-bottom-color": {
      "syntax": "<color>",
      "initial": "currentcolor"
    },
    "border-bottom-left-radius": {
      "syntax": "<length-percentage>{1,2}",
      "initial": "0"
    },
    "border-bottom-right-radius": {
      "syntax": "<length-percentage>{1,2}",
      "initial": "0"
    },
    "border-bottom-style": {
      "syntax": "<line-style>",
      "initial": "none"
    },
    "border-bottom-width": {
      "syntax": "<line-width>",
      "initial": "medium"
    },
    "border-collapse": {
      "syntax": "collapse | separate",
      "initial": "separate"
    },
    "border-color": {
      "syntax": "<color>{1,4}",
      "initial": [
        "border-top-color",
        "border-right-color",
        "border-bottom-color",
        "border-left-color"
      ]
    },
    "border-image": {
      "syntax": "<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>",
      "initial": [
        "border-image-source",
        "border-image-slice",
        "border-image-width",
        "border-image-outset",
        "border-image-repeat"
      ]
    },
    "border-image-outset": {
      "syntax": "[ <length> | <number> ]{1,4}",
      "initial": "0"
    },
    "border-image-repeat": {
      "syntax": "[ stretch | repeat | round | space ]{1,2}",
      "initial": "stretch"
    },
    "border-image-slice": {
      "syntax": "<number-percentage>{1,4} && fill?",
      "initial": "100%"
    },
    "border-image-source": {
      "syntax": "none | <image>",
      "initial": "none"
    },
    "border-image-width": {
      "syntax": "[ <length-percentage> | <number> | auto ]{1,4}",
      "initial": "1"
    },
    "border-inline-end": {
      "syntax": "<'border-width'> || <'border-style'> || <'color'>",
      "initial": [
        "border-width",
        "border-style",
        "color"
      ]
    },
    "border-inline-end-color": {
      "syntax": "<'color'>",
      "initial": "currentcolor"
    },
    "border-inline-end-style": {
      "syntax": "<'border-style'>",
      "initial": "none"
    },
    "border-inline-end-width": {
      "syntax": "<'border-width'>",
      "initial": "medium"
    },
    "border-inline-start": {
      "syntax": "<'border-width'> || <'border-style'> || <'color'>",
      "initial": [
        "border-width",
        "border-style",
        "color"
      ]
    },
    "border-inline-start-color": {
      "syntax": "<'color'>",
      "initial": "currentcolor"
    },
    "border-inline-start-style": {
      "syntax": "<'border-style'>",
      "initial": "none"
    },
    "border-inline-start-width": {
      "syntax": "<'border-width'>",
      "initial": "medium"
    },
    "border-left": {
      "syntax": "<line-width> || <line-style> || <color>",
      "initial": [
        "border-left-width",
        "border-left-style",
        "border-left-color"
      ]
    },
    "border-left-color": {
      "syntax": "<color>",
      "initial": "currentcolor"
    },
    "border-left-style": {
      "syntax": "<line-style>",
      "initial": "none"
    },
    "border-left-width": {
      "syntax": "<line-width>",
      "initial": "medium"
    },
    "border-radius": {
      "syntax": "<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?",
      "initial": [
        "border-top-left-radius",
        "border-top-right-radius",
        "border-bottom-right-radius",
        "border-bottom-left-radius"
      ]
    },
    "border-right": {
      "syntax": "<line-width> || <line-style> || <color>",
      "initial": [
        "border-right-width",
        "border-right-style",
        "border-right-color"
      ]
    },
    "border-right-color": {
      "syntax": "<color>",
      "initial": "currentcolor"
    },
    "border-right-style": {
      "syntax": "<line-style>",
      "initial": "none"
    },
    "border-right-width": {
      "syntax": "<line-width>",
      "initial": "medium"
    },
    "border-spacing": {
      "syntax": "<length> <length>?",
      "initial": "0"
    },
    "border-style": {
      "syntax": "<line-style>{1,4}",
      "initial": [
        "border-top-style",
        "border-right-style",
        "border-bottom-style",
        "border-left-style"
      ]
    },
    "border-top": {
      "syntax": "<line-width> || <line-style> || <color>",
      "initial": [
        "border-top-width",
        "border-top-style",
        "border-top-color"
      ]
    },
    "border-top-color": {
      "syntax": "<color>",
      "initial": "currentcolor"
    },
    "border-top-left-radius": {
      "syntax": "<length-percentage>{1,2}",
      "initial": "0"
    },
    "border-top-right-radius": {
      "syntax": "<length-percentage>{1,2}",
      "initial": "0"
    },
    "border-top-style": {
      "syntax": "<line-style>",
      "initial": "none"
    },
    "border-top-width": {
      "syntax": "<line-width>",
      "initial": "medium"
    },
    "border-width": {
      "syntax": "<line-width>{1,4}",
      "initial": [
        "border-top-width",
        "border-right-width",
        "border-bottom-width",
        "border-left-width"
      ]
    },
    "bottom": {
      "syntax": "<length> | <percentage> | auto",
      "initial": "auto"
    },
    "box-align": {
      "syntax": "start | center | end | baseline | stretch",
      "initial": "stretch"
    },
    "box-decoration-break": {
      "syntax": "slice | clone",
      "initial": "slice"
    },
    "box-direction": {
      "syntax": "normal | reverse | inherit",
      "initial": "normal"
    },
    "box-flex": {
      "syntax": "<number>",
      "initial": "0"
    },
    "box-flex-group": {
      "syntax": "<integer>",
      "initial": "1"
    },
    "box-lines": {
      "syntax": "single | multiple",
      "initial": "single"
    },
    "box-ordinal-group": {
      "syntax": "<integer>",
      "initial": "1"
    },
    "box-orient": {
      "syntax": "horizontal | vertical | inline-axis | block-axis | inherit",
      "initial": "inlineAxisHorizontalInXUL"
    },
    "box-pack": {
      "syntax": "start | center | end | justify",
      "initial": "start"
    },
    "box-shadow": {
      "syntax": "none | <shadow>#",
      "initial": "none"
    },
    "box-sizing": {
      "syntax": "content-box | border-box",
      "initial": "content-box"
    },
    "break-after": {
      "syntax": "auto | avoid | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region",
      "initial": "auto"
    },
    "break-before": {
      "syntax": "auto | avoid | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region",
      "initial": "auto"
    },
    "break-inside": {
      "syntax": "auto | avoid | avoid-page | avoid-column | avoid-region",
      "initial": "auto"
    },
    "caption-side": {
      "syntax": "top | bottom | block-start | block-end | inline-start | inline-end",
      "initial": "top"
    },
    "caret-color": {
      "syntax": "auto | <color>",
      "initial": "auto"
    },
    "clear": {
      "syntax": "none | left | right | both | inline-start | inline-end",
      "initial": "none"
    },
    "clip": {
      "syntax": "<shape> | auto",
      "initial": "auto"
    },
    "clip-path": {
      "syntax": "<clip-source> | [ <basic-shape> || <geometry-box> ] | none",
      "initial": "none"
    },
    "color": {
      "syntax": "<color>",
      "initial": "variesFromBrowserToBrowser"
    },
    "color-adjust": {
      "syntax": "economy | exact",
      "initial": "economy"
    },
    "column-count": {
      "syntax": "<integer> | auto",
      "initial": "auto"
    },
    "column-fill": {
      "syntax": "auto | balance | balance-all",
      "initial": "balance"
    },
    "column-gap": {
      "syntax": "normal | <length-percentage>",
      "initial": "normal"
    },
    "column-rule": {
      "syntax": "<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>",
      "initial": [
        "column-rule-width",
        "column-rule-style",
        "column-rule-color"
      ]
    },
    "column-rule-color": {
      "syntax": "<color>",
      "initial": "currentcolor"
    },
    "column-rule-style": {
      "syntax": "<'border-style'>",
      "initial": "none"
    },
    "column-rule-width": {
      "syntax": "<'border-width'>",
      "initial": "medium"
    },
    "column-span": {
      "syntax": "none | all",
      "initial": "none"
    },
    "column-width": {
      "syntax": "<length> | auto",
      "initial": "auto"
    },
    "columns": {
      "syntax": "<'column-width'> || <'column-count'>",
      "initial": [
        "column-width",
        "column-count"
      ]
    },
    "contain": {
      "syntax": "none | strict | content | [ size || layout || style || paint ]",
      "initial": "none"
    },
    "content": {
      "syntax": "normal | none | [ <content-replacement> | <content-list> ] [/ <string> ]?",
      "initial": "normal"
    },
    "counter-increment": {
      "syntax": "[ <custom-ident> <integer>? ]+ | none",
      "initial": "none"
    },
    "counter-reset": {
      "syntax": "[ <custom-ident> <integer>? ]+ | none",
      "initial": "none"
    },
    "cursor": {
      "syntax": "[ [ <url> [ <x> <y> ]? , ]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing ] ]",
      "initial": "auto"
    },
    "direction": {
      "syntax": "ltr | rtl",
      "initial": "ltr"
    },
    "display": {
      "syntax": "[ <display-outside> || <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy>",
      "initial": "inline"
    },
    "empty-cells": {
      "syntax": "show | hide",
      "initial": "show"
    },
    "filter": {
      "syntax": "none | <filter-function-list>",
      "initial": "none"
    },
    "flex": {
      "syntax": "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
      "initial": [
        "flex-grow",
        "flex-shrink",
        "flex-basis"
      ]
    },
    "flex-basis": {
      "syntax": "content | <'width'>",
      "initial": "auto"
    },
    "flex-direction": {
      "syntax": "row | row-reverse | column | column-reverse",
      "initial": "row"
    },
    "flex-flow": {
      "syntax": "<'flex-direction'> || <'flex-wrap'>",
      "initial": [
        "flex-direction",
        "flex-wrap"
      ]
    },
    "flex-grow": {
      "syntax": "<number>",
      "initial": "0"
    },
    "flex-shrink": {
      "syntax": "<number>",
      "initial": "1"
    },
    "flex-wrap": {
      "syntax": "nowrap | wrap | wrap-reverse",
      "initial": "nowrap"
    },
    "float": {
      "syntax": "left | right | none | inline-start | inline-end",
      "initial": "none"
    },
    "font": {
      "syntax": "[ [ <'font-style'> || <font-variant-css21> || <'font-weight'> || <'font-stretch'> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ] | caption | icon | menu | message-box | small-caption | status-bar",
      "initial": [
        "font-style",
        "font-variant",
        "font-weight",
        "font-stretch",
        "font-size",
        "line-height",
        "font-family"
      ]
    },
    "font-family": {
      "syntax": "[ <family-name> | <generic-family> ]#",
      "initial": "PingFangSC"
    },
    "font-feature-settings": {
      "syntax": "normal | <feature-tag-value>#",
      "initial": "normal"
    },
    "font-kerning": {
      "syntax": "auto | normal | none",
      "initial": "auto"
    },
    "font-language-override": {
      "syntax": "normal | <string>",
      "initial": "normal"
    },
    "font-optical-sizing": {
      "syntax": "auto | none",
      "initial": "auto"
    },
    "font-variation-settings": {
      "syntax": "normal | [ <string> <number> ]#",
      "initial": "normal"
    },
    "font-size": {
      "syntax": "<absolute-size> | <relative-size> | <length-percentage>",
      "initial": "medium"
    },
    "font-size-adjust": {
      "syntax": "none | <number>",
      "initial": "none"
    },
    "font-stretch": {
      "syntax": "<font-stretch-absolute>",
      "initial": "normal"
    },
    "font-style": {
      "syntax": "normal | italic | oblique <angle>?",
      "initial": "normal"
    },
    "font-synthesis": {
      "syntax": "none | [ weight || style ]",
      "initial": "weight style"
    },
    "font-variant": {
      "syntax": "normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> || stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero || <east-asian-variant-values> || <east-asian-width-values> || ruby ]",
      "initial": "normal"
    },
    "font-variant-alternates": {
      "syntax": "normal | [ stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) ]",
      "initial": "normal"
    },
    "font-variant-caps": {
      "syntax": "normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps",
      "initial": "normal"
    },
    "font-variant-east-asian": {
      "syntax": "normal | [ <east-asian-variant-values> || <east-asian-width-values> || ruby ]",
      "initial": "normal"
    },
    "font-variant-ligatures": {
      "syntax": "normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]",
      "initial": "normal"
    },
    "font-variant-numeric": {
      "syntax": "normal | [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ]",
      "initial": "normal"
    },
    "font-variant-position": {
      "syntax": "normal | sub | super",
      "initial": "normal"
    },
    "font-weight": {
      "syntax": "<font-weight-absolute> | bolder | lighter",
      "initial": ["normal", 400]
    },
    "gap": {
      "syntax": "<'row-gap'> <'column-gap'>?",
      "initial": [
        "row-gap",
        "column-gap"
      ]
    },
    "grid": {
      "syntax": "<'grid-template'> | <'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>? | [ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>",
      "initial": [
        "grid-template-rows",
        "grid-template-columns",
        "grid-template-areas",
        "grid-auto-rows",
        "grid-auto-columns",
        "grid-auto-flow",
        "grid-column-gap",
        "grid-row-gap",
        "column-gap",
        "row-gap"
      ]
    },
    "grid-area": {
      "syntax": "<grid-line> [ / <grid-line> ]{0,3}",
      "initial": [
        "grid-row-start",
        "grid-column-start",
        "grid-row-end",
        "grid-column-end"
      ]
    },
    "grid-auto-columns": {
      "syntax": "<track-size>+",
      "initial": "auto"
    },
    "grid-auto-flow": {
      "syntax": "[ row | column ] || dense",
      "initial": "row"
    },
    "grid-auto-rows": {
      "syntax": "<track-size>+",
      "initial": "auto"
    },
    "grid-column": {
      "syntax": "<grid-line> [ / <grid-line> ]?",
      "initial": [
        "grid-column-start",
        "grid-column-end"
      ]
    },
    "grid-column-end": {
      "syntax": "<grid-line>",
      "initial": "auto"
    },
    "grid-column-gap": {
      "syntax": "<length-percentage>",
      "initial": "0"
    },
    "grid-column-start": {
      "syntax": "<grid-line>",
      "initial": "auto"
    },
    "grid-gap": {
      "syntax": "<'grid-row-gap'> <'grid-column-gap'>?",
      "initial": [
        "grid-row-gap",
        "grid-column-gap"
      ]
    },
    "grid-row": {
      "syntax": "<grid-line> [ / <grid-line> ]?",
      "initial": [
        "grid-row-start",
        "grid-row-end"
      ]
    },
    "grid-row-end": {
      "syntax": "<grid-line>",
      "initial": "auto"
    },
    "grid-row-gap": {
      "syntax": "<length-percentage>",
      "initial": "0"
    },
    "grid-row-start": {
      "syntax": "<grid-line>",
      "initial": "auto"
    },
    "grid-template": {
      "syntax": "none | [ <'grid-template-rows'> / <'grid-template-columns'> ] | [ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?",
      "initial": [
        "grid-template-columns",
        "grid-template-rows",
        "grid-template-areas"
      ]
    },
    "grid-template-areas": {
      "syntax": "none | <string>+",
      "initial": "none"
    },
    "grid-template-columns": {
      "syntax": "none | <track-list> | <auto-track-list>",
      "initial": "none"
    },
    "grid-template-rows": {
      "syntax": "none | <track-list> | <auto-track-list>",
      "initial": "none"
    },
    "hanging-punctuation": {
      "syntax": "none | [ first || [ force-end | allow-end ] || last ]",
      "initial": "none"
    },
    "height": {
      "syntax": "[ <length> | <percentage> ] && [ border-box | content-box ]? | available | min-content | max-content | fit-content | auto",
      "initial": "auto"
    },
    "hyphens": {
      "syntax": "none | manual | auto",
      "initial": "manual"
    },
    "image-orientation": {
      "syntax": "from-image | <angle> | [ <angle>? flip ]",
      "initial": "0deg"
    },
    "image-rendering": {
      "syntax": "auto | crisp-edges | pixelated",
      "initial": "auto"
    },
    "image-resolution": {
      "syntax": "[ from-image || <resolution> ] && snap?",
      "initial": "1dppx"
    },
    "ime-mode": {
      "syntax": "auto | normal | active | inactive | disabled",
      "initial": "auto"
    },
    "initial-letter": {
      "syntax": "normal | [ <number> <integer>? ]",
      "initial": "normal"
    },
    "initial-letter-align": {
      "syntax": "[ auto | alphabetic | hanging | ideographic ]",
      "initial": "auto"
    },
    "inline-size": {
      "syntax": "<'width'>",
      "initial": "auto"
    },
    "inset-block-end": {
      "syntax": "<'left'>",
      "initial": "auto"
    },
    "inset-block-start": {
      "syntax": "<'left'>",
      "initial": "auto"
    },
    "inset-inline-end": {
      "syntax": "<'left'>",
      "initial": "auto"
    },
    "inset-inline-start": {
      "syntax": "<'left'>",
      "initial": "auto"
    },
    "isolation": {
      "syntax": "auto | isolate",
      "initial": "auto"
    },
    "justify-content": {
      "syntax": "normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]",
      "initial": "normal"
    },
    "justify-items": {
      "syntax": "normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ] | legacy | legacy && [ left | right | center ]",
      "initial": "legacy"
    },
    "justify-self": {
      "syntax": "auto | normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ]",
      "initial": "auto"
    },
    "left": {
      "syntax": "<length> | <percentage> | auto",
      "initial": "auto"
    },
    "letter-spacing": {
      "syntax": "normal | <length>",
      "initial": "normal"
    },
    "line-break": {
      "syntax": "auto | loose | normal | strict",
      "initial": "auto"
    },
    "line-clamp": {
      "syntax": "none | <integer>",
      "initial": "none"
    },
    "line-height": {
      "syntax": "normal | <number> | <length> | <percentage>",
      "initial": "normal"
    },
    "list-style": {
      "syntax": "<'list-style-type'> || <'list-style-position'> || <'list-style-image'>",
      "initial": [
        "list-style-type",
        "list-style-position",
        "list-style-image"
      ]
    },
    "list-style-image": {
      "syntax": "<url> | none",
      "initial": "none"
    },
    "list-style-position": {
      "syntax": "inside | outside",
      "initial": "outside"
    },
    "list-style-type": {
      "syntax": "<counter-style> | <string> | none",
      "initial": "disc"
    },
    "margin": {
      "syntax": "[ <length> | <percentage> | auto ]{1,4}",
      "initial": [
        "margin-bottom",
        "margin-left",
        "margin-right",
        "margin-top"
      ]
    },
    "margin-block-end": {
      "syntax": "<'margin-left'>",
      "initial": "0"
    },
    "margin-block-start": {
      "syntax": "<'margin-left'>",
      "initial": "0"
    },
    "margin-bottom": {
      "syntax": "<length> | <percentage> | auto",
      "initial": "0"
    },
    "margin-inline-end": {
      "syntax": "<'margin-left'>",
      "initial": "0"
    },
    "margin-inline-start": {
      "syntax": "<'margin-left'>",
      "initial": "0"
    },
    "margin-left": {
      "syntax": "<length> | <percentage> | auto",
      "initial": "0"
    },
    "margin-right": {
      "syntax": "<length> | <percentage> | auto",
      "initial": "0"
    },
    "margin-top": {
      "syntax": "<length> | <percentage> | auto",
      "initial": "0"
    },
    "mask": {
      "syntax": "<mask-layer>#",
      "initial": [
        "mask-image",
        "mask-mode",
        "mask-repeat",
        "mask-position",
        "mask-clip",
        "mask-origin",
        "mask-size",
        "mask-composite"
      ]
    },
    "mask-border": {
      "syntax": "<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>",
      "initial": [
        "mask-border-mode",
        "mask-border-outset",
        "mask-border-repeat",
        "mask-border-slice",
        "mask-border-source",
        "mask-border-width"
      ]
    },
    "mask-border-mode": {
      "syntax": "luminance | alpha",
      "initial": "alpha"
    },
    "mask-border-outset": {
      "syntax": "[ <length> | <number> ]{1,4}",
      "initial": "0"
    },
    "mask-border-repeat": {
      "syntax": "[ stretch | repeat | round | space ]{1,2}",
      "initial": "stretch"
    },
    "mask-border-slice": {
      "syntax": "<number-percentage>{1,4} fill?",
      "initial": "0"
    },
    "mask-border-source": {
      "syntax": "none | <image>",
      "initial": "none"
    },
    "mask-border-width": {
      "syntax": "[ <length-percentage> | <number> | auto ]{1,4}",
      "initial": "auto"
    },
    "mask-clip": {
      "syntax": "[ <geometry-box> | no-clip ]#",
      "initial": "border-box"
    },
    "mask-composite": {
      "syntax": "<compositing-operator>#",
      "initial": "add"
    },
    "mask-image": {
      "syntax": "<mask-reference>#",
      "initial": "none"
    },
    "mask-mode": {
      "syntax": "<masking-mode>#",
      "initial": "match-source"
    },
    "mask-origin": {
      "syntax": "<geometry-box>#",
      "initial": "border-box"
    },
    "mask-position": {
      "syntax": "<position>#",
      "initial": "center"
    },
    "mask-repeat": {
      "syntax": "<repeat-style>#",
      "initial": "no-repeat"
    },
    "mask-size": {
      "syntax": "<bg-size>#",
      "initial": "auto"
    },
    "mask-type": {
      "syntax": "luminance | alpha",
      "initial": "luminance"
    },
    "max-block-size": {
      "syntax": "<'max-width'>",
      "initial": "0"
    },
    "max-height": {
      "syntax": "<length> | <percentage> | none | max-content | min-content | fit-content | fill-available",
      "initial": "none"
    },
    "max-inline-size": {
      "syntax": "<'max-width'>",
      "initial": "0"
    },
    "max-lines": {
      "syntax": "none | <integer>",
      "initial": "none"
    },
    "max-width": {
      "syntax": "<length> | <percentage> | none | max-content | min-content | fit-content | fill-available",
      "initial": "none"
    },
    "min-block-size": {
      "syntax": "<'min-width'>",
      "initial": "0"
    },
    "min-height": {
      "syntax": "<length> | <percentage> | auto | max-content | min-content | fit-content | fill-available",
      "initial": "auto"
    },
    "min-inline-size": {
      "syntax": "<'min-width'>",
      "initial": "0"
    },
    "min-width": {
      "syntax": "<length> | <percentage> | auto | max-content | min-content | fit-content | fill-available",
      "initial": "auto"
    },
    "mix-blend-mode": {
      "syntax": "<blend-mode>",
      "initial": "normal"
    },
    "motion": {
      "syntax": "&lt;'motion-path'&gt; &amp;&amp; &lt;'motion-offset'&gt; &amp;&amp; &lt;'motion-rotation'&gt;",
      "initial": [
        "motion-path",
        "motion-offset",
        "motion-rotation"
      ]
    },
    "motion-offset": {
      "syntax": "&lt;length-percentage&gt;",
      "initial": "<code>0</code>"
    },
    "motion-path": {
      "syntax": "&lt;url&gt; | [ &lt;basic-shape&gt; | &lt;path()&gt; ] || &lt;geometry-box&gt; | none",
      "initial": "<code>none</code>"
    },
    "motion-rotation": {
      "syntax": "[ auto | reverse ] &amp;&amp; &lt;angle&gt;",
      "initial": "<code>auto</code>"
    },
    "object-fit": {
      "syntax": "fill | contain | cover | none | scale-down",
      "initial": "fill"
    },
    "object-position": {
      "syntax": "<position>",
      "initial": "50% 50%"
    },
    "offset-position": {
      "syntax": "auto | <position>",
      "initial": "auto"
    },
    "opacity": {
      "syntax": "<number>",
      "initial": "1.0"
    },
    "order": {
      "syntax": "<integer>",
      "initial": "0"
    },
    "orphans": {
      "syntax": "<integer>",
      "initial": "2"
    },
    "outline": {
      "syntax": "[ <'outline-color'> || <'outline-style'> || <'outline-width'> ]",
      "initial": [
        "outline-color",
        "outline-style",
        "outline-width"
      ]
    },
    "outline-color": {
      "syntax": "<color> | invert",
      "initial": "invertOrCurrentColor"
    },
    "outline-offset": {
      "syntax": "<length>",
      "initial": "0"
    },
    "outline-style": {
      "syntax": "auto | <'border-style'>",
      "initial": "none"
    },
    "outline-width": {
      "syntax": "<line-width>",
      "initial": "medium"
    },
    "overflow": {
      "syntax": "[ visible | hidden | clip | scroll | auto ]{1,2}",
      "initial": "visible"
    },
    "overflow-anchor": {
      "syntax": "auto | none",
      "initial": "auto"
    },
    "overflow-block": {
      "syntax": "<'overflow'>",
      "initial": "auto"
    },
    "overflow-clip-box": {
      "syntax": "padding-box | content-box",
      "initial": "padding-box"
    },
    "overflow-inline": {
      "syntax": "<'overflow'>",
      "initial": "auto"
    },
    "overflow-wrap": {
      "syntax": "normal | break-word",
      "initial": "normal"
    },
    "overflow-x": {
      "syntax": "visible | hidden | clip | scroll | auto",
      "initial": "visible"
    },
    "overflow-y": {
      "syntax": "visible | hidden | clip | scroll | auto",
      "initial": "visible"
    },
    "overscroll-behavior": {
      "syntax": "[ contain | none | auto ]{1,2}",
      "initial": "auto"
    },
    "overscroll-behavior-x": {
      "syntax": "contain | none | auto",
      "initial": "auto"
    },
    "overscroll-behavior-y": {
      "syntax": "contain | none | auto",
      "initial": "auto"
    },
    "padding": {
      "syntax": "[ <length> | <percentage> ]{1,4}",
      "initial": [
        "padding-bottom",
        "padding-left",
        "padding-right",
        "padding-top"
      ]
    },
    "padding-block-end": {
      "syntax": "<'padding-left'>",
      "initial": "0"
    },
    "padding-block-start": {
      "syntax": "<'padding-left'>",
      "initial": "0"
    },
    "padding-bottom": {
      "syntax": "<length> | <percentage>",
      "initial": "0"
    },
    "padding-inline-end": {
      "syntax": "<'padding-left'>",
      "initial": "0"
    },
    "padding-inline-start": {
      "syntax": "<'padding-left'>",
      "initial": "0"
    },
    "padding-left": {
      "syntax": "<length> | <percentage>",
      "initial": "0"
    },
    "padding-right": {
      "syntax": "<length> | <percentage>",
      "initial": "0"
    },
    "padding-top": {
      "syntax": "<length> | <percentage>",
      "initial": "0"
    },
    "page-break-after": {
      "syntax": "auto | always | avoid | left | right | recto | verso",
      "initial": "auto"
    },
    "page-break-before": {
      "syntax": "auto | always | avoid | left | right | recto | verso",
      "initial": "auto"
    },
    "page-break-inside": {
      "syntax": "auto | avoid",
      "initial": "auto"
    },
    "paint-order": {
      "syntax": "normal | [ fill || stroke || markers ]",
      "initial": "normal"
    },
    "perspective": {
      "syntax": "none | <length>",
      "initial": "none"
    },
    "perspective-origin": {
      "syntax": "<position>",
      "initial": "50% 50%"
    },
    "place-content": {
      "syntax": "<'align-content'> <'justify-content'>?",
      "initial": "normal"
    },
    "place-items": {
      "syntax": "<'align-items'> <'justify-items'>?",
      "initial": [
        "align-items",
        "justify-items"
      ]
    },
    "pointer-events": {
      "syntax": "auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit",
      "initial": "auto"
    },
    "position": {
      "syntax": "static | relative | absolute | sticky | fixed",
      "initial": "static"
    },
    "quotes": {
      "syntax": "none | [ <string> <string> ]+",
      "initial": "dependsOnUserAgent"
    },
    "resize": {
      "syntax": "none | both | horizontal | vertical | block | inline",
      "initial": "none"
    },
    "right": {
      "syntax": "<length> | <percentage> | auto",
      "initial": "auto"
    },
    "rotate": {
      "syntax": "none | [ x | y | z | <number>{3} ]? && <angle>",
      "initial": "none"
    },
    "row-gap": {
      "syntax": "normal | <length-percentage>",
      "initial": "normal"
    },
    "ruby-align": {
      "syntax": "start | center | space-between | space-around",
      "initial": "space-around"
    },
    "ruby-merge": {
      "syntax": "separate | collapse | auto",
      "initial": "separate"
    },
    "ruby-position": {
      "syntax": "over | under | inter-character",
      "initial": "over"
    },
    "scale": {
      "syntax": "none | <number>{1,3}",
      "initial": "none"
    },
    "scroll-behavior": {
      "syntax": "auto | smooth",
      "initial": "auto"
    },
    "scroll-snap-coordinate": {
      "syntax": "none | <position>#",
      "initial": "none"
    },
    "scroll-snap-destination": {
      "syntax": "<position>",
      "initial": "0px 0px"
    },
    "scroll-snap-points-x": {
      "syntax": "none | repeat( <length-percentage> )",
      "initial": "none"
    },
    "scroll-snap-points-y": {
      "syntax": "none | repeat( <length-percentage> )",
      "initial": "none"
    },
    "scroll-snap-type": {
      "syntax": "none | mandatory | proximity",
      "initial": "none"
    },
    "scroll-snap-type-x": {
      "syntax": "none | mandatory | proximity",
      "initial": "none"
    },
    "scroll-snap-type-y": {
      "syntax": "none | mandatory | proximity",
      "initial": "none"
    },
    "shape-image-threshold": {
      "syntax": "<number>",
      "initial": "0.0"
    },
    "shape-margin": {
      "syntax": "<length-percentage>",
      "initial": "0"
    },
    "shape-outside": {
      "syntax": "none | <shape-box> || <basic-shape> | <image>",
      "initial": "none"
    },
    "tab-size": {
      "syntax": "<integer> | <length>",
      "initial": "8"
    },
    "table-layout": {
      "syntax": "auto | fixed",
      "initial": "auto"
    },
    "text-align": {
      "syntax": "start | end | left | right | center | justify | match-parent",
      "initial": "startOrNamelessValueIfLTRRightIfRTL"
    },
    "text-align-last": {
      "syntax": "auto | start | end | left | right | center | justify",
      "initial": "auto"
    },
    "text-combine-upright": {
      "syntax": "none | all | [ digits <integer>? ]",
      "initial": "none"
    },
    "text-decoration": {
      "syntax": "<'text-decoration-line'> || <'text-decoration-style'> || <'text-decoration-color'>",
      "initial": [
        "text-decoration-color",
        "text-decoration-style",
        "text-decoration-line"
      ]
    },
    "text-decoration-color": {
      "syntax": "<color>",
      "initial": "currentcolor"
    },
    "text-decoration-line": {
      "syntax": "none | [ underline || overline || line-through || blink ]",
      "initial": "none"
    },
    "text-decoration-skip": {
      "syntax": "none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]",
      "initial": "objects"
    },
    "text-decoration-skip-ink": {
      "syntax": "auto | none",
      "initial": "auto"
    },
    "text-decoration-style": {
      "syntax": "solid | double | dotted | dashed | wavy",
      "initial": "solid"
    },
    "text-emphasis": {
      "syntax": "<'text-emphasis-style'> || <'text-emphasis-color'>",
      "initial": [
        "text-emphasis-style",
        "text-emphasis-color"
      ]
    },
    "text-emphasis-color": {
      "syntax": "<color>",
      "initial": "currentcolor"
    },
    "text-emphasis-position": {
      "syntax": "[ over | under ] && [ right | left ]",
      "initial": "over right"
    },
    "text-emphasis-style": {
      "syntax": "none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>",
      "initial": "none"
    },
    "text-indent": {
      "syntax": "<length-percentage> && hanging? && each-line?",
      "initial": "0"
    },
    "text-justify": {
      "syntax": "auto | inter-character | inter-word | none",
      "initial": "auto"
    },
    "text-orientation": {
      "syntax": "mixed | upright | sideways",
      "initial": "mixed"
    },
    "text-overflow": {
      "syntax": "[ clip | ellipsis | <string> ]{1,2}",
      "initial": "clip"
    },
    "text-rendering": {
      "syntax": "auto | optimizeSpeed | optimizeLegibility | geometricPrecision",
      "initial": "auto"
    },
    "text-shadow": {
      "syntax": "none | <shadow-t>#",
      "initial": "none"
    },
    "text-size-adjust": {
      "syntax": "none | auto | <percentage>",
      "initial": "autoForSmartphoneBrowsersSupportingInflation"
    },
    "text-transform": {
      "syntax": "none | capitalize | uppercase | lowercase | full-width",
      "initial": "none"
    },
    "text-underline-position": {
      "syntax": "auto | [ under || [ left | right ] ]",
      "initial": "auto"
    },
    "top": {
      "syntax": "<length> | <percentage> | auto",
      "initial": "auto"
    },
    "touch-action": {
      "syntax": "auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation",
      "initial": "auto"
    },
    "transform": {
      "syntax": "none | <transform-list>",
      "initial": "none"
    },
    "transform-box": {
      "syntax": "border-box | fill-box | view-box",
      "initial": "border-box "
    },
    "transform-origin": {
      "syntax": "[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?",
      "initial": "50% 50% 0"
    },
    "transform-style": {
      "syntax": "flat | preserve-3d",
      "initial": "flat"
    },
    "transition": {
      "syntax": "<single-transition>#",
      "initial": [
        "transition-delay",
        "transition-duration",
        "transition-property",
        "transition-timing-function"
      ]
    },
    "transition-delay": {
      "syntax": "<time>#",
      "initial": "0s"
    },
    "transition-duration": {
      "syntax": "<time>#",
      "initial": "0s"
    },
    "transition-property": {
      "syntax": "none | <single-transition-property>#",
      "initial": "all"
    },
    "transition-timing-function": {
      "syntax": "<single-transition-timing-function>#",
      "initial": "ease"
    },
    "translate": {
      "syntax": "none | <length-percentage> [ <length-percentage> <length>? ]?",
      "initial": "none"
    },
    "unicode-bidi": {
      "syntax": "normal | embed | isolate | bidi-override | isolate-override | plaintext",
      "initial": "normal"
    },
    "user-select": {
      "syntax": "auto | text | none | contain | all",
      "initial": "auto"
    },
    "vertical-align": {
      "syntax": "baseline | sub | super | text-top | text-bottom | middle | top | bottom | <percentage> | <length>",
      "initial": "baseline"
    },
    "visibility": {
      "syntax": "visible | hidden | collapse",
      "initial": "visible"
    },
    "white-space": {
      "syntax": "normal | pre | nowrap | pre-wrap | pre-line",
      "initial": "normal"
    },
    "widows": {
      "syntax": "<integer>",
      "initial": "2"
    },
    "width": {
      "syntax": "[ <length> | <percentage> ] && [ border-box | content-box ]? | available | min-content | max-content | fit-content | auto",
      "initial": "auto"
    },
    "will-change": {
      "syntax": "auto | <animateable-feature>#",
      "initial": "auto"
    },
    "word-break": {
      "syntax": "normal | break-all | keep-all | break-word",
      "initial": "normal"
    },
    "word-spacing": {
      "syntax": "normal | <length-percentage>",
      "initial": "normal"
    },
    "word-wrap": {
      "syntax": "normal | break-word",
      "initial": "normal"
    },
    "writing-mode": {
      "syntax": "horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr",
      "initial": "horizontal-tb"
    },
    "z-index": {
      "syntax": "auto | <integer>",
      "initial": "auto"
    },
    "zoom": {
      "syntax": "normal | reset | <number> | <percentage>",
      "initial": "normal"
    }
  }
};