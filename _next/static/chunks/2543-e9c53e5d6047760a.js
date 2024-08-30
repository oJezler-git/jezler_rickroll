(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2543], {
        2543: function(e, t, s) {
            "use strict";
            s.d(t, {
                default: function() {
                    return $
                },
                t: function() {
                    return K
                }
            });
            var r = s(57437),
                n = s(2265),
                o = s(98059),
                a = s.n(o),
                i = e => {
                    let {
                        backgroundUrl: t,
                        audioUrl: s,
                        videoTagRef: o,
                        audioTagRef: i
                    } = e, [c, l] = (0, n.useState)(!1), d = (0, n.useRef)(null);
                    return (0, n.useEffect)(() => {
                        (function(e) {
                            for (let t of [".mp4", ".mov", ".avi", ".m4v"])
                                if (e.endsWith(t)) return {
                                    video: !0
                                };
                            return {
                                video: !1
                            }
                        })(t).video ? l(!0) : "" !== t && (l(!1), d.current && (d.current.style.backgroundImage = "url(".concat(t, ")")))
                    }, [t, d]), (0, r.jsxs)(r.Fragment, {
                        children: [c && "" !== t ? (0, r.jsx)("video", {
                            src: t,
                            playsInline: !0,
                            loop: !0,
                            muted: "" !== s,
                            className: a().backgroundVideo,
                            ref: o
                        }) : (0, r.jsx)("div", {
                            className: a().backgroundImage,
                            style: {
                                backgroundImage: "url(".concat(t, ")")
                            },
                            ref: d
                        }), "" !== s && (0, r.jsx)("audio", {
                            src: s,
                            loop: !0,
                            ref: i
                        })]
                    })
                };

            function c(e) {
                let {
                    videoTagRef: t,
                    audioTagRef: s,
                    clickToEnterText: o,
                    userFont: i,
                    userContainerRef: c,
                    animationClass: l
                } = e, d = (0, n.useRef)(null), u = () => {
                    null !== t.current && (t.current.volume = .25, t.current.play())
                }, m = () => {
                    null !== s.current && (s.current.volume = .25, s.current.play())
                };
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)("div", {
                        className: a().clickToEnterOverlay,
                        onClick: () => {
                            // Enter fullscreen mode
                            if (document.documentElement.requestFullscreen) {
                                document.documentElement.requestFullscreen();
                            } else if (document.documentElement.mozRequestFullScreen) { // Firefox
                                document.documentElement.mozRequestFullScreen();
                            } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
                                document.documentElement.webkitRequestFullscreen();
                            } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
                                document.documentElement.msRequestFullscreen();
                            }
                
                            // Existing code
                            m();
                            u();
                            d.current && (
                                d.current.classList.toggle(a().hide),
                                d.current.style.pointerEvents = "none",
                                setTimeout(() => {
                                    d.current && (d.current.style.display = "none")
                                }, 650)
                            );
                            l === a().fadeUp
                                ? c.current.classList.add(l)
                                : l === a().unfold && document.querySelectorAll(".".concat(a().unfoldStart)).forEach((e, t) => {
                                    setTimeout(() => {
                                        e.classList.add(a().unfold);
                                    }, 300 * t);
                                });
                        },
                        ref: d,
                        children: (0, r.jsx)("div", {
                            className: a().clickToEnterText,
                            style: i.clickToEnter,
                            children: o
                        })
                    })
                });
                
            }
            var l = {
                    satoshi: {
                        clickToEnter: {
                            fontWeight: 700,
                            fontSize: "32px"
                        },
                        username: {
                            fontWeight: 600,
                            fontSize: "39.5px"
                        },
                        description: {
                            fontWeight: 570,
                            fontSize: "19px"
                        },
                        joinDate: {
                            fontWeight: 400,
                            fontSize: "14.5px"
                        },
                        profileViewsCount: {
                            fontWeight: 550,
                            fontSize: "14.5px"
                        },
                        discordUsername: {
                            fontWeight: 500,
                            fontSize: "22px"
                        },
                        discordStatus: {
                            fontWeight: 450,
                            fontSize: "14.5px"
                        },
                        serverName: {
                            fontWeight: 450,
                            fontSize: "20px"
                        },
                        memberCount: {
                            fontWeight: 450,
                            fontSize: "13.3px"
                        },
                        joinButton: {
                            fontWeight: 450,
                            fontSize: "13px"
                        },
                        joinButtonLarge: {
                            fontWeight: 450,
                            fontSize: "16.5px"
                        },
                        buttonText: {
                            fontWeight: 450,
                            fontSize: "18px"
                        },
                        buttonUrl: {
                            fontWeight: 400,
                            fontSize: "15px"
                        }
                    },
                    firacode: {
                        clickToEnter: {
                            fontWeight: 700,
                            fontSize: "29px"
                        },
                        username: {
                            fontWeight: 550,
                            fontSize: "36.5px"
                        },
                        description: {
                            fontWeight: 570,
                            fontSize: "17.5px"
                        },
                        joinDate: {
                            fontWeight: 400,
                            fontSize: "14px"
                        },
                        profileViewsCount: {
                            fontWeight: 550,
                            fontSize: "14.5px"
                        },
                        discordUsername: {
                            fontWeight: 550,
                            fontSize: "21px"
                        },
                        discordStatus: {
                            fontWeight: 300,
                            fontSize: "13.4px"
                        },
                        serverName: {
                            fontWeight: 450,
                            fontSize: "17px"
                        },
                        memberCount: {
                            fontWeight: 400,
                            fontSize: "12px"
                        },
                        joinButton: {
                            fontWeight: 450,
                            fontSize: "13px"
                        },
                        joinButtonLarge: {
                            fontWeight: 450,
                            fontSize: "15.5px"
                        },
                        buttonText: {
                            fontWeight: 450,
                            fontSize: "17.5px"
                        },
                        buttonUrl: {
                            fontWeight: 400,
                            fontSize: "13.5px"
                        }
                    },
                    poppins: {
                        clickToEnter: {
                            fontWeight: 700,
                            fontSize: "29px"
                        },
                        username: {
                            fontWeight: 600,
                            fontSize: "36.5px"
                        },
                        description: {
                            fontWeight: 570,
                            fontSize: "17px"
                        },
                        joinDate: {
                            fontWeight: 400,
                            fontSize: "13px"
                        },
                        profileViewsCount: {
                            fontWeight: 550,
                            fontSize: "14.5px"
                        },
                        discordUsername: {
                            fontWeight: 600,
                            fontSize: "20px"
                        },
                        discordStatus: {
                            fontWeight: 300,
                            fontSize: "12.8px"
                        },
                        serverName: {
                            fontWeight: 450,
                            fontSize: "19px"
                        },
                        memberCount: {
                            fontWeight: 450,
                            fontSize: "13px"
                        },
                        joinButton: {
                            fontWeight: 450,
                            fontSize: "11.5px"
                        },
                        joinButtonLarge: {
                            fontWeight: 450,
                            fontSize: "16px"
                        },
                        buttonText: {
                            fontWeight: 450,
                            fontSize: "17px"
                        },
                        buttonUrl: {
                            fontWeight: 400,
                            fontSize: "14px"
                        }
                    },
                    array: {
                        clickToEnter: {
                            fontWeight: 500,
                            fontSize: "34px"
                        },
                        username: {
                            fontWeight: 400,
                            fontSize: "36.5px"
                        },
                        description: {
                            fontWeight: 400,
                            fontSize: "20px"
                        },
                        joinDate: {
                            fontWeight: 400,
                            fontSize: "15px"
                        },
                        profileViewsCount: {
                            fontWeight: 400,
                            fontSize: "16px"
                        },
                        discordUsername: {
                            fontWeight: 400,
                            fontSize: "24.5px"
                        },
                        discordStatus: {
                            fontWeight: 100,
                            fontSize: "14.5px"
                        },
                        serverName: {
                            fontWeight: 450,
                            fontSize: "21.5px"
                        },
                        memberCount: {
                            fontWeight: 450,
                            fontSize: "14px"
                        },
                        joinButton: {
                            fontWeight: 400,
                            fontSize: "14.5px"
                        },
                        joinButtonLarge: {
                            fontWeight: 450,
                            fontSize: "19px"
                        },
                        buttonText: {
                            fontWeight: 200,
                            fontSize: "19.5px"
                        },
                        buttonUrl: {
                            fontWeight: 300,
                            fontSize: "17px"
                        }
                    },
                    drippy: {
                        clickToEnter: {
                            fontWeight: 200,
                            fontSize: "31px"
                        },
                        username: {
                            fontWeight: 400,
                            fontSize: "33.5px"
                        },
                        description: {
                            fontWeight: 400,
                            fontSize: "17px"
                        },
                        joinDate: {
                            fontWeight: 400,
                            fontSize: "12.5px"
                        },
                        profileViewsCount: {
                            fontWeight: 400,
                            fontSize: "16px"
                        },
                        discordUsername: {
                            fontWeight: 400,
                            fontSize: "21.5px"
                        },
                        discordStatus: {
                            fontWeight: 100,
                            fontSize: "12.5px"
                        },
                        serverName: {
                            fontWeight: 450,
                            fontSize: "17px"
                        },
                        memberCount: {
                            fontWeight: 400,
                            fontSize: "13px"
                        },
                        joinButton: {
                            fontWeight: 450,
                            fontSize: "12px"
                        },
                        joinButtonLarge: {
                            fontWeight: 450,
                            fontSize: "15.5px"
                        },
                        buttonText: {
                            fontWeight: 450,
                            fontSize: "17.5px"
                        },
                        buttonUrl: {
                            fontWeight: 400,
                            fontSize: "13px"
                        }
                    },
                    minecraft: {
                        clickToEnter: {
                            fontWeight: 200,
                            fontSize: "31px"
                        },
                        username: {
                            fontWeight: 400,
                            fontSize: "33px"
                        },
                        description: {
                            fontWeight: 400,
                            fontSize: "16px"
                        },
                        joinDate: {
                            fontWeight: 400,
                            fontSize: "13px"
                        },
                        profileViewsCount: {
                            fontWeight: 400,
                            fontSize: "14px"
                        },
                        discordUsername: {
                            fontWeight: 400,
                            fontSize: "20.5px"
                        },
                        discordStatus: {
                            fontWeight: 100,
                            fontSize: "11.5px"
                        },
                        serverName: {
                            fontWeight: 450,
                            fontSize: "16.5px"
                        },
                        memberCount: {
                            fontWeight: 450,
                            fontSize: "10.5px"
                        },
                        joinButton: {
                            fontWeight: 450,
                            fontSize: "10px"
                        },
                        joinButtonLarge: {
                            fontWeight: 450,
                            fontSize: "13.5px"
                        },
                        buttonText: {
                            fontWeight: 450,
                            fontSize: "16px"
                        },
                        buttonUrl: {
                            fontWeight: 400,
                            fontSize: "12.5px"
                        }
                    }
                },
                d = s(31877);

            function u(e) {
                let {
                    backgroundEffects: t,
                    cursorEffects: s,
                    cursorEffectsColor: n,
                    textColor: o,
                    backgroundColor: i,
                    cursorUrl: c
                } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: ["snowflakes" === t ? (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsxs)("div", {
                            "aria-hidden": "true",
                            className: a().snowflakes,
                            children: [(0, r.jsx)("div", {
                                className: a().snowflake,
                                children: (0, r.jsx)("div", {
                                    className: a().inner,
                                    children: "❅"
                                })
                            }), (0, r.jsx)("div", {
                                className: a().snowflake,
                                children: (0, r.jsx)("div", {
                                    className: a().inner,
                                    children: "❅"
                                })
                            }), (0, r.jsx)("div", {
                                className: a().snowflake,
                                children: (0, r.jsx)("div", {
                                    className: a().inner,
                                    children: "❅"
                                })
                            }), (0, r.jsx)("div", {
                                className: a().snowflake,
                                children: (0, r.jsx)("div", {
                                    className: a().inner,
                                    children: "❅"
                                })
                            }), (0, r.jsx)("div", {
                                className: a().snowflake,
                                children: (0, r.jsx)("div", {
                                    className: a().inner,
                                    children: "❅"
                                })
                            }), (0, r.jsx)("div", {
                                className: a().snowflake,
                                children: (0, r.jsx)("div", {
                                    className: a().inner,
                                    children: "❅"
                                })
                            }), (0, r.jsx)("div", {
                                className: a().snowflake,
                                children: (0, r.jsx)("div", {
                                    className: a().inner,
                                    children: "❅"
                                })
                            }), (0, r.jsx)("div", {
                                className: a().snowflake,
                                children: (0, r.jsx)("div", {
                                    className: a().inner,
                                    children: "❅"
                                })
                            }), (0, r.jsx)("div", {
                                className: a().snowflake,
                                children: (0, r.jsx)("div", {
                                    className: a().inner,
                                    children: "❅"
                                })
                            }), (0, r.jsx)("div", {
                                className: a().snowflake,
                                children: (0, r.jsx)("div", {
                                    className: a().inner,
                                    children: "❅"
                                })
                            }), (0, r.jsx)("div", {
                                className: a().snowflake,
                                children: (0, r.jsx)("div", {
                                    className: a().inner,
                                    children: "❅"
                                })
                            }), (0, r.jsx)("div", {
                                className: a().snowflake,
                                children: (0, r.jsx)("div", {
                                    className: a().inner,
                                    children: "❅"
                                })
                            })]
                        })
                    }) : "rain" === t ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(d.default, {
                            strategy: "beforeInteractive",
                            src: "https://assets.guns.lol/guns_storm.js",
                            id: "_gunsstorm"
                        }), (0, r.jsx)(d.default, {
                            strategy: "beforeInteractive",
                            id: "_gunsstormcode",
                            children: "\n                                snowStorm.snowColor = '".concat(o, "';\n                                snowStorm.flakesMaxActive = 80;\n                                snowStorm.useTwinkleEffect = true;\n                                snowStorm.autoStart = true;\n                                snowStorm.freezeOnBlur = false;\n                                snowStorm.excludeMobile = false;\n                            ")
                        })]
                    }) : "blurred" === t ? (0, r.jsx)("div", {
                        className: a().blurredBackground
                    }) : "tv" === t ? (0, r.jsx)("div", {
                        className: a().oldTV
                    }) : "night" === t && (0, r.jsx)("div", {
                        className: a().nightTime
                    }), (0, r.jsx)(d.default, {
                        strategy: "beforeInteractive",
                        src: "https://unpkg.com/cursor-effects@latest/dist/browser.js",
                        id: "_cursor"
                    }), "bubbles" === s ? (0, r.jsx)(d.default, {
                        strategy: "beforeInteractive",
                        id: "_cursorbubbles",
                        children: '\n                            new cursoreffects.bubbleCursor({\n                            color: ["'.concat(n, '"]\n                            });\n                        ')
                    }) : "dot" == s ? (0, r.jsx)(d.default, {
                        strategy: "beforeInteractive",
                        id: "_cursordot",
                        children: '\n                            new cursoreffects.followingDotCursor({\n                            color: ["'.concat(n, '"]\n                            });\n                        ')
                    }) : "snowflakes" === s ? (0, r.jsx)(d.default, {
                        strategy: "beforeInteractive",
                        id: "_cursorsnowflakes",
                        children: '\n                            new cursoreffects.snowflakeCursor({\n                            color: ["'.concat(n, '"]\n                            });\n                        ')
                    }) : "particles" === s && (0, r.jsx)(d.default, {
                        strategy: "beforeInteractive",
                        id: "_cursorparticles",
                        children: '\n                            new cursoreffects.fairyDustCursor({\n                            colors: ["'.concat(n, '"]\n                            });\n                        ')
                    }), "" !== c && (0, r.jsx)("style", {
                        children: "\n                    * {\n                      cursor: url(".concat(c, ") 16 16, auto !important;\n                    }\n                    ")
                    }), (0, r.jsx)("style", {
                        children: "\n                ::-moz-selection {\n                    background: ".concat(o, ";\n                    color: ").concat(i, ";\n                }\n                ::selection {\n                    background: ").concat(o, ";\n                    color: ").concat(i, ";\n                }\n                ")
                    })]
                })
            }
            let m = {
                profileViews: (0, r.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "currentColor",
                        d: "M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
                    })
                }),
                userNotFound: (0, r.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 48 48",
                    children: [(0, r.jsx)("defs", {
                        children: (0, r.jsx)("mask", {
                            id: "ipTError0",
                            children: (0, r.jsx)("path", {
                                fill: "#555",
                                fillRule: "evenodd",
                                stroke: "#fff",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "4",
                                d: "m6 11l5-5l13 13L37 6l5 5l-13 13l13 13l-5 5l-13-13l-13 13l-5-5l13-13z",
                                clipRule: "evenodd"
                            })
                        })
                    }), (0, r.jsx)("path", {
                        fill: "currentColor",
                        d: "M0 0h48v48H0z",
                        mask: "url(#ipTError0)"
                    })]
                }),
                userAvatar: (0, r.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "1em",
                    height: "1em",
                    viewBox: "4 4 16 16",
                    children: (0, r.jsx)("path", {
                        fill: "currentColor",
                        d: "M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12Zm-6 8q-.825 0-1.413-.588T4 18v-.8q0-.85.438-1.563T5.6 14.55q1.55-.775 3.15-1.163T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2v.8q0 .825-.588 1.413T18 20H6Z"
                    })
                }),
                status: (0, r.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 16 16",
                    children: (0, r.jsx)("path", {
                        fill: "currentColor",
                        d: "M8 4a4 4 0 1 1 0 8a4 4 0 0 1 0-8"
                    })
                }),
                muted: (0, r.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 48 48",
                    children: [(0, r.jsx)("defs", {
                        children: (0, r.jsxs)("mask", {
                            id: "ipTVolumeMute0",
                            children: [(0, r.jsx)("mask", {
                                id: "ipTVolumeMute1",
                                width: "13",
                                height: "13",
                                x: "30",
                                y: "18",
                                maskUnits: "userSpaceOnUse",
                                style: {
                                    maskType: "alpha"
                                },
                                children: (0, r.jsx)("path", {
                                    d: "M30 18h13v13H30z"
                                })
                            }), (0, r.jsxs)("g", {
                                fill: "none",
                                stroke: "#fff",
                                strokeLinejoin: "round",
                                strokeWidth: "4",
                                children: [(0, r.jsx)("g", {
                                    strokeLinecap: "round",
                                    mask: "url(#ipTVolumeMute1)",
                                    children: (0, r.jsx)("path", {
                                        d: "m40.735 20.286l-8.486 8.485m.001-8.485l8.485 8.485"
                                    })
                                }), (0, r.jsx)("path", {
                                    fill: "#555",
                                    d: "M24 6v36c-7 0-12.201-9.16-12.201-9.16H6a2 2 0 0 1-2-2V17.01a2 2 0 0 1 2-2h5.799S17 6 24 6Z"
                                })]
                            })]
                        })
                    }), (0, r.jsx)("path", {
                        fill: "currentColor",
                        d: "M0 0h48v48H0z",
                        mask: "url(#ipTVolumeMute0)"
                    })]
                }),
                unmuted: (0, r.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 48 48",
                    children: [(0, r.jsx)("defs", {
                        children: (0, r.jsx)("mask", {
                            id: "ipTVolumeNotice0",
                            children: (0, r.jsxs)("g", {
                                fill: "none",
                                stroke: "#fff",
                                strokeWidth: "4",
                                children: [(0, r.jsx)("path", {
                                    fill: "#555",
                                    strokeLinejoin: "round",
                                    d: "M24 6v36c-7 0-12.201-9.16-12.201-9.16H6a2 2 0 0 1-2-2V17.01a2 2 0 0 1 2-2h5.799S17 6 24 6Z"
                                }), (0, r.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M32 15a11.91 11.91 0 0 1 1.684 1.859A12.07 12.07 0 0 1 36 24c0 2.654-.846 5.107-2.278 7.09A11.936 11.936 0 0 1 32 33"
                                }), (0, r.jsx)("path", {
                                    strokeLinecap: "round",
                                    d: "M34.236 41.186C40.084 37.696 44 31.305 44 24c0-7.192-3.796-13.496-9.493-17.02"
                                })]
                            })
                        })
                    }), (0, r.jsx)("path", {
                        fill: "currentColor",
                        d: "M0 0h48v48H0z",
                        mask: "url(#ipTVolumeNotice0)"
                    })]
                })
            };

            function p(e) {
                let {
                    font: t
                } = e, s = {
                    satoshi: "'Satoshi', sans-serif",
                    firacode: "'Fira Code', monospace",
                    poppins: "'Poppins', sans-serif",
                    array: "'Array', sans-serif",
                    drippy: "'Were-Beast', sans-serif",
                    minecraft: "'Minecraftia', sans-serif"
                };
                return (0, n.useEffect)(() => {
                    let e = document.head,
                        r = document.createElement("link");
                    switch (r.rel = "stylesheet", r.dataset.font = t, t) {
                        case "firacode":
                            r.href = "https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap";
                            break;
                        case "poppins":
                            r.href = "https://fonts.googleapis.com/css2?family=Poppins&display=swap";
                            break;
                        case "array":
                            r.href = "https://api.fontshare.com/v2/css?f[]=array@400&display=swap";
                            break;
                        case "drippy":
                            r.href = "https://fonts.cdnfonts.com/css/were-beast-2";
                            break;
                        case "minecraft":
                            r.href = "https://fonts.cdnfonts.com/css/minecraftia";
                            break;
                        default:
                            r.href = ""
                    }
                    r.href && e.appendChild(r);
                    let n = document.createElement("style");
                    return n.dataset.font = t, n.innerHTML = "\n            body, * {\n                font-family: ".concat(s[t], " !important;\n            }\n        "), e.appendChild(n), () => {
                        r.parentNode && e.removeChild(r), n.parentNode && e.removeChild(n)
                    }
                }, [t]), null
            }
            var h = s(83826),
                g = s.n(h),
                f = s(54365),
                _ = s.n(f),
                x = s(88602),
                v = e => {
                    let {
                        config: t,
                        premiumConfig: s
                    } = e, o = {
                        base: a().tooltipContainer,
                        arrow: "".concat(a().toolTipArrow, " border-2"),
                        content: "bg-transparent"
                    }, i = t.user_badges, c = t.custom_badges, l = i.length > 0 && i[0] && "string" == typeof i[0], d = c.length > 0 && "string" == typeof c[0][0], u = {
                        staff: (0, r.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: a().staff,
                            width: "1em",
                            height: "1em",
                            viewBox: "2.3 2 19.39 20",
                            children: (0, r.jsx)("path", {
                                fill: "currentColor",
                                d: "m16.06 13.09l5.63 5.59l-3.32 3.28l-5.59-5.59v-.92l2.36-2.36h.92m.91-2.53L16 9.6l-4.79 4.8v1.97L5.58 22L2.3 18.68l5.59-5.59h1.97l.78-.78L6.8 8.46H5.5L2.69 5.62L5.31 3l2.8 2.8v1.31L12 10.95l2.66-2.66l-.96-1.01L15 5.97h-2.66l-.65-.65L15 2l.66.66v2.66L16.97 4l3.28 3.28c1.09 1.1 1.09 2.89 0 3.98l-1.97-2.01l-1.31 1.31Z"
                            })
                        }),
                        premium: (0, r.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: a().premium,
                            width: "1em",
                            height: "1em",
                            viewBox: "23 32 465 448",
                            children: (0, r.jsx)("path", {
                                fill: "currentColor",
                                d: "M396.31 32H264l84.19 112.26L396.31 32zm-280.62 0l48.12 112.26L248 32H115.69zM256 74.67L192 160h128l-64-85.33zm166.95-23.61L376.26 160H488L422.95 51.06zm-333.9 0L23 160h112.74L89.05 51.06zM146.68 192H24l222.8 288h.53L146.68 192zm218.64 0L264.67 480h.53L488 192H365.32zm-35.93 0H182.61L256 400l73.39-208z"
                            })
                        }),
                        verified: (0, r.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: a().verified,
                            width: "1em",
                            height: "1em",
                            viewBox: "1 1.5 22 21",
                            children: (0, r.jsx)("path", {
                                fill: "currentColor",
                                d: "m8.6 22.5l-1.9-3.2l-3.6-.8l.35-3.7L1 12l2.45-2.8l-.35-3.7l3.6-.8l1.9-3.2L12 2.95l3.4-1.45l1.9 3.2l3.6.8l-.35 3.7L23 12l-2.45 2.8l.35 3.7l-3.6.8l-1.9 3.2l-3.4-1.45l-3.4 1.45Zm2.35-6.95L16.6 9.9l-1.4-1.45l-4.25 4.25l-2.15-2.1L7.4 12l3.55 3.55Z"
                            })
                        }),
                        donor: (0, r.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: a().donor,
                            width: "1em",
                            height: "1em",
                            viewBox: "2.01 2.01 19.98 19.98",
                            children: (0, r.jsx)("path", {
                                d: "M2.047 14.668a.994.994 0 0 0 .465.607l1.91 1.104v2.199a1 1 0 0 0 1 1h2.199l1.104 1.91a1.01 1.01 0 0 0 .866.5c.174 0 .347-.046.501-.135L12 20.75l1.91 1.104a1.001 1.001 0 0 0 1.366-.365l1.103-1.91h2.199a1 1 0 0 0 1-1V16.38l1.91-1.104a1 1 0 0 0 .365-1.367L20.75 12l1.104-1.908a1 1 0 0 0-.365-1.366l-1.91-1.104v-2.2a1 1 0 0 0-1-1H16.38l-1.103-1.909a1.008 1.008 0 0 0-.607-.466a.993.993 0 0 0-.759.1L12 3.25l-1.909-1.104a1 1 0 0 0-1.366.365l-1.104 1.91H5.422a1 1 0 0 0-1 1V7.62l-1.91 1.104a1.003 1.003 0 0 0-.365 1.368L3.251 12l-1.104 1.908a1.009 1.009 0 0 0-.1.76zM12 13c-3.48 0-4-1.879-4-3c0-1.287 1.029-2.583 3-2.915V6.012h2v1.109c1.734.41 2.4 1.853 2.4 2.879h-1l-1 .018C13.386 9.638 13.185 9 12 9c-1.299 0-2 .515-2 1c0 .374 0 1 2 1c3.48 0 4 1.879 4 3c0 1.287-1.029 2.583-3 2.915V18h-2v-1.08c-2.339-.367-3-2.003-3-2.92h2c.011.143.159 1 2 1c1.38 0 2-.585 2-1c0-.325 0-1-2-1z",
                                fill: "currentColor"
                            })
                        }),
                        og: (0, r.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: a().og,
                            width: "1em",
                            height: "1em",
                            viewBox: "4.39 2 15.22 20.97",
                            children: (0, r.jsx)("path", {
                                fill: "currentColor",
                                d: "m12 8.5l2.116 5.088l5.492.44l-4.184 3.585l1.278 5.36L12 20.1l-4.702 2.872l1.278-5.36l-4.184-3.584l5.492-.44L12 8.5ZM8 2v9H6V2h2Zm10 0v9h-2V2h2Zm-5 0v5h-2V2h2Z"
                            })
                        }),
                        server_booster: (0, r.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: a().serverBooster,
                            width: "1em",
                            height: "1em",
                            viewBox: "4.99 3 14 18",
                            children: (0, r.jsx)("path", {
                                fill: "currentColor",
                                d: "M17.66 11.2c-.23-.3-.51-.56-.77-.82c-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32c-2.59 2.08-3.61 5.75-2.39 8.9c.04.1.08.2.08.33c0 .22-.15.42-.35.5c-.23.1-.47.04-.66-.12a.58.58 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5c.14.6.41 1.2.71 1.73c1.08 1.73 2.95 2.97 4.96 3.22c2.14.27 4.43-.12 6.07-1.6c1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26m-3.16 6.3c-.28.24-.74.5-1.1.6c-1.12.4-2.24-.16-2.9-.82c1.19-.28 1.9-1.16 2.11-2.05c.17-.8-.15-1.46-.28-2.23c-.12-.74-.1-1.37.17-2.06c.19.38.39.76.63 1.06c.77 1 1.98 1.44 2.24 2.8c.04.14.06.28.06.43c.03.82-.33 1.72-.93 2.27Z"
                            })
                        }),
                        winner: (0, r.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: a().winner,
                            width: "1em",
                            height: "1em",
                            viewBox: "2 2 20 20.75",
                            children: (0, r.jsxs)("g", {
                                fill: "currentColor",
                                children: [(0, r.jsx)("path", {
                                    d: "M22 8.162v.073c0 .86 0 1.291-.207 1.643c-.207.352-.584.561-1.336.98l-.793.44c.546-1.848.729-3.834.796-5.532l.01-.221l.002-.052c.651.226 1.017.395 1.245.711c.283.393.283.915.283 1.958Zm-20 0v.073c0 .86 0 1.291.207 1.643c.207.352.584.561 1.336.98l.794.44c-.547-1.848-.73-3.834-.797-5.532l-.01-.221l-.001-.052c-.652.226-1.018.395-1.246.711C2 6.597 2 7.12 2 8.162Z"
                                }), (0, r.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M16.377 2.347A26.373 26.373 0 0 0 12 2c-1.783 0-3.253.157-4.377.347c-1.139.192-1.708.288-2.184.874c-.475.586-.45 1.219-.4 2.485c.173 4.348 1.111 9.78 6.211 10.26V19.5H9.82a1 1 0 0 0-.98.804l-.19.946H6a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5h-2.65l-.19-.946a1 1 0 0 0-.98-.804h-1.43v-3.534c5.1-.48 6.039-5.911 6.211-10.26c.05-1.266.076-1.9-.4-2.485c-.476-.586-1.045-.682-2.184-.874Zm-3.59 3.46a.75.75 0 0 1 .463.693v4a.75.75 0 0 1-1.5 0V8.31l-.22.22a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 .817-.163Z",
                                    clipRule: "evenodd"
                                })]
                            })
                        }),
                        second: (0, r.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: a().second,
                            width: "1em",
                            height: "1em",
                            viewBox: "5 2 14 20",
                            children: (0, r.jsxs)("g", {
                                fill: "currentColor",
                                children: [(0, r.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M12 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14Zm0-10c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532c-.088.283.164.577.667 1.165l.13.152c.143.167.215.25.247.354c.032.104.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135c.104 0 .202.045.399.135l.178.082c.691.319 1.037.477 1.267.303c.23-.174.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438c.032-.103.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354l-.098-.176C12.474 6.34 12.284 6 12 6Z",
                                    clipRule: "evenodd"
                                }), (0, r.jsx)("path", {
                                    d: "m7.093 15.941l-.379 1.382c-.628 2.292-.942 3.438-.523 4.065c.147.22.344.396.573.513c.652.332 1.66-.193 3.675-1.243c.67-.35 1.006-.524 1.362-.562a1.87 1.87 0 0 1 .398 0c.356.038.691.213 1.362.562c2.015 1.05 3.023 1.575 3.675 1.243c.229-.117.426-.293.573-.513c.42-.627.105-1.773-.523-4.065l-.379-1.382A8.461 8.461 0 0 1 12 17.5a8.46 8.46 0 0 1-4.907-1.559Z"
                                })]
                            })
                        }),
                        third: (0, r.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: a().third,
                            width: "1em",
                            height: "1em",
                            viewBox: "5 2 14 20",
                            children: (0, r.jsxs)("g", {
                                fill: "currentColor",
                                children: [(0, r.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M12 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14Zm0-10c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532c-.088.283.164.577.667 1.165l.13.152c.143.167.215.25.247.354c.032.104.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135c.104 0 .202.045.399.135l.178.082c.691.319 1.037.477 1.267.303c.23-.174.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438c.032-.103.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354l-.098-.176C12.474 6.34 12.284 6 12 6Z",
                                    clipRule: "evenodd"
                                }), (0, r.jsx)("path", {
                                    d: "m7.093 15.941l-.379 1.382c-.628 2.292-.942 3.438-.523 4.065c.147.22.344.396.573.513c.652.332 1.66-.193 3.675-1.243c.67-.35 1.006-.524 1.362-.562a1.87 1.87 0 0 1 .398 0c.356.038.691.213 1.362.562c2.015 1.05 3.023 1.575 3.675 1.243c.229-.117.426-.293.573-.513c.42-.627.105-1.773-.523-4.065l-.379-1.382A8.461 8.461 0 0 1 12 17.5a8.46 8.46 0 0 1-4.907-1.559Z"
                                })]
                            })
                        }),
                        imagehost_access: (0, r.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: a().imageHost,
                            width: "1em",
                            height: "1em",
                            viewBox: "2 2 20 20",
                            children: (0, r.jsx)("path", {
                                fill: "currentColor",
                                d: "M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182c.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347 0-.674.15-1.329.452l-.595.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45c.28-.213.46-.536.82-1.182l.328-.588Z"
                            })
                        }),
                        bughunter: (0, r.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: a().bugHunter,
                            width: "1em",
                            height: "1em",
                            viewBox: "4 3.41 16 17.59",
                            children: (0, r.jsx)("path", {
                                fill: "currentColor",
                                d: "M19 8h-1.81a5.985 5.985 0 0 0-1.82-1.96l.93-.93a.996.996 0 1 0-1.41-1.41l-1.47 1.47C12.96 5.06 12.49 5 12 5s-.96.06-1.41.17L9.11 3.7A.996.996 0 1 0 7.7 5.11l.92.93C7.88 6.55 7.26 7.22 6.81 8H5c-.55 0-1 .45-1 1s.45 1 1 1h1.09c-.05.33-.09.66-.09 1v1H5c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .34.04.67.09 1H5c-.55 0-1 .45-1 1s.45 1 1 1h1.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H19c.55 0 1-.45 1-1s-.45-1-1-1h-1.09c.05-.33.09-.66.09-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1h-1v-1c0-.34-.04-.67-.09-1H19c.55 0 1-.45 1-1s-.45-1-1-1m-6 8h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1m0-4h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1"
                            })
                        })
                    }, m = {
                        staff: "Staff",
                        premium: "Premium",
                        verified: "Verified",
                        donor: "Donor",
                        og: "OG",
                        server_booster: "Server Booster",
                        winner: "Winner",
                        second: "Second",
                        third: "Third",
                        imagehost_access: "Image Host",
                        bughunter: "Bug Hunter"
                    }, p = {
                        Staff: "staff",
                        Premium: "premium",
                        Verified: "verified",
                        Donor: "donor",
                        OG: "og",
                        "Server Booster": "serverBooster",
                        Winner: "winner",
                        Second: "second",
                        Third: "third",
                        "Image Host": "imageHost",
                        "Bug Hunter": "bugHunter"
                    };
                    return (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsxs)("div", {
                            className: a().badgeContainer,
                            children: [l ? i.map(e => (0, r.jsx)(n.Fragment, {
                                children: (0, r.jsx)(x.e, {
                                    content: m[e],
                                    closeDelay: 150,
                                    showArrow: !1,
                                    offset: 7,
                                    classNames: o,
                                    children: (0, r.jsxs)("div", {
                                        className: a().badgeContainerFlex,
                                        children: [s.monochrome_badges && (0, r.jsx)("style", {
                                            children: "\n                    .".concat(a()[p[m[e]]], " {\n                        color: ").concat(s.badge_color, "!important;\n                        filter: drop-shadow(").concat(s.badge_color, " 0 0 2.5px)!important;\n                    }\n                    ")
                                        }), !t.badge_glow && (0, r.jsx)("style", {
                                            children: "\n                    .".concat(a()[p[m[e]]], " {\n                        filter: none!important;\n                    }\n                    ")
                                        }), u[e]]
                                    }, e)
                                })
                            }, e)) : i.map(e => e.enabled && (0, r.jsx)(n.Fragment, {
                                children: (0, r.jsx)(x.e, {
                                    content: m[e.name],
                                    closeDelay: 150,
                                    showArrow: !1,
                                    offset: 7,
                                    classNames: o,
                                    children: (0, r.jsxs)("div", {
                                        className: a().badgeContainerFlex,
                                        children: [s.monochrome_badges && (0, r.jsx)("style", {
                                            children: "\n                    .".concat(a()[p[m[e.name]]], " {\n                        color: ").concat(s.badge_color, "!important;\n                        filter: drop-shadow(").concat(s.badge_color, " 0 0 2.5px)!important;\n                    }\n                    ")
                                        }), !t.badge_glow && (0, r.jsx)("style", {
                                            children: "\n                    .".concat(a()[p[m[e.name]]], " {\n                        filter: none!important;\n                    }\n                    ")
                                        }), u[e.name]]
                                    }, e.name)
                                })
                            }, e.name)), 0 !== c.length && (0, r.jsx)(r.Fragment, {
                                children: d ? c.map((e, t) => (0, r.jsx)(x.e, {
                                    content: e[0],
                                    closeDelay: 150,
                                    showArrow: !1,
                                    offset: 7,
                                    classNames: o,
                                    children: (0, r.jsx)("div", {
                                        className: a().badgeContainerFlex,
                                        children: (0, r.jsx)("img", {
                                            src: e[1],
                                            alt: "Custom Badge",
                                            className: a().customBadge,
                                            draggable: !1
                                        })
                                    })
                                }, t)) : c.map((e, t) => e.enabled && (0, r.jsx)(x.e, {
                                    content: e.name,
                                    closeDelay: 150,
                                    showArrow: !1,
                                    offset: 7,
                                    classNames: o,
                                    children: (0, r.jsx)("div", {
                                        className: a().badgeContainerFlex,
                                        children: (0, r.jsx)("img", {
                                            src: e.icon,
                                            alt: "Custom Badge",
                                            className: a().customBadge,
                                            draggable: !1
                                        })
                                    })
                                }, t))
                            })]
                        })
                    })
                },
                j = s(98577),
                b = s(87138),
                w = s(20697);
            let y = {
                    base: a().tooltipContainer,
                    arrow: "".concat(a().toolTipArrow, " border-2"),
                    content: "bg-transparent"
                },
                S = e => {
                    let {
                        copied: t,
                        copy: s,
                        content: n,
                        children: o
                    } = e;
                    return (0, r.jsx)(x.e, {
                        content: t ? "Copied" : n,
                        closeDelay: 600,
                        isDismissable: !0,
                        showArrow: !1,
                        offset: 10,
                        classNames: y,
                        children: (0, r.jsx)("span", {
                            onClick: s,
                            style: {
                                display: "flex"
                            },
                            children: o
                        })
                    })
                };

            function N(e) {
                let {
                    socials: t,
                    isMonochrome: s,
                    iconColor: n,
                    socialGlow: o,
                    ...i
                } = e, c = ["eth", "ltc", "bitcoin", "monero"], l = e => {
                    let t = j.Z[e.social.replace("custom_url", "customUrl")];
                    return (0, r.jsx)(b.default, {
                        href: "email" !== e.social ? e.value : "mailto:".concat(e.value),
                        target: "_blank",
                        children: "monero" === e.social && s ? j.Z.moneroMonochrome : "custom_url" === e.social && e.icon ? (0, r.jsx)("img", {
                            className: a().customIcon,
                            src: e.icon,
                            alt: ""
                        }) : t
                    })
                }, d = e => (0, r.jsx)(w.q, {
                    value: e.value,
                    children: t => {
                        let {
                            copied: n,
                            copy: o
                        } = t;
                        return (0, r.jsx)(S, {
                            copied: n,
                            copy: o,
                            content: "Copy Address",
                            children: "monero" === e.social && s ? j.Z.moneroMonochrome : j.Z[e.social.replace("custom_url", "customUrl")]
                        })
                    }
                });
                return (0, r.jsx)("div", {
                    className: a().userSocials,
                    ...i,
                    children: t.map((e, t) => (0, r.jsxs)("div", {
                        className: "".concat(a().userSocial, " ").concat(a()[e.social]),
                        children: [s ? s && (0, r.jsx)("style", {
                            children: "\n                                .".concat(a()[e.social], " svg {\n                                    color: ").concat(n, "!important;\n                                    ").concat(!1 !== o ? "filter: drop-shadow(".concat(n, " 1px 0 7px)!important;") : "filter: none!important", "\n                                }")
                        }) : (0, r.jsx)("style", {
                            children: "\n                            .".concat(a()[e.social], " svg {\n                                ").concat(!o && "filter: none!important", "\n                        }\n                        ")
                        }), c.includes(e.social) ? d(e) : l(e)]
                    }, t))
                })
            }
            var C = s(25781);

            function k(e) {
                var t, s;
                let {
                    presenceInformation: n,
                    font: o,
                    description: i,
                    discordUserBadges: c,
                    discordData: d
                } = e, u = {
                    0: "Playing",
                    1: "Streaming",
                    2: "Listening to",
                    3: "Watching",
                    5: "Competing"
                }, p = {
                    "Discord Staff": "https://cdn.discordapp.com/badge-icons/5e74e9b61934fc1f67c65515d1f7e60d.png",
                    "Partnered Server Owner": "https://cdn.discordapp.com/badge-icons/3f9748e53446a137a052f3454e2de41e.png",
                    "Moderator Programs Alumni": "https://cdn.discordapp.com/badge-icons/fee1624003e2fee35cb398e125dc479b.png",
                    "HypeSquad Events Member": "https://cdn.discordapp.com/badge-icons/bf01d1073931f921909045f3a39fd264.png",
                    "HypeSquad Bravery": "https://cdn.discordapp.com/badge-icons/8a88d63823d8a71cd5e390baa45efa02.png",
                    "HypeSquad Brilliance": "https://cdn.discordapp.com/badge-icons/011940fd013da3f7fb926e4a1cd2e618.png",
                    "HypeSquad Balance": "https://cdn.discordapp.com/badge-icons/3aa41de486fa12454c3761e8e223442e.png",
                    "Bug Hunter Level 1": "https://cdn.discordapp.com/badge-icons/2717692c7dca7289b35297368a940dd0.png",
                    "Bug Hunter Level 2": "https://cdn.discordapp.com/badge-icons/848f79194d4be5ff5f81505cbd0ce1e6.png",
                    "Active Developer": "https://cdn.discordapp.com/badge-icons/6bdc42827a38498929a4920da12695d9.png",
                    "Early Verified Bot Developer": "https://cdn.discordapp.com/badge-icons/6df5892e0f35b051f8b61eace34f4967.png",
                    "Early Nitro Supporter": "https://cdn.discordapp.com/badge-icons/7060786766c9c840eb3019e725d2b358.png",
                    "Early Supporter": "https://cdn.discordapp.com/badge-icons/7060786766c9c840eb3019e725d2b358.png",
                    "Discord Nitro": "https://cdn.discordapp.com/badge-icons/2ba85e8026a8614b640c2837bcdfe21b.png",
                    "Server Booster": "https://cdn.discordapp.com/badge-icons/72bed924410c304dbe3d00a6e593ff59.png"
                }, h = n.activities, g = h && h[0], f = h && h.find(e => "Spotify" === e.name), _ = l[o], v = {
                    base: a().tooltipContainer,
                    arrow: "".concat(a().toolTipArrow, " border-2"),
                    content: "bg-transparent"
                }, j = {
                    display: (null == g ? void 0 : null === (t = g.emoji) || void 0 === t ? void 0 : t.startsWith("https://")) && (null == g ? void 0 : g.type) === 4 && !f && "flex",
                    alignItems: (null == g ? void 0 : null === (s = g.emoji) || void 0 === s ? void 0 : s.startsWith("https://")) && (null == g ? void 0 : g.type) === 4 && !f && "flex-end"
                };
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)("div", {
                        className: a().discordPresenceContainer,
                        style: {
                            marginTop: "20px"
                        },
                        children: n.success && g ? (0, r.jsxs)("div", {
                            className: a().discordUserInformation,
                            children: [(0, r.jsx)("div", {
                                className: a().discordAvatar,
                                children: (0, r.jsxs)("div", {
                                    className: a().discordStatus,
                                    children: [(0, r.jsx)("img", {
                                        src: n.avatar,
                                        alt: "Discord Avatar"
                                    }), (0, r.jsx)("img", {
                                        src: "https://assets.guns.lol/".concat(n.status, ".png"),
                                        className: a().discordStatusIcon,
                                        alt: ""
                                    })]
                                })
                            }), (0, r.jsxs)("div", {
                                className: a().discordActivity,
                                children: [(0, r.jsxs)("div", {
                                    className: a().discordUser,
                                    children: [(0, r.jsxs)("div", {
                                        className: a().discordUserDiv,
                                        children: [(0, r.jsx)("span", {
                                            style: _.discordUsername,
                                            children: n.username
                                        }), (0, r.jsx)("div", {
                                            className: a().discordUserBadges,
                                            children: c.map((e, t) => (0, r.jsx)(x.e, {
                                                closeDelay: 150,
                                                offset: 3,
                                                content: e,
                                                classNames: v,
                                                children: (0, r.jsx)("div", {
                                                    className: a().discordBadge,
                                                    children: (0, r.jsx)("img", {
                                                        src: p[e],
                                                        alt: "Discord Badge"
                                                    })
                                                }, t)
                                            }, t))
                                        })]
                                    }), (0, r.jsx)("h3", {
                                        style: {
                                            ..._.discordStatus,
                                            ...j
                                        },
                                        children: 4 !== g.type && 2 !== g.type ? (0, r.jsxs)(r.Fragment, {
                                            children: [(0, r.jsx)("span", {
                                                className: a().highlight,
                                                children: u[g.type]
                                            }), " ", g.name, (0, r.jsx)("br", {}), g.details ? g.details : g.state]
                                        }) : f ? (0, r.jsxs)(r.Fragment, {
                                            children: [(0, r.jsx)("span", {
                                                className: a().highlight,
                                                children: u[f.type]
                                            }), " ", f.details, (0, r.jsx)("br", {}), f.state && "by ".concat(f.state.replace(";", ","))]
                                        }) : 4 === g.type && (0, r.jsxs)(r.Fragment, {
                                            children: [g.emoji.startsWith("https://") ? (0, r.jsx)("img", {
                                                src: g.emoji,
                                                alt: "Discord Emoji",
                                                className: a().discordEmoji
                                            }) : !g.emoji.startsWith("https://") && (0, r.jsx)("span", {
                                                className: a().defaultEmoji,
                                                children: g.emoji
                                            }), (0, r.jsx)("span", {
                                                children: g.state
                                            })]
                                        })
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: a().activityImage,
                                    children: 4 !== g.type && 2 !== g.type ? g.image && "{}" !== JSON.stringify(g.image) && (0, r.jsx)(x.e, {
                                        closeDelay: 150,
                                        content: "".concat(u[g.type], " ").concat(g.name),
                                        classNames: v,
                                        children: (0, r.jsx)("img", {
                                            src: g.image,
                                            alt: ""
                                        })
                                    }) : f ? (0, r.jsx)(x.e, {
                                        closeDelay: 150,
                                        content: "Listening to ".concat(f.details, " by ").concat(f.state),
                                        classNames: v,
                                        children: (0, r.jsx)("img", {
                                            src: f.image,
                                            alt: ""
                                        })
                                    }) : "offline" === g.status && null
                                })]
                            })]
                        }) : n.success && !g ? (0, r.jsxs)("div", {
                            className: a().discordUserInformation,
                            children: [(0, r.jsx)("div", {
                                className: a().discordAvatar,
                                children: (0, r.jsxs)("div", {
                                    className: a().discordStatus,
                                    children: [(0, r.jsx)("img", {
                                        src: n.avatar,
                                        alt: "Discord Avatar"
                                    }), (0, r.jsx)("img", {
                                        src: "https://assets.guns.lol/".concat(n.status, ".png"),
                                        className: a().discordStatusIcon,
                                        alt: ""
                                    })]
                                })
                            }), (0, r.jsxs)("div", {
                                className: a().discordActivity,
                                children: [(0, r.jsxs)("div", {
                                    className: a().discordUser,
                                    children: [(0, r.jsxs)("div", {
                                        className: a().discordUserDiv,
                                        children: [(0, r.jsx)("span", {
                                            style: _.discordUsername,
                                            children: n.username
                                        }), (0, r.jsx)("div", {
                                            className: a().discordUserBadges,
                                            children: c.map((e, t) => (0, r.jsx)(x.e, {
                                                closeDelay: 150,
                                                offset: 3,
                                                content: e,
                                                classNames: v,
                                                children: (0, r.jsx)("div", {
                                                    className: a().discordBadge,
                                                    children: (0, r.jsx)("img", {
                                                        src: p[e],
                                                        alt: "Discord Badge"
                                                    })
                                                }, t)
                                            }, t))
                                        })]
                                    }), (0, r.jsx)("h3", {
                                        style: {
                                            ..._.discordStatus,
                                            ...j
                                        },
                                        children: "offline" === n.status ? (0, r.jsxs)("span", {
                                            className: a().offlineText,
                                            children: ["last seen ", n.lastSeen ? (0, C.Q)(new Date(1e3 * n.lastSeen)).replace("about ", "") + " ago" : "unknown"]
                                        }) : (0, r.jsx)("span", {
                                            children: "currently doing nothing"
                                        })
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: a().activityImage
                                })]
                            })]
                        }) : (0, r.jsxs)("div", {
                            className: a().discordNotConnected,
                            children: [(0, r.jsxs)("h1", {
                                style: _.discordUsername,
                                children: [m.userNotFound, " User Not found"]
                            }), d ? (0, r.jsxs)("h3", {
                                style: _.discordStatus,
                                children: ["Join ", (0, r.jsx)(b.default, {
                                    href: "https://discord.gg/guns",
                                    target: "_blank",
                                    children: "discord.gg/guns"
                                }), " to display your status"]
                            }) : (0, r.jsxs)("h3", {
                                style: _.discordStatus,
                                children: ["Go to ", (0, r.jsx)(b.default, {
                                    href: "https://guns.lol/account",
                                    target: "_blank",
                                    children: "guns.lol/account"
                                }), " and connect your Discord account"]
                            })]
                        })
                    })
                })
            }

            function W(e) {
                let {
                    publicSalt: t,
                    challenge: s,
                    timestamp: o,
                    username: i,
                    premiumConfig: c,
                    views: u,
                    containerBorderRadius: p,
                    hideCounter: h,
                    isUnfold: g,
                    animationStartClass: f
                } = e, [_, v] = (0, n.useState)(!1), [j, b] = (0, n.useState)(""), [w, y] = (0, n.useState)(""), S = {
                    base: a().tooltipContainer,
                    arrow: "".concat(a().toolTipArrow, " border-2"),
                    content: "bg-transparent"
                }, N = l[c.font], C = p > 25 && .12 * p;
                async function k(e) {
                    b(e)
                }
                async function W(e) {
                    y(t + e), v(!0)
                }
                return (0, n.useEffect)(() => {
                    Object.assign(window, {
                        getToken: k,
                        getResult: W
                    });
                    let e = setInterval(() => {
                        _ && "" !== j && (fetch("https://guns.lol/api/view", {
                            cache: "no-store",
                            body: JSON.stringify({
                                username: decodeURIComponent(i),
                                _t: j,
                                _s: w,
                                _c: s,
                                _ps: btoa(t),
                                _ts: o
                            }),
                            method: "POST"
                        }), clearInterval(e))
                    }, 200)
                }, [_, j, w]), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(d.default, {
                        strategy: "beforeInteractive",
                        src: "https://assets.guns.lol/_pow.js",
                        id: "_codescript"
                    }), (0, r.jsx)(d.default, {
                        strategy: "beforeInteractive",
                        id: "_code",
                        children: '\n                            p = new _injPow("'.concat(t, '", "5", "').concat(s, '", !1)\n                            p.solvepow().then((async (o) => {\n                                if (o != null) {\n                                    await getResult(o.solution);\n                                }\n                            }))\n                        ')
                    }), (0, r.jsx)(d.default, {
                        strategy: "afterInteractive",
                        src: "https://challenges.cloudflare.com/turnstile/v0/api.js",
                        id: "_turnstile"
                    }), (0, r.jsx)("div", {
                        className: "cf-turnstile",
                        "data-sitekey": "0x4AAAAAAAgU7T2niLQD-TLm",
                        "data-callback": "getToken"
                    }), !c.hide_views && !h && (0, r.jsx)("div", {
                        className: "".concat(a().profileViews, " ").concat(g && f),
                        style: {
                            bottom: C ? 12 + C : 12,
                            left: C ? 15 + C : 15
                        },
                        children: (0, r.jsx)(x.e, {
                            color: "foreground",
                            content: "Profile Views",
                            closeDelay: 150,
                            showArrow: !1,
                            offset: 2.2,
                            classNames: S,
                            children: (0, r.jsxs)("span", {
                                style: N.profileViewsCount,
                                children: [m.profileViews, " ", u.toLocaleString("en-US")]
                            })
                        })
                    })]
                })
            }

            function P(e) {
                var t;
                let {
                    userData: s,
                    config: n,
                    premiumConfig: o,
                    presenceInformation: i,
                    animationStartClass: c
                } = e, d = l[o.font], u = {
                    base: a().tooltipContainer,
                    arrow: "".concat(a().toolTipArrow, " border-2"),
                    content: "bg-transparent"
                }, m = n.use_discord_avatar && s.discord ? i.avatar : n.avatar, p = "" !== n.display_name ? n.display_name : s.username, h = n.user_badges, f = (null === (t = s.discord) || void 0 === t ? void 0 : t.user_badges) ? h.includes("server_booster") || h.find(e => "server_booster" === e.name) ? [...s.discord.user_badges, "Server Booster"] : s.discord.user_badges : [], j = n.custom_badges, b = h.length > 0 && h[0] && "string" == typeof h[0], w = j.length > 0 && "string" == typeof j[0][0], y = h.length > 0 && b || !b && h.some(e => !0 === e.enabled), S = j.length > 0 && w || !w && j.some(e => !0 === e.enabled), C = c === a().unfoldStart;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        className: g().userInformation,
                        children: ["" !== o.banner && (0, r.jsx)("img", {
                            src: o.banner,
                            alt: "",
                            className: g().banner
                        }), "" !== n.avatar || n.use_discord_avatar && s.discord ? (0, r.jsx)("img", {
                            src: m,
                            alt: "",
                            className: "".concat(g().avatar, " ").concat("" !== o.banner && g().adjustBanner)
                        }) : (0, r.jsx)("div", {
                            style: {
                                marginTop: "" !== o.banner ? "135px" : ""
                            }
                        }), (0, r.jsxs)("div", {
                            className: "".concat(g().userDescription, " ").concat(C && c),
                            children: [(0, r.jsx)(x.e, {
                                color: "foreground",
                                content: "UID ".concat(s.uid),
                                closeDelay: 150,
                                showArrow: !1,
                                offset: -2,
                                classNames: u,
                                children: "typewriter" === n.username_effects ? (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)("style", {
                                        children: "\n                                        .username-typewriter .Typewriter {\n                                            font-size: ".concat(d.username.fontSize, ";\n                                            font-weight: ").concat(d.username.fontWeight, ";\n                                        }\n                                    ")
                                    }), (0, r.jsx)("div", {
                                        className: "username-typewriter",
                                        children: (0, r.jsx)(_(), {
                                            options: {
                                                strings: [p],
                                                autoStart: !0,
                                                loop: !0,
                                                wrapperClassName: g().userDescriptionUsername,
                                                cursorClassName: g().usernameCursor,
                                                stringSplitter: K
                                            }
                                        })
                                    })]
                                }) : (0, r.jsx)("h1", {
                                    className: "".concat(g().userDescriptionUsername, " ").concat("rgb" === n.username_effects && a().rainbowName),
                                    style: d.username,
                                    children: p
                                })
                            }), !(!y && !S) && (0, r.jsx)("div", {
                                className: g().badgeContainerWrapper,
                                children: (0, r.jsx)(v, {
                                    config: n,
                                    premiumConfig: o
                                })
                            }), ("" !== n.description || 0 !== o.typewriter.length) && (0, r.jsx)("h3", {
                                className: g().userDescriptionText,
                                style: d.description,
                                children: o.typewriter_enabled && 0 !== o.typewriter.length ? (0, r.jsx)(_(), {
                                    options: {
                                        strings: o.typewriter,
                                        autoStart: !0,
                                        loop: !0,
                                        stringSplitter: K
                                    }
                                }) : n.description
                            })]
                        }), "enabled" === n.presence && (0, r.jsx)("div", {
                            className: "".concat(a().discordPresenceWrapper, " ").concat(C && c),
                            children: (0, r.jsx)(k, {
                                presenceInformation: i,
                                font: o.font,
                                description: n.description,
                                discordUserBadges: f,
                                discordData: s.discord
                            })
                        }), n.socials.length > 0 && (0, r.jsx)("div", {
                            className: "".concat(g().socialsWrapper, " ").concat(C && c),
                            children: (0, r.jsx)(N, {
                                socials: n.socials,
                                isMonochrome: n.monochrome,
                                socialGlow: n.social_glow,
                                iconColor: n.icon_color
                            })
                        })]
                    }), (0, r.jsx)(W, {
                        publicSalt: s._PS,
                        challenge: s._C,
                        timestamp: s._ts,
                        username: s.username,
                        premiumConfig: o,
                        views: n.page_views,
                        containerBorderRadius: o.border_radius,
                        isUnfold: C,
                        animationStartClass: c
                    })]
                })
            }
            var L = s(73477),
                B = s.n(L);
            let z = (e, t) => "https://open.spotify.com/embed/".concat(e, "/").concat(t),
                T = e => {
                    let t = e.match(/\/([a-zA-Z]+)\/([a-zA-Z0-9]+)/);
                    if (t && 3 === t.length) {
                        let [e, s] = [t[1], t[2]];
                        return {
                            type: e,
                            code: s
                        }
                    }
                    return null
                };
            var I = e => {
                let {
                    spotifyUrl: t
                } = e, s = T(t);
                if (s) {
                    let {
                        type: e,
                        code: t
                    } = s;
                    return (0, r.jsx)("iframe", {
                        src: z(e, t),
                        height: 80,
                        width: "100%",
                        frameBorder: "0",
                        allowTransparency: !0,
                        allow: "encrypted-media"
                    })
                }
                return (0, r.jsx)("p", {
                    children: "Invalid Spotify URL"
                })
            };

            function U(e) {
                var t, s, o, a, i;
                let {
                    config: c,
                    premiumConfig: d
                } = e, u = l[d.font], [p, h] = (0, n.useState)({}), g = !!d.second_tab_enabled && "enabled" !== c.presence, f = async () => {
                    try {
                        let e = "https://discord.com/api/v8/invites/".concat(_(d.second_tab.discord), "?with_counts=true"),
                            t = await fetch(e, {
                                method: "GET"
                            }),
                            s = await t.json();
                        h({
                            error: !1,
                            approximate_member_count: "0",
                            approximate_presence_count: "0",
                            guild: {
                                name: "Loading..."
                            }
                        }), t.ok ? h(s) : 404 === t.status && h({
                            error: !0,
                            approximate_member_count: 0,
                            approximate_presence_count: 0,
                            guild: {
                                name: "Not Found"
                            }
                        })
                    } catch (e) {
                        console.error(e.message), h({
                            error: !0,
                            approximate_member_count: "0",
                            approximate_presence_count: "0",
                            guild: {
                                name: "Unknown Error"
                            }
                        })
                    }
                }, _ = e => {
                    let t = e.match(/(?:discord\.gg\/|discord\.com\/invite\/|discordapp\.com\/invite\/)([a-zA-Z0-9-]+)/);
                    return t ? t[1] : ""
                };
                return (0, n.useEffect)(() => {
                    d.second_tab.discord && f()
                }, [d.second_tab.discord]), (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)("div", {
                        className: B().secondTab,
                        children: d.second_tab.discord ? (0, r.jsxs)("div", {
                            className: B().discordServer,
                            children: [(0, r.jsxs)("div", {
                                className: B().discordInformationWrapper,
                                children: [(0, r.jsx)("div", {
                                    className: B().guildIcon,
                                    children: (null == p ? void 0 : null === (t = p.guild) || void 0 === t ? void 0 : t.icon) ? (0, r.jsx)("img", {
                                        src: "https://cdn.discordapp.com/icons/".concat(p.guild.id, "/").concat(p.guild.icon, ".png"),
                                        alt: ""
                                    }) : (0, r.jsx)("div", {
                                        className: B().missingIcon,
                                        children: (0, r.jsx)("h1", {
                                            children: p.error ? "!" : null === (s = p.guild) || void 0 === s ? void 0 : s.name.charAt(0)
                                        })
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: B().guildInformation,
                                    children: [(0, r.jsx)("h1", {
                                        style: u.serverName,
                                        children: null === (o = p.guild) || void 0 === o ? void 0 : o.name
                                    }), (0, r.jsxs)("h3", {
                                        style: u.memberCount,
                                        children: [(0, r.jsxs)("span", {
                                            children: [m.status, " ", null === (a = p.approximate_presence_count) || void 0 === a ? void 0 : a.toLocaleString("en-US"), " Online"]
                                        }), (0, r.jsxs)("span", {
                                            children: [m.status, " ", null === (i = p.approximate_member_count) || void 0 === i ? void 0 : i.toLocaleString("en-US"), " Members"]
                                        })]
                                    }), !g && (0, r.jsx)(b.default, {
                                        href: "https://discord.gg/".concat(p.error ? "" : _(d.second_tab.discord)),
                                        target: "_blank",
                                        style: u.joinButton,
                                        children: "Join"
                                    })]
                                })]
                            }), g ? (0, r.jsx)(b.default, {
                                href: "https://discord.gg/".concat(p.error ? "" : _(d.second_tab.discord)),
                                className: B().joinButtonLarge,
                                target: "_blank",
                                style: u.joinButtonLarge,
                                children: "Join"
                            }) : (0, r.jsx)("div", {
                                className: B().widgetPlaceholder
                            })]
                        }) : d.second_tab.spotify && (0, r.jsx)(I, {
                            spotifyUrl: d.second_tab.spotify
                        })
                    })
                })
            }

            function D(e) {
                var t;
                let {
                    userData: s,
                    config: n,
                    premiumConfig: o,
                    presenceInformation: i,
                    animationStartClass: c
                } = e, d = l[o.font], u = {
                    base: a().tooltipContainer,
                    arrow: "".concat(a().toolTipArrow, " border-2"),
                    content: "bg-transparent"
                }, p = n.use_discord_avatar && s.discord ? i.avatar : n.avatar, h = (e => {
                    let t = new Date(1e3 * e);
                    return (0, C.Q)(t)
                })(s.account_created), g = o.second_tab_enabled && "enabled" !== n.presence ? {
                    display: "inherit!important"
                } : {}, f = "" !== n.display_name ? n.display_name : s.username, j = (null === (t = s.discord) || void 0 === t ? void 0 : t.user_badges) ? n.user_badges.includes("server_booster") || n.user_badges.find(e => "server_booster" === e.name) ? [...s.discord.user_badges, "Server Booster"] : s.discord.user_badges : [], b = "\n                    .".concat(B().widgetContainerWrapper, " { \n                        margin-top: 27px;\n                    } \n                    "), w = "\n                    .".concat(a().discordPresenceContainer, " { \n                        display: flex!important;\n                    } \n                    "), y = n.user_badges, S = n.custom_badges, P = y.length > 0 && y[0] && "string" == typeof y[0], L = S.length > 0 && "string" == typeof S[0][0], z = y.length > 0 && P || !P && y.some(e => !0 === e.enabled), T = S.length > 0 && L || !L && S.some(e => !0 === e.enabled), I = c === a().unfoldStart;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        className: "".concat(B().userProfile, " ").concat(I && c),
                        children: ["" !== n.avatar || n.use_discord_avatar && s.discord ? (0, r.jsx)("img", {
                            src: p,
                            alt: "",
                            className: B().avatar
                        }) : (0, r.jsx)("span", {
                            className: B().userProfileSvg,
                            children: m.userAvatar
                        }), (0, r.jsxs)("div", {
                            className: B().userDescription,
                            children: [(0, r.jsxs)("div", {
                                className: B().usernameWrapper,
                                children: [(0, r.jsx)(x.e, {
                                    color: "foreground",
                                    content: "UID ".concat(s.uid),
                                    closeDelay: 150,
                                    showArrow: !1,
                                    offset: 6,
                                    classNames: u,
                                    children: "typewriter" === n.username_effects ? (0, r.jsxs)(r.Fragment, {
                                        children: [(0, r.jsx)("style", {
                                            children: "\n                                        .username-typewriter .Typewriter {\n                                            font-size: ".concat(d.username.fontSize, ";\n                                            font-weight: ").concat(d.username.fontWeight, ";\n                                            line-height: 41px;\n                                        }\n                                    ")
                                        }), (0, r.jsx)("div", {
                                            className: "username-typewriter ".concat(B().usernameTypewriter),
                                            children: (0, r.jsx)(_(), {
                                                options: {
                                                    strings: [f],
                                                    autoStart: !0,
                                                    loop: !0,
                                                    wrapperClassName: B().usernameStyles,
                                                    cursorClassName: B().usernameCursor,
                                                    stringSplitter: K
                                                }
                                            })
                                        })]
                                    }) : (0, r.jsx)("h1", {
                                        style: {
                                            ...d.username,
                                            lineHeight: "41px"
                                        },
                                        className: "".concat("rgb" === n.username_effects && a().rainbowName),
                                        children: f
                                    })
                                }), !(!z && !T) && (0, r.jsx)(v, {
                                    config: n,
                                    premiumConfig: o
                                })]
                            }), ("" !== n.description || 0 !== o.typewriter.length) && (0, r.jsx)("h3", {
                                className: B().userDescriptionText,
                                style: d.description,
                                children: o.typewriter_enabled && 0 !== o.typewriter.length ? (0, r.jsx)(_(), {
                                    options: {
                                        strings: o.typewriter,
                                        autoStart: !0,
                                        loop: !0,
                                        stringSplitter: K
                                    }
                                }) : n.description
                            }), (0, r.jsxs)("h2", {
                                style: d.joinDate,
                                children: ["joined ", h, " ago"]
                            })]
                        })]
                    }), o.second_tab_enabled || "enabled" === n.presence ? o.second_tab_enabled && "enabled" === n.presence ? (0, r.jsx)("style", {
                        children: "\n                    .".concat(a().discordPresenceContainer, " {\n                        max-width: initial;\n                    }\n                    .").concat(a().highlight, " {\n                        display: none;\n                    }\n                    .").concat(a().discordActivity, " {\n                        justify-content: space-between;\n                        width: 100%;\n                    }\n                    .").concat(a().discordPresenceContainer, " {\n                        display: block;\n                    }\n                    @media (max-width: 720px) {\n                        .").concat(a().userContainer, " {\n                            width: 95%;\n                            box-sizing: border-box;\n                        }\n                        .").concat(a().discordUser, " {\n                            max-width: 100%\n                        }\n                        .").concat(a().highlight, " {\n                            display: inline;\n                        }\n                        ").concat(o.second_tab_enabled && "enabled" !== n.presence && b, "\n                    }\n                    @media (max-width: 430px) {\n                        .").concat(a().userContainer, " {\n                            width: 100%!important;\n                        }\n                    }\n                    ").concat(!1 === i.success && w, "\n                    ")
                    }) : (0, r.jsx)("style", {
                        children: "\n                    .".concat(a().discordPresenceContainer, " {\n                        max-width: initial;\n                    }\n                    .").concat(a().discordPresenceContainer, " {\n                        display: block;\n                    }\n                    .").concat(a().discordActivity, " {\n                        justify-content: space-between;\n                        width: 100%;\n                    }\n                    @media (max-width: 720px) {\n                        ").concat("enabled" !== n.presence && b, "\n                    }\n                    ")
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: B().profileSeperator
                        }), (0, r.jsx)("style", {
                            children: "\n                        @media (max-width: 745px) {\n                            .".concat(a().userContainer, " {\n                                width: 95%;\n                                box-sizing: border-box;\n                            }\n                        }\n                        @media (max-width: 400px) {\n                            .").concat(a().userContainer, " {\n                                width: 100%;\n                            }\n                        }\n                        ")
                        })]
                    }), (0, r.jsx)("div", {
                        className: "".concat(B().widgetContainerWrapper, " ").concat(I && c),
                        style: g,
                        children: (0, r.jsxs)("div", {
                            className: B().widgetContainer,
                            style: g,
                            children: ["enabled" === n.presence && (0, r.jsx)("div", {
                                className: B().widgetContainerFlex,
                                children: (0, r.jsx)(k, {
                                    presenceInformation: i,
                                    font: o.font,
                                    description: n.description,
                                    discordData: s.discord,
                                    discordUserBadges: o.second_tab_enabled ? [] : j
                                })
                            }), o.second_tab_enabled && (o.second_tab.spotify || o.second_tab.discord) && (0, r.jsx)("div", {
                                className: B().widgetContainerFlex,
                                style: g,
                                children: (0, r.jsx)(U, {
                                    config: n,
                                    premiumConfig: o
                                })
                            })]
                        })
                    }), n.socials.length > 0 && (0, r.jsx)("div", {
                        className: "".concat(B().socialsWrapper, " ").concat(I && c),
                        children: (0, r.jsx)(N, {
                            socials: n.socials,
                            isMonochrome: n.monochrome,
                            socialGlow: n.social_glow,
                            iconColor: n.icon_color
                        })
                    }), (0, r.jsx)(W, {
                        publicSalt: s._PS,
                        challenge: s._C,
                        timestamp: s._ts,
                        username: s.username,
                        premiumConfig: o,
                        views: n.page_views,
                        containerBorderRadius: o.border_radius,
                        isUnfold: I,
                        animationStartClass: c
                    })]
                })
            }
            var A = s(25277),
                M = s.n(A),
                E = s(59608);

            function F(e) {
                let {
                    buttons: t,
                    showUrl: s,
                    font: n,
                    textAlign: o
                } = e, a = l[n];
                return (0, r.jsx)("div", {
                    className: M().userButtons,
                    children: t.map((e, t) => (0, r.jsx)("div", {
                        className: M().button,
                        style: {
                            height: s ? 65 : ""
                        },
                        children: (0, r.jsxs)(b.default, {
                            href: e.button_url,
                            target: "_blank",
                            children: ["" !== e.button_icon && (0, r.jsx)("div", {
                                className: M().buttonIconWrapper,
                                children: (0, r.jsx)("img", {
                                    src: e.button_icon,
                                    className: M().buttonIcon,
                                    alt: ""
                                })
                            }), (0, r.jsxs)("div", {
                                className: M().buttonInformationWrapper,
                                style: {
                                    marginLeft: "" != e.button_icon && "left" === o ? 60 : ""
                                },
                                children: [(0, r.jsx)("h1", {
                                    style: a.buttonText,
                                    children: e.button_title
                                }), s && (0, r.jsxs)("span", {
                                    className: M().buttonShowUrl,
                                    style: a.buttonUrl,
                                    children: [E.Z.link, " ", e.button_url]
                                })]
                            })]
                        })
                    }, t))
                })
            }

            function H(e) {
                let {
                    userData: t,
                    config: s,
                    premiumConfig: n,
                    presenceInformation: o,
                    animationStartClass: i
                } = e, c = l[n.font], d = {
                    base: a().tooltipContainer,
                    arrow: "".concat(a().toolTipArrow, " border-2"),
                    content: "bg-transparent"
                }, u = s.use_discord_avatar && t.discord ? o.avatar : s.avatar, m = "" !== s.display_name ? s.display_name : t.username, p = s.user_badges, h = s.custom_badges, g = p.length > 0 && p[0] && "string" == typeof p[0], f = h.length > 0 && "string" == typeof h[0][0], j = p.length > 0 && g || !g && p.some(e => !0 === e.enabled), b = h.length > 0 && f || !f && h.some(e => !0 === e.enabled), w = i === a().unfoldStart;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        className: M().userInformation,
                        children: [("" !== s.avatar || s.use_discord_avatar && t.discord) && (0, r.jsx)("img", {
                            src: u,
                            alt: "",
                            className: M().avatar
                        }), (0, r.jsxs)("div", {
                            className: "".concat(M().userDescription, " ").concat(w && i),
                            children: [(0, r.jsx)(x.e, {
                                color: "foreground",
                                content: "UID ".concat(t.uid),
                                closeDelay: 150,
                                showArrow: !1,
                                offset: -2,
                                classNames: d,
                                children: "typewriter" === s.username_effects ? (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)("style", {
                                        children: "\n                                        .username-typewriter .Typewriter {\n                                            font-size: ".concat(c.username.fontSize, ";\n                                            font-weight: ").concat(c.username.fontWeight, ";\n                                        }\n                                    ")
                                    }), (0, r.jsx)("div", {
                                        className: "username-typewriter",
                                        children: (0, r.jsx)(_(), {
                                            options: {
                                                strings: [m],
                                                autoStart: !0,
                                                loop: !0,
                                                wrapperClassName: M().username,
                                                cursorClassName: M().usernameCursor,
                                                stringSplitter: K
                                            }
                                        })
                                    })]
                                }) : (0, r.jsx)("h1", {
                                    className: "".concat(M().username, " ").concat("rgb" === s.username_effects && a().rainbowName),
                                    style: c.username,
                                    children: m
                                })
                            }), !(!j && !b) && (0, r.jsx)("div", {
                                className: M().badgeContainerWrapper,
                                children: (0, r.jsx)(v, {
                                    config: s,
                                    premiumConfig: n
                                })
                            }), ("" !== s.description || 0 !== n.typewriter.length) && (0, r.jsx)("h3", {
                                className: M().description,
                                style: c.description,
                                children: n.typewriter_enabled && 0 !== n.typewriter.length ? (0, r.jsx)(_(), {
                                    options: {
                                        strings: n.typewriter,
                                        autoStart: !0,
                                        loop: !0,
                                        stringSplitter: K
                                    }
                                }) : s.description
                            })]
                        }), s.socials.length > 0 && (0, r.jsx)("div", {
                            className: "".concat(M().socialWrapper, " ").concat(w && i),
                            children: (0, r.jsx)(N, {
                                socials: s.socials,
                                isMonochrome: s.monochrome,
                                socialGlow: s.social_glow,
                                iconColor: s.icon_color
                            })
                        }), n.buttons.length > 0 && (0, r.jsx)("div", {
                            className: "".concat(M().buttonWrapper, " ").concat(w && i),
                            children: (0, r.jsx)(F, {
                                buttons: n.buttons,
                                showUrl: n.show_url,
                                font: n.font,
                                textAlign: n.text_align
                            })
                        })]
                    }), (0, r.jsx)(W, {
                        publicSalt: t._PS,
                        challenge: t._C,
                        timestamp: t._ts,
                        username: t.username,
                        premiumConfig: n,
                        views: s.page_views,
                        containerBorderRadius: n.border_radius,
                        hideCounter: !0,
                        isUnfold: w,
                        animationStartClass: i
                    })]
                })
            }
            var Z = s(53730),
                V = s.n(Z),
                q = s(92830),
                R = s.n(q);

            function O(e) {
                let {
                    username: t
                } = e;
                return (0, r.jsx)("div", {
                    className: R().containerWrapper,
                    children: (0, r.jsxs)("div", {
                        className: R().container,
                        children: [E.Z.error, (0, r.jsx)("h1", {
                            children: "This user is not claimed"
                        }), (0, r.jsx)("h3", {
                            children: "Claim this name fast by clicking on the button below!"
                        }), (0, r.jsxs)("div", {
                            className: R().containerButtons,
                            children: [(0, r.jsx)(b.default, {
                                href: "/",
                                children: "Go Home"
                            }), (0, r.jsx)(b.default, {
                                href: "/register?claim=".concat(t),
                                children: "Claim Now!"
                            })]
                        })]
                    })
                })
            }

            function G() {
                return (0, r.jsx)("div", {
                    className: R().containerWrapper,
                    children: (0, r.jsxs)("div", {
                        className: R().container,
                        children: [E.Z.error, (0, r.jsx)("h1", {
                            children: "Uh oh! An unknown error occurred"
                        }), (0, r.jsxs)("h3", {
                            children: ["Please report this error on our ", (0, r.jsx)(b.default, {
                                href: "https://discord.gg/guns",
                                style: {
                                    textDecoration: "none",
                                    color: "#b252cc"
                                },
                                children: "discord server"
                            }), "."]
                        }), (0, r.jsxs)("div", {
                            className: R().containerButtons,
                            children: [(0, r.jsx)(b.default, {
                                href: "/",
                                children: "Go Home"
                            }), (0, r.jsx)(b.default, {
                                href: "https://discord.gg/guns",
                                target: "_blank",
                                children: "Discord Server"
                            })]
                        })]
                    })
                })
            }

            function J(e) {
                let {
                    reason: t
                } = e;
                return (0, r.jsx)("div", {
                    className: R().containerWrapper,
                    children: (0, r.jsxs)("div", {
                        className: R().container,
                        children: [E.Z.error, (0, r.jsxs)("h1", {
                            children: ["This user has been banned from ", (0, r.jsx)(b.default, {
                                href: "/",
                                style: {
                                    textDecoration: "none",
                                    color: "#b252cc"
                                },
                                children: "guns.lol"
                            })]
                        }), (0, r.jsxs)("h3", {
                            children: ["Reason: ", t]
                        }), (0, r.jsxs)("div", {
                            className: R().containerButtons,
                            children: [(0, r.jsx)(b.default, {
                                href: "/",
                                children: "Go Home"
                            }), (0, r.jsx)(b.default, {
                                href: "https://discord.gg/guns",
                                target: "_blank",
                                children: "Discord Server"
                            })]
                        })]
                    })
                })
            }

            function X() {
                return (0, r.jsx)("div", {
                    className: R().containerWrapper,
                    children: (0, r.jsxs)("div", {
                        className: R().container,
                        children: [E.Z.error, (0, r.jsx)("h1", {
                            children: "This user is not verified yet"
                        }), (0, r.jsx)("h3", {
                            children: "If that's your account, please check your email."
                        }), (0, r.jsxs)("div", {
                            className: R().containerButtons,
                            children: [(0, r.jsx)(b.default, {
                                href: "/",
                                children: "Go Home"
                            }), (0, r.jsx)(b.default, {
                                href: "https://discord.gg/guns",
                                target: "_blank",
                                children: "Discord Server"
                            })]
                        })]
                    })
                })
            }
            var Y = s(16463);
            let K = e => new(V())().splitGraphemes(e),
                Q = (e, t) => {
                    let s = parseInt(e = e.replace(/^#/, ""), 16);
                    return "rgba(".concat(s >> 16 & 255, ", ").concat(s >> 8 & 255, ", ").concat(255 & s, ", ").concat(Math.max(0, Math.min(1, t)), ")")
                };

            function $(e) {
                let {
                    data: t
                } = e, s = (0, Y.useSearchParams)(), [o, d] = (0, n.useState)(!1), h = decodeURIComponent((0, Y.useParams)().username);
                t.alias && t.redirect && (0, Y.redirect)(t.redirect);
                var g, f = t.config;
                void 0 === f && (f = {
                    socials: [],
                    user_badges: [],
                    custom_badges: [],
                    color: "#1b1b1b",
                    text_color: "#FFFFFF",
                    bg_color: "#080808",
                    gradient_1: "#881c9c",
                    gradient_2: "#0d0d0d",
                    profile_gradient: !1,
                    use_discord_avatar: !1,
                    volume_control: !1,
                    badge_glow: !0,
                    username_glow: !0,
                    swap_colors: !1,
                    monochrome: !0,
                    animated_title: !1,
                    page_views: 0,
                    blur: 7,
                    opacity: 1,
                    url: "",
                    audio: "",
                    avatar: "",
                    custom_cursor: "",
                    description: "",
                    presence: "",
                    display_name: "",
                    background_effects: "",
                    username_effects: "",
                    premium: {
                        effects_color: "#ffffff",
                        badge_color: "#ffffff",
                        border_color: "#ffffff",
                        typewriter_enabled: !1,
                        typewriter: [],
                        hide_views: !1,
                        border_enabled: !1,
                        second_tab_enabled: !1,
                        monochrome_badges: !1,
                        border_width: 2,
                        border_radius: 18,
                        second_tab: {},
                        cursor_effects: "",
                        font: "satoshi",
                        page_enter_text: "",
                        layout: "default",
                        banner: "",
                        buttons: [],
                        show_url: !1,
                        text_align: "center",
                        button_shadow: !1,
                        button_border_radius: 12
                    }
                });
                let _ = f.premium,
                    x = (0, n.useRef)(null),
                    v = (0, n.useRef)(null),
                    [j, b] = (0, n.useState)(!1),
                    w = (0, n.useRef)(null),
                    y = l[_.font],
                    S = f.text_color,
                    N = "".concat(_.border_width, "px solid ").concat(Q(_.border_color, f.opacity - .2 * f.opacity)),
                    C = "2px solid ".concat(Q(_.border_color, f.opacity - .1 * f.opacity)),
                    k = "simplistic" === _.layout ? {
                        justifyContent: "initial"
                    } : void 0,
                    W = {
                        "--presenceUsernameColor": S,
                        "--presenceStatusColor": Q(S, .7),
                        "--presenceContainerBackground": f.swap_colors ? Q(f.color, .2) : Q(S, .07),
                        "--presenceContainerBorder": f.swap_colors ? "2px solid ".concat(Q(f.color, .1)) : "2px solid ".concat(Q(S, .05)),
                        "--discordServerMembers": Q(S, .6),
                        "--secondTabBackground": f.swap_colors ? Q(f.color, .2) : Q(S, .07),
                        "--secondTabBorder": f.swap_colors ? "2px solid ".concat(Q(f.color, .1)) : "2px solid ".concat(Q(S, .05)),
                        "--discordMissingIcon": Q(S, .25),
                        "--modernLayoutSeperator": Q(S, .12),
                        "--modernLayoutSeperatorBorder": Q(S, .12),
                        "--discordAvatarBorder": "2px solid ".concat(Q(f.color, .15)),
                        "--badgeContainerBackground": f.swap_colors ? Q(f.color, .2) : Q(S, .08),
                        "--badgeContainerBorder": "2px solid ".concat(Q(f.swap_colors ? f.color : S, .04)),
                        "--userBadge": {
                            default: "20.5px",
                            modern: "18px",
                            simplistic: "20.5px"
                        } [_.layout],
                        "--textColor": S,
                        "--iconColor": f.icon_color,
                        "--backgroundColor": f.bg_color,
                        "--joinStatus": Q(S, .65),
                        "--avatarBorder": _.border_enabled ? C : "2px solid ".concat(Q(f.color, .4)),
                        "--containerColor": Q(f.color, f.opacity),
                        "--containerBlur": "".concat(f.blur, "px"),
                        "--containerGradient": f.profile_gradient && "linear-gradient(25deg, ".concat(Q(f.gradient_1, f.opacity), ", ").concat(Q(f.gradient_2, f.opacity), ")"),
                        "--containerBorder": _.border_enabled && N,
                        "--containerRadius": "".concat(_.border_radius, "px"),
                        "--containerWidth": {
                            default: "38rem",
                            modern: "41rem",
                            simplistic: "33rem"
                        } [_.layout],
                        "--containerPadding": "modern" !== _.layout ? "35px 15px" : "modern" === _.layout && "27px 23px",
                        "--volumeBackgroundcolor": Q(f.color, 0 !== f.opacity ? f.opacity : .2),
                        "--volumeBorder": "2px solid ".concat(Q(f.color, 0 !== f.opacity ? f.opacity - .1 * f.opacity : .05)),
                        "--colorUsernameGlow": f.username_glow && "0px 0px 16.5px ".concat(S),
                        "--usernameEffects": !["rgb", "none", ""].includes(f.username_effects) && "url(https://assets.guns.lol/sparkle_".concat(f.username_effects, ".gif)"),
                        "--buttonBackground": Q(S, .22),
                        "--buttonBorder": "2px solid ".concat(Q(S, .12)),
                        "--buttonRadius": "".concat(_.button_border_radius, "px"),
                        "--buttonAlign": _.text_align,
                        "--buttonBackgroundHover": Q(S, .32),
                        "--buttonBorderHover": "2px solid ".concat(Q(S, .25)),
                        "--buttonUrlColor": Q(S, .65),
                        "--buttonShadow": _.button_shadow && "".concat(Q(S, .22), " 0px 0px 15px")
                    },
                    L = t.premium ? "unfold" === _.animation ? a().unfoldStart : (_.animation, a().fadeUpStart) : a().fadeUpStart,
                    B = t.premium ? "unfold" === _.animation ? a().unfold : (_.animation, a().fadeUp) : a().fadeUp,
                    z = {
                        modern: "".concat(a().userContainer, " ").concat(L),
                        default: "".concat(a().userContainer, " ").concat(L),
                        simplistic: "".concat(a().userContainerLayout3, " ").concat(L)
                    };
                (0, n.useEffect)(() => {
                    if (console.log(s), d("true" === s.get("custom_domain")), t.success && !t.ban && f.animated_title) {
                        var e;
                        let s, r;
                        e = "" !== f.display_name ? f.display_name : t.username, s = 0, r = !0, setInterval(() => {
                            s === e.length && (r = !1), 0 === s && (r = !0);
                            let t = 0 === (s = r ? s + 1 : s - 1) ? "" : e.slice(0, s);
                            document.title = "@" + t
                        }, 380)
                    }
                    "" !== f.audio || T(f.url) || (B === a().fadeUp ? setTimeout(function() {
                        w.current && w.current.classList.add(a().fadeUp)
                    }, 350) : B === a().unfold && document.querySelectorAll(".".concat(a().unfoldStart)).forEach((e, t) => {
                        setTimeout(() => {
                            e.classList.add(a().unfold)
                        }, 300 * t)
                    }))
                }, [s]);
                let T = e => {
                    for (let t of [".mp4", ".mov", ".avi", ".m4v"])
                        if (e.endsWith(t)) return !0;
                    return !1
                };
                return (0, r.jsx)(r.Fragment, {
                    children: t.success && !t.ban && t.verified ? (0, r.jsxs)(r.Fragment, {
                        children: [o && (0, r.jsx)("div", {
                            className: a().madeWithGuns,
                            children: (0, r.jsxs)("h1", {
                                children: ["made with ", (0, r.jsx)("a", {
                                    href: "https://guns.lol",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: "guns.lol"
                                })]
                            })
                        }), (0, r.jsx)(i, {
                            backgroundUrl: f.url,
                            audioUrl: f.audio,
                            videoTagRef: x,
                            audioTagRef: v
                        }), ("" !== f.audio || T(f.url)) && (0, r.jsx)(c, {
                            videoTagRef: x,
                            audioTagRef: v,
                            clickToEnterText: "" === _.page_enter_text ? "click to enter..." : _.page_enter_text,
                            userFont: y,
                            userContainerRef: w,
                            animationClass: B
                        }), (0, r.jsx)(u, {
                            backgroundEffects: f.background_effects,
                            cursorEffects: _.cursor_effects,
                            cursorEffectsColor: _.effects_color,
                            textColor: S,
                            backgroundColor: f.bg_color,
                            cursorUrl: f.custom_cursor
                        }), (0, r.jsx)(p, {
                            font: _.font
                        }), (0, r.jsx)("div", {
                            className: a().backgroundColor,
                            style: {
                                backgroundColor: f.bg_color
                            }
                        }), (0, r.jsxs)("div", {
                            style: W,
                            children: [f.volume_control && (T(f.url) || "" !== f.audio) && (0, r.jsx)("div", {
                                className: a().volumeButton,
                                onClick: () => {
                                    j ? (v.current && (v.current.muted = !1), "" === f.audio && x.current && (x.current.muted = !1), b(!1)) : (v.current && (v.current.muted = !0), x.current && (x.current.muted = !0), b(!0))
                                },
                                children: j ? m.muted : m.unmuted
                            }), (0, r.jsx)("div", {
                                className: a().mainContainer,
                                children: (0, r.jsx)("div", {
                                    className: a().userContainerWrapper,
                                    style: k,
                                    children: (0, r.jsx)("div", {
                                        className: z[_.layout],
                                        ref: w,
                                        children: "default" === _.layout ? (0, r.jsx)(P, {
                                            userData: t,
                                            config: f,
                                            premiumConfig: _,
                                            presenceInformation: t.presence,
                                            animationStartClass: L
                                        }) : "modern" === _.layout ? (0, r.jsx)(D, {
                                            userData: t,
                                            config: f,
                                            premiumConfig: _,
                                            presenceInformation: t.presence,
                                            animationStartClass: L
                                        }) : (0, r.jsx)(H, {
                                            userData: t,
                                            config: f,
                                            premiumConfig: _,
                                            presenceInformation: t.presence,
                                            animationStartClass: L
                                        })
                                    })
                                })
                            })]
                        })]
                    }) : (null === (g = t.error) || void 0 === g ? void 0 : g.toLowerCase()) === "user not found" ? (0, r.jsx)(O, {
                        username: h
                    }) : t.error ? (0, r.jsx)(G, {}) : !0 === t.ban ? (0, r.jsx)(J, {
                        reason: t.ban_reason
                    }) : !t.verified && (0, r.jsx)(X, {})
                })
            }
        },
        83826: function(e) {
            e.exports = {
                userInformation: "userLayout1_userInformation__GMpFu",
                avatar: "userLayout1_avatar__qnP1r",
                userDescription: "userLayout1_userDescription__ZjN4w",
                userDescriptionText: "userLayout1_userDescriptionText__grrjO",
                userDescriptionUsername: "userLayout1_userDescriptionUsername__ynCxB",
                usernameCursor: "userLayout1_usernameCursor__Iwq_D",
                badgeContainerWrapper: "userLayout1_badgeContainerWrapper__MV2I1",
                banner: "userLayout1_banner__gDnXO",
                adjustBanner: "userLayout1_adjustBanner__ZkAJ8",
                socialsWrapper: "userLayout1_socialsWrapper__9yWdO"
            }
        },
        73477: function(e) {
            e.exports = {
                userProfile: "userLayout2_userProfile__NJZlA",
                avatar: "userLayout2_avatar__Pqgcw",
                userDescription: "userLayout2_userDescription__sYo_t",
                usernameStyles: "userLayout2_usernameStyles__oqjz5",
                usernameCursor: "userLayout2_usernameCursor__4EKZt",
                usernameWrapper: "userLayout2_usernameWrapper__ndZQN",
                usernameTypewriter: "userLayout2_usernameTypewriter__zdo6s",
                widgetContainer: "userLayout2_widgetContainer__oNrZ7",
                widgetContainerFlex: "userLayout2_widgetContainerFlex__Ju8_4",
                secondTab: "userLayout2_secondTab__TnJGU",
                widgetContainerWrapper: "userLayout2_widgetContainerWrapper__vtDOQ",
                guildIcon: "userLayout2_guildIcon__NFphk",
                discordServer: "userLayout2_discordServer__ZTxRU",
                guildInformation: "userLayout2_guildInformation__FiRVE",
                profileSeperator: "userLayout2_profileSeperator__kuDqS",
                socialsWrapper: "userLayout2_socialsWrapper__SOqg0",
                discordInformationWrapper: "userLayout2_discordInformationWrapper__hYFJt",
                joinButtonLarge: "userLayout2_joinButtonLarge__eo99Z",
                widgetPlaceholder: "userLayout2_widgetPlaceholder__WMAac",
                userProfileSvg: "userLayout2_userProfileSvg__poFeq",
                missingIcon: "userLayout2_missingIcon__yYJ4k"
            }
        },
        25277: function(e) {
            e.exports = {
                userInformation: "userLayout3_userInformation__XY6Cv",
                avatar: "userLayout3_avatar___QBfi",
                description: "userLayout3_description__m_svC",
                username: "userLayout3_username__aL5xu",
                usernameCursor: "userLayout3_usernameCursor__OsNOm",
                userDescription: "userLayout3_userDescription__cZijh",
                badgeContainerWrapper: "userLayout3_badgeContainerWrapper__68aF4",
                socialWrapper: "userLayout3_socialWrapper__RUQsH",
                buttonWrapper: "userLayout3_buttonWrapper__RpJZm",
                userButtons: "userLayout3_userButtons__LDNnk",
                button: "userLayout3_button__xtBkk",
                buttonShowUrl: "userLayout3_buttonShowUrl__nbq1Z",
                buttonInformationWrapper: "userLayout3_buttonInformationWrapper__YjJT_",
                buttonIcon: "userLayout3_buttonIcon__mzHwy",
                buttonIconWrapper: "userLayout3_buttonIconWrapper__1xEU8"
            }
        },
        98059: function(e) {
            e.exports = {
                snowflake: "userPage_snowflake__tIhFu",
                inner: "userPage_inner__ABjv6",
                "snowflakes-shake": "userPage_snowflakes-shake__f0RbD",
                "snowflakes-fall": "userPage_snowflakes-fall__M5LeS",
                backgroundVideo: "userPage_backgroundVideo__eD52R",
                backgroundImage: "userPage_backgroundImage__11BmZ",
                clickToEnterOverlay: "userPage_clickToEnterOverlay__yTl7T",
                hide: "userPage_hide___is2D",
                clickToEnterText: "userPage_clickToEnterText__3qgKs",
                blurredBackground: "userPage_blurredBackground__9n5Ya",
                nightTime: "userPage_nightTime__oGgX_",
                oldTV: "userPage_oldTV__VWUCS",
                tooltipContainer: "userPage_tooltipContainer__kxmY1",
                verified: "userPage_verified__cKqvm",
                bugHunter: "userPage_bugHunter__wYhyc",
                winner: "userPage_winner__wn9HE",
                second: "userPage_second__T0lnj",
                third: "userPage_third__2mMoK",
                imageHost: "userPage_imageHost__fZBMt",
                serverBooster: "userPage_serverBooster__okX9e",
                premium: "userPage_premium__I_s2h",
                staff: "userPage_staff__Rda7x",
                og: "userPage_og__0_eX9",
                donor: "userPage_donor__F8dCK",
                userSocials: "userPage_userSocials__J9Lve",
                userSocial: "userPage_userSocial__pqgln",
                customIcon: "userPage_customIcon__acNk7",
                youtube: "userPage_youtube__o7aWH",
                onlyfans: "userPage_onlyfans__VtSxO",
                email: "userPage_email__2SHfG",
                discord: "userPage_discord__HqXif",
                spotify: "userPage_spotify__JXTsD",
                instagram: "userPage_instagram__1b1yw",
                x: "userPage_x__ITEC2",
                tiktok: "userPage_tiktok__wU4FE",
                telegram: "userPage_telegram__oXlUA",
                soundcloud: "userPage_soundcloud__sKTNE",
                paypal: "userPage_paypal__o0kMj",
                namemc: "userPage_namemc__6vSfq",
                "ko-fi": "userPage_ko-fi__OtD4v",
                github: "userPage_github__qWBED",
                roblox: "userPage_roblox__rViJ_",
                cashapp: "userPage_cashapp__dV5te",
                twitch: "userPage_twitch__ggEDm",
                reddit: "userPage_reddit__FGMIp",
                steam: "userPage_steam__EhoB0",
                kick: "userPage_kick__vmWm_",
                pinterest: "userPage_pinterest___zLTM",
                lastfm: "userPage_lastfm__uItE3",
                facebook: "userPage_facebook__bRTvk",
                linkedin: "userPage_linkedin__ipF0f",
                snapchat: "userPage_snapchat__BnGsw",
                bitcoin: "userPage_bitcoin__aTvLy",
                ltc: "userPage_ltc__oGQ_X",
                buymeacoffee: "userPage_buymeacoffee__MNCAw",
                eth: "userPage_eth__YMYHq",
                monero: "userPage_monero__qUrgo",
                gitlab: "userPage_gitlab__aJGZ5",
                custom_url: "userPage_custom_url__f0SsA",
                discordPresenceContainer: "userPage_discordPresenceContainer__qZ67h",
                discordUserInformation: "userPage_discordUserInformation__x1y6x",
                discordAvatar: "userPage_discordAvatar__5yihz",
                discordUser: "userPage_discordUser__wDdLz",
                discordUserDiv: "userPage_discordUserDiv__fp0gq",
                highlight: "userPage_highlight__N8An9",
                activityImage: "userPage_activityImage__KIhMA",
                discordStatus: "userPage_discordStatus__ME1mG",
                discordStatusIcon: "userPage_discordStatusIcon__tKlAh",
                offlineText: "userPage_offlineText__N3A_8",
                discordEmoji: "userPage_discordEmoji__vPJ_s",
                discordNotConnected: "userPage_discordNotConnected__tcJd7",
                mainContainer: "userPage_mainContainer__D9vBk",
                userContainerWrapper: "userPage_userContainerWrapper__OVz6p",
                userContainer: "userPage_userContainer__eymIK",
                userContainerLayout3: "userPage_userContainerLayout3__TqoNC",
                unfold: "userPage_unfold__XlZ8v",
                unfoldStart: "userPage_unfoldStart__cFi88",
                fadeUpStart: "userPage_fadeUpStart__fjpAo",
                fadeUp: "userPage_fadeUp__ulAPo",
                backgroundColor: "userPage_backgroundColor__NOc2o",
                profileViews: "userPage_profileViews__2Hqh_",
                rainbowName: "userPage_rainbowName__3k0IU",
                rainbowAnimation: "userPage_rainbowAnimation__cJjwD",
                discordPresenceWrapper: "userPage_discordPresenceWrapper__zBM2B",
                discordActivity: "userPage_discordActivity__727if",
                volumeButton: "userPage_volumeButton__Da10v",
                customBadge: "userPage_customBadge__hOMNg",
                defaultEmoji: "userPage_defaultEmoji__uJ6X2",
                badgeContainer: "userPage_badgeContainer__uuL3l",
                badgeContainerFlex: "userPage_badgeContainerFlex__1W_i0",
                discordUserBadges: "userPage_discordUserBadges__OOAES",
                discordBadge: "userPage_discordBadge__xp77l",
                zoomInSpin: "userPage_zoomInSpin__fMtG3"
            }
        }
    }
]);