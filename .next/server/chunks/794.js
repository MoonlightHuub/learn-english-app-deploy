exports.id = 794;
exports.ids = [794];
exports.modules = {

/***/ 7896:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "challenges_main__yzbCN",
	"counterContainer": "challenges_counterContainer__sWf0b",
	"counter": "challenges_counter__q6Lr1",
	"timerContainer": "challenges_timerContainer__kLPx_",
	"endOfGame": "challenges_endOfGame__Dbi9y",
	"menuEndOfGame": "challenges_menuEndOfGame__IshlE",
	"contentMenu": "challenges_contentMenu__O9CRI",
	"arkie": "challenges_arkie__VSzLt",
	"text": "challenges_text__gLrd8",
	"button": "challenges_button__SaSK3",
	"isMobile": "challenges_isMobile__j50r7"
};


/***/ }),

/***/ 6322:
/***/ ((module) => {

// Exports
module.exports = {
	"contentContainer": "content_contentContainer__ke_w4",
	"gameContainer": "content_gameContainer__iIqnN",
	"fraseContainer": "content_fraseContainer__FOSfe",
	"phraseFrags": "content_phraseFrags__Qn3Ep",
	"fragsContainer": "content_fragsContainer__z7xfl",
	"fragsBox": "content_fragsBox__NX22b",
	"frags": "content_frags__IOxMP",
	"button": "content_button__ICcRi",
	"menuContainer": "content_menuContainer__0Sqxb",
	"winOrFail": "content_winOrFail__86ZM0",
	"containerTextWoF": "content_containerTextWoF__kPgBW",
	"imgContainer": "content_imgContainer__SRk0b",
	"arkie": "content_arkie__gWw_2",
	"tutorialIntro": "content_tutorialIntro__gUqI9",
	"myAnimIntro": "content_myAnimIntro__y5eYc",
	"introContainer": "content_introContainer__xTpqs",
	"arkieIntro": "content_arkieIntro__7shZ4",
	"text": "content_text__gRcZA",
	"buttonsContainer": "content_buttonsContainer__UzDvc",
	"buttonIntro": "content_buttonIntro__PEE_m",
	"menuButton": "content_menuButton__VCZku"
};


/***/ }),

/***/ 1437:
/***/ ((module) => {

// Exports
module.exports = {
	"sectionContainer": "contentMobile_sectionContainer__08blP",
	"contentContainer": "contentMobile_contentContainer__BJO86",
	"gameContainer": "contentMobile_gameContainer__8AzuI",
	"fraseContainer": "contentMobile_fraseContainer__QlQQq",
	"phraseFrags": "contentMobile_phraseFrags___Xp5O",
	"fragsContainer": "contentMobile_fragsContainer__HSYfU",
	"fragsBox": "contentMobile_fragsBox__KgPr3",
	"frags": "contentMobile_frags__OUGc4",
	"button": "contentMobile_button__n1F_P",
	"menuContainer": "contentMobile_menuContainer__scT3F",
	"winOrFail": "contentMobile_winOrFail__EvsV2",
	"containerTextWoF": "contentMobile_containerTextWoF__NLzde",
	"imgContainer": "contentMobile_imgContainer__C_x6n",
	"arkie": "contentMobile_arkie__r9FMF",
	"tutorialIntro": "contentMobile_tutorialIntro__aFoE0",
	"myAnimIntro": "contentMobile_myAnimIntro__9xR1l",
	"introContainer": "contentMobile_introContainer__GoiCb",
	"arkieIntro": "contentMobile_arkieIntro__zyHWP",
	"text": "contentMobile_text__l8_A1",
	"buttonsContainer": "contentMobile_buttonsContainer__4tiLG",
	"buttonIntro": "contentMobile_buttonIntro__d7cca",
	"menuButton": "contentMobile_menuButton__0JA2v"
};


/***/ }),

/***/ 794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Content)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/styles/desktop/content.module.css
var content_module = __webpack_require__(6322);
var content_module_default = /*#__PURE__*/__webpack_require__.n(content_module);
// EXTERNAL MODULE: ./src/styles/mobile/contentMobile.module.css
var contentMobile_module = __webpack_require__(1437);
var contentMobile_module_default = /*#__PURE__*/__webpack_require__.n(contentMobile_module);
// EXTERNAL MODULE: ./src/styles/desktop/Challenges/challenges.module.css
var challenges_module = __webpack_require__(7896);
var challenges_module_default = /*#__PURE__*/__webpack_require__.n(challenges_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Timer.tsx




function Timer(props) {
    const { start , setStart , resolution  } = props;
    const [seconds, setSeconds] = (0,external_react_.useState)(300);
    const [endGame, setEndGame] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const timer = setInterval(()=>{
            if (start) {
                setSeconds(seconds - 1);
            }
        }, 1000);
        if (seconds === 0) {
            setStart(false);
            setEndGame(true);
        }
        return ()=>clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        start,
        seconds
    ]);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const reloadPage = ()=>{
        window.location.reload();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (challenges_module_default()).timerContainer,
        children: [
            endGame && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (challenges_module_default()).endOfGame,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (challenges_module_default()).menuEndOfGame,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                            className: (challenges_module_default()).contentMenu,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (challenges_module_default()).arkieContainer,
                                    children: resolution > 640 ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/Arkie.png",
                                        alt: "Arkie",
                                        width: 240,
                                        height: 240,
                                        className: (challenges_module_default()).arkie
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/Arkie.png",
                                        alt: "Arkie",
                                        width: 90,
                                        height: 140,
                                        className: (challenges_module_default()).arkie
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (challenges_module_default()).textContainer,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (challenges_module_default()).text,
                                        children: "\xa1Se ha acabado el tiempo! Reinicia el desafio para seguir compitiendo. Calma, Roma no se construyo en un d\xeda."
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: (challenges_module_default()).button,
                                onClick: reloadPage,
                                children: "Try Again"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (challenges_module_default()).counterContainer,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                    className: (challenges_module_default()).counter,
                    children: [
                        minutes.toString().padStart(1, "0"),
                        ":",
                        remainingSeconds.toString().padStart(2, "0")
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const components_Timer = (Timer);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./src/components/Content.tsx







const useWindowResolution = ()=>{
    const [resolution, setResolution] = (0,external_react_.useState)({
        width: 0,
        height: 0
    });
    (0,external_react_.useEffect)(()=>{
        const handleResize = ()=>{
            setResolution({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return resolution;
};
function Content(props) {
    const { fraseArray , phraseToComplete , fragments , showDiv , end , intro , indexOfIntro , indexOfFrase , indexOfFrag , toggleMenu , isTrue , intros , endText , showTimer , start , HandleEnd , Skip , IntroBack , HandleNextIntro , Next , TryAgain , HandleElements , IsInOrder , setStart  } = props;
    const [isClient, setIsClient] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setIsClient(true);
    }, []);
    const resolution = useWindowResolution();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (contentMobile_module_default()).sectionContainer,
        children: [
            showTimer && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            position: "absolute",
                            top: "0"
                        },
                        onClick: ()=>{
                            router_default().push("/");
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/Arkie.png",
                            alt: "Arkie",
                            width: 100,
                            height: 70
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Timer, {
                        start: start,
                        setStart: setStart,
                        resolution: resolution.width
                    })
                ]
            }),
            end && /*#__PURE__*/ jsx_runtime_.jsx("article", {
                className: `${(content_module_default()).menuContainer} ${(contentMobile_module_default()).menuContainer}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: `${(content_module_default()).tutorialIntro} ${(contentMobile_module_default()).tutorialIntro}`,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `${(content_module_default()).introContainer} ${(contentMobile_module_default()).introContainer}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: resolution.width > 640 ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/Arkie.png",
                                        alt: "Arkie",
                                        width: 240,
                                        height: 240,
                                        className: `${(content_module_default()).arkieIntro} ${(contentMobile_module_default()).arkieIntro}`
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/Arkie.png",
                                        alt: "Arkie",
                                        width: 140,
                                        height: 140,
                                        className: `${(content_module_default()).arkieIntro} ${(contentMobile_module_default()).arkieIntro}`
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: endText.map((e, i)=>/*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: e.text
                                        }, i))
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: HandleEnd,
                                className: `${(content_module_default()).button} ${(contentMobile_module_default()).button}`,
                                children: "Menu"
                            })
                        })
                    ]
                })
            }),
            intro && /*#__PURE__*/ jsx_runtime_.jsx("article", {
                className: `${(content_module_default()).menuContainer} ${(contentMobile_module_default()).menuContainer}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: `${(content_module_default()).tutorialIntro} ${(contentMobile_module_default()).tutorialIntro}`,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `${(content_module_default()).introContainer} ${(contentMobile_module_default()).introContainer}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/Arkie.png",
                                        alt: "Arkie",
                                        width: 50,
                                        height: 150,
                                        className: `${(content_module_default()).arkieIntro} ${(contentMobile_module_default()).arkieIntro}`
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: intros[indexOfIntro].map((e, i)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: `${(content_module_default()).text} ${(contentMobile_module_default()).text}`,
                                            children: e.text
                                        }, i))
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                            className: `${(content_module_default()).buttonsContainer} ${(contentMobile_module_default()).buttonsContainer}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    onClick: Skip,
                                    className: `${(content_module_default()).buttonIntro} ${(contentMobile_module_default()).buttonIntro}`,
                                    children: "Skip"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: indexOfIntro > 0 && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    onClick: IntroBack,
                                                    className: `${(content_module_default()).buttonIntro} ${(contentMobile_module_default()).buttonIntro}`,
                                                    style: indexOfIntro == 3 ? {
                                                        display: "none"
                                                    } : {
                                                        display: ""
                                                    },
                                                    children: "Back"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    onClick: HandleNextIntro,
                                                    className: `${(content_module_default()).buttonIntro} ${(contentMobile_module_default()).buttonIntro}`,
                                                    children: "Next"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            toggleMenu && /*#__PURE__*/ jsx_runtime_.jsx("article", {
                className: `${(content_module_default()).menuContainer} ${(contentMobile_module_default()).menuContainer}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: `${(content_module_default()).winOrFail} ${(contentMobile_module_default()).winOrFail}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `${(content_module_default()).containerTextWoF} ${(contentMobile_module_default()).containerTextWoF}`,
                            style: isTrue ? {
                                backgroundColor: "rgba(0, 255, 0, .5)"
                            } : {
                                backgroundColor: "rgba(255, 0, 0, .5)"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: `${(content_module_default()).textWoF} ${(contentMobile_module_default()).textWoF}`,
                                children: isTrue ? "Perfecto! completaste correctamente la frase." : "Intentalo Otra vez. No te rindas!"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `${(content_module_default()).imageContainer} ${(contentMobile_module_default()).imageContainer}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/Arkie.png",
                                width: 240,
                                height: 140,
                                alt: "Arkie",
                                className: `${(content_module_default()).arkie} ${(contentMobile_module_default()).arkie}`
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: isTrue ? Next : TryAgain,
                                className: `${(content_module_default()).menuButton} ${(contentMobile_module_default()).menuButton}`,
                                children: isTrue ? "Next" : "Try Again"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: `${(content_module_default()).gameContainer} ${(contentMobile_module_default()).gameContainer}`,
                style: end || toggleMenu || intro ? {
                    overflow: "hidden"
                } : {
                    overflow: "auto"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("article", {
                        className: `${(content_module_default()).fraseContainer} ${(contentMobile_module_default()).fraseContainer}`,
                        children: fraseArray[indexOfFrase].map((e, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: e.frase
                                })
                            }, i))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("article", {
                        className: `${(content_module_default()).phraseFrags} ${(contentMobile_module_default()).phraseFrags}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `${(content_module_default()).fragsBox} ${(contentMobile_module_default()).fragsBox}`,
                            children: phraseToComplete?.map((e, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: `${(content_module_default()).frags} ${(contentMobile_module_default()).frags}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: e.frag
                                    })
                                }, i))
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("article", {
                        className: `${(content_module_default()).fragsContainer} ${(contentMobile_module_default()).fragsContainer}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `${(content_module_default()).fragsBox} ${(contentMobile_module_default()).fragsBox}`,
                            children: showDiv && fragments[indexOfFrag].sort(()=>Math.random() - 0.5).map((frag, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: `${(content_module_default()).frags} ${(contentMobile_module_default()).frags}`,
                                    onClick: ()=>HandleElements(frag.fid),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: frag.frag
                                    })
                                }, i))
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: ()=>IsInOrder(phraseToComplete),
                            className: `${(content_module_default()).button} ${(contentMobile_module_default()).button}`,
                            children: "Comprobar"
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const components_Content = (Content);


/***/ })

};
;