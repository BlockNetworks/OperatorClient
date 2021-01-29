function checkUpdate() {
    friendManagerVar1 = _0x14ae("0x33"), friendManagerVar2 = _0x14ae("0x34");
    var e = new(java[_0x14ae("0x35")][_0x14ae("0x36")])("https://raw.githubusercontent.com/EchoHackCmd/OperatorClient/master/version").openConnection()[_0x14ae("0x37")](),
        a = new(java.io[_0x14ae("0x38")])(new(java.io[_0x14ae("0x39")])(e));
    latestVersion = a[_0x14ae("0x3a")](), latestVersion != version && (print(_0x14ae("0x3b") + latestVersion), UpdateUI(), mainMenuBtn()), latestVersion == version && (print(_0x14ae("0x3c") + version), mainMenuBtn())
}

function clientHelper() {
    try {
        var e = new(java[_0x14ae("0x35")][_0x14ae("0x36")])(_0x14ae("0x3d")).openConnection()[_0x14ae("0x37")](),
            a = new java.io.BufferedReader(new(java.io[_0x14ae("0x39")])(e));
        hbhbcheck = a[_0x14ae("0x3a")](), hbhbcheck != hbhb && print(_0x14ae("0x3e")), hbhbcheck == hbhb && (print(_0x14ae("0x3f")), checkUpdate())
    } catch (e) {
        print(_0x14ae("0x40"))
    }
}

function UpdateUI() {
    var e = new(java[_0x14ae("0x35")][_0x14ae("0x36")])(_0x14ae("0x41")).openConnection()[_0x14ae("0x37")](),
        a = new(java.io[_0x14ae("0x38")])(new(java.io[_0x14ae("0x39")])(e));
    changelog = a.readLine(), ctx[_0x14ae("0x42")](new Runnable({
        run: function() {
            try {
                var e = new LinearLayout(ctx);
                e[_0x14ae("0x43")](1);
                var a = new TextView(ctx);
                a[_0x14ae("0x44")](_0x14ae("0x45") + changelog), a[_0x14ae("0x46")](Color[_0x14ae("0x47")]), a[_0x14ae("0x48")](new(android[_0x14ae("0x16")][_0x14ae("0x2d")][_0x14ae("0x2e")])(android[_0x14ae("0x16")][_0x14ae("0x17")][_0x14ae("0x49")])), e[_0x14ae("0x4a")](a);
                var x = new Button(ctx);
                x[_0x14ae("0x44")](_0x14ae("0x4b")), x[_0x14ae("0x46")](Color[_0x14ae("0x47")]), x.setBackgroundDrawable(new(android[_0x14ae("0x16")][_0x14ae("0x2d")][_0x14ae("0x2e")])(android.graphics[_0x14ae("0x17")][_0x14ae("0x49")])), x[_0x14ae("0x4c")](10, 10, 10, 10), x.setOnClickListener(new View.OnClickListener({
                    onClick: function(e) {
                        updateUI.dismiss();
                        var a = new(android[_0x14ae("0x4d")][_0x14ae("0x4e")])(ctx);
                        a[_0x14ae("0x4f")](android[_0x14ae("0x4d")][_0x14ae("0x4e")][_0x14ae("0x50")]), a[_0x14ae("0x51")](android[_0x14ae("0x35")][_0x14ae("0x52")][_0x14ae("0x53")]("https://github.com/EchoHackCmd/OperatorClient/releases")), ctx[_0x14ae("0x54")](a)
                    }
                })), e[_0x14ae("0x4a")](x);
                var t = new Button(ctx);
                t[_0x14ae("0x44")]("Update Later"), t[_0x14ae("0x46")](Color[_0x14ae("0x47")]), t[_0x14ae("0x48")](new(android.graphics[_0x14ae("0x2d")][_0x14ae("0x2e")])(android[_0x14ae("0x16")][_0x14ae("0x17")][_0x14ae("0x49")])), t[_0x14ae("0x4c")](10, 10, 10, 10), t[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        updateUI[_0x14ae("0x57")]()
                    }
                })), e[_0x14ae("0x4a")](t), updateUI = new PopupWindow(e, RelativeLayout[_0x14ae("0x58")][_0x14ae("0x59")], RelativeLayout.LayoutParams[_0x14ae("0x59")]), updateUI.setBackgroundDrawable(new ColorDrawable(Color[_0x14ae("0x49")])), updateUI[_0x14ae("0x5a")](android.R[_0x14ae("0x5b")][_0x14ae("0x5c")]), updateUI[_0x14ae("0x5d")](ctx[_0x14ae("0x5e")]()[_0x14ae("0x5f")](), Gravity[_0x14ae("0x60")] | Gravity.CENTER, 0, 0)
            } catch (e) {
                print(_0x14ae("0x61") + e)
            }
        }
    }))
}

function showAimBtn() {
    ctx[_0x14ae("0x42")](new Runnable({
        run: function() {
            try {
                var e = new LinearLayout(ctx);
                e[_0x14ae("0x43")](1);
                var a = new Button(ctx);
                a[_0x14ae("0x44")]("A"), a.setTextColor(offToggledKeybindColor), a[_0x14ae("0x48")](new ColorDrawable(Color[_0x14ae("0x1c")])), a[_0x14ae("0x4c")](10, 10, 10, 10), a[_0x14ae("0x62")]()[_0x14ae("0x63")](100), a[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        aimbot ? (aimbot = !1, a[_0x14ae("0x46")](offToggledKeybindColor)) : (aimbot = !0, a[_0x14ae("0x46")](onToggledKeybindColor))
                    }
                })), e.addView(a), GUIaim = new PopupWindow(e, RelativeLayout[_0x14ae("0x58")][_0x14ae("0x59")], RelativeLayout.LayoutParams[_0x14ae("0x59")]), GUIaim[_0x14ae("0x48")](new ColorDrawable(keybindBackgroundColor)), GUIaim[_0x14ae("0x5d")](ctx[_0x14ae("0x5e")]().getDecorView(), Gravity.TOP | Gravity.RIGHT, 0, 0)
            } catch (e) {
                Toast[_0x14ae("0x64")](ctx, _0x14ae("0x61") + e, 1)[_0x14ae("0x65")]()
            }
        }
    }))
}

function showHitboxBtn() {
    ctx[_0x14ae("0x42")](new Runnable({
        run: function() {
            try {
                var e = new LinearLayout(ctx);
                e.setOrientation(1);
                var x = new Button(ctx);
                x[_0x14ae("0x44")]("H"), x[_0x14ae("0x46")](offToggledKeybindColor), x[_0x14ae("0x48")](new ColorDrawable(Color[_0x14ae("0x1c")])), x[_0x14ae("0x4c")](10, 10, 10, 10), x[_0x14ae("0x62")]().setAlpha(100), x[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        if (hb) {
                            hb = !1;
                            var a = getNearestEntity(1200);
                            Entity[_0x14ae("0x66")](a, hbwidth, hbheight), x[_0x14ae("0x46")](offToggledKeybindColor)
                        } else hb = !0, x[_0x14ae("0x46")](onToggledKeybindColor)
                    }
                })), e.addView(x), GUIhb = new PopupWindow(e, RelativeLayout[_0x14ae("0x58")][_0x14ae("0x59")], RelativeLayout[_0x14ae("0x58")][_0x14ae("0x59")]), GUIhb[_0x14ae("0x48")](new ColorDrawable(keybindBackgroundColor)), GUIhb[_0x14ae("0x5d")](ctx[_0x14ae("0x5e")]()[_0x14ae("0x5f")](), Gravity[_0x14ae("0x67")] | Gravity[_0x14ae("0x68")], 150, 0)
            } catch (e) {
                Toast[_0x14ae("0x64")](ctx, _0x14ae("0x61") + e, 1)[_0x14ae("0x65")]()
            }
        }
    }))
}

function showElevatorBtn() {
    ctx[_0x14ae("0x42")](new Runnable({
        run: function() {
            try {
                var e = new LinearLayout(ctx);
                e[_0x14ae("0x43")](1);
                var a = new Button(ctx);
                a[_0x14ae("0x44")]("UP"), a.setTextColor(nonToggleKeybindColor), a.setBackgroundDrawable(new ColorDrawable(Color[_0x14ae("0x1c")])), a.setPadding(10, 10, 10, 10), a[_0x14ae("0x62")]().setAlpha(100), a.setOnClickListener(new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        Entity[_0x14ae("0x69")](getPlayerEnt(), 0, +elevatorvalue, 0)
                    }
                })), e[_0x14ae("0x4a")](a);
                var x = new Button(ctx);
                x[_0x14ae("0x44")](_0x14ae("0x6a")), x.setTextColor(nonToggleKeybindColor), x[_0x14ae("0x48")](new ColorDrawable(Color[_0x14ae("0x1c")])), x.setPadding(10, 10, 10, 10), x[_0x14ae("0x62")]()[_0x14ae("0x63")](100), x[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        Entity.setPosition(getPlayerEnt(), getPlayerX(), getPlayerY() - elevatorvalue, getPlayerZ())
                    }
                })), e[_0x14ae("0x4a")](x), GUIel = new PopupWindow(e, RelativeLayout[_0x14ae("0x58")][_0x14ae("0x59")], RelativeLayout[_0x14ae("0x58")][_0x14ae("0x59")]), GUIel[_0x14ae("0x48")](new ColorDrawable(keybindBackgroundColor)), GUIel.showAtLocation(ctx[_0x14ae("0x5e")]()[_0x14ae("0x5f")](), Gravity[_0x14ae("0x67")] | Gravity[_0x14ae("0x68")], 0, 120)
            } catch (e) {
                Toast[_0x14ae("0x64")](ctx, _0x14ae("0x61") + e, 1)[_0x14ae("0x65")]()
            }
        }
    }))
}

function showJetpackBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var e = new LinearLayout(ctx);
                e[_0x14ae("0x43")](1);
                var a = new Button(ctx);
                a.setText("J"), a[_0x14ae("0x46")](offToggledKeybindColor), a.setBackgroundDrawable(new ColorDrawable(Color[_0x14ae("0x1c")])), a[_0x14ae("0x4c")](10, 10, 10, 10), a[_0x14ae("0x62")]()[_0x14ae("0x63")](100), a[_0x14ae("0x55")](new View.OnClickListener({
                    onClick: function(e) {
                        jetpack ? (jetpack = !1, a[_0x14ae("0x46")](offToggledKeybindColor)) : (jetpack = !0, a[_0x14ae("0x46")](onToggledKeybindColor))
                    }
                })), e.addView(a), GUIj = new PopupWindow(e, RelativeLayout[_0x14ae("0x58")][_0x14ae("0x59")], RelativeLayout[_0x14ae("0x58")][_0x14ae("0x59")]), GUIj[_0x14ae("0x48")](new ColorDrawable(keybindBackgroundColor)), GUIj[_0x14ae("0x5d")](ctx[_0x14ae("0x5e")]()[_0x14ae("0x5f")](), Gravity[_0x14ae("0x67")] | Gravity[_0x14ae("0x68")], 0, 320)
            } catch (e) {
                Toast[_0x14ae("0x64")](ctx, _0x14ae("0x61") + e, 1).show()
            }
        }
    }))
}

function showBoostBtn() {
    ctx[_0x14ae("0x42")](new Runnable({
        run: function() {
            try {
                var e = new LinearLayout(ctx);
                e[_0x14ae("0x43")](1);
                var a = new Button(ctx);
                a.setText("E"), a.setTextColor(nonToggleKeybindColor), a[_0x14ae("0x48")](new ColorDrawable(Color[_0x14ae("0x1c")])), a[_0x14ae("0x4c")](10, 10, 10, 10), a[_0x14ae("0x62")]()[_0x14ae("0x63")](100), a.setOnClickListener(new View.OnClickListener({
                    onClick: function(e) {
                        var a = [0, 0, 0];
                        toDirectionalVector(a, (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -0, 1), setVelX(getPlayerEnt(), espeed * a[0]), setVelZ(getPlayerEnt(), espeed * a[2])
                    }
                })), e.addView(a), GUIb = new PopupWindow(e, RelativeLayout.LayoutParams[_0x14ae("0x59")], RelativeLayout[_0x14ae("0x58")][_0x14ae("0x59")]), GUIb[_0x14ae("0x48")](new ColorDrawable(keybindBackgroundColor)), GUIb[_0x14ae("0x5d")](ctx[_0x14ae("0x5e")]()[_0x14ae("0x5f")](), Gravity.CENTER | Gravity[_0x14ae("0x6b")], 0, 0)
            } catch (e) {
                Toast[_0x14ae("0x64")](ctx, _0x14ae("0x61") + e, 1)[_0x14ae("0x65")]()
            }
        }
    }))
}

function showNoDownGlideBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var e = new LinearLayout(ctx);
                e[_0x14ae("0x43")](1);
                var a = new Button(ctx);
                a[_0x14ae("0x44")]("N"), a[_0x14ae("0x46")](offToggledKeybindColor), a.setBackgroundDrawable(new ColorDrawable(Color[_0x14ae("0x1c")])), a[_0x14ae("0x4c")](10, 10, 10, 10), a[_0x14ae("0x62")]()[_0x14ae("0x63")](100), a.setOnClickListener(new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        nodownglide ? (nodownglide = !1, a[_0x14ae("0x46")](offToggledKeybindColor)) : (nodownglide = !0, a[_0x14ae("0x46")](onToggledKeybindColor))
                    }
                })), e[_0x14ae("0x4a")](a), GUIndg = new PopupWindow(e, RelativeLayout.LayoutParams[_0x14ae("0x59")], RelativeLayout[_0x14ae("0x58")].WRAP_CONTENT), GUIndg[_0x14ae("0x48")](new ColorDrawable(keybindBackgroundColor)), GUIndg[_0x14ae("0x5d")](ctx[_0x14ae("0x5e")]()[_0x14ae("0x5f")](), Gravity[_0x14ae("0x67")] | Gravity[_0x14ae("0x68")], 0, 420)
            } catch (e) {
                Toast[_0x14ae("0x64")](ctx, _0x14ae("0x61") + e, 1)[_0x14ae("0x65")]()
            }
        }
    }))
}

function showZoomBtn() {
    ctx[_0x14ae("0x42")](new Runnable({
        run: function() {
            try {
                var e = new LinearLayout(ctx);
                e[_0x14ae("0x43")](1);
                var a = new Button(ctx);
                a[_0x14ae("0x44")]("Z"), a[_0x14ae("0x46")](offToggledKeybindColor), a[_0x14ae("0x48")](new ColorDrawable(Color[_0x14ae("0x1c")])), a[_0x14ae("0x4c")](10, 10, 10, 10), a.getBackground()[_0x14ae("0x63")](100), a.setOnClickListener(new View.OnClickListener({
                    onClick: function(e) {
                        zoomvision ? (zoomvision = !1, ModPE[_0x14ae("0x6c")](0), a[_0x14ae("0x46")](offToggledKeybindColor)) : (zoomvision = !0, a.setTextColor(onToggledKeybindColor))
                    }
                })), e[_0x14ae("0x4a")](a), GUIzoom = new PopupWindow(e, RelativeLayout[_0x14ae("0x58")].WRAP_CONTENT, RelativeLayout[_0x14ae("0x58")].WRAP_CONTENT), GUIzoom[_0x14ae("0x48")](new ColorDrawable(keybindBackgroundColor)), GUIzoom[_0x14ae("0x5d")](ctx[_0x14ae("0x5e")]()[_0x14ae("0x5f")](), Gravity[_0x14ae("0x67")] | Gravity[_0x14ae("0x6b")], 0, 0)
            } catch (e) {
                Toast[_0x14ae("0x64")](ctx, _0x14ae("0x61") + e, 1)[_0x14ae("0x65")]()
            }
        }
    }))
}

function showcBindBtn() {
    ctx[_0x14ae("0x42")](new Runnable({
        run: function() {
            try {
                var e = new LinearLayout(ctx);
                e[_0x14ae("0x43")](1);
                var a = new Button(ctx);
                a[_0x14ae("0x44")]("C"), a[_0x14ae("0x46")](nonToggleKeybindColor), a.setBackgroundDrawable(new ColorDrawable(Color[_0x14ae("0x1c")])), a[_0x14ae("0x4c")](10, 10, 10, 10), a[_0x14ae("0x62")]()[_0x14ae("0x63")](100), a[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        Server[_0x14ae("0x6d")](cb1)
                    }
                })), e[_0x14ae("0x4a")](a), GUIcBind = new PopupWindow(e, RelativeLayout[_0x14ae("0x58")].WRAP_CONTENT, RelativeLayout[_0x14ae("0x58")][_0x14ae("0x59")]), GUIcBind.setBackgroundDrawable(new ColorDrawable(keybindBackgroundColor)), GUIcBind[_0x14ae("0x5d")](ctx.getWindow()[_0x14ae("0x5f")](), Gravity[_0x14ae("0x67")] | Gravity.LEFT, 0, 0)
            } catch (e) {
                Toast.makeText(ctx, _0x14ae("0x61") + e, 1)[_0x14ae("0x65")]()
            }
        }
    }))
}

function mainMenuBtn() {
    ctx[_0x14ae("0x42")](new Runnable({
        run: function() {
            try {
                var e = new LinearLayout(ctx);
                e[_0x14ae("0x43")](1);
                var a = new Button(ctx);
                a[_0x14ae("0x44")](mainMenuBtnText), a[_0x14ae("0x6e")](mainMenuBtnTextSize), a[_0x14ae("0x46")](mainMenuBtnTextColor), a.setBackgroundDrawable(new(android[_0x14ae("0x16")][_0x14ae("0x2d")][_0x14ae("0x2e")])(android[_0x14ae("0x16")].Color[_0x14ae("0x1c")])), a[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        GUIbtn[_0x14ae("0x57")](), mainMenu(), exitMainMenu()
                    }
                })), a.setOnLongClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x6f")])({
                    onLongClick: function(e, a) {
                        return down = !0, print(_0x14ae("0x70")), !0
                    }
                })), a[_0x14ae("0x71")](new(android.view[_0x14ae("0x28")][_0x14ae("0x72")])({
                    onTouch: function(e, a) {
                        if (down || (mX = a.getX(), mY = a[_0x14ae("0x73")]()), down) {
                            var x = a[_0x14ae("0x74")]();
                            if (2 == x) {
                                var t = -1 * parseInt(a.getX() - mX) / 10,
                                    n = -1 * parseInt(a[_0x14ae("0x73")]() - mY) / 10;
                                tpopx += t, tpopy += n, GUIbtn[_0x14ae("0x75")](parseInt(tpopx), parseInt(tpopy), -1, -1)
                            }
                            1 == x && (down = !1)
                        }
                        return !1
                    }
                })), e[_0x14ae("0x4a")](a), GUIbtn = new PopupWindow(e, RelativeLayout[_0x14ae("0x58")][_0x14ae("0x59")], RelativeLayout[_0x14ae("0x58")][_0x14ae("0x59")]), GUIbtn[_0x14ae("0x48")](new ColorDrawable(Color[_0x14ae("0x1c")])), GUIbtn.setAnimationStyle(android.R[_0x14ae("0x5b")][_0x14ae("0x5c")]), GUIbtn.showAtLocation(ctx.getWindow()[_0x14ae("0x5f")](), Gravity.RIGHT | Gravity[_0x14ae("0x76")], tpopx, tpopy)
            } catch (e) {
                print(_0x14ae("0x61") + e)
            }
        }
    }))
}

function exitMainMenu() {
    ctx[_0x14ae("0x42")](new Runnable({
        run: function() {
            try {
                var e = new LinearLayout(ctx);
                e.setOrientation(1);
                var a = new Button(ctx);
                a[_0x14ae("0x44")]("X"), a[_0x14ae("0x46")](exitMenuTextColor), a.setBackgroundDrawable(new(android[_0x14ae("0x16")][_0x14ae("0x2d")][_0x14ae("0x2e")])(android[_0x14ae("0x16")].Color[_0x14ae("0x1c")])), a[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        mainMenuIsOpen && (GUI[_0x14ae("0x57")](), GUIexit.dismiss(), mainMenuBtn(), mainMenuIsOpen = !1), combatMenuIsOpen && (menu2.dismiss(), mainMenu(), combatMenuIsOpen = !1), movementMenuIsOpen && (menu3[_0x14ae("0x57")](), mainMenu(), movementMenuIsOpen = !1), playerMenuIsOpen && (menu4.dismiss(), mainMenu(), playerMenuIsOpen = !1), exploitsMenuIsOpen && (menu5[_0x14ae("0x57")](), mainMenu(), exploitsMenuIsOpen = !1), keybindsMenuIsOpen && (menu6[_0x14ae("0x57")](), mainMenu(), keybindsMenuIsOpen = !1), settingsMenuIsOpen && (menu7[_0x14ae("0x57")](), mainMenu(), settingsMenuIsOpen = !1), enchantsMenuIsOpen && (menu8[_0x14ae("0x57")](), mainMenu7(), settingsMenuIsOpen = !(enchantsMenuIsOpen = !1))
                    }
                })), e.addView(a), GUIexit = new PopupWindow(e, RelativeLayout[_0x14ae("0x58")][_0x14ae("0x59")], RelativeLayout[_0x14ae("0x58")][_0x14ae("0x59")]), GUIexit[_0x14ae("0x48")](new ColorDrawable(Color[_0x14ae("0x1c")])), GUIexit[_0x14ae("0x5a")](android.R[_0x14ae("0x5b")][_0x14ae("0x5c")]), GUIexit[_0x14ae("0x5d")](ctx.getWindow().getDecorView(), Gravity[_0x14ae("0x68")] | Gravity[_0x14ae("0x76")], 0, 0)
            } catch (e) {
                print(_0x14ae("0x61") + e)
            }
        }
    }))
}

function mainMenu() {
    mainMenuIsOpen = !0, ctx[_0x14ae("0x42")](new Runnable({
        run: function() {
            try {
                var e = new LinearLayout(ctx);
                e[_0x14ae("0x43")](1);
                var a = new TextView(ctx);
                a[_0x14ae("0x44")](_0x14ae("0x77")), a[_0x14ae("0x46")](textColor), e[_0x14ae("0x4a")](a);
                var x = new Button(ctx);
                x[_0x14ae("0x44")]("Combat"), x[_0x14ae("0x46")](textColor), x[_0x14ae("0x48")](new(android[_0x14ae("0x16")][_0x14ae("0x2d")].ColorDrawable)(android[_0x14ae("0x16")][_0x14ae("0x17")][_0x14ae("0x1c")])), x.setPadding(10, 10, 10, 10), x[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        mainMenu2(), GUI[_0x14ae("0x57")](), mainMenuIsOpen = !(combatMenuIsOpen = !0)
                    }
                })), e[_0x14ae("0x4a")](x);
                var t = new Button(ctx);
                t[_0x14ae("0x44")](_0x14ae("0x78")), t.setTextColor(textColor), t[_0x14ae("0x48")](new(android.graphics[_0x14ae("0x2d")][_0x14ae("0x2e")])(android[_0x14ae("0x16")][_0x14ae("0x17")][_0x14ae("0x1c")])), t[_0x14ae("0x4c")](10, 10, 10, 10), t[_0x14ae("0x55")](new View.OnClickListener({
                    onClick: function(e) {
                        mainMenu3(), GUI.dismiss(), mainMenuIsOpen = !(movementMenuIsOpen = !0)
                    }
                })), e[_0x14ae("0x4a")](t);
                var n = new Button(ctx);
                n.setText(_0x14ae("0x79")), n[_0x14ae("0x46")](textColor), n[_0x14ae("0x48")](new(android.graphics[_0x14ae("0x2d")][_0x14ae("0x2e")])(android.graphics.Color[_0x14ae("0x1c")])), n[_0x14ae("0x4c")](10, 10, 10, 10), n[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        mainMenu4(), GUI[_0x14ae("0x57")](), mainMenuIsOpen = !(playerMenuIsOpen = !0)
                    }
                })), e.addView(n);
                var o = new Button(ctx);
                o.setText(_0x14ae("0x7a")), o[_0x14ae("0x46")](textColor), o[_0x14ae("0x48")](new(android[_0x14ae("0x16")][_0x14ae("0x2d")][_0x14ae("0x2e")])(android[_0x14ae("0x16")][_0x14ae("0x17")].TRANSPARENT)), o[_0x14ae("0x4c")](10, 10, 10, 10), o[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        mainMenu5(), GUI[_0x14ae("0x57")](), mainMenuIsOpen = !(exploitsMenuIsOpen = !0)
                    }
                })), e[_0x14ae("0x4a")](o);
                var i = new Button(ctx);
                i[_0x14ae("0x44")](_0x14ae("0x7b")), i[_0x14ae("0x46")](textColor), i[_0x14ae("0x48")](new(android[_0x14ae("0x16")][_0x14ae("0x2d")][_0x14ae("0x2e")])(android.graphics.Color.TRANSPARENT)), i[_0x14ae("0x4c")](10, 10, 10, 10), i.setOnClickListener(new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        mainMenu6(), GUI.dismiss(), mainMenuIsOpen = !(keybindsMenuIsOpen = !0)
                    }
                })), e[_0x14ae("0x4a")](i);
                var _ = new Button(ctx);
                _[_0x14ae("0x44")](_0x14ae("0x7c")), _[_0x14ae("0x46")](textColor), _[_0x14ae("0x48")](new(android[_0x14ae("0x16")][_0x14ae("0x2d")][_0x14ae("0x2e")])(android.graphics[_0x14ae("0x17")][_0x14ae("0x1c")])), _[_0x14ae("0x4c")](10, 10, 10, 10), _.setOnClickListener(new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        mainMenu7(), GUI.dismiss(), mainMenuIsOpen = !(settingsMenuIsOpen = !0)
                    }
                })), e[_0x14ae("0x4a")](_), GUI = new PopupWindow(e, RelativeLayout[_0x14ae("0x58")][_0x14ae("0x59")], RelativeLayout[_0x14ae("0x58")][_0x14ae("0x59")]), GUI[_0x14ae("0x48")](new ColorDrawable(Color[_0x14ae("0x1c")])), GUI[_0x14ae("0x5a")](android.R[_0x14ae("0x5b")].Animation_InputMethod), GUI[_0x14ae("0x5d")](ctx[_0x14ae("0x5e")]()[_0x14ae("0x5f")](), Gravity[_0x14ae("0x67")] | Gravity[_0x14ae("0x6b")], 0, 0)
            } catch (e) {
                print(_0x14ae("0x61") + e)
            }
        }
    }))
}

function mainMenu2() {
    ctx[_0x14ae("0x42")](new Runnable({
        run: function() {
            try {
                var e, a = new LinearLayout(ctx),
                    x = new ScrollView(ctx),
                    t = new LinearLayout(ctx);
                a[_0x14ae("0x43")](1), a[_0x14ae("0x48")](new(android[_0x14ae("0x16")][_0x14ae("0x2d")][_0x14ae("0x2e")])(android[_0x14ae("0x16")][_0x14ae("0x17")][_0x14ae("0x1c")])), t[_0x14ae("0x43")](1), x[_0x14ae("0x4a")](a), t[_0x14ae("0x4a")](x), (e = new Button(ctx)).setText("-=Combat=-"), e[_0x14ae("0x46")](textColor), e.setOnClickListener(new(View[_0x14ae("0x56")])({
                    onClick: function(e) {}
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")].Switch)(ctx))[_0x14ae("0x44")](_0x14ae("0x7d")), e.setChecked(infinitereach), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        infinitereach ? (infinitereach = !1, clientMessage("§bOperatorClient§f: Infinite Reach Disabled!")) : (infinitereach = !0, print(_0x14ae("0x7e")), clientMessage("§bOperatorClient§f: Infinite Reach Enabled!"))
                    }
                })), a.addView(e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x80")), e[_0x14ae("0x81")](aimbot), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        aimbot ? (aimbot = !1, clientMessage(_0x14ae("0x83"))) : (aimbot = !0, clientMessage(_0x14ae("0x82")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x84")), e[_0x14ae("0x81")](specificAim), e[_0x14ae("0x46")](textColor), e.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        specificAim ? (specificAim = !1, clientMessage(_0x14ae("0x86"))) : (specificAim = !0, clientMessage(_0x14ae("0x85")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x87")), e[_0x14ae("0x81")](hb), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        if (hb) {
                            hb = !1;
                            var a = getNearestEntity(1200);
                            Entity[_0x14ae("0x66")](a, 1, 1), clientMessage(_0x14ae("0x89"))
                        } else hb = !0, clientMessage(_0x14ae("0x88"))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x8a")), e[_0x14ae("0x81")](bowaimbot), e[_0x14ae("0x46")](textColor), e.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        bowaimbot ? (bowaimbot = !1, clientMessage(_0x14ae("0x8c"))) : (bowaimbot = !0, clientMessage(_0x14ae("0x8b")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android.widget[_0x14ae("0x7f")])(ctx)).setText(_0x14ae("0x8d")), e[_0x14ae("0x81")](antikb), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")].View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        antikb ? (antikb = !1, clientMessage(_0x14ae("0x8f"))) : (antikb = !0, clientMessage(_0x14ae("0x8e")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x90")), e[_0x14ae("0x81")](lhealth), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        lhealth ? (lhealth = !1, clientMessage(_0x14ae("0x92"))) : (lhealth = !0, clientMessage(_0x14ae("0x91")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx)).setText("Attack HitBox"), e[_0x14ae("0x81")](ahb), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        if (ahb) {
                            ahb = !1;
                            var a = getNearestEntity(12);
                            Entity[_0x14ae("0x66")](a, 1, 1), clientMessage(_0x14ae("0x95"))
                        } else ahb = !0, clientMessage(_0x14ae("0x93")), clientMessage(_0x14ae("0x94"))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x96")), e[_0x14ae("0x81")](awayaura), e[_0x14ae("0x46")](textColor), e.setOnClickListener(new(android[_0x14ae("0x27")].View.OnClickListener)({
                    onClick: function(e) {
                        awayaura ? (awayaura = !1, clientMessage("§bOperatorClient§f: Away Aura Disabled!")) : (awayaura = !0, clientMessage("§bOperatorClient§f: Away Aura Enabled!"))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x97")), e[_0x14ae("0x81")](bhit), e.setTextColor(textColor), e.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        bhit ? (bhit = !1, clientMessage(_0x14ae("0x99"))) : (bhit = !0, clientMessage(_0x14ae("0x98")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x9a")), e[_0x14ae("0x81")](lbsgbhit), e[_0x14ae("0x46")](textColor), e.setOnClickListener(new(android[_0x14ae("0x27")].View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        lbsgbhit ? (lbsgbhit = !1, clientMessage("§bOperatorClient§f: Lifeboat BoostHit Disabled!")) : (lbsgbhit = !0, clientMessage(_0x14ae("0x9b")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new android.widget.Switch(ctx))[_0x14ae("0x44")](_0x14ae("0x9c")), e[_0x14ae("0x81")](spamhit), e[_0x14ae("0x46")](textColor), e.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        spamhit ? (spamhit = !1, clientMessage(_0x14ae("0x9e"))) : (spamhit = !0, clientMessage(_0x14ae("0x9d")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new android.widget.Switch(ctx)).setText("Rude Spam Hit"), e[_0x14ae("0x81")](rspamhit), e[_0x14ae("0x46")](textColor), e.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        rspamhit ? (rspamhit = !1, clientMessage(_0x14ae("0xa0"))) : (rspamhit = !0, clientMessage(_0x14ae("0x9f")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android.widget[_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0xa1")), e[_0x14ae("0x81")](tpaura), e[_0x14ae("0x46")](textColor), e.setOnClickListener(new(android[_0x14ae("0x27")].View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        tpaura ? (tpaura = !1, clientMessage(_0x14ae("0xa3"))) : (tpaura = !0, clientMessage(_0x14ae("0xa2")))
                    }
                })), a.addView(e), (e = new android.widget.Switch(ctx))[_0x14ae("0x44")](_0x14ae("0xa4")), e[_0x14ae("0x81")](hoveraura), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(android.view.View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        hoveraura ? (hoveraura = !1, clientMessage(_0x14ae("0xa6"))) : (hoveraura = !0, clientMessage(_0x14ae("0xa5")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android.widget[_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0xa7")), e.setChecked(criticals), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        criticals ? (criticals = !1, clientMessage(_0x14ae("0xa8"))) : (criticals = !0, clientMessage("§bOperatorClient§f: Criticals Enabled!"))
                    }
                })), a.addView(e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0xa9")), e[_0x14ae("0x81")](swordaura), e.setTextColor(textColor), e.setOnClickListener(new(android[_0x14ae("0x27")].View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        swordaura ? (swordaura = !1, clientMessage(_0x14ae("0xab"))) : (swordaura = !0, clientMessage(_0x14ae("0xaa")))
                    }
                })), a.addView(e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0xac")), e[_0x14ae("0x81")](autosword), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        autosword ? (autosword = !1, clientMessage(_0x14ae("0xaf"))) : (autosword = !0, print(_0x14ae("0xad")), clientMessage(_0x14ae("0xae")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android.widget[_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0xb0")), e.setChecked(hitxp), e.setTextColor(textColor), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        hitxp ? (hitxp = !1, clientMessage(_0x14ae("0xb1"))) : (hitxp = !0, clientMessage("§bOperatorClient§f: Hit XP Enabled!"))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")].Switch)(ctx)).setText(_0x14ae("0xb2")), e[_0x14ae("0x81")](derphit), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(android.view[_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        derphit ? (derphit = !1, clientMessage(_0x14ae("0xb4"))) : (derphit = !0, clientMessage(_0x14ae("0xb3")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0xb5")), e[_0x14ae("0x81")](nearwarning), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(android.view[_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        nearwarning ? (nearwarning = !1, clientMessage(_0x14ae("0xb7"))) : (nearwarning = !0, clientMessage(_0x14ae("0xb6")))
                    }
                })), a.addView(e), menu2 = new PopupWindow(t, ctx[_0x14ae("0xb8")]()[_0x14ae("0xb9")]()[_0x14ae("0xba")]() / 3, ctx.getWindowManager()[_0x14ae("0xb9")]()[_0x14ae("0xbb")]()), menu2[_0x14ae("0x5a")](android.R[_0x14ae("0x5b")][_0x14ae("0x5c")]), menu2.showAtLocation(ctx[_0x14ae("0x5e")]()[_0x14ae("0x5f")](), Gravity[_0x14ae("0x67")] | Gravity[_0x14ae("0x60")], 0, 0)
            } catch (e) {
                Toast[_0x14ae("0x64")](ctx, _0x14ae("0xbc") + e, 1).show()
            }
        }
    }))
}

function mainMenu3() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var e, a = new LinearLayout(ctx),
                    x = new ScrollView(ctx),
                    t = new LinearLayout(ctx);
                a[_0x14ae("0x43")](1), a.setBackgroundDrawable(new(android.graphics[_0x14ae("0x2d")][_0x14ae("0x2e")])(android.graphics.Color[_0x14ae("0x1c")])), t[_0x14ae("0x43")](1), x[_0x14ae("0x4a")](a), t[_0x14ae("0x4a")](x), (e = new Button(ctx)).setText(_0x14ae("0xbd")), e[_0x14ae("0x46")](textColor), e.setOnClickListener(new(View[_0x14ae("0x56")])({
                    onClick: function(e) {}
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0xbe")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x81")](speed), e.setOnClickListener(new(android.view[_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        speed ? (speed = !1, clientMessage(_0x14ae("0xc0"))) : (speed = !0, clientMessage(_0x14ae("0xbf")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0xc1")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x81")](longjump), e[_0x14ae("0x55")](new(android.view[_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        longjump ? (longjump = !1, clientMessage("§bOperatorClient§f: Long-Jump Disabled!")) : (longjump = !0, clientMessage(_0x14ae("0xc2")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")].Switch)(ctx))[_0x14ae("0x44")](_0x14ae("0xc3")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x81")](bypassglide), e.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        bypassglide ? (bypassglide = !1, clientMessage(_0x14ae("0xc5"))) : (bypassglide = !0, clientMessage(_0x14ae("0xc4")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0xc6")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x81")](noslowdown), e.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        noslowdown ? (noslowdown = !1, Block.setFriction(30, 1), Block[_0x14ae("0xc7")](88, 1), clientMessage(_0x14ae("0xc8"))) : (noslowdown = !0, clientMessage("§bOperatorClient§f: NoSlowDown Enabled!"))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx)).setText(_0x14ae("0xc9")), e[_0x14ae("0x46")](textColor), e.setChecked(step), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        step ? (step = !1, clientMessage("§bOperatorClient§f: Step Disabled!")) : (step = !0, clientMessage(_0x14ae("0xca")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")].Switch)(ctx)).setText(_0x14ae("0xcb")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x81")](sstep), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")].View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        sstep ? (sstep = !1, clientMessage(_0x14ae("0xcd"))) : (sstep = !0, clientMessage(_0x14ae("0xcc")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")].Switch)(ctx)).setText(_0x14ae("0xce")), e.setTextColor(textColor), e[_0x14ae("0x81")](autowalk), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        autowalk ? (autowalk = !1, clientMessage(_0x14ae("0xd0"))) : (autowalk = !0, clientMessage(_0x14ae("0xcf")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android.widget[_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0xd1")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x81")](sgspeed), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        sgspeed ? (sgspeed = !1, clientMessage(_0x14ae("0xd2"))) : (sgspeed = !0, clientMessage("§bOperatorClient§f: SG Speed Enabled!"))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android.widget[_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")]("GameSpeed"), e.setTextColor(textColor), e[_0x14ae("0x81")](gs), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        gs ? (gs = !1, ModPE[_0x14ae("0xd4")](20), clientMessage("§bOperatorClient§f: GameSpeed Disabled!")) : (gs = !0, clientMessage(_0x14ae("0xd3")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")].Switch)(ctx))[_0x14ae("0x44")](_0x14ae("0xd5")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x81")](dolphin), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        dolphin ? (dolphin = !1, clientMessage(_0x14ae("0xd7"))) : (dolphin = !0, clientMessage(_0x14ae("0xd6")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android.widget[_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0xd8")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x81")](liquidhover), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")].View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        liquidhover ? (liquidhover = !1, clientMessage(_0x14ae("0xda"))) : (liquidhover = !0, clientMessage(_0x14ae("0xd9")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")]("LiquidBounce"), e.setTextColor(textColor), e[_0x14ae("0x81")](liquidbounce), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        liquidbounce ? (liquidbounce = !1, clientMessage(_0x14ae("0xdc"))) : (liquidbounce = !0, clientMessage(_0x14ae("0xdb")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0xdd")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x81")](glide), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        glide ? (glide = !1, clientMessage(_0x14ae("0xde"))) : (glide = !0, clientMessage("§bOperatorClient§f: Glide Enabled!"))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx)).setText(_0x14ae("0xdf")), e[_0x14ae("0x46")](textColor), e.setChecked(upglide), e.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        upglide ? (upglide = !1, clientMessage(_0x14ae("0xe1"))) : (upglide = !0, clientMessage(_0x14ae("0xe0")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")].Switch)(ctx))[_0x14ae("0x44")](_0x14ae("0xe2")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x81")](nodownglide), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        nodownglide ? (nodownglide = !1, clientMessage("§bOperatorClient§f: NoDownGlide Disabled!")) : (nodownglide = !0, clientMessage(_0x14ae("0xe3")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx)).setText(_0x14ae("0xe4")), e.setTextColor(textColor), e[_0x14ae("0x81")](bhop), e[_0x14ae("0x55")](new(android.view[_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        bhop ? (bhop = !1, clientMessage("§bOperatorClient§f: Bhop Disabled!")) : (bhop = !0, clientMessage(_0x14ae("0xe5")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android.widget[_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0xe6")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x81")](bhop2), e.setOnClickListener(new(android.view.View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        bhop2 ? (bhop2 = !1, clientMessage(_0x14ae("0xe8"))) : (bhop2 = !0, clientMessage(_0x14ae("0xe7")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0xe9")), e.setTextColor(textColor), e.setChecked(quickfall), e[_0x14ae("0x55")](new(android.view.View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        quickfall ? (quickfall = !1, clientMessage(_0x14ae("0xeb"))) : (quickfall = !0, clientMessage(_0x14ae("0xea")))
                    }
                })), a.addView(e), (e = new(android.widget[_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0xec")), e[_0x14ae("0x46")](textColor), e.setChecked(jetpack), e[_0x14ae("0x55")](new(android.view[_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        jetpack ? (jetpack = !1, clientMessage(_0x14ae("0xee"))) : (jetpack = !0, clientMessage(_0x14ae("0xed")))
                    }
                })), a.addView(e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0xef")), e.setTextColor(textColor), e.setChecked(crouchmove), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        crouchmove ? (crouchmove = !1, clientMessage(_0x14ae("0xf1"))) : (crouchmove = !0, clientMessage(_0x14ae("0xf0")))
                    }
                })), a.addView(e), (e = new(android[_0x14ae("0x24")].Switch)(ctx))[_0x14ae("0x44")](_0x14ae("0xf2")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x81")](sneakfloat), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        sneakfloat ? (sneakfloat = !1, clientMessage(_0x14ae("0xf3"))) : (sneakfloat = !0, clientMessage("§bOperatorClient§f: Sneak Float Enabled!"))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")].Switch)(ctx))[_0x14ae("0x44")](_0x14ae("0xf4")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x81")](sneakjet), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        sneakjet ? (sneakjet = !1, clientMessage(_0x14ae("0xf6"))) : (sneakjet = !0, clientMessage(_0x14ae("0xf5")))
                    }
                })), a.addView(e), menu3 = new PopupWindow(t, ctx[_0x14ae("0xb8")]().getDefaultDisplay()[_0x14ae("0xba")]() / 3, ctx[_0x14ae("0xb8")]().getDefaultDisplay()[_0x14ae("0xbb")]()), menu3[_0x14ae("0x5a")](android.R.style.Animation_InputMethod), menu3[_0x14ae("0x5d")](ctx[_0x14ae("0x5e")]()[_0x14ae("0x5f")](), Gravity[_0x14ae("0x67")] | Gravity[_0x14ae("0x60")], 0, 0)
            } catch (e) {
                Toast[_0x14ae("0x64")](ctx, "Error: " + e, 1)[_0x14ae("0x65")]()
            }
        }
    }))
}

function mainMenu4() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var e, a = new LinearLayout(ctx),
                    x = new ScrollView(ctx),
                    t = new LinearLayout(ctx);
                a.setOrientation(1), a.setBackgroundDrawable(new(android[_0x14ae("0x16")][_0x14ae("0x2d")][_0x14ae("0x2e")])(android[_0x14ae("0x16")][_0x14ae("0x17")][_0x14ae("0x1c")])), t.setOrientation(1), x[_0x14ae("0x4a")](a), t[_0x14ae("0x4a")](x), (e = new Button(ctx))[_0x14ae("0x44")](_0x14ae("0xf7")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {}
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0xf8")), e[_0x14ae("0x81")](scaffold), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        scaffold ? (scaffold = !1, clientMessage(_0x14ae("0xfa"))) : (scaffold = !0, clientMessage(_0x14ae("0xf9")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx)).setText(_0x14ae("0xfb")), e[_0x14ae("0x81")](fastEat), e[_0x14ae("0x46")](textColor), e.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        fastEat ? (setFoodItem(364, 32, 8), setFoodItem(366, 32, 6), setFoodItem(350, 32, 5), setFoodItem(320, 32, 8), setFoodItem(412, 32, 5), setFoodItem(350, 32, 6), setFoodItem(424, 32, 6), setFoodItem(260, 32, 4), setFoodItem(322, 32, 4), setFoodItem(413, 32, 10), setFoodItem(392, 32, 1), setFoodItem(393, 32, 5), setFoodItem(391, 32, 3), setFoodItem(396, 32, 6), setFoodItem(395, 32, 5), setFoodItem(297, 32, 5), setFoodItem(400, 32, 8), setFoodItem(363, 32, 3), setFoodItem(365, 32, 2), setFoodItem(349, 32, 2), setFoodItem(423, 32, 2), setFoodItem(319, 32, 3), setFoodItem(411, 32, 3), setFoodItem(349, 32, 2), clientMessage(_0x14ae("0xfd"))) : (fastEat = !0, clientMessage(_0x14ae("0xfc")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx)).setText(_0x14ae("0xfe")), e[_0x14ae("0x81")](tapteleport), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        tapteleport ? (tapteleport = !1, clientMessage(_0x14ae("0x100"))) : (tapteleport = !0, clientMessage(_0x14ae("0xff")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android.widget[_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x101")), e[_0x14ae("0x81")](tower), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        tower ? (tower = !1, clientMessage(_0x14ae("0x103"))) : (tower = !0, clientMessage(_0x14ae("0x102")))
                    }
                })), a.addView(e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx)).setText(_0x14ae("0x104")), e[_0x14ae("0x81")](tapdestroy), e.setTextColor(textColor), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        tapdestroy ? (tapdestroy = !1, clientMessage(_0x14ae("0x106"))) : (tapdestroy = !0, clientMessage(_0x14ae("0x105")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x107")), e.setChecked(lcoords), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")].View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        lcoords ? (lcoords = !1, clientMessage(_0x14ae("0x109"))) : (lcoords = !0, clientMessage(_0x14ae("0x108")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x10a")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x81")](antiafk), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        antiafk ? (antiafk = !1, clientMessage(_0x14ae("0x10c"))) : (antiafk = !0, clientMessage(_0x14ae("0x10b")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x10d")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x81")](flight), e.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        flight ? (flight = !1, Player[_0x14ae("0x10f")](0), Player[_0x14ae("0x110")](0), clientMessage(_0x14ae("0x111"))) : (flight = !0, clientMessage(_0x14ae("0x10e")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android.widget[_0x14ae("0x7f")])(ctx)).setText("Coordinates"), e[_0x14ae("0x81")](coords), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        coords ? (coords = !1, clientMessage(_0x14ae("0x113"))) : (coords = !0, clientMessage(_0x14ae("0x112")))
                    }
                })), a.addView(e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x114")), e.setTextColor(textColor), e[_0x14ae("0x81")](nethertooverworldcoords), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        nethertooverworldcoords ? (nethertooverworldcoords = !1, clientMessage(_0x14ae("0x115"))) : (nethertooverworldcoords = !0, clientMessage("§bOperatorClient§f: Nether -> Overworld Coordinates Enabled!"))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx)).setText("Overworld -> Nether Coordinates"), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x81")](overworldtonethercoords), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        overworldtonethercoords ? (overworldtonethercoords = !1, clientMessage(_0x14ae("0x116"))) : (overworldtonethercoords = !0, clientMessage("§bOperatorClient§f: Overworld -> Nether Coordinates Enabled!"))
                    }
                })), a.addView(e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x117")), e[_0x14ae("0x81")](velocitymeter), e[_0x14ae("0x46")](textColor), e.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        velocitymeter ? (velocitymeter = !1, clientMessage("§bOperatorClient§f: Velocity Meter Disabled!")) : (velocitymeter = !0, clientMessage(_0x14ae("0x118")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x119")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x81")](zoomvision), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")].View.OnClickListener)({
                    onClick: function(e) {
                        zoomvision ? (zoomvision = !1, ModPE[_0x14ae("0x6c")](0), clientMessage("§bOperatorClient§f: Binoculars Disabled!")) : (zoomvision = !0, clientMessage(_0x14ae("0x11a")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x11b")), e.setChecked(derp), e.setTextColor(textColor), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        derp ? (derp = !1, clientMessage(_0x14ae("0x11d"))) : (derp = !0, clientMessage(_0x14ae("0x11c")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx)).setText("FastBreak"), e.setChecked(haste), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        haste ? (haste = !1, Entity.removeEffect(getPlayerEnt(), MobEffect[_0x14ae("0x11f")]), clientMessage(_0x14ae("0x120"))) : (haste = !0, clientMessage(_0x14ae("0x11e")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android.widget[_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x121")), e.setChecked(nightvision), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")].View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        nightvision ? (nightvision = !1, Entity[_0x14ae("0x123")](getPlayerEnt(), MobEffect[_0x14ae("0x124")]), clientMessage(_0x14ae("0x125"))) : (nightvision = !0, clientMessage(_0x14ae("0x122")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x126")), e[_0x14ae("0x81")](jumpboost), e.setTextColor(textColor), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")].View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        jumpboost ? (jumpboost = !1, Entity[_0x14ae("0x123")](getPlayerEnt(), MobEffect[_0x14ae("0x128")]), clientMessage(_0x14ae("0x129"))) : (jumpboost = !0, clientMessage(_0x14ae("0x127")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x12a")), e[_0x14ae("0x81")](spam), e.setTextColor(textColor), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        spam ? (spam = !1, clientMessage(_0x14ae("0x12c"))) : (spam = !0, clientMessage(_0x14ae("0x12b")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x12d")), e[_0x14ae("0x81")](aspam), e[_0x14ae("0x46")](textColor), e.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        aspam ? (aspam = !1, clientMessage(_0x14ae("0x12f"))) : (aspam = !0, clientMessage(_0x14ae("0x12e")))
                    }
                })), a.addView(e), (e = new(android[_0x14ae("0x24")].Switch)(ctx))[_0x14ae("0x44")](_0x14ae("0x130")), e[_0x14ae("0x81")](acspam), e.setTextColor(textColor), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        acspam ? (acspam = !1, clientMessage(_0x14ae("0x132"))) : (acspam = !0, clientMessage(_0x14ae("0x131")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x133")), e[_0x14ae("0x81")](rspam), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")].View.OnClickListener)({
                    onClick: function(e) {
                        rspam ? (rspam = !1, clientMessage(_0x14ae("0x135"))) : (rspam = !0, clientMessage(_0x14ae("0x134")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x136")), e[_0x14ae("0x81")](ospam), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        ospam ? (ospam = !1, clientMessage("§bOperatorClient§f: Offensive Spam Disabled!")) : (ospam = !0, clientMessage(_0x14ae("0x137")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x138")), e[_0x14ae("0x81")](raspam), e[_0x14ae("0x46")](textColor), e.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        raspam ? (raspam = !1, clientMessage(_0x14ae("0x13a"))) : (raspam = !0, clientMessage(_0x14ae("0x139")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android.widget[_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x13b")), e[_0x14ae("0x81")](cuspam), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(android.view[_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        cuspam ? (cuspam = !1, clientMessage(_0x14ae("0x13d"))) : (cuspam = !0, clientMessage(_0x14ae("0x13c")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")]("Spam Tell"), e.setChecked(stspam), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        stspam ? (stspam = !1, clientMessage("§bOperatorClient§f: Spam Tell Disabled!")) : (stspam = !0, clientMessage(_0x14ae("0x13e")))
                    }
                })), a[_0x14ae("0x4a")](e), menu4 = new PopupWindow(t, ctx.getWindowManager()[_0x14ae("0xb9")]().getWidth() / 3, ctx[_0x14ae("0xb8")]()[_0x14ae("0xb9")]().getHeight()), menu4[_0x14ae("0x5a")](android.R[_0x14ae("0x5b")][_0x14ae("0x5c")]), menu4[_0x14ae("0x5d")](ctx[_0x14ae("0x5e")]()[_0x14ae("0x5f")](), Gravity.TOP | Gravity.CENTER, 0, 0)
            } catch (e) {
                Toast[_0x14ae("0x64")](ctx, _0x14ae("0xbc") + e, 1)[_0x14ae("0x65")]()
            }
        }
    }))
}

function mainMenu5() {
    ctx[_0x14ae("0x42")](new Runnable({
        run: function() {
            try {
                var e, a = new LinearLayout(ctx),
                    x = new ScrollView(ctx),
                    t = new LinearLayout(ctx);
                a[_0x14ae("0x43")](1), a.setBackgroundDrawable(new(android[_0x14ae("0x16")][_0x14ae("0x2d")][_0x14ae("0x2e")])(android[_0x14ae("0x16")].Color[_0x14ae("0x1c")])), t[_0x14ae("0x43")](1), x[_0x14ae("0x4a")](a), t.addView(x), (e = new Button(ctx))[_0x14ae("0x44")]("-=Exploits=-"), e.setTextColor(textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {}
                })), a.addView(e), (e = new(android[_0x14ae("0x24")].Switch)(ctx))[_0x14ae("0x44")]("Hit Mount"), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x81")](ride), e[_0x14ae("0x55")](new(android.view[_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        ride ? (ride = !1, clientMessage(_0x14ae("0x140"))) : (ride = !0, clientMessage(_0x14ae("0x13f")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x141")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x81")](bouncefly), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        bouncefly ? (bouncefly = !1, clientMessage(_0x14ae("0x143"))) : (bouncefly = !0, clientMessage(_0x14ae("0x142")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new android.widget.Switch(ctx)).setText("CamStalker"), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x81")](camstalker), e.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        if (camstalker) camstalker = !1, ModPE[_0x14ae("0x144")](getPlayerEnt());
                        else {
                            var a = getNearestEntity(12e3);
                            ModPE[_0x14ae("0x144")](a), camstalker = !0, clientMessage("§bOperatorClient§f: Selected Victim: " + Player.getName(a))
                        }
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x145")), e[_0x14ae("0x46")](textColor), e.setChecked(camstalker2), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        camstalker2 ? (camstalker2 = !1, ModPE[_0x14ae("0x144")](getPlayerEnt())) : (camstalker2 = !0, clientMessage("§bOperatorClient§f: Hit what ever Entity/Player you would like to stalk"))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x146")), e[_0x14ae("0x46")](textColor), e.setChecked(antiweather), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        antiweather ? (antiweather = !1, clientMessage(_0x14ae("0x148"))) : (antiweather = !0, clientMessage(_0x14ae("0x147")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android.widget[_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x149")), e.setTextColor(textColor), e[_0x14ae("0x81")](antinight), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")].View.OnClickListener)({
                    onClick: function(e) {
                        antinight ? (antinight = !1, clientMessage(_0x14ae("0x14a"))) : (antinight = !0, clientMessage("§bOperatorClient§f: Anti Night Enabled!"))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")].Switch)(ctx))[_0x14ae("0x44")]("Anti Day"), e[_0x14ae("0x46")](textColor), e.setChecked(antiday), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        antiday ? (antiday = !1, clientMessage(_0x14ae("0x14b"))) : (antiday = !0, clientMessage("§bOperatorClient§f: Anti Day Enabled!"))
                    }
                })), a.addView(e), (e = new(android[_0x14ae("0x24")].Switch)(ctx))[_0x14ae("0x44")]("Bedrock Breaker"), e.setTextColor(textColor), e.setChecked(bbreak), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        bbreak ? (bbreak = !1, Block[_0x14ae("0x14c")](7, 99999), clientMessage("§bOperatorClient§f: Bedrock Breaker Disabled!")) : (bbreak = !0, clientMessage("§bOperatorClient§f: Bedrock Breaker Enabled!"))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx)).setText(_0x14ae("0x14d")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x81")](phase), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        phase ? (phase = !1, Entity[_0x14ae("0x66")](getPlayerEnt(), 1, 1), clientMessage(_0x14ae("0x14f"))) : (phase = !0, clientMessage(_0x14ae("0x14e")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x150")), e.setTextColor(textColor), e[_0x14ae("0x81")](brightorestoggle), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        brightores ? (brightorestoggle = brightores = !1, Block.setRenderLayer(1, 0), Block[_0x14ae("0x152")](2, 0), Block[_0x14ae("0x152")](3, 0), Block[_0x14ae("0x152")](4, 0), Block[_0x14ae("0x152")](5, 0), Block[_0x14ae("0x152")](6, 0), Block[_0x14ae("0x152")](7, 0), Block[_0x14ae("0x152")](8, 0), Block.setRenderLayer(9, 0), Block[_0x14ae("0x152")](10, 0), Block.setRenderLayer(11, 0), Block[_0x14ae("0x152")](12, 0), Block[_0x14ae("0x152")](13, 0), Block[_0x14ae("0x152")](17, 0), Block.setRenderLayer(18, 0), Block[_0x14ae("0x152")](19, 0), Block.setRenderLayer(20, 0), Block.setRenderLayer(22, 0), Block[_0x14ae("0x152")](23, 0), Block[_0x14ae("0x152")](24, 0), Block[_0x14ae("0x152")](25, 0), Block.setRenderLayer(26, 0), Block.setRenderLayer(27, 0), Block[_0x14ae("0x152")](28, 0), Block[_0x14ae("0x152")](29, 0), Block[_0x14ae("0x152")](30, 0), Block[_0x14ae("0x152")](31, 0), Block.setRenderLayer(32, 0), Block.setRenderLayer(33, 0), Block[_0x14ae("0x152")](34, 0), Block[_0x14ae("0x152")](35, 0), Block[_0x14ae("0x152")](36, 0), Block[_0x14ae("0x152")](37, 0), Block[_0x14ae("0x152")](38, 0), Block[_0x14ae("0x152")](39, 0), Block.setRenderLayer(40, 0), Block.setRenderLayer(41, 0), Block[_0x14ae("0x152")](42, 0), Block[_0x14ae("0x152")](43, 0), Block[_0x14ae("0x152")](44, 0), Block.setRenderLayer(45, 0), Block[_0x14ae("0x152")](46, 0), Block[_0x14ae("0x152")](47, 0), Block[_0x14ae("0x152")](48, 0), Block.setRenderLayer(49, 0), Block.setRenderLayer(50, 0), Block.setRenderLayer(51, 0), Block.setRenderLayer(52, 0), Block[_0x14ae("0x152")](53, 0), Block[_0x14ae("0x152")](54, 0), Block[_0x14ae("0x152")](55, 0), Block[_0x14ae("0x152")](57, 0), Block[_0x14ae("0x152")](58, 0), Block[_0x14ae("0x152")](59, 0), Block[_0x14ae("0x152")](60, 0), Block[_0x14ae("0x152")](61, 0), Block.setRenderLayer(62, 0), Block[_0x14ae("0x152")](63, 0), Block[_0x14ae("0x152")](64, 0), Block.setRenderLayer(65, 0), Block.setRenderLayer(66, 0), Block[_0x14ae("0x152")](67, 0), Block[_0x14ae("0x152")](68, 0), Block[_0x14ae("0x152")](69, 0), Block[_0x14ae("0x152")](70, 0), Block[_0x14ae("0x152")](71, 0), Block[_0x14ae("0x152")](72, 0), Block[_0x14ae("0x152")](75, 0), Block[_0x14ae("0x152")](76, 0), Block[_0x14ae("0x152")](77, 0), Block[_0x14ae("0x152")](78, 0), Block[_0x14ae("0x152")](79, 0), Block[_0x14ae("0x152")](80, 0), Block[_0x14ae("0x152")](81, 0), Block[_0x14ae("0x152")](82, 0), Block[_0x14ae("0x152")](83, 0), Block[_0x14ae("0x152")](84, 0), Block[_0x14ae("0x152")](85, 0), Block[_0x14ae("0x152")](86, 0), Block[_0x14ae("0x152")](87, 0), Block.setRenderLayer(88, 0), Block[_0x14ae("0x152")](89, 0), Block[_0x14ae("0x152")](90, 0), Block[_0x14ae("0x152")](91, 0), Block[_0x14ae("0x152")](92, 0), Block[_0x14ae("0x152")](93, 0), Block[_0x14ae("0x152")](94, 0), Block[_0x14ae("0x152")](95, 0), Block[_0x14ae("0x152")](96, 0), Block[_0x14ae("0x152")](97, 0), Block[_0x14ae("0x152")](98, 0), Block.setRenderLayer(99, 0), Block[_0x14ae("0x152")](100, 0), Block[_0x14ae("0x152")](101, 0), Block.setRenderLayer(102, 0), Block[_0x14ae("0x152")](103, 0), Block[_0x14ae("0x152")](104, 0), Block[_0x14ae("0x152")](105, 0), Block[_0x14ae("0x152")](106, 0), Block[_0x14ae("0x152")](107, 0), Block[_0x14ae("0x152")](108, 0), Block[_0x14ae("0x152")](109, 0), Block[_0x14ae("0x152")](110, 0), Block[_0x14ae("0x152")](111, 0), Block[_0x14ae("0x152")](112, 0), Block.setRenderLayer(113, 0), Block[_0x14ae("0x152")](114, 0), Block[_0x14ae("0x152")](115, 0), Block[_0x14ae("0x152")](117, 0), Block.setRenderLayer(118, 0), Block.setRenderLayer(119, 0), Block[_0x14ae("0x152")](120, 0), Block.setRenderLayer(121, 0), Block[_0x14ae("0x152")](122, 0), Block.setRenderLayer(123, 0), Block.setRenderLayer(124, 0), Block[_0x14ae("0x152")](125, 0), Block[_0x14ae("0x152")](126, 0), Block[_0x14ae("0x152")](127, 0), Block[_0x14ae("0x152")](128, 0), Block.setRenderLayer(130, 0), Block[_0x14ae("0x152")](131, 0), Block[_0x14ae("0x152")](132, 0), Block.setRenderLayer(133, 0), Block[_0x14ae("0x152")](134, 0), Block.setRenderLayer(135, 0), Block[_0x14ae("0x152")](136, 0), Block[_0x14ae("0x152")](137, 0), Block[_0x14ae("0x152")](138, 0), Block[_0x14ae("0x152")](139, 0), Block[_0x14ae("0x152")](140, 0), Block[_0x14ae("0x152")](141, 0), Block[_0x14ae("0x153")](14, 0), Block[_0x14ae("0x152")](14, 0), Block[_0x14ae("0x153")](15, 0), Block[_0x14ae("0x152")](15, 0), Block.setLightLevel(16, 0), Block[_0x14ae("0x152")](16, 0), Block[_0x14ae("0x153")](21, 0), Block[_0x14ae("0x152")](21, 0), Block[_0x14ae("0x153")](56, 0), Block[_0x14ae("0x152")](56, 0), Block[_0x14ae("0x153")](73, 0), Block[_0x14ae("0x152")](73, 0), Block[_0x14ae("0x153")](74, 0), Block[_0x14ae("0x152")](74, 0), Block[_0x14ae("0x153")](129, 0), Block[_0x14ae("0x152")](129, 0), clientMessage(_0x14ae("0x154"))) : (brightorestoggle = brightores = !0, clientMessage(_0x14ae("0x151")))
                    }
                })), a.addView(e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")]("Elytra Spoof"), e.setTextColor(textColor), e[_0x14ae("0x81")](elytraspoof), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        elytraspoof ? (elytraspoof = !1, clientMessage(_0x14ae("0x156"))) : (elytraspoof = !0, clientMessage(_0x14ae("0x155")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx)).setText(_0x14ae("0x157")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x81")](givesecondhand), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        givesecondhand ? (givesecondhand = !1, clientMessage(_0x14ae("0x159"))) : (givesecondhand = !0, clientMessage(_0x14ae("0x158")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx)).setText(_0x14ae("0x15a")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x81")](spamenchant), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        spamenchant ? (spamenchant = !1, clientMessage(_0x14ae("0x15c"))) : (spamenchant = !0, clientMessage(_0x14ae("0x15b")))
                    }
                })), a.addView(e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")]("Spam Give"), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x81")](spamgive), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        spamgive ? (spamgive = !1, clientMessage("§bOperatorClient§f: Spam Give Disabled!")) : (spamgive = !0, clientMessage(_0x14ae("0x15d")))
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android.widget[_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")]("Spam Item Name Changer"), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x81")](inc), e[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        inc ? (inc = !1, clientMessage(_0x14ae("0x15f"))) : (inc = !0, clientMessage(_0x14ae("0x15e")))
                    }
                })), a.addView(e), menu5 = new PopupWindow(t, ctx[_0x14ae("0xb8")]()[_0x14ae("0xb9")]().getWidth() / 3, ctx[_0x14ae("0xb8")]()[_0x14ae("0xb9")]()[_0x14ae("0xbb")]()), menu5[_0x14ae("0x5a")](android.R[_0x14ae("0x5b")][_0x14ae("0x5c")]), menu5[_0x14ae("0x5d")](ctx[_0x14ae("0x5e")]()[_0x14ae("0x5f")](), Gravity[_0x14ae("0x67")] | Gravity.CENTER, 0, 0)
            } catch (e) {
                Toast[_0x14ae("0x64")](ctx, "Error: " + e, 1).show()
            }
        }
    }))
}

function mainMenu6() {
    ctx[_0x14ae("0x42")](new Runnable({
        run: function() {
            try {
                var e = new LinearLayout(ctx),
                    a = new ScrollView(ctx),
                    x = new LinearLayout(ctx);
                e[_0x14ae("0x43")](1), e[_0x14ae("0x48")](new(android[_0x14ae("0x16")].drawable.ColorDrawable)(android[_0x14ae("0x16")][_0x14ae("0x17")].TRANSPARENT)), x[_0x14ae("0x43")](1), a[_0x14ae("0x4a")](e), x[_0x14ae("0x4a")](a);
                var t = new Button(ctx);
                t[_0x14ae("0x44")](_0x14ae("0x160")), t.setTextColor(textColor), t[_0x14ae("0x55")](new View.OnClickListener({
                    onClick: function(e) {}
                })), e[_0x14ae("0x4a")](t);
                var n = new android.widget.Switch(ctx);
                n[_0x14ae("0x44")](_0x14ae("0x161")), n.setTextColor(textColor), n[_0x14ae("0x4c")](10, 3, 3, 3), n.setTextSize(15), n[_0x14ae("0x81")](aimkeybindbtn1), n[_0x14ae("0x162")](new(android.widget[_0x14ae("0x163")][_0x14ae("0x164")])({
                    onCheckedChanged: function() {
                        aimkeybindbtn1 ? (GUIaim.dismiss(), aimkeybindbtn1 = n = !1) : (showAimBtn(), aimkeybindbtn1 = n = !0)
                    }
                })), e.addView(n);
                var o = new(android[_0x14ae("0x24")].Switch)(ctx);
                o[_0x14ae("0x44")](_0x14ae("0x165")), o[_0x14ae("0x46")](textColor), o[_0x14ae("0x4c")](10, 3, 3, 3), o[_0x14ae("0x6e")](15), o[_0x14ae("0x81")](hitboxkeybindbtn1), o[_0x14ae("0x162")](new(android.widget[_0x14ae("0x163")][_0x14ae("0x164")])({
                    onCheckedChanged: function() {
                        hitboxkeybindbtn1 ? (GUIhb[_0x14ae("0x57")](), hitboxkeybindbtn1 = o = !1) : (showHitboxBtn(), hitboxkeybindbtn1 = o = !0)
                    }
                })), e[_0x14ae("0x4a")](o);
                var i = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx);
                i[_0x14ae("0x44")](_0x14ae("0x166")), i[_0x14ae("0x46")](textColor), i.setPadding(10, 3, 3, 3), i[_0x14ae("0x6e")](15), i[_0x14ae("0x81")](elevatorkeybind1), i.setOnCheckedChangeListener(new(android.widget[_0x14ae("0x163")][_0x14ae("0x164")])({
                    onCheckedChanged: function() {
                        elevatorkeybind1 ? (GUIel[_0x14ae("0x57")](), elevatorkeybind1 = i = !1) : (showElevatorBtn(), elevatorkeybind1 = i = !0)
                    }
                })), e.addView(i);
                var _ = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx);
                _[_0x14ae("0x44")](_0x14ae("0x167")), _[_0x14ae("0x46")](textColor), _[_0x14ae("0x4c")](10, 3, 3, 3), _[_0x14ae("0x6e")](15), _[_0x14ae("0x81")](jetpackkeybind1), _[_0x14ae("0x162")](new(android[_0x14ae("0x24")][_0x14ae("0x163")][_0x14ae("0x164")])({
                    onCheckedChanged: function() {
                        jetpackkeybind1 ? (GUIj[_0x14ae("0x57")](), jetpackkeybind1 = _ = !1) : (showJetpackBtn(), jetpackkeybind1 = _ = !0)
                    }
                })), e[_0x14ae("0x4a")](_);
                var r = new(android[_0x14ae("0x24")].Switch)(ctx);
                r[_0x14ae("0x44")](_0x14ae("0x168")), r[_0x14ae("0x46")](textColor), r[_0x14ae("0x4c")](10, 3, 3, 3), r[_0x14ae("0x6e")](15), r[_0x14ae("0x81")](escapekeybind1), r.setOnCheckedChangeListener(new(android.widget[_0x14ae("0x163")][_0x14ae("0x164")])({
                    onCheckedChanged: function() {
                        escapekeybind1 ? (GUIb[_0x14ae("0x57")](), escapekeybind1 = r = !1) : (showBoostBtn(), escapekeybind1 = r = !0)
                    }
                })), e[_0x14ae("0x4a")](r);
                var d = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx);
                d.setText(_0x14ae("0x169")), d[_0x14ae("0x46")](textColor), d.setPadding(10, 3, 3, 3), d[_0x14ae("0x6e")](15), d[_0x14ae("0x81")](nodownglidekeybind1), d.setOnCheckedChangeListener(new(android[_0x14ae("0x24")][_0x14ae("0x163")][_0x14ae("0x164")])({
                    onCheckedChanged: function() {
                        nodownglidekeybind1 ? (GUIndg.dismiss(), nodownglidekeybind1 = d = !1) : (showNoDownGlideBtn(), nodownglidekeybind1 = d = !0)
                    }
                })), e.addView(d);
                var l = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx);
                l[_0x14ae("0x44")]("Binoculars Keybind"), l[_0x14ae("0x46")](textColor), l[_0x14ae("0x4c")](10, 3, 3, 3), l[_0x14ae("0x6e")](15), l[_0x14ae("0x81")](zoomvisionkeybind1), l[_0x14ae("0x162")](new(android.widget[_0x14ae("0x163")][_0x14ae("0x164")])({
                    onCheckedChanged: function() {
                        zoomvisionkeybind1 ? (GUIzoom[_0x14ae("0x57")](), zoomvisionkeybind1 = l = !1) : (showZoomBtn(), zoomvisionkeybind1 = l = !0)
                    }
                })), e[_0x14ae("0x4a")](l);
                var c = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx);
                c[_0x14ae("0x44")](_0x14ae("0x16a")), c[_0x14ae("0x46")](textColor), c.setPadding(10, 3, 3, 3), c[_0x14ae("0x6e")](15), c.setChecked(cbindkeybind1), c[_0x14ae("0x162")](new(android[_0x14ae("0x24")][_0x14ae("0x163")].OnCheckedChangeListener)({
                    onCheckedChanged: function() {
                        cbindkeybind1 ? (GUIcBind.dismiss(), cbindkeybind1 = c = !1) : (showcBindBtn(), cbindkeybind1 = c = !0)
                    }
                })), e[_0x14ae("0x4a")](c), menu6 = new PopupWindow(x, ctx[_0x14ae("0xb8")]()[_0x14ae("0xb9")]()[_0x14ae("0xba")]() / 3, ctx[_0x14ae("0xb8")]().getDefaultDisplay()[_0x14ae("0xbb")]()), menu6[_0x14ae("0x5a")](android.R.style.Animation_InputMethod), menu6.showAtLocation(ctx[_0x14ae("0x5e")]()[_0x14ae("0x5f")](), Gravity[_0x14ae("0x67")] | Gravity.CENTER, 0, 0)
            } catch (e) {
                Toast[_0x14ae("0x64")](ctx, _0x14ae("0xbc") + e, 1)[_0x14ae("0x65")]()
            }
        }
    }))
}

function mainMenu7() {
    ctx[_0x14ae("0x42")](new Runnable({
        run: function() {
            try {
                var e, a = new LinearLayout(ctx),
                    x = new ScrollView(ctx),
                    t = new LinearLayout(ctx);
                a.setOrientation(1), a[_0x14ae("0x48")](new(android[_0x14ae("0x16")][_0x14ae("0x2d")].ColorDrawable)(android[_0x14ae("0x16")][_0x14ae("0x17")][_0x14ae("0x1c")])), t[_0x14ae("0x43")](1), x[_0x14ae("0x4a")](a), t[_0x14ae("0x4a")](x), (e = new Button(ctx)).setText(_0x14ae("0x16b")), e.setTextColor(textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {}
                })), a[_0x14ae("0x4a")](e), (e = new Button(ctx))[_0x14ae("0x44")](_0x14ae("0x16c")), e.setTextColor(textColor), e.setOnClickListener(new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        infinitereachMainMenu()
                    }
                })), a[_0x14ae("0x4a")](e), (e = new Button(ctx))[_0x14ae("0x44")]("Specific Aim Settings"), e.setTextColor(textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        specificAimMainMenu()
                    }
                })), a.addView(e), (e = new Button(ctx))[_0x14ae("0x44")]("Aimbot Settings"), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        aimbotMainMenu()
                    }
                })), a[_0x14ae("0x4a")](e), (e = new Button(ctx))[_0x14ae("0x44")]("Bowaimbot Settings"), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new View.OnClickListener({
                    onClick: function(e) {
                        barangeMainMenu()
                    }
                })), a[_0x14ae("0x4a")](e), (e = new Button(ctx))[_0x14ae("0x44")]("Hitbox Settings"), e.setTextColor(textColor), e.setOnClickListener(new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        hitboxMainMenu()
                    }
                })), a.addView(e), (e = new Button(ctx))[_0x14ae("0x44")](_0x14ae("0x16d")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        ahbMainMenu()
                    }
                })), a.addView(e), (e = new Button(ctx)).setText("Away Aura Settings"), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        awayauraMainMenu()
                    }
                })), a[_0x14ae("0x4a")](e), (e = new Button(ctx)).setText(_0x14ae("0x16e")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new View.OnClickListener({
                    onClick: function(e) {
                        hoverauraMainMenu()
                    }
                })), a[_0x14ae("0x4a")](e), (e = new Button(ctx))[_0x14ae("0x44")]("Boost Hit Settings"), e[_0x14ae("0x46")](textColor), e.setOnClickListener(new View.OnClickListener({
                    onClick: function(e) {
                        bhitMainMenu()
                    }
                })), a[_0x14ae("0x4a")](e), (e = new Button(ctx))[_0x14ae("0x44")](_0x14ae("0x16f")), e.setTextColor(textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        tpauraMainMenu()
                    }
                })), a[_0x14ae("0x4a")](e), (e = new Button(ctx)).setText("Tower Settings"), e.setTextColor(textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        towerMainMenu()
                    }
                })), a[_0x14ae("0x4a")](e), (e = new Button(ctx))[_0x14ae("0x44")](_0x14ae("0x170")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        nbwarningrangeMainMenu()
                    }
                })), a[_0x14ae("0x4a")](e), (e = new Button(ctx))[_0x14ae("0x44")](_0x14ae("0x171")), e.setTextColor(textColor), e[_0x14ae("0x55")](new View.OnClickListener({
                    onClick: function(e) {
                        jspeedMainMenu()
                    }
                })), a[_0x14ae("0x4a")](e), (e = new Button(ctx))[_0x14ae("0x44")](_0x14ae("0x172")), e[_0x14ae("0x46")](textColor), e.setOnClickListener(new View.OnClickListener({
                    onClick: function(e) {
                        autowalkMainMenu()
                    }
                })), a[_0x14ae("0x4a")](e), (e = new Button(ctx))[_0x14ae("0x44")](_0x14ae("0x173")), e[_0x14ae("0x46")](textColor), e.setOnClickListener(new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        longjumpMainMenu()
                    }
                })), a.addView(e), (e = new Button(ctx))[_0x14ae("0x44")](_0x14ae("0x174")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        elevatorMainMenu()
                    }
                })), a.addView(e), (e = new Button(ctx))[_0x14ae("0x44")]("Escape Settings"), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        espeedMainMenu()
                    }
                })), a[_0x14ae("0x4a")](e), (e = new Button(ctx))[_0x14ae("0x44")](_0x14ae("0x175")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        chatbindMainMenu()
                    }
                })), a[_0x14ae("0x4a")](e), (e = new Button(ctx)).setText(_0x14ae("0x176")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        lowhealthactionMainMenu()
                    }
                })), a[_0x14ae("0x4a")](e), (e = new Button(ctx))[_0x14ae("0x44")]("Haste Settings"), e[_0x14ae("0x46")](textColor), e.setOnClickListener(new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        hasteMainMenu()
                    }
                })), a[_0x14ae("0x4a")](e), (e = new Button(ctx))[_0x14ae("0x44")]("Jump Boost Settings"), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new View.OnClickListener({
                    onClick: function(e) {
                        jumpMainMenu()
                    }
                })), a[_0x14ae("0x4a")](e), (e = new Button(ctx))[_0x14ae("0x44")](_0x14ae("0x177")), e[_0x14ae("0x46")](textColor), e.setOnClickListener(new View.OnClickListener({
                    onClick: function(e) {
                        speedMainMenu()
                    }
                })), a[_0x14ae("0x4a")](e), (e = new Button(ctx))[_0x14ae("0x44")](_0x14ae("0x178")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        gamespeedMainMenu()
                    }
                })), a.addView(e), (e = new Button(ctx)).setText(_0x14ae("0x179")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        dolphinMainMenu()
                    }
                })), a[_0x14ae("0x4a")](e), (e = new Button(ctx)).setText(_0x14ae("0x17a")), e[_0x14ae("0x46")](textColor), e.setOnClickListener(new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        lbounceMainMenu()
                    }
                })), a[_0x14ae("0x4a")](e), (e = new Button(ctx))[_0x14ae("0x44")](_0x14ae("0x17b")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new View.OnClickListener({
                    onClick: function(e) {
                        zoomMainMenu()
                    }
                })), a[_0x14ae("0x4a")](e), (e = new Button(ctx))[_0x14ae("0x44")](_0x14ae("0x17c")), e.setTextColor(textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        cuspamMenu()
                    }
                })), a.addView(e), (e = new Button(ctx))[_0x14ae("0x44")](_0x14ae("0x17d")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        curaspamMenu()
                    }
                })), a[_0x14ae("0x4a")](e), (e = new Button(ctx))[_0x14ae("0x44")](_0x14ae("0x17e")), e[_0x14ae("0x46")](textColor), e.setOnClickListener(new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        tellspamMainMenu()
                    }
                })), a[_0x14ae("0x4a")](e), (e = new Button(ctx))[_0x14ae("0x44")](_0x14ae("0x17f")), e.setTextColor(textColor), e.setOnClickListener(new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        cuspamhitMainMenu()
                    }
                })), a[_0x14ae("0x4a")](e), (e = new Button(ctx))[_0x14ae("0x44")]("Custom Give Settings"), e.setTextColor(textColor), e[_0x14ae("0x55")](new View.OnClickListener({
                    onClick: function(e) {
                        customgiveMainMenu()
                    }
                })), a[_0x14ae("0x4a")](e), (e = new Button(ctx))[_0x14ae("0x44")](_0x14ae("0x180")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new View.OnClickListener({
                    onClick: function(e) {
                        givesecondhandMainMenu()
                    }
                })), a[_0x14ae("0x4a")](e), (e = new Button(ctx))[_0x14ae("0x44")](_0x14ae("0x181")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new View.OnClickListener({
                    onClick: function(e) {
                        incMainMenu()
                    }
                })), a[_0x14ae("0x4a")](e), (e = new Button(ctx))[_0x14ae("0x44")](_0x14ae("0x182")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        friendManager()
                    }
                })), a[_0x14ae("0x4a")](e), (e = new Button(ctx)).setText(_0x14ae("0x183")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new View.OnClickListener({
                    onClick: function(e) {
                        spamenchantMainMenu()
                    }
                })), a[_0x14ae("0x4a")](e), (e = new Button(ctx))[_0x14ae("0x44")](_0x14ae("0xac")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        autoswordMainMenu()
                    }
                })), a[_0x14ae("0x4a")](e), (e = new Button(ctx))[_0x14ae("0x44")](_0x14ae("0x184")), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        mainMainMenu()
                    }
                })), a[_0x14ae("0x4a")](e), menu7 = new PopupWindow(t, ctx.getWindowManager()[_0x14ae("0xb9")]()[_0x14ae("0xba")]() / 3, ctx.getWindowManager()[_0x14ae("0xb9")]()[_0x14ae("0xbb")]()), menu7[_0x14ae("0x5a")](android.R[_0x14ae("0x5b")].Animation_InputMethod), menu7.showAtLocation(ctx[_0x14ae("0x5e")]()[_0x14ae("0x5f")](), Gravity[_0x14ae("0x67")] | Gravity[_0x14ae("0x60")], 0, 0)
            } catch (e) {
                Toast[_0x14ae("0x64")](ctx, _0x14ae("0xbc") + e, 1)[_0x14ae("0x65")]()
            }
        }
    }))
}

function mainMenu8() {
    ctx[_0x14ae("0x42")](new Runnable({
        run: function() {
            try {
                var e, a = new LinearLayout(ctx),
                    x = new ScrollView(ctx),
                    t = new LinearLayout(ctx);
                a[_0x14ae("0x43")](1), a.setBackgroundDrawable(new(android[_0x14ae("0x16")][_0x14ae("0x2d")][_0x14ae("0x2e")])(android[_0x14ae("0x16")][_0x14ae("0x17")][_0x14ae("0x1c")])), t[_0x14ae("0x43")](1), x.addView(a), t[_0x14ae("0x4a")](x), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx)).setText("Aqua Infinity"), e[_0x14ae("0x81")](toggleaquainfinity), e[_0x14ae("0x46")](textColor), e.setOnClickListener(new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        toggleaquainfinity = !toggleaquainfinity
                    }
                })), a.addView(e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x185")), e[_0x14ae("0x81")](toggleblastprotection), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        toggleblastprotection = !toggleblastprotection
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x186")), e[_0x14ae("0x81")](toggledepthstrider), e[_0x14ae("0x46")](textColor), e.setOnClickListener(new View.OnClickListener({
                    onClick: function(e) {
                        toggledepthstrider = !toggledepthstrider
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")].Switch)(ctx))[_0x14ae("0x44")](_0x14ae("0x187")), e[_0x14ae("0x81")](toggleefficiency), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        toggleefficiency = !toggleefficiency
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x188")), e[_0x14ae("0x81")](togglefeatherfalling), e[_0x14ae("0x46")](textColor), e.setOnClickListener(new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        togglefeatherfalling = !togglefeatherfalling
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x189")), e[_0x14ae("0x81")](togglefireaspect), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        togglefireaspect = !togglefireaspect
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x18a")), e[_0x14ae("0x81")](togglefireprotection), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new View.OnClickListener({
                    onClick: function(e) {
                        togglefireprotection = !togglefireprotection
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")]("Flame"), e[_0x14ae("0x81")](toggleflame), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        toggleflame = !toggleflame
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x18b")), e[_0x14ae("0x81")](togglefortune), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        togglefortune = !togglefortune
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx)).setText(_0x14ae("0x18c")), e.setChecked(toggleinfinity), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new View.OnClickListener({
                    onClick: function(e) {
                        toggleinfinity = !toggleinfinity
                    }
                })), a.addView(e), (e = new android.widget.Switch(ctx)).setText("KnockBack"), e[_0x14ae("0x81")](toggleknockback), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        toggleknockback = !toggleknockback
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android.widget[_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")]("Looting"), e[_0x14ae("0x81")](togglelooting), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new View.OnClickListener({
                    onClick: function(e) {
                        togglelooting = !togglelooting
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx)).setText("Luck Of The Sea"), e[_0x14ae("0x81")](toggleluckofthesea), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        toggleluckofthesea = !toggleluckofthesea
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")]("Lure"), e[_0x14ae("0x81")](togglelure), e.setTextColor(textColor), e[_0x14ae("0x55")](new View.OnClickListener({
                    onClick: function(e) {
                        togglelure = !togglelure
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x18d")), e[_0x14ae("0x81")](togglepower), e[_0x14ae("0x46")](textColor), e.setOnClickListener(new View.OnClickListener({
                    onClick: function(e) {
                        togglepower = !togglepower
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")].Switch)(ctx))[_0x14ae("0x44")](_0x14ae("0x18e")), e.setChecked(toggleprojectileprotection), e.setTextColor(textColor), e[_0x14ae("0x55")](new View.OnClickListener({
                    onClick: function(e) {
                        toggleprojectileprotection = !toggleprojectileprotection
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx)).setText(_0x14ae("0x18f")), e[_0x14ae("0x81")](toggleprotection), e.setTextColor(textColor), e.setOnClickListener(new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        toggleprotection = !toggleprotection
                    }
                })), a.addView(e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x190")), e[_0x14ae("0x81")](togglepunch), e[_0x14ae("0x46")](textColor), e.setOnClickListener(new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        togglepunch = !togglepunch
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x191")), e[_0x14ae("0x81")](togglerespiration), e.setTextColor(textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        togglerespiration = !togglerespiration
                    }
                })), a.addView(e), (e = new(android[_0x14ae("0x24")].Switch)(ctx))[_0x14ae("0x44")](_0x14ae("0x192")), e[_0x14ae("0x81")](togglesharpness), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        togglesharpness = !togglesharpness
                    }
                })), a.addView(e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx)).setText(_0x14ae("0x193")), e[_0x14ae("0x81")](togglesilktouch), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        togglesilktouch = !togglesilktouch
                    }
                })), a.addView(e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx)).setText(_0x14ae("0x194")), e[_0x14ae("0x81")](togglesmite), e.setTextColor(textColor), e.setOnClickListener(new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        togglesmite = !togglesmite
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x195")), e[_0x14ae("0x81")](togglethorns), e.setTextColor(textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        togglethorns = !togglethorns
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x196")), e[_0x14ae("0x81")](toggleunbreaking), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        toggleunbreaking = !toggleunbreaking
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx)).setText(_0x14ae("0x197")), e[_0x14ae("0x81")](toggleimpaling), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new View.OnClickListener({
                    onClick: function(e) {
                        toggleimpaling = !toggleimpaling
                    }
                })), a[_0x14ae("0x4a")](e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x198")), e[_0x14ae("0x81")](toggleriptide), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        toggleriptide = !toggleriptide
                    }
                })), a.addView(e), (e = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx))[_0x14ae("0x44")](_0x14ae("0x199")), e[_0x14ae("0x81")](toggleloyalty), e[_0x14ae("0x46")](textColor), e[_0x14ae("0x55")](new(View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        toggleloyalty = !toggleloyalty
                    }
                })), a.addView(e), menu8 = new PopupWindow(t, ctx[_0x14ae("0xb8")]()[_0x14ae("0xb9")]()[_0x14ae("0xba")]() / 3, ctx[_0x14ae("0xb8")]()[_0x14ae("0xb9")]().getHeight()), menu8[_0x14ae("0x5a")](android.R.style[_0x14ae("0x5c")]), menu8[_0x14ae("0x5d")](ctx[_0x14ae("0x5e")]().getDecorView(), Gravity.TOP | Gravity[_0x14ae("0x60")], 0, 0)
            } catch (e) {
                Toast[_0x14ae("0x64")](ctx, "Error: " + e, 1)[_0x14ae("0x65")]()
            }
        }
    }))
}

function setFoodItem(e, a, x) {
    Item[_0x14ae("0x19a")](e, {
        use_animation: _0x14ae("0x19b"),
        use_duration: a,
        food: {
            nutrition: x,
            saturation_modifier: _0x14ae("0x19c"),
            is_meat: !0
        }
    })
}

function getNearestEntity(e) {
    for (var a = Entity.getAll(), x = Server[_0x14ae("0x19d")](), t = e, n = null, o = 0; o < a.length; o++) {
        var i = Entity[_0x14ae("0x19e")](a[o]) - getPlayerX(),
            _ = Entity[_0x14ae("0x73")](a[o]) - getPlayerY(),
            r = Entity.getZ(a[o]) - getPlayerZ();
        (d = Math[_0x14ae("0x19f")](Math[_0x14ae("0x1a0")](i, 2) + Math[_0x14ae("0x1a0")](_, 2) + Math[_0x14ae("0x1a0")](r, 2))) < t && 0 < d && Entity[_0x14ae("0x1a1")](a[o]) <= 63 && 1 <= Entity.getHealth(a[o]) && (t = d, n = a[o])
    }
    for (o = 0; o < x[_0x14ae("0x1a2")]; o++) {
        var d;
        i = Entity[_0x14ae("0x19e")](x[o]) - getPlayerX(), _ = Entity[_0x14ae("0x73")](x[o]) - getPlayerY(), r = Entity[_0x14ae("0x1a3")](x[o]) - getPlayerZ();
        (d = Math[_0x14ae("0x19f")](Math[_0x14ae("0x1a0")](i, 2) + Math[_0x14ae("0x1a0")](_, 2) + Math[_0x14ae("0x1a0")](r, 2))) < t && 0 < d && 1 <= Entity[_0x14ae("0x15")](x[o]) && (t = d, n = x[o])
    }
    return n
}

function crosshairAimAt(e, a) {
    if (null != e) {
        var x = Entity[_0x14ae("0x19e")](e) - getPlayerX(),
            t = Entity[_0x14ae("0x73")](e) - getPlayerY(),
            n = Entity[_0x14ae("0x1a3")](e) - getPlayerZ();
        null != a && a instanceof Array && (x = Entity.getX(e) - a[0], t = Entity.getY(e) - a[1], n = Entity[_0x14ae("0x1a3")](e) - a[2]), 63 != Entity[_0x14ae("0x1a1")](e) && (t += .5);
        var o = .5 + Entity.getX(e),
            i = (Entity.getY(e), .5 + Entity.getZ(e)),
            _ = (t = t / Math.sqrt(x * x + t * t + n * n), Math[_0x14ae("0x1a4")](t));
        _ = -(_ = 180 * _ / Math.PI);
        var r = -Math[_0x14ae("0x1a5")](o - (Player[_0x14ae("0x19e")]() + .5), i - (Player.getZ() + .5)) * (180 / Math.PI);
        Entity[_0x14ae("0x1a6")](getNearestEntity(aimbotrange)) != friendManagerVar1 && Entity.getNameTag(getNearestEntity(aimbotrange)) != friendManagerVar2 && Entity[_0x14ae("0x1a6")](getNearestEntity(aimbotrange)) != friend1name && Entity[_0x14ae("0x1a6")](getNearestEntity(aimbotrange)) != friend2name && Entity.getNameTag(getNearestEntity(aimbotrange)) != friend3name && Entity[_0x14ae("0x1a6")](getNearestEntity(aimbotrange)) != friend4name && _ < 89 && -89 < _ && Entity[_0x14ae("0x1a7")](Player[_0x14ae("0x1a8")](), r, _)
    }
}

function specificPlayer(e) {
    for (var a = Server[_0x14ae("0x19d")](), x = 0; x < a[_0x14ae("0x1a2")]; x++)
        if (Entity[_0x14ae("0x1a6")](a[x]) == e && Entity.getNameTag(a[x]) != Entity.getNameTag(getPlayerEnt())) return a[x]
}
ModPE[_0x14ae("0x31")]("menu.copyright", _0x14ae("0x32") + clientversion), clientHelper();
var Utils = {
    Player: {
        isOnGround: function() {
            var e = Math[_0x14ae("0x1a9")](Player[_0x14ae("0x19e")]()),
                a = Math[_0x14ae("0x1a9")](Player.getY() - 2),
                x = Math[_0x14ae("0x1a9")](Player.getZ());
            if (0 != getTile(e, a, x)) return !0
        },
        isInWater: function() {
            var e = Math[_0x14ae("0x1a9")](Player[_0x14ae("0x19e")]()),
                a = Math.floor(Player[_0x14ae("0x73")]() - 1.65),
                x = Math[_0x14ae("0x1a9")](Player[_0x14ae("0x1a3")]());
            return 8 == getTile(e, a, x) || (9 == getTile(e, a, x) || (10 == getTile(e, a, x) || (11 == getTile(e, a, x) || void 0)))
        },
        isAboveLiquid: function() {
            var e = Math[_0x14ae("0x1a9")](Player[_0x14ae("0x19e")]()),
                a = Math[_0x14ae("0x1a9")](Player[_0x14ae("0x73")]() - 2.6),
                x = Math.floor(Player[_0x14ae("0x1a3")]());
            return 8 == getTile(e, a, x) || (9 == getTile(e, a, x) || (10 == getTile(e, a, x) || (11 == getTile(e, a, x) || void 0)))
        },
        isOnSoulSand: function() {
            var e = Math[_0x14ae("0x1a9")](Player[_0x14ae("0x19e")]()),
                a = Math.floor(Player[_0x14ae("0x73")]() - 2),
                x = Math[_0x14ae("0x1a9")](Player[_0x14ae("0x1a3")]());
            if (88 == getTile(e, a, x)) return !0
        },
        isOnCobweb: function() {
            var e = Math[_0x14ae("0x1a9")](Player.getX()),
                a = Math.floor(Player[_0x14ae("0x73")]() - 2),
                x = Math[_0x14ae("0x1a9")](Player[_0x14ae("0x1a3")]());
            if (30 == getTile(e, a, x)) return !0
        },
        isCollidedHorizontally: function() {
            for (var e = Entity.getX(getPlayerEnt()), a = Entity.getZ(getPlayerEnt()), x = Math[_0x14ae("0x1aa")](e - .5), t = Math[_0x14ae("0x1aa")](a - .5); e < 1;) e += 1;
            for (; a < 1;) a += 1;
            for (; 1 < e;) e -= 1;
            for (; 1 < a;) a -= 1;
            return 31 == Math[_0x14ae("0x1aa")](100 * e) && (e -= .01), 31 == Math.round(100 * a) && (a -= .01), 69 == Math[_0x14ae("0x1aa")](100 * e) && (e += .01), 69 == Math[_0x14ae("0x1aa")](100 * a) && (a += .01), 30 == Math[_0x14ae("0x1aa")](100 * e) && x--, 30 == Math[_0x14ae("0x1aa")](100 * a) && t--, 70 == Math[_0x14ae("0x1aa")](100 * e) && x++, 70 == Math[_0x14ae("0x1aa")](100 * a) && t++, (0 != getTile(x, Entity[_0x14ae("0x73")](getPlayerEnt()), t) || 0 != getTile(x, Entity.getY(getPlayerEnt()) - 1, t)) && (!(Block[_0x14ae("0x1ab")](getTile(x, Entity.getY(getPlayerEnt()) - 1, t)) <= .1 && Block[_0x14ae("0x1ab")](getTile(x, Entity[_0x14ae("0x73")](getPlayerEnt()), t)) <= .1) && (30 == Math.round(100 * e) || 70 == Math[_0x14ae("0x1aa")](100 * e) || (30 == Math[_0x14ae("0x1aa")](100 * a) || 70 == Math[_0x14ae("0x1aa")](100 * a))))
        }
    }
};

function toDirectionalVector(e, a, x) {
    e[0] = Math[_0x14ae("0x1ac")](a) * Math[_0x14ae("0x1ac")](x), e[1] = Math[_0x14ae("0x1ad")](x), e[2] = Math[_0x14ae("0x1ad")](a) * Math.cos(x)
}

function attackHook(e, a) {
    var t;
    e == Player.getEntity() && tpaura && !tpauraY && (null != (t = getNearestEntity(aimbotrange)) && crosshairAimAt(t), setPosition(e, Entity[_0x14ae("0x19e")](a) + Math[_0x14ae("0x1aa")](Math[_0x14ae("0x1ae")]() * tpauravalue * Math.random()), Entity[_0x14ae("0x73")](a), Entity[_0x14ae("0x1a3")](a) + Math[_0x14ae("0x1aa")](Math[_0x14ae("0x1ae")]() * tpauravalue * Math[_0x14ae("0x1ae")]())));
    e == Player[_0x14ae("0x1a8")]() && tpaura && tpauraY && (null != (t = getNearestEntity(aimbotrange)) && crosshairAimAt(t), setPosition(e, Entity[_0x14ae("0x19e")](a) + Math[_0x14ae("0x1aa")](Math[_0x14ae("0x1ae")]() * tpauravalue * Math[_0x14ae("0x1ae")]()), Entity[_0x14ae("0x73")](a) + Math.round(Math[_0x14ae("0x1ae")]() * tpauravalue * Math[_0x14ae("0x1ae")]()), Entity[_0x14ae("0x1a3")](a) + Math[_0x14ae("0x1aa")](Math.random() * tpauravalue * Math[_0x14ae("0x1ae")]())));
    if (e == Player[_0x14ae("0x1a8")]() && bhit) {
        var n = getYaw() + 90;
        getPitch();
        x = Math[_0x14ae("0x1ac")](n * (Math.PI / 180)), z = Math[_0x14ae("0x1ad")](n * (Math.PI / 180)), setVelX(Player[_0x14ae("0x1a8")](), x * bhitvalue), setVelZ(Player[_0x14ae("0x1a8")](), z * bhitvalue)
    }
    if (e == Player.getEntity() && lbsgbhit) {
        n = getYaw() + 90, getPitch();
        x = Math.cos(n * (Math.PI / 180)), z = Math[_0x14ae("0x1ad")](n * (Math.PI / 180)), setVelX(Player[_0x14ae("0x1a8")](), .8 * x), setVelZ(Player[_0x14ae("0x1a8")](), .8 * z)
    }
    if (e == Player[_0x14ae("0x1a8")]() && spamhit && Server[_0x14ae("0x6d")](spamhitvalue), e == Player[_0x14ae("0x1a8")]() && rspamhit && Server[_0x14ae("0x6d")](Player[_0x14ae("0x1af")](a) + _0x14ae("0x1b0") + Player[_0x14ae("0x1af")](a) + " DIE MOTHER FÚCKER " + Player[_0x14ae("0x1af")](a) + _0x14ae("0x1b0") + Player[_0x14ae("0x1af")](a) + " DIE MOTHER FÚCKER " + Player[_0x14ae("0x1af")](a) + _0x14ae("0x1b1")), e == Player[_0x14ae("0x1a8")]() && ride && rideAnimal(e, a), e == Player[_0x14ae("0x1a8")]() && criticals && Entity[_0x14ae("0x69")](getPlayerEnt(), 0, 2, 0), e == Player[_0x14ae("0x1a8")]() && ahb && Entity.setCollisionSize(a, ahbwidth, ahbheight), e == Player[_0x14ae("0x1a8")]() && camstalker2 && (ModPE[_0x14ae("0x144")](a), clientMessage(_0x14ae("0x1b2") + Player[_0x14ae("0x1af")](a) + "")), e == Player[_0x14ae("0x1a8")]() && derphit) {
        var o = getPlayerEnt(),
            i = Math[_0x14ae("0x1a9")](Entity[_0x14ae("0x1b3")](o)),
            _ = Math[_0x14ae("0x1a9")](Entity[_0x14ae("0x1b4")](o));
        Entity[_0x14ae("0x1a7")](o, i + 360, _)
    }
    e == Player.getEntity() && hitxp && Player[_0x14ae("0x1b5")](hitxpvalue)
}

function destroyBlock(e, a, x, t) {
    blocktrace && clientMessage(_0x14ae("0x1b6") + Math[_0x14ae("0x1a9")](e) + _0x14ae("0x1b7") + Math[_0x14ae("0x1a9")](a) + _0x14ae("0x1b8") + Math[_0x14ae("0x1a9")](x))
}

function modTick() {
    var e;
    aimbot && (null != (e = getNearestEntity(aimbotrange)) && crosshairAimAt(e));
    specificAim && (null != (e = specificPlayer(specificPlayerTag)) && crosshairAimAt(e));
    if (awayaura && (enemy = getNearestEntity(awayaurarange), null != enemy && Entity[_0x14ae("0x1a1")](enemy) == EntityType.PLAYER && setPosition(getPlayerEnt(), Entity.getX(enemy), Entity[_0x14ae("0x73")](enemy) + .2, Entity[_0x14ae("0x1a3")](enemy) + 7)), spamenchant && toggleaquainfinity && Player[_0x14ae("0x1b9")](Player.getSelectedSlotId(), Enchantment.AQUA_AFFINITYA, enchantlevel), spamenchant && toggleblastprotection && Player[_0x14ae("0x1b9")](Player.getSelectedSlotId(), Enchantment.BLAST_PROTECTION, enchantlevel), spamenchant && toggledepthstrider && Player[_0x14ae("0x1b9")](Player[_0x14ae("0x1ba")](), Enchantment[_0x14ae("0x1bb")], enchantlevel), spamenchant && toggleefficiency && Player.enchant(Player[_0x14ae("0x1ba")](), Enchantment[_0x14ae("0x1bc")], enchantlevel), spamenchant && togglefeatherfalling && Player[_0x14ae("0x1b9")](Player[_0x14ae("0x1ba")](), Enchantment[_0x14ae("0x1bd")], enchantlevel), spamenchant && togglefireaspect && Player[_0x14ae("0x1b9")](Player[_0x14ae("0x1ba")](), Enchantment[_0x14ae("0x1be")], enchantlevel), spamenchant && togglefireprotection && Player[_0x14ae("0x1b9")](Player[_0x14ae("0x1ba")](), Enchantment[_0x14ae("0x1bf")], enchantlevel), spamenchant && toggleflame && Player[_0x14ae("0x1b9")](Player[_0x14ae("0x1ba")](), Enchantment[_0x14ae("0x1c0")], enchantlevel), spamenchant && togglefortune && Player[_0x14ae("0x1b9")](Player[_0x14ae("0x1ba")](), Enchantment[_0x14ae("0x1c1")], enchantlevel), spamenchant && toggleinfinity && Player.enchant(Player.getSelectedSlotId(), Enchantment[_0x14ae("0x1c2")], enchantlevel), spamenchant && toggleknockback && Player[_0x14ae("0x1b9")](Player[_0x14ae("0x1ba")](), Enchantment[_0x14ae("0x1c3")], enchantlevel), spamenchant && togglelooting && Player[_0x14ae("0x1b9")](Player[_0x14ae("0x1ba")](), Enchantment[_0x14ae("0x1c4")], enchantlevel), spamenchant && toggleluckofthesea && Player[_0x14ae("0x1b9")](Player[_0x14ae("0x1ba")](), Enchantment[_0x14ae("0x1c5")], enchantlevel), spamenchant && togglelure && Player[_0x14ae("0x1b9")](Player[_0x14ae("0x1ba")](), Enchantment[_0x14ae("0x1c6")], enchantlevel), spamenchant && togglepower && Player[_0x14ae("0x1b9")](Player[_0x14ae("0x1ba")](), Enchantment[_0x14ae("0x1c7")], enchantlevel), spamenchant && toggleprojectileprotection && Player[_0x14ae("0x1b9")](Player.getSelectedSlotId(), Enchantment.PROJECTILE_PROTECTION, enchantlevel), spamenchant && toggleprotection && Player[_0x14ae("0x1b9")](Player[_0x14ae("0x1ba")](), Enchantment[_0x14ae("0x1c8")], enchantlevel), spamenchant && togglepunch && Player[_0x14ae("0x1b9")](Player[_0x14ae("0x1ba")](), Enchantment.PUNCH, enchantlevel), spamenchant && togglerespiration && Player[_0x14ae("0x1b9")](Player[_0x14ae("0x1ba")](), Enchantment[_0x14ae("0x1c9")], enchantlevel), spamenchant && togglesharpness && Player[_0x14ae("0x1b9")](Player[_0x14ae("0x1ba")](), Enchantment[_0x14ae("0x1ca")], enchantlevel), spamenchant && togglesilktouch && Player[_0x14ae("0x1b9")](Player.getSelectedSlotId(), Enchantment[_0x14ae("0x1cb")], enchantlevel), spamenchant && togglesmite && Player[_0x14ae("0x1b9")](Player[_0x14ae("0x1ba")](), Enchantment[_0x14ae("0x1cc")], enchantlevel), spamenchant && togglethorns && Player[_0x14ae("0x1b9")](Player[_0x14ae("0x1ba")](), Enchantment[_0x14ae("0x1cd")], enchantlevel), spamenchant && toggleunbreaking && Player[_0x14ae("0x1b9")](Player[_0x14ae("0x1ba")](), Enchantment[_0x14ae("0x1ce")], enchantlevel), spamenchant && toggleimpaling && Player[_0x14ae("0x1b9")](Player.getSelectedSlotId(), Enchantment.IMPALING, enchantlevel), spamenchant && toggleriptide && Player.enchant(Player[_0x14ae("0x1ba")](), Enchantment[_0x14ae("0x1cf")], enchantlevel), spamenchant && toggleloyalty && Player[_0x14ae("0x1b9")](Player[_0x14ae("0x1ba")](), Enchantment[_0x14ae("0x1d0")], enchantlevel), spamgive && Player[_0x14ae("0x1d1")](IDValue, AmountValue, DamageValue), liquidbounce && Utils[_0x14ae("0x79")].isInWater() && setVelY(getPlayerEnt(), lbouncevalue), coords && ModPE[_0x14ae("0x1d2")]("§bYour Coordinates are: §4X:" + Math[_0x14ae("0x1a9")](Player.getX()) + _0x14ae("0x1b7") + Math[_0x14ae("0x1a9")](Player[_0x14ae("0x73")]() - 1) + " Z: " + Math[_0x14ae("0x1a9")](Player.getZ())), lcoords && Server[_0x14ae("0x6d")]("My Coordinates are: X:" + Math[_0x14ae("0x1a9")](Player[_0x14ae("0x19e")]()) + " Y: " + Math.floor(Player[_0x14ae("0x73")]() - 1) + " Z:" + Math[_0x14ae("0x1a9")](Player[_0x14ae("0x1a3")]())), bouncefly && Entity[_0x14ae("0x1d3")](getPlayerEnt()) < -.5 && setVelY(Player[_0x14ae("0x1a8")](), .5), sneakfloat && Entity[_0x14ae("0x1d4")](getPlayerEnt()) && setVelY(Player[_0x14ae("0x1a8")](), .2), sneakjet && Entity[_0x14ae("0x1d4")](getPlayerEnt())) {
        var a = getYaw() + 90,
            t = getPitch() - 180;
        x = Math[_0x14ae("0x1ac")](a * (Math.PI / 180)), y = Math[_0x14ae("0x1ad")](t * (Math.PI / 180)), z = Math[_0x14ae("0x1ad")](a * (Math.PI / 180)), setVelX(Player[_0x14ae("0x1a8")](), 1 * x), setVelY(Player[_0x14ae("0x1a8")](), 1 * y), setVelZ(Player[_0x14ae("0x1a8")](), 1 * z)
    }
    crouchmove && Entity[_0x14ae("0x1d4")](getPlayerEnt()) && (toDirectionalVector(g = [0, 0, 0], (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -0, 1), setVelX(getPlayerEnt(), .4 * g[0]), setVelZ(getPlayerEnt(), .4 * g[2]));
    (flight && Player.setCanFly(1), zoomvision && ModPE[_0x14ae("0x1d5")](zoomvalue), autowalk) && (toDirectionalVector(g = [0, 0, 0], (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -0, 1), setVelX(getPlayerEnt(), autowalkvalue * g[0]), setVelZ(getPlayerEnt(), autowalkvalue * g[2]));
    if (sgspeed && ModPE[_0x14ae("0xd4")](25), gs && ModPE[_0x14ae("0xd4")](gamespeedvalue), glide && setVelY(getPlayerEnt(), -.2), upglide && setVelY(getPlayerEnt(), .2), nodownglide && setVelY(getPlayerEnt(), 0), bhop && Utils[_0x14ae("0x79")].isOnGround() && (setVelY(getPlayerEnt(), .7), setVelX(getPlayerEnt(), 1.3 * Entity[_0x14ae("0x1d6")](getPlayerEnt())), setVelZ(getPlayerEnt(), 1.3 * Entity[_0x14ae("0x1d7")](getPlayerEnt()))), bhop2 && Utils[_0x14ae("0x79")][_0x14ae("0x1d8")]() && (setVelY(getPlayerEnt(), .2), setVelX(getPlayerEnt(), 1.6 * Entity.getVelX(getPlayerEnt())), setVelZ(getPlayerEnt(), 1.6 * Entity[_0x14ae("0x1d7")](getPlayerEnt()))), derp && Utils[_0x14ae("0x79")][_0x14ae("0x1d8")]()) {
        var n = getPlayerEnt(),
            o = Math[_0x14ae("0x1a9")](Entity[_0x14ae("0x1b3")](n)),
            i = Math[_0x14ae("0x1a9")](Entity[_0x14ae("0x1b4")](n));
        Entity[_0x14ae("0x1a7")](n, o + 30, i)
    }
    if (step && Utils[_0x14ae("0x79")][_0x14ae("0x1d9")]() && Entity[_0x14ae("0x69")](getPlayerEnt(), 0, 1, 0), sstep && Utils[_0x14ae("0x79")][_0x14ae("0x1d9")]() && setVelY(getPlayerEnt(), .5), haste && Entity[_0x14ae("0x1da")](getPlayerEnt(), MobEffect[_0x14ae("0x11f")], 99980001, hastevalue, !1, !1), nightvision && Entity[_0x14ae("0x1da")](getPlayerEnt(), MobEffect.nightVision, 99980001, 255, !1, !1), jumpboost && Entity[_0x14ae("0x1da")](getPlayerEnt(), MobEffect[_0x14ae("0x128")], 99980001, jbvalue, !1, !1), hoveraura && (enemy = getNearestEntity(hoveraurarange), null != enemy && Entity[_0x14ae("0x1a1")](enemy) == EntityType[_0x14ae("0x1db")] && setPosition(getPlayerEnt(), Entity[_0x14ae("0x19e")](enemy), Entity[_0x14ae("0x73")](enemy) + hoverauraheight, Entity.getZ(enemy))), nearwarning && null != getNearestEntity(nbwarningrange)) {
        var _ = getNearestEntity(nbwarningrange),
            r = Math[_0x14ae("0x1a9")](Player[_0x14ae("0x19e")]()),
            d = Math[_0x14ae("0x1a9")](Player[_0x14ae("0x73")]() - 2),
            l = Math[_0x14ae("0x1a9")](Player[_0x14ae("0x1a3")]()),
            c = Math[_0x14ae("0x1a9")](Entity.getX(_)),
            s = Math[_0x14ae("0x1a9")](Entity.getY(_) - 2),
            w = Math[_0x14ae("0x1a9")](Entity[_0x14ae("0x1a3")](_));
        ModPE[_0x14ae("0x1d2")](_0x14ae("0x1dc") + Entity[_0x14ae("0x1a6")](_) + _0x14ae("0x1dd") + c + ", " + s + ", " + w + _0x14ae("0x1de") + Item[_0x14ae("0x1af")](Entity[_0x14ae("0x1df")](_), Entity[_0x14ae("0x1e0")](_), !1) + " ID: " + Entity[_0x14ae("0x1df")](_) + _0x14ae("0x1e1") + Entity[_0x14ae("0x1e0")](_) + _0x14ae("0x1e2") + Entity[_0x14ae("0x1e3")](_) + _0x14ae("0x1e4") + r + ", " + d + ", " + l)
    }
    if (quickfall && Entity.getVelY(getPlayerEnt()) < -.5 && setVelY(getPlayerEnt(), Entity.getVelY(getPlayerEnt()) - 4), velocitymeter) {
        var u = getPlayerEnt();
        ModPE[_0x14ae("0x1d2")]("Velocity:\nX: " + Entity[_0x14ae("0x1d6")](u) + _0x14ae("0x1e5") + Entity[_0x14ae("0x1d3")](u) + _0x14ae("0x1e6") + Entity[_0x14ae("0x1d7")](u))
    }
    if (jetpack) {
        a = getYaw() + 90, t = getPitch() - 180;
        x = Math[_0x14ae("0x1ac")](a * (Math.PI / 180)), y = Math[_0x14ae("0x1ad")](t * (Math.PI / 180)), z = Math[_0x14ae("0x1ad")](a * (Math.PI / 180)), setVelX(Player[_0x14ae("0x1a8")](), x * jspeed), setVelY(Player[_0x14ae("0x1a8")](), y * jspeed), setVelZ(Player.getEntity(), z * jspeed)
    }
    if (spam && Server[_0x14ae("0x6d")](_0x14ae("0x1e7")), aspam && Server[_0x14ae("0x6d")](_0x14ae("0x1e8")), acspam && Server[_0x14ae("0x6d")](_0x14ae("0x1e9") + Player[_0x14ae("0x1af")](getPlayerEnt()) + _0x14ae("0x1ea") + clientversion + _0x14ae("0x1eb")), rspam && Server[_0x14ae("0x6d")]("FÚCKING SPAM FÚCKING SPAM FÚCKING SPAM FÚCKING SPAM FÚCKING SPAM FÚCKING SPAM FÚCKING SPAM FÚCKING SPAM FÚCKING SPAM FÚCKING SPAM FÚCKING SPAM FÚCKING SPAM!!!"), ospam && Server[_0x14ae("0x6d")](_0x14ae("0x1ec")), antiweather && (Level[_0x14ae("0x1ed")](0), Level[_0x14ae("0x1ee")](0)), antinight && Level[_0x14ae("0x1ef")](1200), antiday && Level[_0x14ae("0x1ef")](17e3), bbreak && Block[_0x14ae("0x14c")](7, 0), Entity[_0x14ae("0x15")](getPlayerEnt()) < lhealthheart && lhealth && (Server[_0x14ae("0x6d")](lhealthaction), lhealth = !1), antiafk) {
        a = getYaw() + 90, t = getPitch() - 180;
        x = Math[_0x14ae("0x1ac")](a * (Math.PI / 180)), y = Math[_0x14ae("0x1ad")](t * (Math.PI / 180)), z = Math[_0x14ae("0x1ad")](a * (Math.PI / 180)), setVelX(Player.getEntity(), .2 * x), setVelY(Player[_0x14ae("0x1a8")](), 0 * y), setVelZ(Player[_0x14ae("0x1a8")](), .2 * z);
        n = getPlayerEnt(), o = Math.floor(Entity[_0x14ae("0x1b3")](n)), i = Math.floor(Entity[_0x14ae("0x1b4")](n));
        Entity[_0x14ae("0x1a7")](n, o + 4, i)
    }
    getCarriedItem() == _0x14ae("0x1f0") && swordaura && (null != (e = getNearestEntity(15)) && crosshairAimAt(e));
    getCarriedItem() == _0x14ae("0x1f1") && swordaura && (null != (e = getNearestEntity(15)) && crosshairAimAt(e));
    getCarriedItem() == _0x14ae("0x1f2") && swordaura && (null != (e = getNearestEntity(15)) && crosshairAimAt(e));
    getCarriedItem() == _0x14ae("0x1f3") && swordaura && (null != (e = getNearestEntity(15)) && crosshairAimAt(e));
    getCarriedItem() == _0x14ae("0x1f4") && swordaura && (null != (e = getNearestEntity(15)) && crosshairAimAt(e));
    getCarriedItem() == _0x14ae("0x1f5") && bowaimbot && (null != (e = getNearestEntity(barange)) && crosshairAimAt(e));
    if (getCarriedItem() == _0x14ae("0x1f5") && bowaimbot && bowassist && null != getNearestEntity(barange)) {
        n = getPlayerEnt(), o = Math[_0x14ae("0x1a9")](Entity[_0x14ae("0x1b3")](n)), i = Math.floor(Entity[_0x14ae("0x1b4")](n));
        Entity[_0x14ae("0x1a7")](n, o, i - assistvalue)
    }(phase && Entity[_0x14ae("0x66")](getPlayerEnt(), -100, -100), elytraspoof && Player[_0x14ae("0x1f6")](1, 444, 0), givesecondhand && Entity.setOffhandSlot(getPlayerEnt(), givesecondhandid, givesecondhandamount, givesecondhanddamage), brightores && (brightoresfunc(), brightores = !1), inc && Player[_0x14ae("0x1f7")](Player[_0x14ae("0x1ba")](), incvalue), checkDev1 && Entity[_0x14ae("0x1a6")](getPlayerEnt()) == friendManagerVar1 && (print(_0x14ae("0x1f8")), checkDev1 = !1, friendManagerVar1 = _0x14ae("0x1f9")), checkDev2 && Entity[_0x14ae("0x1a6")](getPlayerEnt()) == friendManagerVar2 && (print("Welcome back Bricker1462! You are a Developer :D"), checkDev2 = !1, friendManagerVar2 = "null"), nethertooverworldcoords && ModPE[_0x14ae("0x1d2")](_0x14ae("0x1fa") + 8 * Math[_0x14ae("0x1a9")](getPlayerX()) + _0x14ae("0x1b7") + Math[_0x14ae("0x1a9")](getPlayerY()) + _0x14ae("0x1b8") + 8 * Math.floor(getPlayerZ())), overworldtonethercoords && ModPE[_0x14ae("0x1d2")]("Overworld -> Nether Coordinates\nX: " + Math[_0x14ae("0x1a9")](getPlayerX()) / 8 + _0x14ae("0x1b7") + Math[_0x14ae("0x1a9")](getPlayerY()) + " Z: " + Math.floor(getPlayerZ()) / 8), noslowdown && Utils[_0x14ae("0x79")][_0x14ae("0x1fb")]() && Block[_0x14ae("0xc7")](88, .4), noslowdown && Utils.Player.isOnCobweb() && Block[_0x14ae("0xc7")](30, .4), liquidhover && Utils[_0x14ae("0x79")][_0x14ae("0x1fc")]() && setVelY(getPlayerEnt(), 0), dolphin && Utils[_0x14ae("0x79")][_0x14ae("0x1fd")]() && (setVelX(getPlayerEnt(), Entity[_0x14ae("0x1d6")](getPlayerEnt()) * dolphinspeedvalue), setVelY(getPlayerEnt(), .1), setVelZ(getPlayerEnt(), Entity[_0x14ae("0x1d7")](getPlayerEnt()) * dolphinspeedvalue)), autosword && null != getNearestEntity(autoswordrange) && 276 == Player[_0x14ae("0x1fe")](0) && selectDiamondSword && Player[_0x14ae("0x1ff")](0), autosword && null != getNearestEntity(autoswordrange) && 276 == Player[_0x14ae("0x1fe")](1) && selectDiamondSword && Player[_0x14ae("0x1ff")](1), autosword && null != getNearestEntity(autoswordrange) && 276 == Player[_0x14ae("0x1fe")](2) && selectDiamondSword && Player[_0x14ae("0x1ff")](2), autosword && null != getNearestEntity(autoswordrange) && 276 == Player[_0x14ae("0x1fe")](3) && selectDiamondSword && Player[_0x14ae("0x1ff")](3), autosword && null != getNearestEntity(autoswordrange) && 276 == Player.getInventorySlot(4) && selectDiamondSword && Player[_0x14ae("0x1ff")](4), autosword && null != getNearestEntity(autoswordrange) && 276 == Player[_0x14ae("0x1fe")](5) && selectDiamondSword && Player.setSelectedSlotId(5), autosword && null != getNearestEntity(autoswordrange) && 276 == Player[_0x14ae("0x1fe")](6) && selectDiamondSword && Player[_0x14ae("0x1ff")](6), autosword && null != getNearestEntity(autoswordrange) && 276 == Player[_0x14ae("0x1fe")](7) && selectDiamondSword && Player[_0x14ae("0x1ff")](7), autosword && null != getNearestEntity(autoswordrange) && 276 == Player.getInventorySlot(8) && selectDiamondSword && Player[_0x14ae("0x1ff")](8), autosword && null != getNearestEntity(autoswordrange) && 283 == Player[_0x14ae("0x1fe")](0) && selectGoldSword && Player.setSelectedSlotId(0), autosword && null != getNearestEntity(autoswordrange) && 283 == Player[_0x14ae("0x1fe")](1) && selectGoldSword && Player[_0x14ae("0x1ff")](1), autosword && null != getNearestEntity(autoswordrange) && 283 == Player[_0x14ae("0x1fe")](2) && selectGoldSword && Player[_0x14ae("0x1ff")](2), autosword && null != getNearestEntity(autoswordrange) && 283 == Player[_0x14ae("0x1fe")](3) && selectGoldSword && Player[_0x14ae("0x1ff")](3), autosword && null != getNearestEntity(autoswordrange) && 283 == Player[_0x14ae("0x1fe")](4) && selectGoldSword && Player[_0x14ae("0x1ff")](4), autosword && null != getNearestEntity(autoswordrange) && 283 == Player[_0x14ae("0x1fe")](5) && selectGoldSword && Player[_0x14ae("0x1ff")](5), autosword && null != getNearestEntity(autoswordrange) && 283 == Player[_0x14ae("0x1fe")](6) && selectGoldSword && Player[_0x14ae("0x1ff")](6), autosword && null != getNearestEntity(autoswordrange) && 283 == Player[_0x14ae("0x1fe")](7) && selectGoldSword && Player.setSelectedSlotId(7), autosword && null != getNearestEntity(autoswordrange) && 283 == Player[_0x14ae("0x1fe")](8) && selectGoldSword && Player[_0x14ae("0x1ff")](8), autosword && null != getNearestEntity(autoswordrange) && 267 == Player.getInventorySlot(0) && selectIronSword && Player[_0x14ae("0x1ff")](0), autosword && null != getNearestEntity(autoswordrange) && 267 == Player[_0x14ae("0x1fe")](1) && selectIronSword && Player[_0x14ae("0x1ff")](1), autosword && null != getNearestEntity(autoswordrange) && 267 == Player.getInventorySlot(2) && selectIronSword && Player[_0x14ae("0x1ff")](2), autosword && null != getNearestEntity(autoswordrange) && 267 == Player[_0x14ae("0x1fe")](3) && selectIronSword && Player.setSelectedSlotId(3), autosword && null != getNearestEntity(autoswordrange) && 267 == Player[_0x14ae("0x1fe")](4) && selectIronSword && Player[_0x14ae("0x1ff")](4), autosword && null != getNearestEntity(autoswordrange) && 267 == Player.getInventorySlot(5) && selectIronSword && Player.setSelectedSlotId(5), autosword && null != getNearestEntity(autoswordrange) && 267 == Player[_0x14ae("0x1fe")](6) && selectIronSword && Player[_0x14ae("0x1ff")](6), autosword && null != getNearestEntity(autoswordrange) && 267 == Player[_0x14ae("0x1fe")](7) && selectIronSword && Player[_0x14ae("0x1ff")](7), autosword && null != getNearestEntity(autoswordrange) && 267 == Player.getInventorySlot(8) && selectIronSword && Player[_0x14ae("0x1ff")](8), autosword && null != getNearestEntity(autoswordrange) && 272 == Player[_0x14ae("0x1fe")](0) && selectStoneSword && Player[_0x14ae("0x1ff")](0), autosword && null != getNearestEntity(autoswordrange) && 272 == Player[_0x14ae("0x1fe")](1) && selectStoneSword && Player[_0x14ae("0x1ff")](1), autosword && null != getNearestEntity(autoswordrange) && 272 == Player[_0x14ae("0x1fe")](2) && selectStoneSword && Player[_0x14ae("0x1ff")](2), autosword && null != getNearestEntity(autoswordrange) && 272 == Player.getInventorySlot(3) && selectStoneSword && Player.setSelectedSlotId(3), autosword && null != getNearestEntity(autoswordrange) && 272 == Player.getInventorySlot(4) && selectStoneSword && Player[_0x14ae("0x1ff")](4), autosword && null != getNearestEntity(autoswordrange) && 272 == Player[_0x14ae("0x1fe")](5) && selectStoneSword && Player[_0x14ae("0x1ff")](5), autosword && null != getNearestEntity(autoswordrange) && 272 == Player[_0x14ae("0x1fe")](6) && selectStoneSword && Player.setSelectedSlotId(6), autosword && null != getNearestEntity(autoswordrange) && 272 == Player[_0x14ae("0x1fe")](7) && selectStoneSword && Player[_0x14ae("0x1ff")](7), autosword && null != getNearestEntity(autoswordrange) && 272 == Player.getInventorySlot(8) && selectStoneSword && Player[_0x14ae("0x1ff")](8), autosword && null != getNearestEntity(autoswordrange) && 268 == Player[_0x14ae("0x1fe")](0) && selectWoodenSword && Player.setSelectedSlotId(0), autosword && null != getNearestEntity(autoswordrange) && 268 == Player[_0x14ae("0x1fe")](1) && selectWoodenSword && Player[_0x14ae("0x1ff")](1), autosword && null != getNearestEntity(autoswordrange) && 268 == Player[_0x14ae("0x1fe")](2) && selectWoodenSword && Player[_0x14ae("0x1ff")](2), autosword && null != getNearestEntity(autoswordrange) && 268 == Player[_0x14ae("0x1fe")](3) && selectWoodenSword && Player[_0x14ae("0x1ff")](3), autosword && null != getNearestEntity(autoswordrange) && 268 == Player[_0x14ae("0x1fe")](4) && selectWoodenSword && Player.setSelectedSlotId(4), autosword && null != getNearestEntity(autoswordrange) && 268 == Player[_0x14ae("0x1fe")](5) && selectWoodenSword && Player[_0x14ae("0x1ff")](5), autosword && null != getNearestEntity(autoswordrange) && 268 == Player[_0x14ae("0x1fe")](6) && selectWoodenSword && Player[_0x14ae("0x1ff")](6), autosword && null != getNearestEntity(autoswordrange) && 268 == Player[_0x14ae("0x1fe")](7) && selectWoodenSword && Player[_0x14ae("0x1ff")](7), autosword && null != getNearestEntity(autoswordrange) && 268 == Player[_0x14ae("0x1fe")](8) && selectWoodenSword && Player[_0x14ae("0x1ff")](8), antikb && health != Entity[_0x14ae("0x15")](getPlayerEnt()) && (Entity[_0x14ae("0x200")](getPlayerEnt(), !0), attacked = !0), longjump && .2 < Entity[_0x14ae("0x1d3")](getPlayerEnt())) && (toDirectionalVector(g = [0, 0, 0], (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -0, 1), setVelX(getPlayerEnt(), longjumpvalue * g[0]), setVelZ(getPlayerEnt(), longjumpvalue * g[2]));
    if (bypassglide) {
        r = Math[_0x14ae("0x1a9")](Player[_0x14ae("0x19e")]()), d = Math[_0x14ae("0x1a9")](Player.getY()), l = Math[_0x14ae("0x1a9")](Player[_0x14ae("0x1a3")]());
        if (0 == getTile(r, d, l)) var g = [0, 0, 0];
        toDirectionalVector(g, (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -0, 1), setVelX(getPlayerEnt(), 1.2 * g[0]), setVelZ(getPlayerEnt(), 1.2 * g[2]), Entity[_0x14ae("0x201")](getPlayerEnt(), -.2), upboost = !0
    }
}

function useItem(e, a, x, t, n, o, i, _) {
    if (tapteleport && 0 == getTile(e, a + 1, x) && 0 == getTile(e, a + 2, x) && Entity[_0x14ae("0x202")](Player.getEntity(), e + .5, a + 2.63, x + .5), tower && setVelY(getPlayerEnt(), towervalue), tapdestroy && (setTile(e, a, x, 0), setTile(e, a, x, 0), setTile(e, a, x, 0)), infinitereach && Entity[_0x14ae("0x1a1")](getNearestEntity(infinitereachvalue)) == EntityType[_0x14ae("0x1db")]) {
        lastX = Math[_0x14ae("0x1a9")](Player[_0x14ae("0x19e")]()), lastY = Math[_0x14ae("0x1a9")](Player.getY()), lastZ = Math[_0x14ae("0x1a9")](Player[_0x14ae("0x1a3")]());
        var r = getNearestEntity(infinitereachvalue);
        setPosition(getPlayerEnt(), Entity.getX(r) + 1, Entity[_0x14ae("0x73")](r) + 1, Entity.getZ(r) + 1), lastLocation = !0
    }
    if (scaffold && 0 != t) {
        var d = [0, 0, 0];
        toDirectionalVector(d, (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -0, 1), setVelX(getPlayerEnt(), .4 * d[0]), setVelZ(getPlayerEnt(), .4 * d[2])
    }
}

function brightoresfunc() {
    Block.setRenderLayer(1, 1), Block.setRenderLayer(2, 1), Block[_0x14ae("0x152")](3, 1), Block[_0x14ae("0x152")](4, 1), Block[_0x14ae("0x152")](5, 1), Block.setRenderLayer(6, 1), Block[_0x14ae("0x152")](7, 1), Block[_0x14ae("0x152")](8, 1), Block[_0x14ae("0x152")](9, 1), Block[_0x14ae("0x152")](10, 1), Block.setRenderLayer(11, 1), Block[_0x14ae("0x152")](12, 1), Block[_0x14ae("0x152")](13, 1), Block.setRenderLayer(17, 1), Block.setRenderLayer(18, 1), Block.setRenderLayer(19, 1), Block.setRenderLayer(20, 1), Block[_0x14ae("0x152")](22, 1), Block[_0x14ae("0x152")](23, 1), Block.setRenderLayer(24, 1), Block[_0x14ae("0x152")](25, 1), Block[_0x14ae("0x152")](26, 1), Block[_0x14ae("0x152")](27, 1), Block[_0x14ae("0x152")](28, 1), Block.setRenderLayer(29, 1), Block.setRenderLayer(30, 1), Block[_0x14ae("0x152")](31, 1), Block[_0x14ae("0x152")](32, 1), Block[_0x14ae("0x152")](33, 1), Block[_0x14ae("0x152")](34, 1), Block[_0x14ae("0x152")](35, 1), Block[_0x14ae("0x152")](36, 1), Block[_0x14ae("0x152")](37, 1), Block[_0x14ae("0x152")](38, 1), Block[_0x14ae("0x152")](39, 1), Block.setRenderLayer(40, 1), Block[_0x14ae("0x152")](41, 1), Block[_0x14ae("0x152")](42, 1), Block.setRenderLayer(43, 1), Block[_0x14ae("0x152")](44, 1), Block[_0x14ae("0x152")](45, 1), Block.setRenderLayer(46, 1), Block[_0x14ae("0x152")](47, 1), Block[_0x14ae("0x152")](48, 1), Block[_0x14ae("0x152")](49, 1), Block[_0x14ae("0x152")](50, 1), Block[_0x14ae("0x152")](51, 1), Block[_0x14ae("0x152")](52, 1), Block[_0x14ae("0x152")](53, 1), Block.setRenderLayer(54, 1), Block[_0x14ae("0x152")](55, 1), Block[_0x14ae("0x152")](57, 1), Block[_0x14ae("0x152")](58, 1), Block[_0x14ae("0x152")](59, 1), Block[_0x14ae("0x152")](60, 1), Block[_0x14ae("0x152")](61, 1), Block[_0x14ae("0x152")](62, 1), Block[_0x14ae("0x152")](63, 1), Block[_0x14ae("0x152")](64, 1), Block[_0x14ae("0x152")](65, 1), Block[_0x14ae("0x152")](66, 1), Block[_0x14ae("0x152")](67, 1), Block.setRenderLayer(68, 1), Block[_0x14ae("0x152")](69, 1), Block[_0x14ae("0x152")](70, 1), Block[_0x14ae("0x152")](71, 1), Block[_0x14ae("0x152")](72, 1), Block[_0x14ae("0x152")](75, 1), Block[_0x14ae("0x152")](76, 1), Block[_0x14ae("0x152")](77, 1), Block[_0x14ae("0x152")](78, 1), Block.setRenderLayer(79, 1), Block[_0x14ae("0x152")](80, 1), Block[_0x14ae("0x152")](81, 1), Block[_0x14ae("0x152")](82, 1), Block[_0x14ae("0x152")](83, 1), Block.setRenderLayer(84, 1), Block.setRenderLayer(85, 1), Block[_0x14ae("0x152")](86, 1), Block.setRenderLayer(87, 1), Block.setRenderLayer(88, 1), Block[_0x14ae("0x152")](89, 1), Block[_0x14ae("0x152")](90, 1), Block.setRenderLayer(91, 1), Block[_0x14ae("0x152")](92, 1), Block[_0x14ae("0x152")](93, 1), Block.setRenderLayer(94, 1), Block[_0x14ae("0x152")](95, 1), Block[_0x14ae("0x152")](96, 1), Block[_0x14ae("0x152")](97, 1), Block[_0x14ae("0x152")](98, 1), Block.setRenderLayer(99, 1), Block[_0x14ae("0x152")](100, 1), Block[_0x14ae("0x152")](101, 1), Block[_0x14ae("0x152")](102, 1), Block[_0x14ae("0x152")](103, 1), Block[_0x14ae("0x152")](104, 1), Block[_0x14ae("0x152")](105, 1), Block[_0x14ae("0x152")](106, 1), Block[_0x14ae("0x152")](107, 1), Block[_0x14ae("0x152")](108, 1), Block[_0x14ae("0x152")](109, 1), Block[_0x14ae("0x152")](110, 1), Block[_0x14ae("0x152")](111, 1), Block.setRenderLayer(112, 1), Block[_0x14ae("0x152")](113, 1), Block[_0x14ae("0x152")](114, 1), Block[_0x14ae("0x152")](115, 1), Block[_0x14ae("0x152")](117, 1), Block.setRenderLayer(118, 1), Block[_0x14ae("0x152")](119, 1), Block[_0x14ae("0x152")](120, 1), Block[_0x14ae("0x152")](121, 1), Block[_0x14ae("0x152")](122, 1), Block.setRenderLayer(123, 1), Block.setRenderLayer(124, 1), Block[_0x14ae("0x152")](125, 1), Block[_0x14ae("0x152")](126, 1), Block.setRenderLayer(127, 1), Block[_0x14ae("0x152")](128, 1), Block[_0x14ae("0x152")](130, 1), Block[_0x14ae("0x152")](131, 1), Block[_0x14ae("0x152")](132, 1), Block.setRenderLayer(133, 1), Block[_0x14ae("0x152")](134, 1), Block[_0x14ae("0x152")](135, 1), Block[_0x14ae("0x152")](136, 1), Block[_0x14ae("0x152")](137, 1), Block[_0x14ae("0x152")](138, 1), Block.setRenderLayer(139, 1), Block[_0x14ae("0x152")](140, 1), Block[_0x14ae("0x152")](141, 1), Block[_0x14ae("0x153")](14, 15), Block[_0x14ae("0x152")](14, 0), Block.setLightLevel(15, 15), Block.setRenderLayer(15, 0), Block[_0x14ae("0x153")](16, 15), Block[_0x14ae("0x152")](16, 0), Block[_0x14ae("0x153")](21, 15), Block[_0x14ae("0x152")](21, 0), Block[_0x14ae("0x153")](56, 15), Block.setRenderLayer(56, 0), Block[_0x14ae("0x153")](73, 15), Block[_0x14ae("0x152")](73, 0), Block[_0x14ae("0x153")](74, 15), Block[_0x14ae("0x152")](74, 0), Block[_0x14ae("0x153")](129, 15), Block.setRenderLayer(129, 0)
}

function HBDelay() {
    ctx[_0x14ae("0x42")](new(java[_0x14ae("0x22")][_0x14ae("0x23")])({
        run: function() {
            (new(android.os[_0x14ae("0x203")]))[_0x14ae("0x204")](new(java[_0x14ae("0x22")].Runnable)({
                run: function() {
                    hb && (ent = getNearestEntity(30), Entity[_0x14ae("0x66")](ent, hbwidth, hbheight)), eval(HBDelay())
                }
            }), 500)
        }
    }))
}

function spamdelay() {
    ctx[_0x14ae("0x42")](new(java[_0x14ae("0x22")][_0x14ae("0x23")])({
        run: function() {
            (new(android.os[_0x14ae("0x203")]))[_0x14ae("0x204")](new(java.lang[_0x14ae("0x23")])({
                run: function() {
                    cuspam && Server[_0x14ae("0x6d")](say), eval(spamdelay())
                }
            }), spamdelayTick)
        }
    }))
}

function raspamdelay() {
    ctx[_0x14ae("0x42")](new(java[_0x14ae("0x22")][_0x14ae("0x23")])({
        run: function() {
            (new(android.os[_0x14ae("0x203")]))[_0x14ae("0x204")](new(java.lang[_0x14ae("0x23")])({
                run: function() {
                    raspam && (Server[_0x14ae("0x6d")](Math[_0x14ae("0x1aa")](421842 * Math[_0x14ae("0x1ae")]() * Math[_0x14ae("0x1ae")]()) + " " + curaspamvalue + " " + Math[_0x14ae("0x1aa")](421842 * Math[_0x14ae("0x1ae")]() * Math[_0x14ae("0x1ae")]())), Server[_0x14ae("0x6d")](Math[_0x14ae("0x1aa")](421842 * Math[_0x14ae("0x1ae")]() * Math.random()) + " " + curaspamvalue + " " + Math.round(421842 * Math.random() * Math[_0x14ae("0x1ae")]())), Server[_0x14ae("0x6d")](Math[_0x14ae("0x1aa")](421842 * Math[_0x14ae("0x1ae")]() * Math[_0x14ae("0x1ae")]()) + " " + curaspamvalue + " " + Math[_0x14ae("0x1aa")](421842 * Math[_0x14ae("0x1ae")]() * Math[_0x14ae("0x1ae")]())), Server[_0x14ae("0x6d")](Math[_0x14ae("0x1aa")](421842 * Math[_0x14ae("0x1ae")]() * Math.random()) + " " + curaspamvalue + " " + Math[_0x14ae("0x1aa")](421842 * Math.random() * Math[_0x14ae("0x1ae")]()))), eval(raspamdelay())
                }
            }), raspamdelayTick)
        }
    }))
}

function stspamdelay() {
    ctx[_0x14ae("0x42")](new(java[_0x14ae("0x22")][_0x14ae("0x23")])({
        run: function() {
            (new android.os.Handler)[_0x14ae("0x204")](new(java[_0x14ae("0x22")].Runnable)({
                run: function() {
                    stspam && Server[_0x14ae("0x6d")](_0x14ae("0x205") + tell + " " + tell1), eval(stspamdelay())
                }
            }), stspamdelayTick)
        }
    }))
}

function antilagmodules1() {
    ctx.runOnUiThread(new(java[_0x14ae("0x22")].Runnable)({
        run: function() {
            (new(android.os[_0x14ae("0x203")]))[_0x14ae("0x204")](new(java[_0x14ae("0x22")][_0x14ae("0x23")])({
                run: function() {
                    speed && Utils[_0x14ae("0x79")][_0x14ae("0x1d8")]() && (setVelX(getPlayerEnt(), Entity[_0x14ae("0x1d6")](getPlayerEnt()) * speedvalue), setVelZ(getPlayerEnt(), Entity[_0x14ae("0x1d7")](getPlayerEnt()) * speedvalue), speed = !1, speed = !1, speed = !1, speed = !1, speed = !0), eval(antilagmodules1())
                }
            }), 250)
        }
    }))
}

function antilagmodules2() {
    ctx[_0x14ae("0x42")](new(java[_0x14ae("0x22")].Runnable)({
        run: function() {
            (new(android.os[_0x14ae("0x203")])).postDelayed(new(java[_0x14ae("0x22")][_0x14ae("0x23")])({
                run: function() {
                    lastLocation && (setPosition(getPlayerEnt(), lastX, lastY + .5, lastZ), lastLocation = !1), fastEat && (setFoodItem(364, eatTick, 8), setFoodItem(366, eatTick, 6), setFoodItem(350, eatTick, 5), setFoodItem(320, eatTick, 8), setFoodItem(412, eatTick, 5), setFoodItem(350, eatTick, 6), setFoodItem(424, eatTick, 6), setFoodItem(260, eatTick, 4), setFoodItem(322, eatTick, 4), setFoodItem(466, eatTick, 4), setFoodItem(413, eatTick, 10), setFoodItem(392, eatTick, 1), setFoodItem(393, eatTick, 5), setFoodItem(391, eatTick, 3), setFoodItem(396, eatTick, 6), setFoodItem(395, eatTick, 5), setFoodItem(297, eatTick, 5), setFoodItem(400, eatTick, 8), setFoodItem(363, eatTick, 3), setFoodItem(365, eatTick, 2), setFoodItem(349, eatTick, 2), setFoodItem(423, eatTick, 2), setFoodItem(319, eatTick, 3), setFoodItem(411, eatTick, 3), setFoodItem(349, eatTick, 2)), eval(antilagmodules2())
                }
            }), 300)
        }
    }))
}

function antikbfunc() {
    ctx[_0x14ae("0x42")](new(java[_0x14ae("0x22")][_0x14ae("0x23")])({
        run: function() {
            (new(android.os[_0x14ae("0x203")]))[_0x14ae("0x204")](new(java[_0x14ae("0x22")][_0x14ae("0x23")])({
                run: function() {
                    attacked && (Entity[_0x14ae("0x200")](getPlayerEnt(), !1), attacked = !1, health = Entity[_0x14ae("0x15")](getPlayerEnt())), eval(antikbfunc())
                }
            }), 250)
        }
    }))
}

function bypassglideFunc() {
    ctx[_0x14ae("0x42")](new(java[_0x14ae("0x22")][_0x14ae("0x23")])({
        run: function() {
            (new(android.os[_0x14ae("0x203")]))[_0x14ae("0x204")](new(java.lang[_0x14ae("0x23")])({
                run: function() {
                    upboost && (setPosition(getPlayerEnt(), Player.getX() + 2, Player[_0x14ae("0x73")]() + 2, Player[_0x14ae("0x1a3")]() + 2), upboost = !1), eval(bypassglideFunc())
                }
            }), 1e3)
        }
    }))
}

function cuspamMenu() {
    ctx[_0x14ae("0x42")](new(java[_0x14ae("0x22")][_0x14ae("0x23")])({
        run: function() {
            try {
                var a = new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx),
                    e = (new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx), new(android[_0x14ae("0x24")][_0x14ae("0x25")])(ctx)),
                    x = new(android.widget[_0x14ae("0x2a")])(ctx),
                    t = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx),
                    n = new(android.widget[_0x14ae("0x208")])(ctx),
                    o = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx),
                    i = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx),
                    _ = 0;
                x.setHint(_0x14ae("0xa")), x.setInputType(android[_0x14ae("0x209")].InputType[_0x14ae("0x20a")]), t.setText(_0x14ae("0x12a")), t[_0x14ae("0x81")](cuspam), o[_0x14ae("0x44")](_0x14ae("0x20b")), i[_0x14ae("0x44")](_0x14ae("0x20c")), a[_0x14ae("0x20d")](_0x14ae("0x17c")), e[_0x14ae("0x43")](android[_0x14ae("0x24")][_0x14ae("0x25")][_0x14ae("0x20e")]), e[_0x14ae("0x4a")](x), e[_0x14ae("0x4a")](t), e[_0x14ae("0x4a")](n), e[_0x14ae("0x4a")](o), e[_0x14ae("0x4a")](i), a[_0x14ae("0x20f")](e), t[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        cuspam ? (cuspam = !1, clientMessage(_0x14ae("0x13d"))) : (cuspam = !0, clientMessage(_0x14ae("0x13c")))
                    }
                })), n[_0x14ae("0x210")](5), n[_0x14ae("0x211")](_), n[_0x14ae("0x212")](new(android[_0x14ae("0x24")][_0x14ae("0x208")].OnSeekBarChangeListener)({
                    onStopTrackingTouch: function(e) {
                        1 == (_ = n.getProgress()) && (spamdelayTick = 200, clientMessage(_0x14ae("0x213"))), 2 == _ && (spamdelayTick = 400, clientMessage("§bOperatorClient§f: Spam delay set to 400 milliseconds")), 3 == _ && (spamdelayTick = 600, clientMessage(_0x14ae("0x214"))), 4 == _ && (spamdelayTick = 800, clientMessage(_0x14ae("0x215"))), 5 == _ && (spamdelayTick = 1e3, clientMessage(_0x14ae("0x216"))), 6 == _ && (spamdelayTick = 2e3, clientMessage("§bOperatorClient§f: Spam delay set to 2000 milliseconds"))
                    }
                })), o[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        say = x[_0x14ae("0x217")](), a[_0x14ae("0x57")]()
                    }
                })), i[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        a[_0x14ae("0x57")]()
                    }
                })), a[_0x14ae("0x65")]()
            } catch (e) {
                for (var r = 30; 1 < r; r--) print("" + e)
            }
        }
    }))
}

function curaspamMenu() {
    ctx[_0x14ae("0x42")](new(java[_0x14ae("0x22")][_0x14ae("0x23")])({
        run: function() {
            try {
                var a = new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx),
                    e = (new(android[_0x14ae("0x206")].Dialog)(ctx), new(android[_0x14ae("0x24")][_0x14ae("0x25")])(ctx)),
                    x = new(android[_0x14ae("0x24")][_0x14ae("0x2a")])(ctx),
                    t = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx),
                    n = new(android.widget[_0x14ae("0x208")])(ctx),
                    o = new android.widget.Button(ctx),
                    i = new(android[_0x14ae("0x24")].Button)(ctx),
                    _ = 0;
                x[_0x14ae("0x218")](_0x14ae("0xa")), x[_0x14ae("0x219")](android[_0x14ae("0x209")][_0x14ae("0x21a")][_0x14ae("0x20a")]), t[_0x14ae("0x44")](_0x14ae("0x138")), t[_0x14ae("0x81")](raspam), o.setText(_0x14ae("0x20b")), i[_0x14ae("0x44")](_0x14ae("0x20c")), a.setTitle("Random Spam Settings"), e[_0x14ae("0x43")](android.widget.LinearLayout[_0x14ae("0x20e")]), e[_0x14ae("0x4a")](x), e[_0x14ae("0x4a")](t), e.addView(n), e.addView(o), e[_0x14ae("0x4a")](i), a.setContentView(e), t[_0x14ae("0x55")](new(android.view[_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        raspam ? (raspam = !1, clientMessage(_0x14ae("0x13a"))) : (raspam = !0, clientMessage(_0x14ae("0x139")))
                    }
                })), n[_0x14ae("0x210")](5), n.setProgress(_), n[_0x14ae("0x212")](new(android.widget[_0x14ae("0x208")][_0x14ae("0x21b")])({
                    onStopTrackingTouch: function(e) {
                        1 == (_ = n[_0x14ae("0x21c")]()) && (raspamdelayTick = 200, clientMessage(_0x14ae("0x21d"))), 2 == _ && (raspamdelayTick = 400, clientMessage(_0x14ae("0x21e"))), 3 == _ && (raspamdelayTick = 600, clientMessage(_0x14ae("0x21f"))), 4 == _ && (raspamdelayTick = 800, clientMessage(_0x14ae("0x220"))), 5 == _ && (raspamdelayTick = 1e3, clientMessage(_0x14ae("0x221"))), 6 == _ && (raspamdelayTick = 2e3, clientMessage(_0x14ae("0x222")))
                    }
                })), o[_0x14ae("0x55")](new(android[_0x14ae("0x27")].View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        curaspamvalue = x[_0x14ae("0x217")](), a[_0x14ae("0x57")]()
                    }
                })), i.setOnClickListener(new(android.view[_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        a[_0x14ae("0x57")]()
                    }
                })), a.show()
            } catch (e) {
                for (var r = 30; 1 < r; r--) print("" + e)
            }
        }
    }))
}

function hitboxMainMenu() {
    ctx.runOnUiThread(new(java[_0x14ae("0x22")][_0x14ae("0x23")])({
        run: function() {
            try {
                var a = new(android[_0x14ae("0x206")].Dialog)(ctx),
                    e = (new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx), new(android.widget[_0x14ae("0x25")])(ctx)),
                    x = new(android[_0x14ae("0x24")][_0x14ae("0x2a")])(ctx),
                    t = new(android.widget[_0x14ae("0x2a")])(ctx),
                    n = new(android.widget[_0x14ae("0x7f")])(ctx),
                    o = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx),
                    i = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx),
                    _ = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx);
                x[_0x14ae("0x218")](_0x14ae("0x223")), x.setInputType(android[_0x14ae("0x209")][_0x14ae("0x21a")][_0x14ae("0x20a")]), t.setHint(_0x14ae("0x224")), t[_0x14ae("0x219")](android[_0x14ae("0x209")][_0x14ae("0x21a")].TYPE_CLASS_TEXT), n[_0x14ae("0x44")](_0x14ae("0x87")), n[_0x14ae("0x81")](hb), o[_0x14ae("0x44")](_0x14ae("0x165")), o.setChecked(hitboxkeybindbtn1), i[_0x14ae("0x44")](_0x14ae("0x20b")), _[_0x14ae("0x44")](_0x14ae("0x20c")), a[_0x14ae("0x20d")](_0x14ae("0x225")), e.setOrientation(android.widget.LinearLayout[_0x14ae("0x20e")]), e.addView(x), e[_0x14ae("0x4a")](t), e[_0x14ae("0x4a")](n), e[_0x14ae("0x4a")](o), e[_0x14ae("0x4a")](i), e[_0x14ae("0x4a")](_), a[_0x14ae("0x20f")](e), n[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        if (hb) {
                            hb = !1;
                            var a = getNearestEntity(50);
                            Entity[_0x14ae("0x66")](a, 1, 1.5), clientMessage(_0x14ae("0x89"))
                        } else hb = !0, clientMessage(_0x14ae("0x88"))
                    }
                })), o[_0x14ae("0x162")](new(android[_0x14ae("0x24")][_0x14ae("0x163")][_0x14ae("0x164")])({
                    onCheckedChanged: function() {
                        hitboxkeybindbtn1 ? (GUIhb[_0x14ae("0x57")](), hitboxkeybindbtn1 = hitboxkeybindbtn0 = !1) : (showHitboxBtn(), hitboxkeybindbtn1 = hitboxkeybindbtn0 = !0)
                    }
                })), i[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        hbwidth = x[_0x14ae("0x217")](), hbheight = t.getText(), a[_0x14ae("0x57")]()
                    }
                })), _[_0x14ae("0x55")](new(android.view[_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        a[_0x14ae("0x57")]()
                    }
                })), a[_0x14ae("0x65")]()
            } catch (e) {
                for (var r = 30; 1 < r; r--) print("" + e)
            }
        }
    }))
}

function aimbotMainMenu() {
    ctx[_0x14ae("0x42")](new(java[_0x14ae("0x22")][_0x14ae("0x23")])({
        run: function() {
            try {
                var a = new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx),
                    e = (new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx), new android.widget.LinearLayout(ctx)),
                    x = new android.widget.EditText(ctx),
                    t = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx),
                    n = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx),
                    o = new(android.widget[_0x14ae("0x26")])(ctx),
                    i = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx);
                x.setHint("Range"), x[_0x14ae("0x219")](android[_0x14ae("0x209")][_0x14ae("0x21a")].TYPE_CLASS_TEXT), t.setText("Aimbot"), t[_0x14ae("0x81")](aimbot), n[_0x14ae("0x44")](_0x14ae("0x161")), n[_0x14ae("0x81")](aimkeybindbtn1), o[_0x14ae("0x44")](_0x14ae("0x20b")), i[_0x14ae("0x44")](_0x14ae("0x20c")), a[_0x14ae("0x20d")](_0x14ae("0x226")), e[_0x14ae("0x43")](android[_0x14ae("0x24")][_0x14ae("0x25")][_0x14ae("0x20e")]), e[_0x14ae("0x4a")](x), e[_0x14ae("0x4a")](t), e[_0x14ae("0x4a")](n), e[_0x14ae("0x4a")](o), e[_0x14ae("0x4a")](i), a[_0x14ae("0x20f")](e), n[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        aimkeybindbtn1 ? (GUIaim[_0x14ae("0x57")](), aimkeybindbtn1 = aimkeybindbtn0 = !1) : (showAimBtn(), aimkeybindbtn1 = aimkeybindbtn0 = !0)
                    }
                })), t[_0x14ae("0x55")](new(android.view[_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        aimbot ? (aimbot = !1, clientMessage("§bOperatorClient§f: Aimbot Disabled!")) : (aimbot = !0, clientMessage(_0x14ae("0x82")))
                    }
                })), o[_0x14ae("0x55")](new(android[_0x14ae("0x27")].View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        aimbotrange = x.getText(), a.dismiss()
                    }
                })), i[_0x14ae("0x55")](new(android[_0x14ae("0x27")].View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        a.dismiss()
                    }
                })), a.show()
            } catch (e) {
                for (var _ = 30; 1 < _; _--) print("" + e)
            }
        }
    }))
}

function chatbindMainMenu() {
    ctx[_0x14ae("0x42")](new(java[_0x14ae("0x22")][_0x14ae("0x23")])({
        run: function() {
            try {
                var a = new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx),
                    e = (new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx), new(android[_0x14ae("0x24")].LinearLayout)(ctx)),
                    x = new(android[_0x14ae("0x24")][_0x14ae("0x2a")])(ctx),
                    t = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx),
                    n = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx),
                    o = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx);
                x[_0x14ae("0x218")](_0x14ae("0x227")), x[_0x14ae("0x219")](android[_0x14ae("0x209")][_0x14ae("0x21a")][_0x14ae("0x20a")]), t[_0x14ae("0x44")](_0x14ae("0x228")), t[_0x14ae("0x81")](cbindkeybind1), n[_0x14ae("0x44")](_0x14ae("0x20b")), o[_0x14ae("0x44")](_0x14ae("0x20c")), a[_0x14ae("0x20d")](_0x14ae("0x175")), e[_0x14ae("0x43")](android[_0x14ae("0x24")][_0x14ae("0x25")][_0x14ae("0x20e")]), e[_0x14ae("0x4a")](x), e[_0x14ae("0x4a")](t), e[_0x14ae("0x4a")](n), e[_0x14ae("0x4a")](o), a.setContentView(e), t.setOnClickListener(new(android.view[_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        cbindkeybind1 ? (cbindkeybind0 = cbindkeybind1 = !1, GUIcBind[_0x14ae("0x57")]()) : (showcBindBtn(), cbindkeybind0 = cbindkeybind1 = !0)
                    }
                })), n[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        cb1 = x[_0x14ae("0x217")](), a[_0x14ae("0x57")]()
                    }
                })), o[_0x14ae("0x55")](new(android.view[_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        a[_0x14ae("0x57")]()
                    }
                })), a[_0x14ae("0x65")]()
            } catch (e) {
                for (var i = 30; 1 < i; i--) print("" + e)
            }
        }
    }))
}

function jspeedMainMenu() {
    ctx.runOnUiThread(new(java.lang[_0x14ae("0x23")])({
        run: function() {
            try {
                var a = new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx),
                    e = (new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx), new(android[_0x14ae("0x24")][_0x14ae("0x25")])(ctx)),
                    x = new(android[_0x14ae("0x24")][_0x14ae("0x2a")])(ctx),
                    t = new(android.widget[_0x14ae("0x7f")])(ctx),
                    n = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx),
                    o = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx),
                    i = new(android.widget[_0x14ae("0x26")])(ctx);
                x[_0x14ae("0x218")](_0x14ae("0x229")), x[_0x14ae("0x219")](android.text[_0x14ae("0x21a")][_0x14ae("0x20a")]), t[_0x14ae("0x44")]("Jetpack"), t[_0x14ae("0x81")](jetpack), n[_0x14ae("0x44")](_0x14ae("0x167")), n.setChecked(jetpackkeybind1), o[_0x14ae("0x44")]("Apply"), i[_0x14ae("0x44")](_0x14ae("0x20c")), a.setTitle(_0x14ae("0x171")), e[_0x14ae("0x43")](android[_0x14ae("0x24")][_0x14ae("0x25")][_0x14ae("0x20e")]), e[_0x14ae("0x4a")](x), e[_0x14ae("0x4a")](t), e[_0x14ae("0x4a")](n), e[_0x14ae("0x4a")](o), e[_0x14ae("0x4a")](i), a[_0x14ae("0x20f")](e), t.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        jetpack ? (jetpack = !1, clientMessage(_0x14ae("0xee"))) : (jetpack = !0, clientMessage(_0x14ae("0xed")))
                    }
                })), n.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        jetpackkeybind1 ? (jetpackkeybind0 = jetpackkeybind1 = !1, GUIj[_0x14ae("0x57")]()) : (showJetpackBtn(), jetpackkeybind0 = jetpackkeybind1 = !0)
                    }
                })), o[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        jspeed = x.getText(), a.dismiss()
                    }
                })), i[_0x14ae("0x55")](new(android[_0x14ae("0x27")].View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        a[_0x14ae("0x57")]()
                    }
                })), a[_0x14ae("0x65")]()
            } catch (e) {
                for (var _ = 30; 1 < _; _--) print("" + e)
            }
        }
    }))
}

function bhitMainMenu() {
    ctx.runOnUiThread(new(java[_0x14ae("0x22")][_0x14ae("0x23")])({
        run: function() {
            try {
                var a = new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx),
                    e = (new(android.app[_0x14ae("0x207")])(ctx), new(android[_0x14ae("0x24")][_0x14ae("0x25")])(ctx)),
                    x = new(android.widget[_0x14ae("0x2a")])(ctx),
                    t = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx),
                    n = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx),
                    o = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx);
                x[_0x14ae("0x218")](_0x14ae("0x22a")), x.setInputType(android[_0x14ae("0x209")].InputType[_0x14ae("0x20a")]), t.setText(_0x14ae("0x22b")), t[_0x14ae("0x81")](bhit), n[_0x14ae("0x44")](_0x14ae("0x20b")), o[_0x14ae("0x44")]("Exit"), a[_0x14ae("0x20d")](_0x14ae("0x22c")), e[_0x14ae("0x43")](android[_0x14ae("0x24")][_0x14ae("0x25")][_0x14ae("0x20e")]), e[_0x14ae("0x4a")](x), e[_0x14ae("0x4a")](t), e[_0x14ae("0x4a")](n), e[_0x14ae("0x4a")](o), a.setContentView(e), t[_0x14ae("0x55")](new(android[_0x14ae("0x27")].View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        bhit ? (bhit = !1, clientMessage("§bOperatorClient§f: Boost Hit Disabled!")) : (bhit = !0, clientMessage(_0x14ae("0x22d")))
                    }
                })), n[_0x14ae("0x55")](new(android[_0x14ae("0x27")].View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        bhitvalue = x.getText(), a[_0x14ae("0x57")]()
                    }
                })), o[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        a.dismiss()
                    }
                })), a.show()
            } catch (e) {
                for (var i = 30; 1 < i; i--) print("" + e)
            }
        }
    }))
}

function espeedMainMenu() {
    ctx.runOnUiThread(new(java[_0x14ae("0x22")][_0x14ae("0x23")])({
        run: function() {
            try {
                var a = new android.app.Dialog(ctx),
                    e = (new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx), new(android[_0x14ae("0x24")][_0x14ae("0x25")])(ctx)),
                    x = new(android[_0x14ae("0x24")][_0x14ae("0x2a")])(ctx),
                    t = new(android.widget[_0x14ae("0x7f")])(ctx),
                    n = new(android.widget[_0x14ae("0x26")])(ctx),
                    o = new(android.widget[_0x14ae("0x26")])(ctx);
                x[_0x14ae("0x218")](_0x14ae("0x22e")), x[_0x14ae("0x219")](android.text[_0x14ae("0x21a")][_0x14ae("0x20a")]), t[_0x14ae("0x44")](_0x14ae("0x22f")), t[_0x14ae("0x81")](escapekeybind1), t[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        escapekeybind1 ? (GUIb[_0x14ae("0x57")](), escapekeybind1 = escapekeybind0 = !1) : (showBoostBtn(), escapekeybind1 = escapekeybind0 = !0)
                    }
                })), n[_0x14ae("0x44")]("Apply"), o[_0x14ae("0x44")](_0x14ae("0x20c")), a[_0x14ae("0x20d")](_0x14ae("0x230")), e.setOrientation(android[_0x14ae("0x24")].LinearLayout[_0x14ae("0x20e")]), e[_0x14ae("0x4a")](x), e[_0x14ae("0x4a")](t), e[_0x14ae("0x4a")](n), e[_0x14ae("0x4a")](o), a[_0x14ae("0x20f")](e), n.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        espeed = x.getText(), a[_0x14ae("0x57")]()
                    }
                })), o[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        a[_0x14ae("0x57")]()
                    }
                })), a[_0x14ae("0x65")]()
            } catch (e) {
                for (var i = 30; 1 < i; i--) print("" + e)
            }
        }
    }))
}

function autowalkMainMenu() {
    ctx[_0x14ae("0x42")](new(java[_0x14ae("0x22")][_0x14ae("0x23")])({
        run: function() {
            try {
                var a = new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx),
                    e = (new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx), new(android[_0x14ae("0x24")][_0x14ae("0x25")])(ctx)),
                    x = new(android[_0x14ae("0x24")][_0x14ae("0x2a")])(ctx),
                    t = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx),
                    n = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx),
                    o = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx);
                x[_0x14ae("0x218")](_0x14ae("0x231")), x[_0x14ae("0x219")](android[_0x14ae("0x209")][_0x14ae("0x21a")][_0x14ae("0x20a")]), t[_0x14ae("0x44")](_0x14ae("0x232")), t.setChecked(autowalk), n[_0x14ae("0x44")]("Apply"), o[_0x14ae("0x44")]("Exit"), a.setTitle("Autowalk Settings"), e[_0x14ae("0x43")](android[_0x14ae("0x24")][_0x14ae("0x25")][_0x14ae("0x20e")]), e[_0x14ae("0x4a")](x), e[_0x14ae("0x4a")](t), e.addView(n), e.addView(o), a[_0x14ae("0x20f")](e), t[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        autowalk ? (autowalk = !1, clientMessage(_0x14ae("0xd0"))) : (autowalk = !0, clientMessage(_0x14ae("0xcf")))
                    }
                })), n.setOnClickListener(new(android.view[_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        autowalkvalue = x[_0x14ae("0x217")](), a[_0x14ae("0x57")]()
                    }
                })), o[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        a[_0x14ae("0x57")]()
                    }
                })), a[_0x14ae("0x65")]()
            } catch (e) {
                for (var i = 30; 1 < i; i--) print("" + e)
            }
        }
    }))
}

function lowhealthactionMainMenu() {
    ctx[_0x14ae("0x42")](new(java[_0x14ae("0x22")][_0x14ae("0x23")])({
        run: function() {
            try {
                var a = new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx),
                    e = (new(android[_0x14ae("0x206")].Dialog)(ctx), new(android[_0x14ae("0x24")][_0x14ae("0x25")])(ctx)),
                    x = new(android.widget[_0x14ae("0x2a")])(ctx),
                    t = new(android[_0x14ae("0x24")][_0x14ae("0x2a")])(ctx),
                    n = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx),
                    o = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx),
                    i = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx);
                x[_0x14ae("0x218")](_0x14ae("0x233")), x.setInputType(android.text[_0x14ae("0x21a")][_0x14ae("0x20a")]), t[_0x14ae("0x218")]("Execute on health: 20 is the limit"), t[_0x14ae("0x219")](android[_0x14ae("0x209")][_0x14ae("0x21a")].TYPE_CLASS_TEXT), n[_0x14ae("0x44")](_0x14ae("0x233")), n[_0x14ae("0x81")](lhealth), o.setText(_0x14ae("0x20b")), i[_0x14ae("0x44")](_0x14ae("0x20c")), a.setTitle(_0x14ae("0x176")), e.setOrientation(android[_0x14ae("0x24")][_0x14ae("0x25")][_0x14ae("0x20e")]), e.addView(x), e[_0x14ae("0x4a")](t), e[_0x14ae("0x4a")](n), e[_0x14ae("0x4a")](o), e.addView(i), a[_0x14ae("0x20f")](e), n.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        lhealth ? (lhealth = !1, clientMessage(_0x14ae("0x92"))) : (lhealth = !0, clientMessage(_0x14ae("0x91")))
                    }
                })), o[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        lhealthaction = x[_0x14ae("0x217")](), lhealthheart = t[_0x14ae("0x217")](), a[_0x14ae("0x57")]()
                    }
                })), i[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        a[_0x14ae("0x57")]()
                    }
                })), a[_0x14ae("0x65")]()
            } catch (e) {
                for (var _ = 30; 1 < _; _--) print("" + e)
            }
        }
    }))
}

function tellspamMainMenu() {
    ctx[_0x14ae("0x42")](new(java[_0x14ae("0x22")][_0x14ae("0x23")])({
        run: function() {
            try {
                var a = new(android[_0x14ae("0x206")].Dialog)(ctx),
                    e = (new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx), new(android[_0x14ae("0x24")].LinearLayout)(ctx)),
                    x = new(android.widget[_0x14ae("0x2a")])(ctx),
                    t = new(android[_0x14ae("0x24")][_0x14ae("0x2a")])(ctx),
                    n = new android.widget.Switch(ctx),
                    o = new(android[_0x14ae("0x24")][_0x14ae("0x208")])(ctx),
                    i = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx),
                    _ = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx),
                    r = 0;
                x[_0x14ae("0x218")](_0x14ae("0x234")), x[_0x14ae("0x219")](android[_0x14ae("0x209")][_0x14ae("0x21a")][_0x14ae("0x20a")]), t[_0x14ae("0x218")]("Message"), t[_0x14ae("0x219")](android.text[_0x14ae("0x21a")][_0x14ae("0x20a")]), n[_0x14ae("0x44")](_0x14ae("0x235")), n[_0x14ae("0x81")](stspam), i[_0x14ae("0x44")](_0x14ae("0x20b")), _[_0x14ae("0x44")](_0x14ae("0x20c")), a[_0x14ae("0x20d")](_0x14ae("0x236")), e[_0x14ae("0x43")](android[_0x14ae("0x24")][_0x14ae("0x25")][_0x14ae("0x20e")]), e[_0x14ae("0x4a")](x), e.addView(t), e[_0x14ae("0x4a")](n), e.addView(o), e[_0x14ae("0x4a")](i), e[_0x14ae("0x4a")](_), a[_0x14ae("0x20f")](e), n[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        stspam ? (stspam = !1, clientMessage(_0x14ae("0x237"))) : (stspam = !0, clientMessage(_0x14ae("0x13e")))
                    }
                })), o[_0x14ae("0x210")](5), o[_0x14ae("0x211")](r), o[_0x14ae("0x212")](new(android[_0x14ae("0x24")][_0x14ae("0x208")].OnSeekBarChangeListener)({
                    onStopTrackingTouch: function(e) {
                        1 == (r = o[_0x14ae("0x21c")]()) && (stspamdelayTick = 200, clientMessage(_0x14ae("0x238"))), 2 == r && (stspamdelayTick = 400, clientMessage(_0x14ae("0x239"))), 3 == r && (stspamdelayTick = 600, clientMessage(_0x14ae("0x23a"))), 4 == r && (stspamdelayTick = 800, clientMessage(_0x14ae("0x23b"))), 5 == r && (stspamdelayTick = 1e3, clientMessage(_0x14ae("0x23c"))), 6 == r && (stspamdelayTick = 2e3, clientMessage("§bOperatorClient§f: Tell Spam delay set to 2000 milliseconds"))
                    }
                })), i[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        tell = x[_0x14ae("0x217")](), tell1 = t[_0x14ae("0x217")](), a[_0x14ae("0x57")]()
                    }
                })), _.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        a.dismiss()
                    }
                })), a.show()
            } catch (e) {
                for (var d = 30; 1 < d; d--) print("" + e)
            }
        }
    }))
}

function elevatorMainMenu() {
    ctx[_0x14ae("0x42")](new(java[_0x14ae("0x22")].Runnable)({
        run: function() {
            try {
                var a = new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx),
                    e = (new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx), new(android[_0x14ae("0x24")][_0x14ae("0x25")])(ctx)),
                    x = new(android.widget[_0x14ae("0x2a")])(ctx),
                    t = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx),
                    n = new(android[_0x14ae("0x24")].Button)(ctx),
                    o = new(android[_0x14ae("0x24")].Button)(ctx);
                x[_0x14ae("0x218")](_0x14ae("0x23d")), x[_0x14ae("0x219")](android[_0x14ae("0x209")].InputType[_0x14ae("0x20a")]), t[_0x14ae("0x44")]("Elevator Keybind"), t.setChecked(elevatorkeybind1), n[_0x14ae("0x44")](_0x14ae("0x20b")), o[_0x14ae("0x44")](_0x14ae("0x20c")), a[_0x14ae("0x20d")](_0x14ae("0x174")), e[_0x14ae("0x43")](android.widget.LinearLayout[_0x14ae("0x20e")]), e[_0x14ae("0x4a")](x), e[_0x14ae("0x4a")](t), e.addView(n), e[_0x14ae("0x4a")](o), a[_0x14ae("0x20f")](e), t[_0x14ae("0x55")](new(android[_0x14ae("0x27")].View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        elevatorkeybind1 ? (GUIel.dismiss(), elevatorkeybind1 = elevatorkeybind0 = !1) : (showElevatorBtn(), elevatorkeybind1 = elevatorkeybind0 = !0)
                    }
                })), n[_0x14ae("0x55")](new(android[_0x14ae("0x27")].View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        elevatorvalue = x[_0x14ae("0x217")](), a[_0x14ae("0x57")]()
                    }
                })), o[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        a[_0x14ae("0x57")]()
                    }
                })), a[_0x14ae("0x65")]()
            } catch (e) {
                for (var i = 30; 1 < i; i--) print("" + e)
            }
        }
    }))
}

function hasteMainMenu() {
    ctx[_0x14ae("0x42")](new(java[_0x14ae("0x22")].Runnable)({
        run: function() {
            try {
                var a = new(android[_0x14ae("0x206")].Dialog)(ctx),
                    e = (new(android[_0x14ae("0x206")].Dialog)(ctx), new(android[_0x14ae("0x24")][_0x14ae("0x25")])(ctx)),
                    x = new(android[_0x14ae("0x24")][_0x14ae("0x2a")])(ctx),
                    t = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx),
                    n = new(android[_0x14ae("0x24")].Button)(ctx),
                    o = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx);
                x.setHint(_0x14ae("0x23e")), x[_0x14ae("0x219")](android[_0x14ae("0x209")].InputType[_0x14ae("0x20a")]), t.setText(_0x14ae("0x23f")), t[_0x14ae("0x81")](haste), n[_0x14ae("0x44")](_0x14ae("0x20b")), o[_0x14ae("0x44")]("Exit"), a[_0x14ae("0x20d")](_0x14ae("0x240")), e[_0x14ae("0x43")](android[_0x14ae("0x24")][_0x14ae("0x25")][_0x14ae("0x20e")]), e[_0x14ae("0x4a")](x), e[_0x14ae("0x4a")](t), e[_0x14ae("0x4a")](n), e[_0x14ae("0x4a")](o), a[_0x14ae("0x20f")](e), t[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        haste ? (haste = !1, Entity[_0x14ae("0x123")](getPlayerEnt(), MobEffect[_0x14ae("0x11f")]), clientMessage(_0x14ae("0x120"))) : (haste = !0, clientMessage(_0x14ae("0x11e")))
                    }
                })), n[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        hastevalue = x[_0x14ae("0x217")](), Entity[_0x14ae("0x123")](getPlayerEnt(), MobEffect.digSpeed), a[_0x14ae("0x57")]()
                    }
                })), o[_0x14ae("0x55")](new(android.view.View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        a[_0x14ae("0x57")]()
                    }
                })), a[_0x14ae("0x65")]()
            } catch (e) {
                for (var i = 30; 1 < i; i--) print("" + e)
            }
        }
    }))
}

function jumpMainMenu() {
    ctx.runOnUiThread(new(java[_0x14ae("0x22")].Runnable)({
        run: function() {
            try {
                var a = new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx),
                    e = (new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx), new(android[_0x14ae("0x24")][_0x14ae("0x25")])(ctx)),
                    x = new(android[_0x14ae("0x24")][_0x14ae("0x2a")])(ctx),
                    t = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx),
                    n = new(android[_0x14ae("0x24")].Button)(ctx),
                    o = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx);
                x[_0x14ae("0x218")](_0x14ae("0x241")), x[_0x14ae("0x219")](android[_0x14ae("0x209")][_0x14ae("0x21a")].TYPE_CLASS_TEXT), t[_0x14ae("0x44")](_0x14ae("0x242")), t[_0x14ae("0x81")](jumpboost), n[_0x14ae("0x44")](_0x14ae("0x20b")), o[_0x14ae("0x44")](_0x14ae("0x20c")), a[_0x14ae("0x20d")](_0x14ae("0x243")), e[_0x14ae("0x43")](android.widget.LinearLayout[_0x14ae("0x20e")]), e.addView(x), e[_0x14ae("0x4a")](t), e[_0x14ae("0x4a")](n), e[_0x14ae("0x4a")](o), a[_0x14ae("0x20f")](e), t[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        jumpboost ? (jumpboost = !1, Entity[_0x14ae("0x123")](getPlayerEnt(), MobEffect[_0x14ae("0x128")]), clientMessage(_0x14ae("0x129"))) : (jumpboost = !0, clientMessage(_0x14ae("0x127")))
                    }
                })), n.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(e) {
                        jbvalue = x[_0x14ae("0x217")](), Entity.removeEffect(getPlayerEnt(), MobEffect.jump), a[_0x14ae("0x57")]()
                    }
                })), o[_0x14ae("0x55")](new(android.view[_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        a[_0x14ae("0x57")]()
                    }
                })), a[_0x14ae("0x65")]()
            } catch (e) {
                for (var i = 30; 1 < i; i--) print("" + e)
            }
        }
    }))
}

function speedMainMenu() {
    ctx.runOnUiThread(new(java[_0x14ae("0x22")].Runnable)({
        run: function() {
            try {
                var a = new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx),
                    e = (new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx), new(android[_0x14ae("0x24")][_0x14ae("0x25")])(ctx)),
                    x = new(android.widget[_0x14ae("0x2a")])(ctx),
                    t = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx),
                    n = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx),
                    o = new android.widget.Button(ctx);
                x[_0x14ae("0x218")](_0x14ae("0x244")), x.setInputType(android[_0x14ae("0x209")][_0x14ae("0x21a")].TYPE_CLASS_TEXT), t[_0x14ae("0x44")](_0x14ae("0xbe")), t[_0x14ae("0x81")](speed), n[_0x14ae("0x44")](_0x14ae("0x20b")), o[_0x14ae("0x44")](_0x14ae("0x20c")), a.setTitle(_0x14ae("0x177")), e[_0x14ae("0x43")](android.widget[_0x14ae("0x25")][_0x14ae("0x20e")]), e[_0x14ae("0x4a")](x), e[_0x14ae("0x4a")](t), e[_0x14ae("0x4a")](n), e[_0x14ae("0x4a")](o), a[_0x14ae("0x20f")](e), t[_0x14ae("0x55")](new(android.view[_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        speed ? (speed = !1, clientMessage(_0x14ae("0xc0"))) : (speed = !0, clientMessage(_0x14ae("0x245")))
                    }
                })), n[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        speedvalue = x[_0x14ae("0x217")](), a[_0x14ae("0x57")]()
                    }
                })), o[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        a[_0x14ae("0x57")]()
                    }
                })), a.show()
            } catch (e) {
                for (var i = 30; 1 < i; i--) print("" + e)
            }
        }
    }))
}

function ahbMainMenu() {
    ctx[_0x14ae("0x42")](new(java[_0x14ae("0x22")][_0x14ae("0x23")])({
        run: function() {
            try {
                var a = new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx),
                    e = (new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx), new(android[_0x14ae("0x24")][_0x14ae("0x25")])(ctx)),
                    x = new(android[_0x14ae("0x24")][_0x14ae("0x2a")])(ctx),
                    t = new(android.widget[_0x14ae("0x2a")])(ctx),
                    n = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx),
                    o = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx),
                    i = new(android.widget[_0x14ae("0x26")])(ctx);
                x.setHint(_0x14ae("0x223")), x[_0x14ae("0x219")](android[_0x14ae("0x209")].InputType[_0x14ae("0x20a")]), t[_0x14ae("0x218")](_0x14ae("0x224")), t.setInputType(android[_0x14ae("0x209")][_0x14ae("0x21a")][_0x14ae("0x20a")]), n[_0x14ae("0x44")]("Attack Hitbox"), n[_0x14ae("0x81")](ahb), o.setText(_0x14ae("0x20b")), i[_0x14ae("0x44")](_0x14ae("0x20c")), a[_0x14ae("0x20d")](_0x14ae("0x16d")), e[_0x14ae("0x43")](android[_0x14ae("0x24")][_0x14ae("0x25")][_0x14ae("0x20e")]), e.addView(x), e[_0x14ae("0x4a")](t), e[_0x14ae("0x4a")](n), e.addView(o), e[_0x14ae("0x4a")](i), a[_0x14ae("0x20f")](e), n[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        if (ahb) {
                            ahb = !1;
                            var a = getNearestEntity(12);
                            Entity[_0x14ae("0x66")](a, 1, 1), clientMessage(_0x14ae("0x95"))
                        } else ahb = !0, clientMessage(_0x14ae("0x93")), clientMessage(_0x14ae("0x94"))
                    }
                })), o[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        ahbwidth = x[_0x14ae("0x217")](), ahbheight = t.getText(), a.dismiss()
                    }
                })), i[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        a[_0x14ae("0x57")]()
                    }
                })), a.show()
            } catch (e) {
                for (var _ = 30; 1 < _; _--) print("" + e)
            }
        }
    }))
}

function zoomMainMenu() {
    ctx[_0x14ae("0x42")](new(java[_0x14ae("0x22")].Runnable)({
        run: function() {
            try {
                var a = new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx),
                    e = (new(android.app[_0x14ae("0x207")])(ctx), new(android[_0x14ae("0x24")][_0x14ae("0x25")])(ctx)),
                    x = new(android.widget[_0x14ae("0x2a")])(ctx),
                    t = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx),
                    n = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx),
                    o = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx),
                    i = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx);
                x[_0x14ae("0x218")](_0x14ae("0x246")), x[_0x14ae("0x219")](android[_0x14ae("0x209")].InputType[_0x14ae("0x20a")]), t[_0x14ae("0x44")](_0x14ae("0x119")), t[_0x14ae("0x81")](zoomvision), n[_0x14ae("0x44")](_0x14ae("0x247")), n[_0x14ae("0x81")](zoomvisionkeybind1), o[_0x14ae("0x44")](_0x14ae("0x20b")), i[_0x14ae("0x44")](_0x14ae("0x20c")), a[_0x14ae("0x20d")](_0x14ae("0x17b")), e[_0x14ae("0x43")](android[_0x14ae("0x24")].LinearLayout.VERTICAL), e[_0x14ae("0x4a")](x), e.addView(t), e[_0x14ae("0x4a")](n), e[_0x14ae("0x4a")](o), e.addView(i), a.setContentView(e), n[_0x14ae("0x162")](new(android[_0x14ae("0x24")][_0x14ae("0x163")][_0x14ae("0x164")])({
                    onCheckedChanged: function() {
                        zoomvisionkeybind1 ? (GUIzoom.dismiss(), zoomvisionkeybind1 = zoomvisionkeybind0 = !1) : (showZoomBtn(), zoomvisionkeybind1 = zoomvisionkeybind0 = !0)
                    }
                })), t[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        zoomvision ? (zoomvision = !1, ModPE[_0x14ae("0x6c")](0), clientMessage(_0x14ae("0x248"))) : (zoomvision = !0, clientMessage(_0x14ae("0x11a")))
                    }
                })), o.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        zoomvalue = x[_0x14ae("0x217")](), a[_0x14ae("0x57")]()
                    }
                })), i[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        a[_0x14ae("0x57")]()
                    }
                })), a[_0x14ae("0x65")]()
            } catch (e) {
                for (var _ = 30; 1 < _; _--) print("" + e)
            }
        }
    }))
}

function gamespeedMainMenu() {
    ctx[_0x14ae("0x42")](new(java[_0x14ae("0x22")][_0x14ae("0x23")])({
        run: function() {
            try {
                var a = new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx),
                    e = (new(android[_0x14ae("0x206")].Dialog)(ctx), new(android[_0x14ae("0x24")].LinearLayout)(ctx)),
                    x = new(android[_0x14ae("0x24")][_0x14ae("0x2a")])(ctx),
                    t = new(android[_0x14ae("0x24")].Switch)(ctx),
                    n = new(android.widget[_0x14ae("0x26")])(ctx),
                    o = new(android[_0x14ae("0x24")].Button)(ctx);
                x[_0x14ae("0x218")](_0x14ae("0x249")), x.setInputType(android.text[_0x14ae("0x21a")].TYPE_CLASS_TEXT), t[_0x14ae("0x44")]("GameSpeed"), t.setChecked(gs), n[_0x14ae("0x44")](_0x14ae("0x20b")), o[_0x14ae("0x44")](_0x14ae("0x20c")), a[_0x14ae("0x20d")](_0x14ae("0x24a")), e[_0x14ae("0x43")](android.widget[_0x14ae("0x25")].VERTICAL), e.addView(x), e.addView(t), e[_0x14ae("0x4a")](n), e[_0x14ae("0x4a")](o), a[_0x14ae("0x20f")](e), t[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        gs ? (gs = !1, ModPE[_0x14ae("0xd4")](20), clientMessage(_0x14ae("0x24b"))) : (gs = !0, clientMessage(_0x14ae("0xd3")))
                    }
                })), n[_0x14ae("0x55")](new(android[_0x14ae("0x27")].View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        gamespeedvalue = x[_0x14ae("0x217")](), a[_0x14ae("0x57")]()
                    }
                })), o[_0x14ae("0x55")](new(android.view[_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        a[_0x14ae("0x57")]()
                    }
                })), a[_0x14ae("0x65")]()
            } catch (e) {
                for (var i = 30; 1 < i; i--) print("" + e)
            }
        }
    }))
}

function nbwarningrangeMainMenu() {
    ctx[_0x14ae("0x42")](new(java[_0x14ae("0x22")][_0x14ae("0x23")])({
        run: function() {
            try {
                var a = new(android[_0x14ae("0x206")].Dialog)(ctx),
                    e = (new(android.app[_0x14ae("0x207")])(ctx), new(android[_0x14ae("0x24")][_0x14ae("0x25")])(ctx)),
                    x = new(android.widget[_0x14ae("0x2a")])(ctx),
                    t = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx),
                    n = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx),
                    o = new(android[_0x14ae("0x24")].Button)(ctx);
                x[_0x14ae("0x218")](_0x14ae("0x24c")), x[_0x14ae("0x219")](android[_0x14ae("0x209")][_0x14ae("0x21a")].TYPE_CLASS_TEXT), t[_0x14ae("0x44")](_0x14ae("0xb5")), t[_0x14ae("0x81")](nearwarning), n[_0x14ae("0x44")]("Apply"), o[_0x14ae("0x44")](_0x14ae("0x20c")), a[_0x14ae("0x20d")]("Nearby Player Warning Settings"), e.setOrientation(android[_0x14ae("0x24")][_0x14ae("0x25")][_0x14ae("0x20e")]), e[_0x14ae("0x4a")](x), e.addView(t), e.addView(n), e[_0x14ae("0x4a")](o), a[_0x14ae("0x20f")](e), t[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        nearwarning ? (nearwarning = !1, clientMessage(_0x14ae("0xb7"))) : (nearwarning = !0, clientMessage(_0x14ae("0xb6")))
                    }
                })), n[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        nbwarningrange = x[_0x14ae("0x217")](), a.dismiss()
                    }
                })), o.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        a[_0x14ae("0x57")]()
                    }
                })), a.show()
            } catch (e) {
                for (var i = 30; 1 < i; i--) print("" + e)
            }
        }
    }))
}

function barangeMainMenu() {
    ctx[_0x14ae("0x42")](new(java[_0x14ae("0x22")][_0x14ae("0x23")])({
        run: function() {
            try {
                var a = new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx),
                    e = (new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx), new(android[_0x14ae("0x24")][_0x14ae("0x25")])(ctx)),
                    x = new(android[_0x14ae("0x24")].EditText)(ctx),
                    t = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx),
                    n = new(android[_0x14ae("0x24")][_0x14ae("0x2a")])(ctx),
                    o = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx),
                    i = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx),
                    _ = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx);
                x[_0x14ae("0x218")](_0x14ae("0x24c")), x[_0x14ae("0x219")](android[_0x14ae("0x209")][_0x14ae("0x21a")][_0x14ae("0x20a")]), n[_0x14ae("0x218")](_0x14ae("0x24d")), n[_0x14ae("0x219")](android[_0x14ae("0x209")][_0x14ae("0x21a")][_0x14ae("0x20a")]), t.setText(_0x14ae("0x8a")), t.setChecked(bowaimbot), o.setText("Bow Aimbot Assist"), o.setChecked(bowassist), i[_0x14ae("0x44")](_0x14ae("0x20b")), _[_0x14ae("0x44")](_0x14ae("0x20c")), a.setTitle("Bow Aimbot Settings"), e[_0x14ae("0x43")](android[_0x14ae("0x24")][_0x14ae("0x25")][_0x14ae("0x20e")]), e[_0x14ae("0x4a")](x), e[_0x14ae("0x4a")](n), e[_0x14ae("0x4a")](t), e[_0x14ae("0x4a")](o), e.addView(i), e[_0x14ae("0x4a")](_), a[_0x14ae("0x20f")](e), t[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        bowaimbot ? (bowaimbot = !1, clientMessage(_0x14ae("0x8c"))) : (bowaimbot = !0, clientMessage(_0x14ae("0x8b")))
                    }
                })), o[_0x14ae("0x55")](new android.view.View.OnClickListener({
                    onClick: function(e) {
                        bowassist = !bowassist
                    }
                })), i[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        barange = x[_0x14ae("0x217")](), assistvalue = n[_0x14ae("0x217")](), a[_0x14ae("0x57")]()
                    }
                })), _.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        a[_0x14ae("0x57")]()
                    }
                })), a[_0x14ae("0x65")]()
            } catch (e) {
                for (var r = 30; 1 < r; r--) print("" + e)
            }
        }
    }))
}

function customgiveMainMenu() {
    ctx[_0x14ae("0x42")](new(java.lang[_0x14ae("0x23")])({
        run: function() {
            try {
                var a = new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx),
                    e = (new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx), new(android[_0x14ae("0x24")][_0x14ae("0x25")])(ctx)),
                    x = new(android[_0x14ae("0x24")].EditText)(ctx),
                    t = new(android.widget[_0x14ae("0x2a")])(ctx),
                    n = new(android[_0x14ae("0x24")][_0x14ae("0x2a")])(ctx),
                    o = new(android[_0x14ae("0x24")].Switch)(ctx),
                    i = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx),
                    _ = new(android.widget[_0x14ae("0x26")])(ctx);
                x[_0x14ae("0x218")]("ID"), x[_0x14ae("0x219")](android.text[_0x14ae("0x21a")].TYPE_CLASS_TEXT), t[_0x14ae("0x218")](_0x14ae("0x24e")), t[_0x14ae("0x219")](android[_0x14ae("0x209")][_0x14ae("0x21a")][_0x14ae("0x20a")]), n.setHint(_0x14ae("0x24f")), n[_0x14ae("0x219")](android[_0x14ae("0x209")][_0x14ae("0x21a")][_0x14ae("0x20a")]), o[_0x14ae("0x44")]("Spam Give"), o[_0x14ae("0x81")](spamgive), i[_0x14ae("0x44")](_0x14ae("0x20b")), _[_0x14ae("0x44")](_0x14ae("0x20c")), a.setTitle(_0x14ae("0x250")), e[_0x14ae("0x43")](android[_0x14ae("0x24")][_0x14ae("0x25")][_0x14ae("0x20e")]), e[_0x14ae("0x4a")](x), e[_0x14ae("0x4a")](t), e[_0x14ae("0x4a")](n), e[_0x14ae("0x4a")](o), e[_0x14ae("0x4a")](i), e.addView(_), a[_0x14ae("0x20f")](e), o[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        spamgive ? (spamgive = !1, clientMessage(_0x14ae("0x251"))) : (spamgive = !0, clientMessage(_0x14ae("0x15d")))
                    }
                })), i[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        IDValue = x[_0x14ae("0x217")](), DamageValue = t.getText(), AmountValue = n[_0x14ae("0x217")](), a.dismiss()
                    }
                })), _.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        a[_0x14ae("0x57")]()
                    }
                })), a[_0x14ae("0x65")]()
            } catch (e) {
                for (var r = 30; 1 < r; r--) print("" + e)
            }
        }
    }))
}

function tpauraMainMenu() {
    ctx[_0x14ae("0x42")](new(java[_0x14ae("0x22")][_0x14ae("0x23")])({
        run: function() {
            try {
                var a = new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx),
                    e = (new(android.app[_0x14ae("0x207")])(ctx), new(android[_0x14ae("0x24")][_0x14ae("0x25")])(ctx)),
                    x = new(android[_0x14ae("0x24")].EditText)(ctx),
                    t = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx),
                    n = new(android[_0x14ae("0x24")].Switch)(ctx),
                    o = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx),
                    i = new(android.widget[_0x14ae("0x26")])(ctx);
                x[_0x14ae("0x218")](_0x14ae("0x252")), x[_0x14ae("0x219")](android[_0x14ae("0x209")][_0x14ae("0x21a")][_0x14ae("0x20a")]), t[_0x14ae("0x44")](_0x14ae("0xa1")), t[_0x14ae("0x81")](tpaura), n.setText(_0x14ae("0x253")), n[_0x14ae("0x81")](tpauraY), o[_0x14ae("0x44")](_0x14ae("0x20b")), i[_0x14ae("0x44")](_0x14ae("0x20c")), a.setTitle(_0x14ae("0x16f")), e[_0x14ae("0x43")](android[_0x14ae("0x24")][_0x14ae("0x25")][_0x14ae("0x20e")]), e.addView(x), e[_0x14ae("0x4a")](t), e[_0x14ae("0x4a")](n), e[_0x14ae("0x4a")](o), e[_0x14ae("0x4a")](i), a.setContentView(e), t[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        tpaura ? (tpaura = !1, clientMessage(_0x14ae("0xa3"))) : (tpaura = !0, clientMessage(_0x14ae("0xa2")))
                    }
                })), n.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        tpauraY = !tpauraY
                    }
                })), o.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        tpauravalue = x.getText(), a.dismiss()
                    }
                })), i.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        a.dismiss()
                    }
                })), a[_0x14ae("0x65")]()
            } catch (e) {
                for (var _ = 30; 1 < _; _--) print("" + e)
            }
        }
    }))
}

function cuspamhitMainMenu() {
    ctx[_0x14ae("0x42")](new(java.lang[_0x14ae("0x23")])({
        run: function() {
            try {
                var a = new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx),
                    e = (new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx), new(android[_0x14ae("0x24")][_0x14ae("0x25")])(ctx)),
                    x = new(android[_0x14ae("0x24")][_0x14ae("0x2a")])(ctx),
                    t = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx),
                    n = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx),
                    o = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx);
                x[_0x14ae("0x218")](_0x14ae("0x254")), x[_0x14ae("0x219")](android[_0x14ae("0x209")][_0x14ae("0x21a")][_0x14ae("0x20a")]), t[_0x14ae("0x44")](_0x14ae("0x9c")), t[_0x14ae("0x81")](spamhit), n[_0x14ae("0x44")](_0x14ae("0x20b")), o[_0x14ae("0x44")](_0x14ae("0x20c")), a.setTitle(_0x14ae("0x17f")), e[_0x14ae("0x43")](android[_0x14ae("0x24")][_0x14ae("0x25")][_0x14ae("0x20e")]), e[_0x14ae("0x4a")](x), e[_0x14ae("0x4a")](t), e[_0x14ae("0x4a")](n), e[_0x14ae("0x4a")](o), a[_0x14ae("0x20f")](e), t[_0x14ae("0x55")](new(android[_0x14ae("0x27")].View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        spamhit ? (spamhit = !1, clientMessage(_0x14ae("0x9e"))) : (spamhit = !0, clientMessage(_0x14ae("0x9d")))
                    }
                })), n[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        spamhitvalue = x[_0x14ae("0x217")](), a[_0x14ae("0x57")]()
                    }
                })), o[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        a.dismiss()
                    }
                })), a[_0x14ae("0x65")]()
            } catch (e) {
                for (var i = 30; 1 < i; i--) print("" + e)
            }
        }
    }))
}

function awayauraMainMenu() {
    ctx[_0x14ae("0x42")](new(java[_0x14ae("0x22")][_0x14ae("0x23")])({
        run: function() {
            try {
                var a = new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx),
                    e = (new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx), new(android[_0x14ae("0x24")][_0x14ae("0x25")])(ctx)),
                    x = new(android[_0x14ae("0x24")].EditText)(ctx),
                    t = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx),
                    n = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx),
                    o = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx);
                x.setHint(_0x14ae("0x255")), x[_0x14ae("0x219")](android.text[_0x14ae("0x21a")][_0x14ae("0x20a")]), t[_0x14ae("0x44")]("Away Aura"), t[_0x14ae("0x81")](awayaura), n[_0x14ae("0x44")]("Apply"), o[_0x14ae("0x44")]("Exit"), a.setTitle("Away Aura Settings"), e[_0x14ae("0x43")](android[_0x14ae("0x24")].LinearLayout[_0x14ae("0x20e")]), e[_0x14ae("0x4a")](x), e[_0x14ae("0x4a")](t), e[_0x14ae("0x4a")](n), e[_0x14ae("0x4a")](o), a[_0x14ae("0x20f")](e), t[_0x14ae("0x55")](new(android.view.View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        awayaura ? (awayaura = !1, clientMessage(_0x14ae("0x256"))) : (awayaura = !0, clientMessage("§bOperatorClient§f: Away Aura Enabled!"))
                    }
                })), n.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        awayaurarange = x[_0x14ae("0x217")](), a[_0x14ae("0x57")]()
                    }
                })), o.setOnClickListener(new(android.view[_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        a.dismiss()
                    }
                })), a[_0x14ae("0x65")]()
            } catch (e) {
                for (var i = 30; 1 < i; i--) print("" + e)
            }
        }
    }))
}

function lbounceMainMenu() {
    ctx.runOnUiThread(new(java[_0x14ae("0x22")][_0x14ae("0x23")])({
        run: function() {
            try {
                var a = new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx),
                    e = (new android.app.Dialog(ctx), new(android.widget[_0x14ae("0x25")])(ctx)),
                    x = new(android[_0x14ae("0x24")][_0x14ae("0x2a")])(ctx),
                    t = new(android.widget[_0x14ae("0x7f")])(ctx),
                    n = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx),
                    o = new(android.widget[_0x14ae("0x26")])(ctx);
                x[_0x14ae("0x218")](_0x14ae("0x257")), x[_0x14ae("0x219")](android[_0x14ae("0x209")][_0x14ae("0x21a")][_0x14ae("0x20a")]), t[_0x14ae("0x44")](_0x14ae("0x258")), t[_0x14ae("0x81")](liquidbounce), n.setText("Apply"), o[_0x14ae("0x44")]("Exit"), a.setTitle(_0x14ae("0x17a")), e[_0x14ae("0x43")](android[_0x14ae("0x24")][_0x14ae("0x25")][_0x14ae("0x20e")]), e[_0x14ae("0x4a")](x), e[_0x14ae("0x4a")](t), e[_0x14ae("0x4a")](n), e[_0x14ae("0x4a")](o), a[_0x14ae("0x20f")](e), t[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        liquidbounce ? (liquidbounce = !1, clientMessage(_0x14ae("0xdc"))) : (liquidbounce = !0, clientMessage(_0x14ae("0xdb")))
                    }
                })), n.setOnClickListener(new(android[_0x14ae("0x27")].View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        lbouncevalue = x[_0x14ae("0x217")](), a.dismiss()
                    }
                })), o[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        a[_0x14ae("0x57")]()
                    }
                })), a[_0x14ae("0x65")]()
            } catch (e) {
                for (var i = 30; 1 < i; i--) print("" + e)
            }
        }
    }))
}

function hoverauraMainMenu() {
    ctx[_0x14ae("0x42")](new(java.lang[_0x14ae("0x23")])({
        run: function() {
            try {
                var a = new(android.app[_0x14ae("0x207")])(ctx),
                    e = (new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx), new(android[_0x14ae("0x24")][_0x14ae("0x25")])(ctx)),
                    x = new(android[_0x14ae("0x24")][_0x14ae("0x2a")])(ctx),
                    t = new(android[_0x14ae("0x24")][_0x14ae("0x2a")])(ctx),
                    n = new(android[_0x14ae("0x24")].Switch)(ctx),
                    o = new android.widget.Button(ctx),
                    i = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx);
                x.setHint(_0x14ae("0x259")), x[_0x14ae("0x219")](android[_0x14ae("0x209")].InputType[_0x14ae("0x20a")]), t[_0x14ae("0x218")]("HoverAura Height"), t[_0x14ae("0x219")](android[_0x14ae("0x209")].InputType[_0x14ae("0x20a")]), n[_0x14ae("0x44")](_0x14ae("0x25a")), n[_0x14ae("0x81")](hoveraura), o[_0x14ae("0x44")](_0x14ae("0x20b")), i[_0x14ae("0x44")](_0x14ae("0x20c")), a.setTitle("HoverAura Settings"), e[_0x14ae("0x43")](android[_0x14ae("0x24")][_0x14ae("0x25")][_0x14ae("0x20e")]), e[_0x14ae("0x4a")](x), e[_0x14ae("0x4a")](t), e[_0x14ae("0x4a")](n), e[_0x14ae("0x4a")](o), e[_0x14ae("0x4a")](i), a[_0x14ae("0x20f")](e), n.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        hoveraura ? (hoveraura = !1, clientMessage(_0x14ae("0xa6"))) : (hoveraura = !0, clientMessage(_0x14ae("0xa5")))
                    }
                })), o[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        hoveraurarange = x[_0x14ae("0x217")](), hoverauraheight = t[_0x14ae("0x217")](), a[_0x14ae("0x57")]()
                    }
                })), i[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        a[_0x14ae("0x57")]()
                    }
                })), a.show()
            } catch (e) {
                for (var _ = 30; 1 < _; _--) print("" + e)
            }
        }
    }))
}

function incMainMenu() {
    ctx[_0x14ae("0x42")](new(java.lang[_0x14ae("0x23")])({
        run: function() {
            try {
                var a = new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx),
                    e = (new(android.app[_0x14ae("0x207")])(ctx), new(android.widget[_0x14ae("0x25")])(ctx)),
                    x = new(android[_0x14ae("0x24")][_0x14ae("0x2a")])(ctx),
                    t = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx),
                    n = new(android.widget[_0x14ae("0x26")])(ctx),
                    o = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx);
                x[_0x14ae("0x218")](_0x14ae("0x25b")), x.setInputType(android.text[_0x14ae("0x21a")].TYPE_CLASS_TEXT), t[_0x14ae("0x44")](_0x14ae("0x25c")), t[_0x14ae("0x81")](inc), n[_0x14ae("0x44")](_0x14ae("0x20b")), o[_0x14ae("0x44")](_0x14ae("0x20c")), a[_0x14ae("0x20d")]("Item Name Changer Settings"), e[_0x14ae("0x43")](android[_0x14ae("0x24")][_0x14ae("0x25")][_0x14ae("0x20e")]), e[_0x14ae("0x4a")](x), e[_0x14ae("0x4a")](t), e[_0x14ae("0x4a")](n), e[_0x14ae("0x4a")](o), a[_0x14ae("0x20f")](e), t[_0x14ae("0x55")](new(android.view.View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        inc ? (inc = !1, clientMessage(_0x14ae("0x15f"))) : (inc = !0, clientMessage(_0x14ae("0x15e")))
                    }
                })), n[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        incvalue = x.getText(), a[_0x14ae("0x57")]()
                    }
                })), o[_0x14ae("0x55")](new(android[_0x14ae("0x27")].View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        a[_0x14ae("0x57")]()
                    }
                })), a[_0x14ae("0x65")]()
            } catch (e) {
                for (var i = 30; 1 < i; i--) print("" + e)
            }
        }
    }))
}

function dolphinMainMenu() {
    ctx[_0x14ae("0x42")](new(java[_0x14ae("0x22")][_0x14ae("0x23")])({
        run: function() {
            try {
                var a = new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx),
                    e = (new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx), new(android[_0x14ae("0x24")][_0x14ae("0x25")])(ctx)),
                    x = new(android[_0x14ae("0x24")][_0x14ae("0x2a")])(ctx),
                    t = new(android.widget[_0x14ae("0x7f")])(ctx),
                    n = new(android[_0x14ae("0x24")].Button)(ctx),
                    o = new(android.widget[_0x14ae("0x26")])(ctx);
                x[_0x14ae("0x218")](_0x14ae("0x25d")), x[_0x14ae("0x219")](android[_0x14ae("0x209")][_0x14ae("0x21a")][_0x14ae("0x20a")]), t[_0x14ae("0x44")](_0x14ae("0xd5")), t[_0x14ae("0x81")](dolphin), n.setText(_0x14ae("0x20b")), o.setText("Exit"), a[_0x14ae("0x20d")]("Dolphin Settings"), e.setOrientation(android[_0x14ae("0x24")][_0x14ae("0x25")].VERTICAL), e[_0x14ae("0x4a")](x), e[_0x14ae("0x4a")](t), e[_0x14ae("0x4a")](n), e[_0x14ae("0x4a")](o), a[_0x14ae("0x20f")](e), t[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        dolphin ? (dolphin = !1, clientMessage(_0x14ae("0xd7"))) : (dolphin = !0, clientMessage(_0x14ae("0xd6")))
                    }
                })), n.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        dolphinspeedvalue = x[_0x14ae("0x217")](), a[_0x14ae("0x57")]()
                    }
                })), o[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        a.dismiss()
                    }
                })), a[_0x14ae("0x65")]()
            } catch (e) {
                for (var i = 30; 1 < i; i--) print("" + e)
            }
        }
    }))
}

function mainMainMenu() {
    ctx[_0x14ae("0x42")](new(java[_0x14ae("0x22")].Runnable)({
        run: function() {
            try {
                var a = new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx),
                    e = (new android.app.Dialog(ctx), new(android.widget[_0x14ae("0x25")])(ctx)),
                    x = new(android[_0x14ae("0x24")][_0x14ae("0x2a")])(ctx),
                    t = new(android[_0x14ae("0x24")][_0x14ae("0x2a")])(ctx),
                    n = new(android[_0x14ae("0x24")][_0x14ae("0x29")])(ctx),
                    o = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx),
                    i = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx),
                    _ = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx),
                    r = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx),
                    d = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx),
                    l = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx);
                x[_0x14ae("0x218")](_0x14ae("0x25e")), x[_0x14ae("0x219")](android[_0x14ae("0x209")][_0x14ae("0x21a")][_0x14ae("0x20a")]), t[_0x14ae("0x218")](_0x14ae("0x25f")), t[_0x14ae("0x219")](android.text[_0x14ae("0x21a")][_0x14ae("0x20a")]), n[_0x14ae("0x44")](_0x14ae("0x260")), o[_0x14ae("0x44")](_0x14ae("0x261")), i[_0x14ae("0x44")](_0x14ae("0x262")), _[_0x14ae("0x44")](_0x14ae("0x263")), r[_0x14ae("0x44")](_0x14ae("0x264")), d.setText(_0x14ae("0x20b")), l[_0x14ae("0x44")](_0x14ae("0x20c")), a[_0x14ae("0x20d")]("Main Menu Settings"), e[_0x14ae("0x43")](android.widget[_0x14ae("0x25")][_0x14ae("0x20e")]), e[_0x14ae("0x4a")](x), e[_0x14ae("0x4a")](t), e[_0x14ae("0x4a")](n), e[_0x14ae("0x4a")](o), e[_0x14ae("0x4a")](i), e[_0x14ae("0x4a")](_), e.addView(r), e[_0x14ae("0x4a")](d), e[_0x14ae("0x4a")](l), a[_0x14ae("0x20f")](e), d[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        mainMenuBtnText = x[_0x14ae("0x217")](), mainMenuBtnTextSize = t[_0x14ae("0x217")](), a[_0x14ae("0x57")]()
                    }
                })), o[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        mainMenuBtnTextColor = android[_0x14ae("0x16")][_0x14ae("0x17")][_0x14ae("0x18")], textColor = android[_0x14ae("0x16")].Color[_0x14ae("0x19")], offToggledKeybindColor = android[_0x14ae("0x16")].Color.RED, onToggledKeybindColor = android[_0x14ae("0x16")][_0x14ae("0x17")].GREEN, nonToggleKeybindColor = android[_0x14ae("0x16")][_0x14ae("0x17")].YELLOW, exitMenuTextColor = android[_0x14ae("0x16")].Color[_0x14ae("0x1a")], keybindBackgroundColor = android[_0x14ae("0x16")][_0x14ae("0x17")].BLACK, menuBackgroundColor = android[_0x14ae("0x16")][_0x14ae("0x17")][_0x14ae("0x1c")]
                    }
                })), i[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        mainMenuBtnTextColor = android[_0x14ae("0x16")].Color[_0x14ae("0x19")], textColor = android[_0x14ae("0x16")].Color[_0x14ae("0x1b")], offToggledKeybindColor = android[_0x14ae("0x16")].Color[_0x14ae("0x49")], onToggledKeybindColor = android[_0x14ae("0x16")][_0x14ae("0x17")][_0x14ae("0x265")], nonToggleKeybindColor = android[_0x14ae("0x16")][_0x14ae("0x17")][_0x14ae("0x47")], exitMenuTextColor = android[_0x14ae("0x16")][_0x14ae("0x17")][_0x14ae("0x47")], keybindBackgroundColor = android[_0x14ae("0x16")][_0x14ae("0x17")][_0x14ae("0x1c")], menuBackgroundColor = android[_0x14ae("0x16")][_0x14ae("0x17")][_0x14ae("0x1c")]
                    }
                })), _[_0x14ae("0x55")](new(android.view[_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        mainMenuBtnTextColor = android.graphics[_0x14ae("0x17")].CYAN, textColor = android[_0x14ae("0x16")].Color[_0x14ae("0x18")], offToggledKeybindColor = android[_0x14ae("0x16")][_0x14ae("0x17")].GREEN, onToggledKeybindColor = android[_0x14ae("0x16")][_0x14ae("0x17")][_0x14ae("0x1a")], nonToggleKeybindColor = android[_0x14ae("0x16")][_0x14ae("0x17")][_0x14ae("0x265")], exitMenuTextColor = android[_0x14ae("0x16")][_0x14ae("0x17")][_0x14ae("0x1a")], keybindBackgroundColor = android[_0x14ae("0x16")].Color[_0x14ae("0x1c")], menuBackgroundColor = android[_0x14ae("0x16")][_0x14ae("0x17")].TRANSPARENT
                    }
                })), r.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        mainMenuBtnTextColor = android[_0x14ae("0x16")].Color.BLACK, textColor = android[_0x14ae("0x16")].Color[_0x14ae("0x47")], offToggledKeybindColor = android[_0x14ae("0x16")][_0x14ae("0x17")][_0x14ae("0x49")], onToggledKeybindColor = android.graphics[_0x14ae("0x17")].BLACK, nonToggleKeybindColor = android[_0x14ae("0x16")][_0x14ae("0x17")][_0x14ae("0x1a")], exitMenuTextColor = android[_0x14ae("0x16")][_0x14ae("0x17")][_0x14ae("0x265")], keybindBackgroundColor = android[_0x14ae("0x16")][_0x14ae("0x17")][_0x14ae("0x1b")], menuBackgroundColor = android[_0x14ae("0x16")][_0x14ae("0x17")][_0x14ae("0x1b")]
                    }
                })), l[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        a.dismiss()
                    }
                })), a[_0x14ae("0x65")]()
            } catch (e) {
                for (var c = 30; 1 < c; c--) print("" + e)
            }
        }
    }))
}

function friendManager() {
    ctx[_0x14ae("0x42")](new(java.lang[_0x14ae("0x23")])({
        run: function() {
            try {
                var a = new(android.app[_0x14ae("0x207")])(ctx),
                    e = (new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx), new(android.widget[_0x14ae("0x25")])(ctx)),
                    x = new(android[_0x14ae("0x24")][_0x14ae("0x2a")])(ctx),
                    t = new(android[_0x14ae("0x24")].EditText)(ctx),
                    n = new(android[_0x14ae("0x24")][_0x14ae("0x2a")])(ctx),
                    o = new(android[_0x14ae("0x24")][_0x14ae("0x2a")])(ctx),
                    i = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx),
                    _ = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx),
                    r = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx);
                x.setText(friend1name), x.setInputType(android.text[_0x14ae("0x21a")][_0x14ae("0x20a")]), t[_0x14ae("0x44")](friend2name), t[_0x14ae("0x219")](android.text[_0x14ae("0x21a")][_0x14ae("0x20a")]), n.setText(friend3name), n[_0x14ae("0x219")](android[_0x14ae("0x209")][_0x14ae("0x21a")].TYPE_CLASS_TEXT), o.setText(friend4name), o.setInputType(android.text[_0x14ae("0x21a")][_0x14ae("0x20a")]), i.setText(_0x14ae("0x266")), _[_0x14ae("0x44")](_0x14ae("0x20b")), r[_0x14ae("0x44")](_0x14ae("0x20c")), a.setTitle(_0x14ae("0x182")), e[_0x14ae("0x43")](android[_0x14ae("0x24")][_0x14ae("0x25")][_0x14ae("0x20e")]), e[_0x14ae("0x4a")](x), e[_0x14ae("0x4a")](t), e[_0x14ae("0x4a")](n), e[_0x14ae("0x4a")](o), e[_0x14ae("0x4a")](i), e[_0x14ae("0x4a")](_), e[_0x14ae("0x4a")](r), a[_0x14ae("0x20f")](e), i.setOnClickListener(new(android[_0x14ae("0x27")].View.OnClickListener)({
                    onClick: function(e) {
                        friend1name = _0x14ae("0x10"), friend2name = _0x14ae("0x11"), friend3name = _0x14ae("0x267"), friend4name = _0x14ae("0x12")
                    }
                })), _.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        friend1name = x[_0x14ae("0x217")](), friend2name = t[_0x14ae("0x217")](), friend3name = n[_0x14ae("0x217")](), friend4name = o[_0x14ae("0x217")](), a[_0x14ae("0x57")]()
                    }
                })), r[_0x14ae("0x55")](new(android.view[_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        a[_0x14ae("0x57")]()
                    }
                })), a[_0x14ae("0x65")]()
            } catch (e) {
                for (var d = 30; 1 < d; d--) print("" + e)
            }
        }
    }))
}

function towerMainMenu() {
    ctx[_0x14ae("0x42")](new(java[_0x14ae("0x22")][_0x14ae("0x23")])({
        run: function() {
            try {
                var a = new android.app.Dialog(ctx),
                    e = (new(android[_0x14ae("0x206")].Dialog)(ctx), new(android[_0x14ae("0x24")][_0x14ae("0x25")])(ctx)),
                    x = new(android.widget[_0x14ae("0x2a")])(ctx),
                    t = new android.widget.Switch(ctx),
                    n = new(android.widget[_0x14ae("0x26")])(ctx),
                    o = new(android.widget[_0x14ae("0x26")])(ctx);
                x[_0x14ae("0x218")](_0x14ae("0x268")), x[_0x14ae("0x219")](android[_0x14ae("0x209")][_0x14ae("0x21a")][_0x14ae("0x20a")]), t[_0x14ae("0x44")](_0x14ae("0x101")), t[_0x14ae("0x81")](tower), n[_0x14ae("0x44")](_0x14ae("0x20b")), o.setText("Exit"), a.setTitle(_0x14ae("0x269")), e[_0x14ae("0x43")](android[_0x14ae("0x24")][_0x14ae("0x25")][_0x14ae("0x20e")]), e[_0x14ae("0x4a")](x), e.addView(t), e[_0x14ae("0x4a")](n), e[_0x14ae("0x4a")](o), a.setContentView(e), t[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        tower ? (tower = !1, clientMessage(_0x14ae("0x26a"))) : (tower = !0, clientMessage(_0x14ae("0x102")))
                    }
                })), n[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        towervalue = x[_0x14ae("0x217")](), a[_0x14ae("0x57")]()
                    }
                })), o.setOnClickListener(new(android[_0x14ae("0x27")].View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        a[_0x14ae("0x57")]()
                    }
                })), a[_0x14ae("0x65")]()
            } catch (e) {
                for (var i = 30; 1 < i; i--) print("" + e)
            }
        }
    }))
}

function infinitereachMainMenu() {
    ctx[_0x14ae("0x42")](new(java[_0x14ae("0x22")][_0x14ae("0x23")])({
        run: function() {
            try {
                var a = new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx),
                    e = (new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx), new(android[_0x14ae("0x24")][_0x14ae("0x25")])(ctx)),
                    x = new(android[_0x14ae("0x24")][_0x14ae("0x2a")])(ctx),
                    t = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx),
                    n = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx),
                    o = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx);
                x.setHint("Infinite Reach Value"), x.setInputType(android[_0x14ae("0x209")][_0x14ae("0x21a")][_0x14ae("0x20a")]), t.setText(_0x14ae("0x26b")), t[_0x14ae("0x81")](infinitereach), n[_0x14ae("0x44")](_0x14ae("0x20b")), o[_0x14ae("0x44")]("Exit"), a[_0x14ae("0x20d")]("Infinite Reach Settings"), e[_0x14ae("0x43")](android[_0x14ae("0x24")][_0x14ae("0x25")].VERTICAL), e.addView(x), e[_0x14ae("0x4a")](t), e[_0x14ae("0x4a")](n), e.addView(o), a[_0x14ae("0x20f")](e), t[_0x14ae("0x55")](new(android.view[_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        infinitereach ? (infinitereach = !1, clientMessage(_0x14ae("0x26d"))) : (infinitereach = !0, clientMessage(_0x14ae("0x26c")))
                    }
                })), n.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        infinitereachvalue = x[_0x14ae("0x217")](), a[_0x14ae("0x57")]()
                    }
                })), o[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        a[_0x14ae("0x57")]()
                    }
                })), a[_0x14ae("0x65")]()
            } catch (e) {
                for (var i = 30; 1 < i; i--) print("" + e)
            }
        }
    }))
}

function givesecondhandMainMenu() {
    ctx.runOnUiThread(new(java.lang[_0x14ae("0x23")])({
        run: function() {
            try {
                var a = new(android.app[_0x14ae("0x207")])(ctx),
                    e = (new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx), new(android[_0x14ae("0x24")][_0x14ae("0x25")])(ctx)),
                    x = new android.widget.EditText(ctx),
                    t = new(android[_0x14ae("0x24")][_0x14ae("0x2a")])(ctx),
                    n = new(android[_0x14ae("0x24")][_0x14ae("0x2a")])(ctx),
                    o = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx),
                    i = new(android[_0x14ae("0x24")].Button)(ctx),
                    _ = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx);
                x[_0x14ae("0x218")]("ID"), x.setInputType(android[_0x14ae("0x209")][_0x14ae("0x21a")].TYPE_CLASS_TEXT), t[_0x14ae("0x218")](_0x14ae("0x24f")), t[_0x14ae("0x219")](android[_0x14ae("0x209")][_0x14ae("0x21a")][_0x14ae("0x20a")]), n.setHint(_0x14ae("0x24e")), n[_0x14ae("0x219")](android[_0x14ae("0x209")][_0x14ae("0x21a")].TYPE_CLASS_TEXT), o[_0x14ae("0x44")](_0x14ae("0x157")), o[_0x14ae("0x81")](givesecondhand), i[_0x14ae("0x44")](_0x14ae("0x20b")), _[_0x14ae("0x44")](_0x14ae("0x20c")), a[_0x14ae("0x20d")](_0x14ae("0x26e")), e[_0x14ae("0x43")](android[_0x14ae("0x24")][_0x14ae("0x25")][_0x14ae("0x20e")]), e[_0x14ae("0x4a")](x), e.addView(t), e[_0x14ae("0x4a")](n), e[_0x14ae("0x4a")](o), e.addView(i), e[_0x14ae("0x4a")](_), a[_0x14ae("0x20f")](e), o[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        givesecondhand ? (givesecondhand = !1, clientMessage(_0x14ae("0x270"))) : (givesecondhand = !0, clientMessage(_0x14ae("0x26f")))
                    }
                })), i[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        givesecondhandid = x[_0x14ae("0x217")](), givesecondhandamount = t[_0x14ae("0x217")](), givesecondhanddamage = n[_0x14ae("0x217")](), a[_0x14ae("0x57")]()
                    }
                })), _[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        a[_0x14ae("0x57")]()
                    }
                })), a[_0x14ae("0x65")]()
            } catch (e) {
                for (var r = 30; 1 < r; r--) print("" + e)
            }
        }
    }))
}

function spamenchantMainMenu() {
    ctx[_0x14ae("0x42")](new(java[_0x14ae("0x22")][_0x14ae("0x23")])({
        run: function() {
            try {
                var a = new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx),
                    e = (new(android.app[_0x14ae("0x207")])(ctx), new(android[_0x14ae("0x24")][_0x14ae("0x25")])(ctx)),
                    x = new(android.widget[_0x14ae("0x2a")])(ctx),
                    t = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx),
                    n = new(android.widget[_0x14ae("0x26")])(ctx),
                    o = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx),
                    i = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx);
                x[_0x14ae("0x218")](_0x14ae("0x271")), x[_0x14ae("0x219")](android[_0x14ae("0x209")].InputType[_0x14ae("0x20a")]), t[_0x14ae("0x44")](_0x14ae("0x15a")), t[_0x14ae("0x81")](spamenchant), n[_0x14ae("0x44")]("Enchant Toggles"), o.setText(_0x14ae("0x20b")), i[_0x14ae("0x44")]("Exit"), a[_0x14ae("0x20d")](_0x14ae("0x183")), e.setOrientation(android[_0x14ae("0x24")][_0x14ae("0x25")][_0x14ae("0x20e")]), e.addView(x), e[_0x14ae("0x4a")](t), e.addView(n), e[_0x14ae("0x4a")](o), e[_0x14ae("0x4a")](i), a[_0x14ae("0x20f")](e), t[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        spamenchant ? (spamenchant = !1, clientMessage(_0x14ae("0x273"))) : (spamenchant = !0, clientMessage(_0x14ae("0x272")))
                    }
                })), n[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        a[_0x14ae("0x57")](), menu7[_0x14ae("0x57")](), mainMenu8(), settingsMenuIsOpen = !(enchantsMenuIsOpen = !0)
                    }
                })), o.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        enchantlevel = x[_0x14ae("0x217")](), a.dismiss()
                    }
                })), i.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        a.dismiss()
                    }
                })), a.show()
            } catch (e) {
                for (var _ = 30; 1 < _; _--) print("" + e)
            }
        }
    }))
}

function autoswordMainMenu() {
    ctx[_0x14ae("0x42")](new(java[_0x14ae("0x22")][_0x14ae("0x23")])({
        run: function() {
            try {
                var a = new(android.app[_0x14ae("0x207")])(ctx),
                    e = (new(android[_0x14ae("0x206")].Dialog)(ctx), new(android[_0x14ae("0x24")].LinearLayout)(ctx)),
                    x = new(android[_0x14ae("0x24")][_0x14ae("0x2a")])(ctx),
                    t = new(android.widget[_0x14ae("0x7f")])(ctx),
                    n = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx),
                    o = new(android.widget[_0x14ae("0x7f")])(ctx),
                    i = new android.widget.Switch(ctx),
                    _ = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx),
                    r = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx),
                    d = new(android[_0x14ae("0x24")].Button)(ctx),
                    l = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx);
                x[_0x14ae("0x218")]("Auto Sword Activation Range"), x[_0x14ae("0x219")](android.text[_0x14ae("0x21a")][_0x14ae("0x20a")]), t[_0x14ae("0x44")](_0x14ae("0xac")), t.setChecked(autosword), n[_0x14ae("0x44")](_0x14ae("0x274")), n.setChecked(selectDiamondSword), o[_0x14ae("0x44")](_0x14ae("0x275")), o[_0x14ae("0x81")](selectGoldSword), i[_0x14ae("0x44")]("Select Iron Sword"), i.setChecked(selectIronSword), _.setText(_0x14ae("0x276")), _[_0x14ae("0x81")](selectStoneSword), r[_0x14ae("0x44")](_0x14ae("0x277")), r[_0x14ae("0x81")](selectWoodenSword), d.setText(_0x14ae("0x20b")), l[_0x14ae("0x44")](_0x14ae("0x20c")), a[_0x14ae("0x20d")](_0x14ae("0x278")), e.setOrientation(android[_0x14ae("0x24")].LinearLayout.VERTICAL), e[_0x14ae("0x4a")](x), e[_0x14ae("0x4a")](t), e[_0x14ae("0x4a")](n), e.addView(o), e[_0x14ae("0x4a")](i), e[_0x14ae("0x4a")](_), e.addView(r), e[_0x14ae("0x4a")](d), e[_0x14ae("0x4a")](l), a[_0x14ae("0x20f")](e), t[_0x14ae("0x55")](new(android.view[_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        autosword ? (autosword = !1, clientMessage(_0x14ae("0x27b"))) : (autosword = !0, print(_0x14ae("0x279")), clientMessage(_0x14ae("0x27a")))
                    }
                })), n[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        selectDiamondSword = !selectDiamondSword
                    }
                })), o[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        selectGoldSword = !selectGoldSword
                    }
                })), i.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        selectIronSword = !selectIronSword
                    }
                })), _[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        selectStoneSword = !selectStoneSword
                    }
                })), r[_0x14ae("0x55")](new(android.view[_0x14ae("0x28")].OnClickListener)({
                    onClick: function(e) {
                        selectWoodenSword = !selectWoodenSword
                    }
                })), d[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        autoswordrange = x[_0x14ae("0x217")](), a.dismiss()
                    }
                })), l.setOnClickListener(new(android[_0x14ae("0x27")].View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        a[_0x14ae("0x57")]()
                    }
                })), a[_0x14ae("0x65")]()
            } catch (e) {
                for (var c = 30; 1 < c; c--) print("" + e)
            }
        }
    }))
}

function longjumpMainMenu() {
    ctx[_0x14ae("0x42")](new(java[_0x14ae("0x22")].Runnable)({
        run: function() {
            try {
                var a = new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx),
                    e = (new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx), new(android[_0x14ae("0x24")][_0x14ae("0x25")])(ctx)),
                    x = new(android.widget[_0x14ae("0x2a")])(ctx),
                    t = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx),
                    n = new(android[_0x14ae("0x24")].Button)(ctx),
                    o = new(android.widget[_0x14ae("0x26")])(ctx);
                x.setHint(_0x14ae("0x27c")), x[_0x14ae("0x219")](android[_0x14ae("0x209")][_0x14ae("0x21a")][_0x14ae("0x20a")]), t[_0x14ae("0x44")](_0x14ae("0x27d")), t[_0x14ae("0x81")](longjump), n.setText(_0x14ae("0x20b")), o[_0x14ae("0x44")](_0x14ae("0x20c")), a[_0x14ae("0x20d")](_0x14ae("0x27e")), e[_0x14ae("0x43")](android[_0x14ae("0x24")][_0x14ae("0x25")][_0x14ae("0x20e")]), e[_0x14ae("0x4a")](x), e.addView(t), e.addView(n), e.addView(o), a[_0x14ae("0x20f")](e), t[_0x14ae("0x55")](new(android[_0x14ae("0x27")].View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        longjump ? (longjump = !1, clientMessage(_0x14ae("0x280"))) : (longjump = !0, clientMessage(_0x14ae("0x27f")))
                    }
                })), n[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        longjumpvalue = x[_0x14ae("0x217")](), a[_0x14ae("0x57")]()
                    }
                })), o[_0x14ae("0x55")](new(android.view[_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        a[_0x14ae("0x57")]()
                    }
                })), a.show()
            } catch (e) {
                for (var i = 30; 1 < i; i--) print("" + e)
            }
        }
    }))
}

function specificAimMainMenu() {
    ctx[_0x14ae("0x42")](new(java[_0x14ae("0x22")].Runnable)({
        run: function() {
            try {
                var a = new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx),
                    e = (new(android[_0x14ae("0x206")][_0x14ae("0x207")])(ctx), new(android[_0x14ae("0x24")][_0x14ae("0x25")])(ctx)),
                    x = new(android[_0x14ae("0x24")][_0x14ae("0x2a")])(ctx),
                    t = new(android[_0x14ae("0x24")][_0x14ae("0x7f")])(ctx),
                    n = new(android.widget[_0x14ae("0x26")])(ctx),
                    o = new(android[_0x14ae("0x24")][_0x14ae("0x26")])(ctx);
                x[_0x14ae("0x218")](specificPlayerTag), x[_0x14ae("0x219")](android[_0x14ae("0x209")].InputType[_0x14ae("0x20a")]), t[_0x14ae("0x44")](_0x14ae("0x281")), t[_0x14ae("0x81")](specificAim), n.setText(_0x14ae("0x20b")), o[_0x14ae("0x44")](_0x14ae("0x20c")), a[_0x14ae("0x20d")]("Specific Aim Settings"), e[_0x14ae("0x43")](android[_0x14ae("0x24")][_0x14ae("0x25")].VERTICAL), e[_0x14ae("0x4a")](x), e[_0x14ae("0x4a")](t), e[_0x14ae("0x4a")](n), e.addView(o), a[_0x14ae("0x20f")](e), t[_0x14ae("0x55")](new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        specificAim ? (specificAim = !1, clientMessage(_0x14ae("0x283"))) : (specificAim = !0, clientMessage(_0x14ae("0x282")))
                    }
                })), n.setOnClickListener(new(android[_0x14ae("0x27")].View[_0x14ae("0x56")])({
                    onClick: function(e) {
                        specificPlayerTag = x[_0x14ae("0x217")](), a[_0x14ae("0x57")]()
                    }
                })), o.setOnClickListener(new(android[_0x14ae("0x27")][_0x14ae("0x28")][_0x14ae("0x56")])({
                    onClick: function(e) {
                        a.dismiss()
                    }
                })), a[_0x14ae("0x65")]()
            } catch (e) {
                for (var i = 30; 1 < i; i--) print("" + e)
            }
        }
    }))
}
HBDelay(), spamdelay(), raspamdelay(), stspamdelay(), antilagmodules1(), antilagmodules2(), antikbfunc(), bypassglideFunc();
