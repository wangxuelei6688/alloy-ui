AUI.add("aui-editor-toolbar-plugin",function(S){var AH=S.Lang,c=AH.isArray,T=AH.isFunction,AC=S.ClassNameManager.getClassName,h="editortoolbar",AF="toolbar",W="alignment",d="align-left",u="align-inline",V="align-block",AG="align-right",j="color",o="content",P="font",AB="indent",L="input",q="insert",f="insertimage",v="insertlink",r="list",X="select",D="source",M="styles",x="subscript",w="text",m="circle-check",B="close",z={backcolor:true,forecolor:true,format:true,insertimage:true,insertlink:true,source:true,styles:true},Z=["b","big","font","em","i","small","s","strike","strong","sub","sup","u"],Q=AC("button","holder"),R=AC("field",L),Y=AC("field",L,"text"),H=AC("field","label"),g=AC("field","numeric"),N=AC(h,"align","node"),a=AC(h,f),K=AC(h,v),C=AC(h,X,"fontname"),AA=AC(h,X,"fontsize"),F=AC(h,"size","separator"),I=AC(h,D,"textarea"),E=AC("state","active"),J=AC(h),b=AC(h,o),p='<div class="'+N+'"></div>',O="<a></a>",e="<img />",l='<a href="{0}"{2}>{1}</a>',G='<textarea class="'+I+'"></textarea>',AE='<div class="'+J+'"><div class="'+b+'"></div></div>',s='<div class="'+Q+'"></div>',AD='<select class="'+C+'">{0}</select>',U='<option selected="selected"></option>'+"<option>Arial</option>"+"<option>Arial Black</option>"+"<option>Comic Sans MS</option>"+"<option>Courier New</option>"+"<option>Lucida Console</option>"+"<option>Tahoma</option>"+"<option>Times New Roman</option>"+"<option>Trebuchet MS</option>"+"<option>Verdana</option>",t='<select class="'+AA+'">{0}</select>',n='<option selected="selected"></option>'+'<option value="1">10</option>'+'<option value="2">13</option>'+'<option value="3">16</option>'+'<option value="4">18</option>'+'<option value="5">24</option>'+'<option value="6">32</option>'+'<option value="7">48</option>',k='<span class="'+F+'">x</span>';var i=S.Component.create({NAME:h,NS:AF,EXTENDS:S.Plugin.Base,ATTRS:{append:{value:null},groups:{value:[{type:P},{type:w},{type:x},{type:j},{type:W},{type:AB},{type:r},{type:q},{type:D}]}},prototype:{initializer:function(){var Ac=this;var AQ=Ac.get("host");var AO=AQ.frame.get("container");var AZ=Ac.get("append");var Ad=Ac.get("groups");var AM=S.Node.create(AE);var AP=AM.one("."+b);AO.placeBefore(AM);var AS={boundingBox:AM,contentBox:AP};var AR=[];if(AZ!=null&&c(AZ)){var AT=AZ.length;for(var AX=0;AX<AT;AX++){var Ab=AZ[AX];if(Ab.index!=null){var AK=Ac._isGroupIncluded("type",Ad,Ab.type);if(AK!=-1){Ad.splice(AK,1);}Ad.splice(Math.min(Ab.index,Ad.length),0,Ab);}else{Ad.push(Ab);}}}for(var AX=0;AX<Ad.length;AX++){var AL=Ad[AX];var AU=GROUPS[AL.type];var AJ=[];var AY=[];var AN;if(c(AL.include)){var AI=AL.include.length;for(var AW=0;AW<AI;AW++){var AK=Ac._isGroupIncluded("icon",AU.children,AL.include[AW]);if(AK!=-1){AY.push(AU.children[AK]);}}}else{AY=AU.children;}for(var AW=0;AW<AY.length;AW++){var A=AY[AW];if(!A.select){var Af=YUI.AUI.defaults.EditorToolbar.STRINGS[A._titleKey];A.title=(Af!=null?Af:y[A._titleKey]);AJ.push(A);}}if(AJ.length>0){AN=new S.Toolbar(S.merge(AU.config,AL.toolbar,{children:AY})).render(AP);AR.push(AN);}var AV=AU.generate;if(AV&&T(AV.init)){AV.init.call(Ac,AQ,AS);}for(var AW=0;AW<AY.length;AW++){var Ab=AY[AW];var Aa=Ab.icon;if(AV&&T(AV[Aa])){var Ae=(AL.config?AL.config[Aa]:null);AS.button=(Ab.select||!AN?null:AN.item(AW));AV[Aa].call(Ac,AQ,AS,Ae);}}}AS.toolbars=AR;AP.delegate("click",function(Aj){var Ah=this;var Ai=S.Widget.getByNode(Aj.currentTarget);if(Ai){var Ag=Ai.get("icon").split("-");if(!z[Ag[0]]){Ah.execCommand(Ag[0],(Ag[1]?Ag[1]:""));Ah.focus();}}},"button",AQ);},_isGroupIncluded:function(AI,AK,AL){var A=this;for(var AJ=0;AJ<AK.length;AJ++){if(AK[AJ][AI]==AL){return AJ;}}return -1;},_updateToolbar:function(A,AN){var AO=this;if(A.changedNode){var AJ=A.commands;var AP=AN.toolbars;var AR=function(AT,AS,AV){var AU=!!(AJ[AT.get("icon")]);AT.StateInteraction.set("active",AU);};if(AP){for(var AL=0;AL<AP.length;AL++){AP[AL].each(AR);}}var AI=A.fontFamily;var AM=AN._fontNameOptions;var AQ=A.fontSize;var AK=AN._fontSizeOptions;if(AM){AM.item(0).set("selected",true);AM.each(function(AT,AS,AV){var AU=AT.get("value").toLowerCase();if(AU===AI.toLowerCase()){AT.set("selected",true);}});}if(AK){AQ=AQ.replace("px","");AK.item(0).set("selected",true);AK.each(function(AU,AT,AW){var AV=AU.get("value").toLowerCase();var AS=AU.get("text");if(AS===AQ){AU.set("selected",true);}});}}}}});i.generateOverlay=function(AK,AJ,A){var AI=new S["OverlayContext"+(A?"Panel":"")](S.merge({align:{node:AK,points:["tl","bl"]},hideOn:"click",showOn:"click",trigger:AK},AJ)).render();return AI;};i.generateColorPicker=function(AN,AK,AJ,AO){var AM=AK.button;var AI=AM.get("boundingBox");var A=new S.ColorPicker(S.merge({align:{node:AI,points:["tl","bl"]},trigger:AI},AJ));if(AJ&&AJ.plugins){for(var AL=0;AL<AJ.plugins.length;AL++){A.plug(AJ.plugins[AL],AJ);}}A.render(S.getBody());A.on("colorChange",function(AR){var AP=this;var AQ=A.get("rgb");AN.execCommand(AO,AQ.hex);AN.focus();});};i.openOverlayToAlignNode=function(AJ,AI,AK,A){var AM=AK.getXY();var AL=A.getXY();AM=[AM[0]+AL[0],AM[1]+AL[1]];AI.setStyle("width",A.get("offsetWidth"));AI.setStyle("height",A.get("offsetHeight"));AI.setXY(AM);AI.show();AJ.set("align",{node:AI,points:["tl","bc"]});AJ.show();};var y={ALIGN:"Align",ALIGN_BLOCK:"Block",ALIGN_LEFT:"Left",ALIGN_INLINE:"Inline",ALIGN_RIGHT:"Right",BACKCOLOR:"Background Color",BOLD:"Bold",BORDER:"Border",DESCRIPTION:"Description",EDIT_IMAGE:"Edit Image",EDIT_LINK:"Edit Link",FORECOLOR:"Foreground Color",IMAGE_URL:"Image URL",INDENT:"Indent",INSERT:"Insert",INSERT_IMAGE:"Insert Image",INSERT_LINK:"Insert Link",INSERT_ORDERED_LIST:"Insert Numbered List",INSERT_UNORDERED_LIST:"Insert Bulleted List",ITALIC:"Italic",JUSTIFY_LEFT:"Justify Left",JUSTIFY_CENTER:"Justify Center",JUSTIFY_RIGHT:"Justify Right",LINE_THROUGH:"Line Through",LINK_URL:"Link URL",OPEN_IN_NEW_WINDOW:"Open in new window",OUTDENT:"Outdent",PADDING:"Padding",REMOVE_FORMAT:"Format Source",SAVE:"Save",SIZE:"Size",SOURCE:"Source",SUBSCRIPT:"Subscript",SUPERSCRIPT:"Superscript",STYLES:"Styles",UNDERLINE:"Underline"};
S.mix(YUI.AUI.defaults,{EditorToolbar:{STRINGS:y}});GROUPS={};GROUPS[W]={children:[{icon:"justifyleft",_titleKey:"JUSTIFY_LEFT"},{icon:"justifycenter",_titleKey:"JUSTIFY_CENTER"},{icon:"justifyright",_titleKey:"JUSTIFY_RIGHT"}]};GROUPS[j]={children:[{icon:"forecolor",_titleKey:"FORECOLOR"},{icon:"backcolor",_titleKey:"BACKCOLOR"}],generate:{forecolor:function(AK,AJ,AI){var A=this;i.generateColorPicker(AK,AJ,AI,"forecolor");},backcolor:function(AK,AJ,AI){var A=this;i.generateColorPicker(AK,AJ,AI,"backcolor");}}};GROUPS[P]={children:[{icon:"fontname",select:true},{icon:"fontsize",select:true}],generate:{init:function(AK,AJ){var A=this;var AI=AJ.contentBox;S.delegate("change",function(AN){var AL=this;var AP=AN.currentTarget;var AM=AP.get("className");var AO=AM.substring(AM.lastIndexOf("-")+1);var AQ=AP.get("value");AK.execCommand(AO,AQ);AK.focus();},AI,"select");AK.after("nodeChange",function(AM){var AL=this;switch(AM.changedType){case"keyup":case"mousedown":AL._updateToolbar(AM,AJ);break;}},A);},fontname:function(AN,AM,AL){var A=this;var AI=AM.contentBox;var AK;var AO=[U];if(AL&&AL.optionHtml){AO[0]=AL.optionHtml;}AK=AH.sub(AD,AO);AI.append(AK);var AJ=AI.all("."+C+" option");AM._fontNameOptions=AJ;},fontsize:function(AN,AM,AL){var A=this;var AI=AM.contentBox;var AK;var AO=[n];if(AL&&AL.optionHtml){AO[0]=AL.optionHtml;}AK=AH.sub(t,AO);AI.append(AK);var AJ=AI.all("."+AA+" option");AM._fontSizeOptions=AJ;}}};GROUPS[AB]={children:[{icon:"indent",_titleKey:"INDENT"},{icon:"outdent",_titleKey:"OUTDENT"}]};GROUPS[q]={children:[{icon:"insertimage",_titleKey:"INSERT_IMAGE"},{icon:"insertlink",_titleKey:"INSERT_LINK"}],generate:{insertimage:function(AL,AV,Ae){var Ac=this;var A=AV.button;var AP=A.get("boundingBox");var Ab=i.generateOverlay(AP,Ae,true);var AY=Ab.get("contentBox");var AT=new S.Panel({collapsible:false,title:YUI.AUI.defaults.EditorToolbar.STRINGS.INSERT_IMAGE,icons:[{icon:B,handler:{fn:Ab.hide,context:Ab}}]}).render(AY);AY=AT.bodyNode;if(Ae&&Ae.dataBrowser){Ae.dataBrowser.render(AY);}else{var AQ=AL.frame._iframe;var AN;var Af;var Ad=new S.Form({cssClass:a,labelAlign:"left"}).render(AY);var AS=[{labelText:"none",value:"none"}];for(var AZ=1;AZ<6;AZ++){AS.push({labelText:AZ+"px",value:AZ+"px solid"});}Ad.add([{id:"imageURL",labelText:YUI.AUI.defaults.EditorToolbar.STRINGS.IMAGE_URL},{id:"size",labelText:YUI.AUI.defaults.EditorToolbar.STRINGS.SIZE,type:"hidden"},{id:"width",labelText:false,cssClass:g},{id:"height",labelText:false,cssClass:g},{id:"padding",labelText:YUI.AUI.defaults.EditorToolbar.STRINGS.PADDING},new S.Select({id:"border",labelText:YUI.AUI.defaults.EditorToolbar.STRINGS.BORDER,options:AS}),{id:"align",labelText:YUI.AUI.defaults.EditorToolbar.STRINGS.ALIGN,type:"hidden"},{id:"description",labelText:YUI.AUI.defaults.EditorToolbar.STRINGS.DESCRIPTION},{id:"linkURL",labelText:YUI.AUI.defaults.EditorToolbar.STRINGS.LINK_URL},{id:"openInNewWindow",labelText:YUI.AUI.defaults.EditorToolbar.STRINGS.OPEN_IN_NEW_WINDOW,type:"checkbox"}],true);Ad.getField("width").get("boundingBox").placeAfter(k);var AM=Ad.get("contentBox");var Aa=S.Node.create(s);var AU=Ad.getField("openInNewWindow");var AX=new S.ButtonItem({icon:m,label:YUI.AUI.defaults.EditorToolbar.STRINGS.INSERT}).render(Aa);AX.on("click",function(Ah){var Ar=this;var Ai;var Al;var Ap;if(AN){Al=AN;Ap=AN.get("parentNode");if(Ap.get("tagName").toLowerCase()=="a"){Ai=Ap;}}else{Al=S.Node.create(e);}var Ak=Ad.get("fieldValues");var Aq=Ak.description;var Am={src:Ak.imageURL,title:Aq,alt:Aq};var Ao={border:Ak.border};var As=parseInt(Ak.height,10);var Aj=parseInt(Ak.width,10);if(!isNaN(As)){Am.height=As;}if(!isNaN(Aj)){Am.width=Aj;}var An=parseInt(Ak.padding,10);if(!isNaN(An)){Ao.padding=An;}AW.some(function(Av,Au,Ax){var At=this;var Aw=Av.StateInteraction.get("active");if(Aw){Ao.display="";switch(Au){case 0:Am.align="left";break;case 1:Am.align="";break;case 2:Am.align="center";Ao.display="block";break;case 3:Am.align="right";break;}return true;}});Al.setAttrs(Am);Al.setStyles(Ao);var Ag=Ak.linkURL;if(Ag){if(!Ai){Ai=S.Node.create(O);if(AN){Ap.insert(Ai,AN);}Ai.append(Al);}Ai.setAttribute("href",Ag);Ai.setAttribute("target",(AU.get("node").get("checked")?"_blank":""));Al=Ai;}else{if(AN&&Ai){Ap.insert(AN,Ai);Ai.remove(true);}}if(!AN&&Af&&Af.anchorNode){Af.anchorNode.append(Al);}Ab.hide();});var AR=S.Node.create(e);var AI=Ad.getField("height");var AJ=Ad.getField("width");AR.on("load",function(Ah){var Ag=Ah.currentTarget;if(!AI.get("value")||!AJ.get("value")){Ad.set("values",{height:Ag.get("height"),width:Ag.get("width")});}});Ad.getField("imageURL").get("node").on("blur",function(Ag){AR.set("src",this.val());});AM.append(Aa);var AW=new S.Toolbar({activeState:true,children:[{icon:d,title:YUI.AUI.defaults.EditorToolbar.STRINGS.ALIGN_LEFT},{icon:u,title:YUI.AUI.defaults.EditorToolbar.STRINGS.ALIGN_INLINE},{icon:V,title:YUI.AUI.defaults.EditorToolbar.STRINGS.ALIGN_BLOCK},{icon:AG,title:YUI.AUI.defaults.EditorToolbar.STRINGS.ALIGN_RIGHT}]});AW.after("buttonitem:click",function(Ah){var Ag=Ah.target;AW.each(function(Aj,Ai,Ak){if(Aj!=Ag){Aj.StateInteraction.set("active",false);}});});AW.render(Ad.getField("align").get("contentBox"));Ab.on("show",function(Ag){if(!Af||!Af.anchorNode){var Ah=AL.getInstance();AL.focus();Af=new Ah.Selection();}});Ab.after("hide",function(Ag){Ad.resetValues();AW.each(function(Ai,Ah,Aj){Ai.StateInteraction.set("active",false);});AU.get("node").set("checked",false);AT.set("title",YUI.AUI.defaults.EditorToolbar.STRINGS.INSERT_IMAGE);AX.set("label",YUI.AUI.defaults.EditorToolbar.STRINGS.INSERT);AK.hide();Ab.set("align",{node:AP,points:["tl","bl"]});AN=null;});AQ.on("mouseout",function(Ag){var Ah=AL.getInstance();Af=new Ah.Selection();});var AK=S.Node.create(p);AK.hide();S.getBody().append(AK);function AO(){var Ag=AL.getInstance();Ag.one("body").delegate("click",function(Am){var Ah=this;if(AN!=Am.currentTarget){var Aj=Am.currentTarget;var Al=Aj.get("parentNode");var Ai=Aj.getStyle("borderWidth");var An=Aj.getStyle("padding");var Ao=(Al.get("tagName").toLowerCase()=="a");
Ad.set("values",{border:(Ai?Ai+" solid":""),description:Aj.get("alt"),height:Aj.get("height"),imageURL:Aj.get("src"),linkURL:(Ao?Al.get("href"):""),width:Aj.get("width"),padding:(An?parseInt(An):"")});var Ak=1;switch(Aj.getAttribute("align")){case"left":Ak=0;break;case"center":Ak=2;break;case"right":Ak=3;break;}AW.item(Ak).StateInteraction.set("active",true);AU.get("node").attr("checked",(Ao&&Al.getAttribute("target")=="_blank"));AT.set("title",YUI.AUI.defaults.EditorToolbar.STRINGS.EDIT_IMAGE);AX.set("label",YUI.AUI.defaults.EditorToolbar.STRINGS.SAVE);AN=Aj;i.openOverlayToAlignNode(Ab,AK,AQ,Aj);}},"img");}if(AL.getInstance()){AO();}else{AL.on("frame:ready",AO);}}},insertlink:function(AK,AS,AY){var AX=this;var A=AS.button;var AM=A.get("boundingBox");var AW=i.generateOverlay(AM,AY,true);var AU=AW.get("contentBox");var AQ=new S.Panel({collapsible:false,title:YUI.AUI.defaults.EditorToolbar.STRINGS.INSERT_LINK,icons:[{icon:B,handler:{fn:AW.hide,context:AW}}]}).render(AU);AU=AQ.bodyNode;var AN=AK.frame._iframe;var AL;var AZ;var AP=new S.Form({cssClass:K,labelAlign:"left"}).render(AU);AP.add([{id:"description",labelText:YUI.AUI.defaults.EditorToolbar.STRINGS.DESCRIPTION},{id:"linkURL",labelText:YUI.AUI.defaults.EditorToolbar.STRINGS.LINK_URL},{id:"openInNewWindow",labelText:YUI.AUI.defaults.EditorToolbar.STRINGS.OPEN_IN_NEW_WINDOW,type:"checkbox"}],true);var AO=AP.get("contentBox");var AV=S.Node.create(s);var AR=AP.getField("openInNewWindow");var AT=new S.ButtonItem({icon:m,label:YUI.AUI.defaults.EditorToolbar.STRINGS.INSERT}).render(AV);AT.on("click",function(Ac){var Aa=this;var Ab=AP.get("fieldValues");if(AL){AL.setAttribute("href",Ab.linkURL);AL.set("innerHTML",Ab.description);if(AR.get("node").get("checked")){AL.setAttribute("target","_blank");}else{AL.setAttribute("target","");}}else{AK.execCommand("inserthtml",AH.sub(l,[Ab.linkURL,Ab.description,(AR.get("node").get("checked")?' target="_blank"':"")]));}AW.hide();});AO.append(AV);AW.after("hide",function(Aa){AP.resetValues();AR.get("node").set("checked",false);AQ.set("title",YUI.AUI.defaults.EditorToolbar.STRINGS.CREATE_LINK);AT.set("label",YUI.AUI.defaults.EditorToolbar.STRINGS.INSERT);AJ.hide();AW.set("align",{node:AM,points:["tl","bl"]});AL=null;});var AJ=S.Node.create(p);AJ.hide();S.getBody().append(AJ);function AI(){var Aa=AK.getInstance();Aa.one("body").delegate("click",function(Ae){var Ab=this;if(AL!=Ae.currentTarget){var Ad=Ae.currentTarget;if(!Ad.one("img")){var Ac=Ad.get("parentNode");AP.set("values",{description:Ad.get("innerHTML"),linkURL:Ad.getAttribute("href"),});AR.get("node").attr("checked",(Ad.getAttribute("target")=="_blank"));AQ.set("title",YUI.AUI.defaults.EditorToolbar.STRINGS.EDIT_LINK);AT.set("label",YUI.AUI.defaults.EditorToolbar.STRINGS.SAVE);AL=Ad;i.openOverlayToAlignNode(AW,AJ,AN,Ad);}}},"a");}if(AK.getInstance()){AI();}else{AK.on("frame:ready",AI);}}}};GROUPS[r]={children:[{icon:"insertunorderedlist",_titleKey:"INSERT_UNORDERED_LIST"},{icon:"insertorderedlist",_titleKey:"INSERT_ORDERED_LIST"}],generate:{init:function(AI){var A=this;AI.plug(S.Plugin.EditorLists);}}};GROUPS[D]={children:[{icon:"format",_titleKey:"REMOVE_FORMAT"},{icon:"source",_titleKey:"SOURCE"}],generate:{format:function(AL,AJ,AI){var A=this;var AM=AL.frame;var AK=AJ.button;AK.on("click",function(AQ){var AN=this;var AR=AN.getInstance();var AP=new AR.Selection();var AO=AP.getSelected();if(!AP.isCollapsed&&AO.size()){AO.each(function(AY,AU,AZ){var AS=this;AY.removeAttribute("style");var AW=AY.get("innerHTML");AW=AW.replace(/<([a-zA-Z0-9]*)\b[^>]*>/g,"<$1>");for(var AV=0;AV<Z.length;AV++){var AT=new RegExp("(<"+Z[AV]+">|<\\/"+Z[AV]+">)","ig");AW=AW.replace(AT,"");}AY.set("innerHTML",AW);var AX=AY.get("parentNode");if(!AX.test("body")){AX.removeAttribute("style");}});}},AL);},source:function(AL,AO,AJ){var AP=this;var AI=AL.frame;var A=AI.get("container");var AM=AO.contentBox;var AK=AO.button;var AN=S.Node.create(G);AN.hide();A.append(AN);AK._visible=false;AK.on("click",function(AT){var AR=AK._visible;if(AR){AL.set("content",AN.val());AN.hide();AN.val("");AI.show();}else{var AS=AI._iframe;AN.val(AL.getContent());var AQ=AS.get("offsetHeight")-AN.getPadding("tb");AN.setStyle("height",AQ);AI.hide();AN.show();}AR=!AR;AK._visible=AR;AM.all("select").attr("disabled",AR);AM.all("button").attr("disabled",AR);AK.get("contentBox").attr("disabled",false);});}}};GROUPS[M]={children:[{icon:"styles",_titleKey:"STYLES"}],generate:{styles:function(AM,AK,AJ){var A=this;var AL=AK.button;var AI=AL.get("boundingBox");AM.plug(S.Plugin.EditorMenu);AM.menu.add(S.merge({align:{node:AI,points:["tl","bl"]},hideOn:"click",showOn:"click",trigger:AI},AJ));}}};GROUPS[x]={children:[{icon:"subscript",_titleKey:"SUBSCRIPT"},{icon:"superscript",_titleKey:"SUPERSCRIPT"}]};GROUPS[w]={children:[{icon:"bold",_titleKey:"BOLD"},{icon:"italic",_titleKey:"ITALIC"},{icon:"underline",_titleKey:"UNDERLINE"},{icon:"strikethrough",_titleKey:"LINE_THROUGH"}]};S.namespace("Plugin").EditorToolbar=i;},"@VERSION@",{requires:["aui-base","aui-button-item","aui-color-picker","aui-editor-menu-plugin","aui-editor-tools-plugin","aui-form-select","aui-overlay-context-panel","aui-panel","aui-toolbar","createlink-base","editor-lists","editor-base","plugin"]});