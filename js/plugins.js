// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"Basic plugin for manipulating important parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"GALV_MessageSoundEffects","status":true,"description":"Play sound effects when during Show Text event commands.","parameters":{"Delay Time":"4","Default Talk SE":"Miniasriel,100,100","Default Confirm SE":"","-----------":"","Quick SE 1":"","Quick SE 2":"","Quick SE 3":"","Quick SE 4":""}},
{"name":"SRD_ShakingText","status":true,"description":"Allows you to add Shaking Text to your Show Text events!","parameters":{"Reset Shaking per Box":"true","Default Shaking Power":"$.randomNum(0.2, 0.5)","Default Shaking Max":"1","Default Wave Power":"0.5","Default Wave Max":"4","Default Slide Power":"0.5","Default Slide Max":"4","Copy Outline":"true"}},
{"name":"YEP_MessageCore","status":true,"description":"v1.19 Adds more features to the Message Window to customized\nthe way your messages appear and functions.","parameters":{"---General---":"","Default Rows":"4","Default Width":"Graphics.boxWidth","Face Indent":"Window_Base._faceWidth + 24","Fast Forward Key":"pagedown","Enable Fast Forward":"true","Word Wrapping":"false","Description Wrap":"false","Word Wrap Space":"false","Tight Wrap":"false","---Font---":"","Font Name":"GameFont","Font Name CH":"SimHei, Heiti TC, sans-serif","Font Name KR":"Dotum, AppleGothic, sans-serif","Font Size":"28","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","Font Outline":"4","Maintain Font":"false","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[6]","Name Box Auto Close":"false"}},
{"name":"Alpha_NETZ","status":true,"description":"(v.0.8)[PRO] Мультиплеер для RPG Maker","parameters":{"ANETZ":"","connection:s":"{\"serverIp\":\"anetzglobal.ru\",\"serverPort\":\"3034\",\"isHttpsConnection:b\":\"true\"}","isCustomGameId:b":"false","customGameId":"","spacer|gamesettings":"","gameModeSettingsGroup":"","onlySameMap:b":"false","singlePlayerAllowed:b":"true","isReadyStatusCheck:b":"false","roomFilter:b":"false","lobbyChat:b":"true","lobbyChatIsGlobal:b":"false","joinStartedAllowed:b":"true","joinStartedAndLoadedAllowed:b":"true","onJoinCE:int":"1","isJoinRandomOptionExists:b":"true","saveLoadGame:b":"true","networkStatusIcons:b":"true","isMapEncountersGlobal:b":"false","inGameChat:b":"true","chatStartMessage":"\\}Добро пожаловать","chatOpenCloseKey":"t","chatSayKey":"t","clickOnChatToSay:b":"true","chatAutoOpen:b":"false","chatMessagesSettings:struct":"{\"maxlength:i\":\"32\",\"forbiddenEscapeCodes:str\":\"V\",\"iconsSize:i\":\"18\",\"allowEmotions:b\":\"true\"}","chatInputSceneVisualSettings:struct":"{\"mapChannelButtonPosition:s\":\"{\\\"x:e\\\":\\\"4\\\",\\\"y:e\\\":\\\"6\\\"}\",\"allChannelButtonPosition:s\":\"{\\\"x:e\\\":\\\"104\\\",\\\"y:e\\\":\\\"6\\\"}\",\"inputSceneOkButtonPosition:s\":\"{\\\"x:e\\\":\\\"356\\\",\\\"y:e\\\":\\\"284\\\"}\"}","inGameChatWindowVisualSettings:struct":"{\"size:s\":\"{\\\"w:int\\\":\\\"312\\\",\\\"h:int\\\":\\\"192\\\"}\",\"position:s\":\"{\\\"x:e\\\":\\\"1\\\",\\\"y:e\\\":\\\"Graphics.height - 193\\\"}\",\"notActiveOpacity:i\":\"140\",\"maxMessages:i\":\"9\",\"firstChatMessageMargin:s\":\"{\\\"x:int\\\":\\\"3\\\",\\\"y:int\\\":\\\"145\\\"}\"}","inGameChatTextLineSettings:struct":"{\"size:s\":\"{\\\"w:int\\\":\\\"306\\\",\\\"h:int\\\":\\\"18\\\"}\",\"backgroundA:s\":\"{\\\"color:str\\\":\\\"#59a3d9\\\",\\\"opacity:i\\\":\\\"40\\\"}\",\"backgroundB:s\":\"{\\\"color:str\\\":\\\"#59a3d9\\\",\\\"opacity:i\\\":\\\"70\\\"}\",\"textLine:s\":\"{\\\"visible:bool\\\":\\\"true\\\",\\\"size:struct\\\":\\\"{\\\\\\\"w:int\\\\\\\":\\\\\\\"520\\\\\\\",\\\\\\\"h:int\\\\\\\":\\\\\\\"20\\\\\\\"}\\\",\\\"font:struct\\\":\\\"{\\\\\\\"face:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size:int\\\\\\\":\\\\\\\"14\\\\\\\",\\\\\\\"italic:bool\\\\\\\":\\\\\\\"false\\\\\\\"}\\\",\\\"margins:struct\\\":\\\"{\\\\\\\"x:int\\\\\\\":\\\\\\\"4\\\\\\\",\\\\\\\"y:int\\\\\\\":\\\\\\\"-3\\\\\\\"}\\\"}\",\"textFormat:str\":\"\\\\}\\\\}\\\\C[3][%1] \\\\{\\\\{\\\\C[2]%2 \\\\C[0]%3\",\"textFormatForPlayer:str\":\"\\\\}\\\\}\\\\C[3][%1]\\\\C[1][ME]\\\\{\\\\{ \\\\C[0]%3\",\"textFormatForSystem:str\":\"\\\\}\\\\}\\\\C[3][%1]\\\\{\\\\{ \\\\C[6]%3\",\"animationSpeedInPx:i\":\"18\",\"channelAll:str\":\"ALL\",\"channelMap:str\":\"MAP\"}","playerMenuSettingsGroup:b":"true","defaultIPLMenuCommands":"","PlayerMenuItem_trade:s":"{\"text:str\":\"Обмен\",\"visible:b\":\"true\",\"switchId:i\":\"0\",\"minDist:i\":\"1\",\"value:i\":\"0\"}","PlayerMenuItem_status:s":"{\"text:str\":\"Статус\",\"visible:b\":\"true\",\"switchId:i\":\"0\",\"minDist:i\":\"0\",\"value:i\":\"0\"}","PlayerMenuItem_follow:s":"{\"text:str\":\"Следовать\",\"visible:b\":\"true\",\"switchId:i\":\"0\",\"minDist:i\":\"0\",\"value:i\":\"0\"}","userIPLMenuCommands:structA":"[]","tradeSettingsGroup":"","isTradeModalWindowActive:b":"true","tradeModalWindow_openSE":"Bell3","tradeModalWindow_text":"Принят \\C[1]Обмен\\C[0] от \\C[2]%1\\C[0]?","tradeModalWindow_hkYes":"y","tradeModalWindow_hkNo":"n","spacer|playerssettings":"","playersSettingsGroup":"","actorsForNetwork:intA":"[\"1\",\"2\",\"3\",\"4\"]","maxPlayersInRoom:int":"4","isActorSelectionAllowed:b":"true","isSinglePlayerStartAllowed:b":"true","playerActorNameType":"Instead Nickname","isUseNameplates:b":"true","isShowActorNameInNameplate:b":"false","isShowMyNameplate:b":"true","nameplatesDB:structA":"[\"{\\\"id:str\\\":\\\"default\\\",\\\"margins:s\\\":\\\"{\\\\\\\"x:int\\\\\\\":\\\\\\\"-27\\\\\\\",\\\\\\\"y:int\\\\\\\":\\\\\\\"-20\\\\\\\"}\\\",\\\"backImage:s\\\":\\\"{\\\\\\\"visible:b\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"image:str\\\\\\\":\\\\\\\"\\\\\\\"}\\\",\\\"backImageMargins:s\\\":\\\"{\\\\\\\"x:int\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"y:int\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"backRect:s\\\":\\\"{\\\\\\\"visible:bool\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"size:struct\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"w:int\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"54\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"h:int\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"18\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"fillColor:str\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"fillOpacity:i\\\\\\\":\\\\\\\"120\\\\\\\",\\\\\\\"borderColor:str\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"borderThickness:i\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"borderOpacity:i\\\\\\\":\\\\\\\"255\\\\\\\"}\\\",\\\"backRectMargins:s\\\":\\\"{\\\\\\\"x:int\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"y:int\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"text:s\\\":\\\"{\\\\\\\"visible:bool\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"size:struct\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"w:int\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"54\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"h:int\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"18\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"font:struct\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"face:str\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"size:int\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"12\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"italic:bool\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"false\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"margins:struct\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"x:int\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"y:int\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\"}\\\\\\\"}\\\"}\"]","playerLeaveGameCommonEvent:int":"0","globalData:s":"{\"globalVariablesIds:intA\":\"[]\",\"globalSwitchesIds:intA\":\"[]\"}","spacer|othersettings":"","otherSettingsGroup":"","textInputMaxLength:i":"12","localeDB:struct":"{\"network\":\"Мультиплеер\",\"createRoom\":\"Создать комнату\",\"joinRoom\":\"Присоединиться к комнате\",\"joinRandomRoom\":\"Случайная комната\",\"settings\":\"Настройки\",\"start\":\"Начать\",\"leave\":\"Выйти\",\"joinGame\":\"Присоединиться к игре\",\"ready\":\"Готов\",\"character\":\"Персонаж\",\"close\":\"Закрыть\",\"welcome\":\"С возвращением, %1\",\"playersCount\":\"Игроков в сети: %1\"}","spacer|endHolder":""}},
{"name":"AltimitMovement","status":true,"description":"Vector-based character movement and collision","parameters":{"player":"","player_collider_list":"\"<circle cx='0.5' cy='0.7' r='0.25' />\"","player_circular_movement":"true","":"","followers":"","followers_distance":"1.50","followers_collider_list":"\"<circle cx='0.5' cy='0.7' r='0.25' />\"","followers_circular_movement":"true","vehicles":"","vehicles_boat_collider_list":"\"<circle cx='0.5' cy='0.5' r='0.333' />\"","vehicles_ship_collider_list":"\"<circle cx='0.5' cy='0.5' r='0.5' />\"","vehicles_airship_collider_list":"\"<circle cx='0.5' cy='0.5' r='0.25' />\"","event":"","event_character_collider_list":"\"<circle cx='0.5' cy='0.7' r='0.25' />\"","event_tile_collider_list":"\"<rect x='0' y='0' width='1' height='1' />\"","presets":"[]","move_route":"","move_route_align_grid":"true","input_config":"","input_config_enable_touch_mouse":"true","input_config_gamepad_mode":"3","play_test":"","play_test_collision_mesh_caching":"false"}},
{"name":"GALV_MessageBusts","status":true,"description":"(v.2.8) Displays a bust image instead of selected face image","parameters":{"Bust Priority":"0","Bust Position":"0","Text X Offset":"390","Fade Out Speed":"32","Filename Append":""}}
];
