(function(t){function e(e){for(var o,i,n=e[0],c=e[1],l=e[2],m=0,u=[];m<n.length;m++)i=n[m],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&u.push(s[i][0]),s[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(u.length)u.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],o=!0,n=1;n<a.length;n++){var c=a[n];0!==s[c]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var o={},s={app:0},r=[];function i(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=o,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0af5":function(t,e,a){"use strict";var o=a("32c9"),s=a.n(o);s.a},"0efe":function(t,e,a){t.exports=a.p+"img/userbear6.e8f0f271.png"},"0f2d":function(t,e,a){},1:function(t,e){},"12f2":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-primary main-font"},[a("Navbar"),t._m(0),a("div",{staticClass:"row text-center pt-3"},[a("div",{staticClass:"col-1"}),a("div",{staticClass:"col-10 text-info"},[a("form",{},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newPlayer.playerName,expression:"newPlayer.playerName"}],staticClass:" pl-1 bg-transparent button-border text-danger input-font",attrs:{type:"text",placeholder:"Name...",maxlength:"10"},domProps:{value:t.newPlayer.playerName},on:{input:function(e){e.target.composing||t.$set(t.newPlayer,"playerName",e.target.value)}}})])]),a("div",{staticClass:"col-1"})]),t._m(1),a("div",{staticClass:"row text-center pt-3"},[a("div",{staticClass:"col-1"}),a("div",{staticClass:"col-10 text-info"},[a("form",{},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newRoom.roomCode,expression:"newRoom.roomCode"}],staticClass:"pl-1 bg-transparent button-border text-danger input-font",attrs:{type:"number",placeholder:"Code..."},domProps:{value:t.newRoom.roomCode},on:{input:function(e){e.target.composing||t.$set(t.newRoom,"roomCode",e.target.value)}}})])]),a("div",{staticClass:"col-1"})]),a("div",{staticClass:"row text-center button-font start-button",on:{click:t.addPlayer}},[a("div",{staticClass:"col-1"}),a("div",{staticClass:"col-10 button-border text-danger"},[t._v("Join!")]),a("div",{staticClass:"col-1"})])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row text-center pt-2"},[a("div",{staticClass:"col-1"}),a("div",{staticClass:"col-10 text-info title-border button-font"},[t._v("Enter Your Name!")]),a("div",{staticClass:"col-1"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row text-center pt-5"},[a("div",{staticClass:"col-1"}),a("div",{staticClass:"col-10 text-info title-border button-font"},[t._v("Enter Room Code!")]),a("div",{staticClass:"col-1"})])}],r=a("9d8d"),i={name:"JoinRoom",components:{Navbar:r["default"]},data(){return{newPlayer:{imgUrl:"",playerCode:this.$store.state.me},newRoom:{players:[]}}},computed:{players(){return this.$store.state.room.players}},methods:{async addPlayer(){let t=this.newRoom;this.$store.dispatch("joinRoom",`room${t.roomCode}`);let e=Math.floor(12*Math.random());this.newPlayer.imgUrl="assets/userbear"+e+".png",await this.$store.dispatch("getRoom",t.roomCode),t.players=this.players,t.players.push(this.newPlayer),this.$store.dispatch("addPlayer",t),this.$router.push({name:"WaitingForPlayers"})}}},n=i,c=(a("9a70"),a("2877")),l=Object(c["a"])(n,o,s,!1,null,null,null);e["default"]=l.exports},1548:function(t,e,a){},1949:function(t,e,a){t.exports=a.p+"img/userbear9.2f40ba18.png"},"1d73":function(t,e,a){t.exports=a.p+"img/bearfinal3.8c440289.png"},"218d":function(t,e,a){"use strict";var o=a("4a6c"),s=a.n(o);s.a},"219e":function(t,e,a){t.exports=a.p+"img/userbear3.fcf0270e.png"},2697:function(t,e,a){t.exports=a.p+"img/bearfinal.e728d5df.png"},"28a5":function(t,e,a){t.exports=a.p+"img/userbear2.555f4e38.png"},"29bf":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-primary main-font"},[a("div",{staticClass:"row text-center pt-3"},[a("div",{staticClass:"col-1"}),a("div",{staticClass:"col-10 info-border text-info button-font"},[t._v(t._s(this.$store.state.room.roomName))]),a("div",{staticClass:"col-1"})]),t._m(0),a("div",{staticClass:"row"},t._l(t.players,(function(t){return a("player",{key:t._id,attrs:{playerData:t}})})),1),t._m(1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row text-center py-2"},[a("div",{staticClass:"col-1"}),a("div",{staticClass:"col-10 info-border text-info button-font"},[t._v("Game Over Man!")]),a("div",{staticClass:"col-1"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row text-center"},[a("div",{staticClass:"col-1"}),a("div",{staticClass:"col-10 button-border text-danger button-font"},[t._v("Leave Game")]),a("div",{staticClass:"col-1"})])}],r=a("8f01"),i={name:"WaitingForPlayers",components:{Player:r["default"]},computed:{players(){return this.$store.state.room.players}}},n=i,c=(a("c67d"),a("2877")),l=Object(c["a"])(n,o,s,!1,null,null,null);e["default"]=l.exports},"2c92":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"bg-primary main-font"},[o("div",{staticClass:"row text-center pt-3"},[o("div",{staticClass:"col-1"}),o("div",{staticClass:"col-10 info-border text-info button-font"},[t._v(t._s(this.$store.state.room.roomName))]),o("div",{staticClass:"col-1"})]),t._m(0),o("div",{staticClass:"row"},[o("div",{staticClass:"col-12"},[o("div",{staticClass:"row mt-2 mb-2 justify-content-center"},[o("div",{staticClass:"col-1"}),o("div",{staticClass:"col-3"},[o("img",{staticClass:"imgSize",attrs:{src:a("a8ec")("./"+t.activePlayerData.imgUrl),alt:""}})]),o("div",{staticClass:"col-7 info-border "},[o("h5",{staticClass:"text-info card-padding"},[t._v(" "+t._s(t.activePlayerData.playerName)+" "),o("span",{staticClass:"float-right"},[t._v("Score: "+t._s(t.activePlayerData.playerScore))])])]),o("div",{staticClass:"col-1"})])]),t._l(t.scored,(function(t){return o("player",{key:t._id,attrs:{playerData:t}})}))],2)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row text-center py-2"},[a("div",{staticClass:"col-1"}),a("div",{staticClass:"col-10 info-border text-info button-font"},[t._v("Waiting For All Scores...")]),a("div",{staticClass:"col-1"})])}],r=a("8f01"),i={name:"Waiting",async mounted(){let t={playerId:this.$store.state.room.activePlayer[0]._id,id:this.$store.state.room._id,roomCode:this.$store.state.room.roomCode,playerCode:this.$store.state.room.activePlayer[0].playerCode,me:this.$store.state.me};setTimeout(this.$store.dispatch("pusher",t),3e3)},components:{Player:r["default"]},computed:{scored(){return this.$store.state.room.scored},activePlayerData(){return this.$store.state.room.activePlayer[0]}}},n=i,c=(a("52a1"),a("2877")),l=Object(c["a"])(n,o,s,!1,null,null,null);e["default"]=l.exports},"32c9":function(t,e,a){},"364c":function(t,e,a){t.exports=a.p+"img/userbear0.fb247236.png"},3751:function(t,e,a){t.exports=a.p+"img/userbear5.3fd77a57.png"},"3dfd":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],r={name:"App",async beforeCreate(){this.$store.dispatch("initializeSocket"),this.$store.commit("setMe",`${Math.floor(1e8*Math.random())}`)}},i=r,n=(a("5c0b"),a("2877")),c=Object(n["a"])(i,o,s,!1,null,null,null);e["default"]=c.exports},4360:function(t,e,a){"use strict";a.r(e);var o=a("2b0e"),s=a("2f62"),r=a("7338"),i=a.n(r),n=a("a18c"),c=a("e557");o["a"].use(s["a"]);let l=window.location.host.includes("localhost")?"//localhost:3000/":"/",d=i.a.create({baseURL:l+"api/",timeout:3e3});e["default"]=new s["a"].Store({state:{room:{},me:""},mutations:{setRoom(t,e){t.room=e},setMe(t,e){t.me=e}},actions:{async getRoom({commit:t,dispatch:e},a){try{let e=await d.get("room/"+a);t("setRoom",e.data)}catch(o){console.error(o)}},async addPlayer({commit:t,dispatch:e,state:a},o){try{await d.post("room/"+a.room.id+"/newPlayer",o.players);e("getRoom",o.roomCode)}catch(s){console.error(s)}},async createRoom({commit:t,dispatch:e,state:a},o){try{let e=await d.post("room/",o);t("setRoom",e.data),console.log("playerCode",a.me)}catch(s){console.error(s)}},async startGame({commit:t,dispatch:e},a){try{await d.put("room/"+a.id+"/start",a)}catch(o){console.error(o)}},async getPlayersbyRoomId({commit:t,dispatch:e},a){try{await d.get("room/"+a+"/players")}catch(o){console.error(o)}},async editDares({commit:t,dispatch:e,state:a},o){try{await d.post("room/"+a.room.id+"/dares",o.dares);a.room.dares.length==a.room.players.length&&(await e("editActive",o),console.log("checking editdares",a.room),await e("editEligible",o),console.log("once more, with feeling",a.room))}catch(s){console.error(s)}},async editEligible({commit:t,dispatch:e,state:a},o){try{await d.put("room/"+a.room.id+"/eligiblePlayers",o)}catch(s){console.error(s)}},async editActive({commit:t,dispatch:e,state:a},o){try{let t=await d.put("room/"+a.room.id+"/active",o);console.log("heres your active player",t)}catch(s){console.error(s)}},roundView({commit:t,dispatch:e}){n["default"].push({name:"Round"})},async scorePlayer({commit:t,dispatch:e},a){try{await d.put("room/"+a.id+"/players/"+a.playerId,a)}catch(o){console.error(o)}},async updateScored({commit:t,dispatch:e},a){await d.put("room/"+a.id+"/updatescored",a)},dareView({commit:t,dispatch:e}){n["default"].push({name:"Dare"})},async endGame({commit:t,dispatch:e},a){try{await d.put("room/"+a.id+"/endgame",a)}catch(o){console.error(o)}},async pusher({commit:t,dispatch:e,state:a},o){await a.room.scored.length==await a.room.players.length-1&&await a.room.roundCount==await a.room.roundTotal&&0==await a.room.eligiblePlayers.length?e("endGame",o):await a.room.scored.length==await a.room.players.length-1&&0==await a.room.eligiblePlayers.length?e("endRound",o):await a.room.scored.length==await a.room.players.length-1&&e("mountedMethod",o)},async endRound({commit:t,dispatch:e},a){try{await e("editEligible",a);await d.put("room/"+a.id+"/endround",a)}catch(o){console.error(o)}},async endTurn({commit:t,dispatch:e},a){try{await d.put("room/"+a.id+"/endturn",a)}catch(o){console.error(o)}},endGameView({commit:t,dispatch:e}){n["default"].push({name:"GameOver"})},endRoundView({commit:t,dispatch:e}){n["default"].push({name:"Round"})},async endTurnView({commit:t,dispatch:e,state:a}){await e("getRoom",a.room.roomCode),n["default"].push({name:"Dare"}).catch(t=>{})},waitingView({commit:t,dispatch:e,state:a}){n["default"].push({name:"Waiting"}).catch(t=>{})},async modal({commit:t,dispatch:e},a){await d.put("room/"+a.id+"/modal",a)},modalView({commit:t,dispatch:e,state:a}){a.me!=a.room.activePlayer.playerCode&&$("#score-modal").modal("toggle")},async mountedMethod({commit:t,dispatch:e},a){await e("editActive",a),await e("editEligible",a),await e("endTurn",a)},async clearEligible({commit:t,dispatch:e,state:a},o){try{await d.put("room/"+a.room.id+"/clearEligible",o)}catch(s){console.error(s)}}},modules:{socketStore:c["socketStore"]}})},"468d":function(t,e,a){},4784:function(t,e,a){},"4a6c":function(t,e,a){},"52a1":function(t,e,a){"use strict";var o=a("bd5f"),s=a.n(o);s.a},"56d7":function(t,e,a){"use strict";a.r(e);var o=a("2b0e"),s=a("3dfd"),r=a("a18c"),i=a("4360");o["a"].config.productionTip=!1,new o["a"]({router:r["default"],store:i["default"],render:function(t){return t(s["default"])}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var o=a("9c0c"),s=a.n(o);s.a},"5ced":function(t,e,a){},"5fe1":function(t,e,a){"use strict";var o=a("8de9"),s=a.n(o);s.a},6039:function(t,e,a){"use strict";var o=a("468d"),s=a.n(o);s.a},"61a2":function(t,e,a){t.exports=a.p+"img/userbear4.9a784b01.png"},"700d":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-font"},[a("Navbar"),a("div",{staticClass:"row mx-4 info-border text-info"},[t._m(0),a("div",{staticClass:"col-6"},[a("h2",[t._v(t._s(this.roomCode))])])]),a("div",{staticClass:"row pt-3"},[a("div",{staticClass:"col-xs-12 mx-4"},[a("div",{staticClass:"blue-border"},[a("div",{staticClass:"row text-center"},[a("div",{staticClass:"col-12"},[a("h3",{staticClass:"text-danger pt-2"},[t._v("Who's in...")]),a("div",{staticClass:"row"},t._l(t.players,(function(t){return a("player",{key:t._id,staticClass:"pb-2",attrs:{playerData:t}})})),1)])])]),a("h5",{staticClass:"text-warning font-italic text-center pt-4"},[t._v("Do Not Start the game until all players have joined.")])])]),a("div",{staticClass:"row text-center my-2"},[a("div",{staticClass:"col-1"}),a("div",{staticClass:"col-10 button-border text-danger button-font",on:{click:t.start}},[t._v("Start Game")]),a("div",{staticClass:"col-1"})])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-6"},[a("h5",[t._v("Room code:")])])}],r=a("9d8d"),i=a("8f01"),n={name:"StartGame",components:{Navbar:r["default"],Player:i["default"]},computed:{roomCode(){return this.$store.state.room.roomCode},players(){return this.$store.state.room.players}},methods:{async start(){let t={roomCode:this.$store.state.room.roomCode,id:this.$store.state.room.id};await this.$store.dispatch("startGame",t)}}},c=n,l=(a("218d"),a("2877")),d=Object(l["a"])(c,o,s,!1,null,null,null);e["default"]=d.exports},7126:function(t,e,a){t.exports=a.p+"img/userbear11.66ba073e.png"},"7d36":function(t,e,a){t.exports=a.p+"img/userbear1.cfd47bdc.png"},"7dc7":function(t,e,a){},"8de9":function(t,e,a){},"8f01":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-12"},[o("div",{staticClass:"row mt-2 mb-2"},[o("div",{staticClass:"col-1"}),o("div",{staticClass:"col-3"},[o("img",{staticClass:"imgSize",attrs:{src:a("a8ec")("./"+t.playerData.imgUrl),alt:""}})]),o("div",{staticClass:"col-7 info-border"},[o("h5",{staticClass:"text-info card-padding"},[t._v(" "+t._s(t.playerData.playerName)+" "),o("span",{staticClass:"float-right"},[t._v("Score: "+t._s(t.playerData.playerScore))])])]),o("div",{staticClass:"col-1"})])])},s=[],r={name:"player",props:["playerData"],data(){return{}},methods:{},components:{}},i=r,n=(a("cee2"),a("2877")),c=Object(n["a"])(i,o,s,!1,null,"bbfa970c",null);e["default"]=c.exports},9316:function(t,e,a){t.exports=a.p+"img/bearfinal2.0e4ec6f1.png"},"992f":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-font"},[a("Navbar"),t._m(0),a("div",{staticClass:"row text-center pt-3"},[a("div",{staticClass:"col-1"}),a("div",{staticClass:"col-10 text-info"},[a("form",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.player.playerName,expression:"player.playerName"}],staticClass:"bg-transparent button-border text-danger input-font",attrs:{type:"text",placeholder:"name...",required:"",maxlength:"10"},domProps:{value:t.player.playerName},on:{input:function(e){e.target.composing||t.$set(t.player,"playerName",e.target.value)}}})])]),a("div",{staticClass:"col-1"})]),t._m(1),a("div",{staticClass:"row text-center pt-3"},[a("div",{staticClass:"col-3"}),a("div",{staticClass:"col-6 text-center"},[a("form",[a("div",{staticClass:"form-group"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.newRoom.roundTotal,expression:"newRoom.roundTotal"}],staticClass:"form-control text-danger bg-transparent button-border",attrs:{placeholder:"Choose",required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.newRoom,"roundTotal",e.target.multiple?a:a[0])}}},[a("option",{staticClass:"bg-primary"},[t._v("1")]),a("option",{staticClass:"bg-primary"},[t._v("2")]),a("option",{staticClass:"bg-primary"},[t._v("3")]),a("option",{staticClass:"bg-primary"},[t._v("4")]),a("option",{staticClass:"bg-primary"},[t._v("5")])])])])]),a("div",{staticClass:"col-3"})]),t._m(2),a("div",{staticClass:"row text-center pt-3"},[a("div",{staticClass:"col-1"}),a("div",{staticClass:"col-10 text-info"},[a("form",{},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newRoom.roomName,expression:"newRoom.roomName"}],staticClass:"bg-transparent button-border text-danger input-font",attrs:{type:"text",placeholder:"room name...",required:"",maxlength:"15"},domProps:{value:t.newRoom.roomName},on:{input:function(e){e.target.composing||t.$set(t.newRoom,"roomName",e.target.value)}}})])]),a("div",{staticClass:"col-1"})]),a("div",{staticClass:"row text-center py-5"},[a("div",{staticClass:"col-1"}),a("div",{staticClass:"col-10 button-border text-danger text-center button-font",on:{click:t.createRoom}},[t._v("Create Room!")]),a("div",{staticClass:"col-1"})])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row text-center pt-2"},[a("div",{staticClass:"col-1"}),a("div",{staticClass:"col-10 text-info info-border button-font"},[t._v("Enter Your Name!")]),a("div",{staticClass:"col-1"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row text-center pt-5"},[a("div",{staticClass:"col-1"}),a("div",{staticClass:"col-10 text-info info-border button-font"},[t._v("How Many Rounds?")]),a("div",{staticClass:"col-1"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row text-center pt-5"},[a("div",{staticClass:"col-1"}),a("div",{staticClass:"col-10 text-info info-border button-font"},[t._v("Enter A Name For Your Room!")]),a("div",{staticClass:"col-1"})])}],r=a("9d8d"),i={name:"createroom",components:{Navbar:r["default"]},data(){return{newRoom:{roomCode:Math.floor(1e4*Math.random()),roundTotal:"",roomName:"",players:[]},player:{playerName:"",creator:!0,imgUrl:`assets/userbear${Math.floor(12*Math.random())}.png`}}},methods:{createRoom(){let t=this.$store.state.me;this.player.playerCode=t,this.newRoom.players.push(this.player),this.$store.dispatch("createRoom",this.newRoom),this.$store.dispatch("joinRoom",`room${this.newRoom.roomCode}`),this.$router.push({name:"StartGame",params:{roomCode:this.newRoom.roomCode}})}}},n=i,c=(a("0af5"),a("2877")),l=Object(c["a"])(n,o,s,!1,null,"f9517cd2",null);e["default"]=l.exports},"9a70":function(t,e,a){"use strict";var o=a("7dc7"),s=a.n(o);s.a},"9c0c":function(t,e,a){},"9d8d":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{staticClass:"navbar navbar-expand-md navbar-light text-black navbar-color"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-2"},[o("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"Home"}}},[o("img",{staticClass:"imgSize",attrs:{src:a("1d73")}})])],1),o("div",{staticClass:"col-1"}),o("div",{staticClass:"col-4"},[o("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"Home"}}},[o("img",{staticClass:"logoSize",attrs:{src:a("adb6")}})])],1)])])},s=[],r={name:"Navbar"},i=r,n=(a("b4cf"),a("2877")),c=Object(n["a"])(i,o,s,!1,null,"ebc8ec64",null);e["default"]=c.exports},a18c:function(t,e,a){"use strict";a.r(e);var o=a("2b0e"),s=a("8c4f"),r=a("bb51"),i=a("12f2"),n=a("992f"),c=a("700d"),l=a("e79d"),d=a("e60b"),m=a("c48d"),u=a("2c92"),p=a("29bf");o["a"].use(s["a"]);const v=[{path:"/",name:"Home",component:r["default"]},{path:"/joinroom",name:"JoinRoom",component:i["default"]},{path:"/createroom",name:"CreateRoom",component:n["default"]},{path:"/waitingforplayers",name:"WaitingForPlayers",component:l["default"]},{path:"/startgame",name:"StartGame",component:c["default"]},{path:"/round",name:"Round",component:d["default"]},{path:"/dare",name:"Dare",component:m["default"]},{path:"/waiting",name:"Waiting",component:u["default"]},{path:"/gameover",name:"GameOver",component:p["default"]}],f=new s["a"]({routes:v});e["default"]=f},a8ec:function(t,e,a){var o={"./App":"3dfd","./App.vue":"3dfd","./assets/DareBearLogo.png":"adb6","./assets/_variables.scss":"d832","./assets/bearfinal.png":"2697","./assets/bearfinal2.png":"9316","./assets/bearfinal3.png":"1d73","./assets/bearfinal4.png":"fb80","./assets/userbear0.png":"364c","./assets/userbear1.png":"7d36","./assets/userbear10.png":"e3b9","./assets/userbear11.png":"7126","./assets/userbear2.png":"28a5","./assets/userbear3.png":"219e","./assets/userbear4.png":"61a2","./assets/userbear5.png":"3751","./assets/userbear6.png":"0efe","./assets/userbear7.png":"cb52","./assets/userbear8.png":"e218","./assets/userbear9.png":"1949","./components/navbar":"9d8d","./components/navbar.vue":"9d8d","./components/player":"8f01","./components/player.vue":"8f01","./main":"56d7","./main.js":"56d7","./router":"a18c","./router/":"a18c","./router/index":"a18c","./router/index.js":"a18c","./store":"4360","./store/":"4360","./store/index":"4360","./store/index.js":"4360","./store/socketStore":"e557","./store/socketStore.js":"e557","./views/CreateRoom":"992f","./views/CreateRoom.vue":"992f","./views/Dare":"c48d","./views/Dare.vue":"c48d","./views/GameOver":"29bf","./views/GameOver.vue":"29bf","./views/Home":"bb51","./views/Home.vue":"bb51","./views/JoinRoom":"12f2","./views/JoinRoom.vue":"12f2","./views/Round":"e60b","./views/Round.vue":"e60b","./views/StartGame":"700d","./views/StartGame.vue":"700d","./views/Waiting":"2c92","./views/Waiting.vue":"2c92","./views/WaitingForPlayers":"e79d","./views/WaitingForPlayers.vue":"e79d"};function s(t){var e=r(t);return a(e)}function r(t){if(!a.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}s.keys=function(){return Object.keys(o)},s.resolve=r,t.exports=s,s.id="a8ec"},adb6:function(t,e,a){t.exports=a.p+"img/DareBearLogo.d59260a2.png"},b4cf:function(t,e,a){"use strict";var o=a("0f2d"),s=a.n(o);s.a},bb51:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-primary main-font"},[a("Navbar"),t._m(0),a("div",{staticClass:"row m-2 text-danger button-font mt-4"},[a("div",{staticClass:"col-1"}),a("div",{staticClass:"col-10 d-flex justify-content-center button-border",on:{click:t.joinRoom}},[a("div",[t._v("Join A Room")])]),a("div",{staticClass:"col-1"})]),a("div",{staticClass:"row m-2 text-danger button-font mt-4"},[a("div",{staticClass:"col-1"}),a("div",{staticClass:"col-10 d-flex justify-content-center button-border",on:{click:t.createRoom}},[a("div",[t._v("Create A Room")])]),a("div",{staticClass:"col-1"})])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row m-2"},[a("div",{staticClass:"col-1"}),a("div",{staticClass:"col-10 info-border text-center text-info"},[a("h2",[t._v(" Welcome to "),a("br"),t._v("DareBear! ")]),a("span",[t._v(" A party style game to play with your friends. Create or join a room with your friends and add a dare! Rate your friends on how well they complete each dare. Be careful, it's completely random so you could end up getting your own dare! ")])]),a("div",{staticClass:"col-1"})])}],r=a("9d8d"),i={name:"Home",components:{Navbar:r["default"]},methods:{joinRoom(){this.$router.push({name:"JoinRoom"})},createRoom(){this.$router.push({name:"CreateRoom"})}}},n=i,c=(a("cccb"),a("2877")),l=Object(c["a"])(n,o,s,!1,null,null,null);e["default"]=l.exports},bd5f:function(t,e,a){},c48d:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.room?o("div",{staticClass:"main-font bg-primary"},[o("div",{staticClass:"row text-center pt-4"},[o("div",{staticClass:"col-1"}),o("div",{staticClass:"col-10 info-border text-info pt-2"},[o("h1",[t._v(t._s(this.$store.state.room.activePlayer[0].playerName))]),o("img",{staticClass:"img-width",attrs:{src:a("a8ec")("./"+this.$store.state.room.activePlayer[0].imgUrl)}})]),o("div",{staticClass:"col-1"})]),o("div",{staticClass:"row text-center pt-4"},[o("div",{staticClass:"col-1"}),o("div",{staticClass:"col-10 info-border text-info pt-2 button-font"},[o("span",{staticClass:"small-text"},[t._v(" Hey "+t._s(this.$store.state.room.activePlayer[0].playerName)+" this is your dare: ")]),o("br"),t._v(" "+t._s(this.$store.state.room.activeDare[0].dare)+" ")]),o("div",{staticClass:"col-1"})]),o("div",{staticClass:"row text-center pt-5"},[o("div",{staticClass:"col-1"}),o("div",{directives:[{name:"show",rawName:"v-show",value:t.localPlayerCode==t.activePlayer.playerCode,expression:"localPlayerCode == activePlayer.playerCode"}],staticClass:"col-10 button-border text-danger button-font",on:{click:t.modal}},[t._v("Finished!")]),o("div",{staticClass:"col-1"})]),o("div",{staticClass:"modal fade",attrs:{id:"score-modal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[o("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[o("div",{staticClass:"modal-content"},[o("div",{staticClass:"modal-body bg-primary text-danger"},[t._m(0),o("div",{staticClass:"row text-center pt-4 pb-4 score-font"},[o("div",{staticClass:"col-4"},[o("span",{staticClass:"button-border p-2",on:{click:function(e){return t.score(1)}}},[t._v("1")])]),o("div",{staticClass:"col-4"},[o("span",{staticClass:"button-border p-2",on:{click:function(e){return t.score(2)}}},[t._v("2")])]),o("div",{staticClass:"col-4"},[o("span",{staticClass:"button-border p-2",on:{click:function(e){return t.score(3)}}},[t._v("3")])])]),o("div",{staticClass:"row text-center pt-4 pb-4 score-font"},[o("div",{staticClass:"col-4"},[o("span",{staticClass:"button-border p-2",on:{click:function(e){return t.score(4)}}},[t._v("4")])]),o("div",{staticClass:"col-4"},[o("span",{staticClass:"button-border p-2",on:{click:function(e){return t.score(5)}}},[t._v("5")])]),o("div",{staticClass:"col-4"},[o("span",{staticClass:"button-border p-2",on:{click:function(e){return t.score(6)}}},[t._v("6")])])]),o("div",{staticClass:"row text-center pt-4 pb-4 score-font"},[o("div",{staticClass:"col-4"},[o("span",{staticClass:"button-border p-2",on:{click:function(e){return t.score(7)}}},[t._v("7")])]),o("div",{staticClass:"col-4"},[o("span",{staticClass:"button-border p-2",on:{click:function(e){return t.score(8)}}},[t._v("8")])]),o("div",{staticClass:"col-4"},[o("span",{staticClass:"button-border p-2",on:{click:function(e){return t.score(9)}}},[t._v("9")])])]),o("div",{staticClass:"row text-center pt-4 pb-4 score-font"},[o("div",{staticClass:"col-4"}),o("div",{staticClass:"col-4"},[o("span",{staticClass:"button-border p-2",on:{click:function(e){return t.score(10)}}},[t._v("10")])]),o("div",{staticClass:"col-4"})])])])])])]):t._e()},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row text-center"},[a("div",{staticClass:"col-12 title-font"},[t._v("Score That Dare!")])])}],r={name:"Dare",mounted(){},computed:{room(){return this.$store.state.room},localPlayerCode(){return this.$store.state.me},activePlayer(){return this.$store.state.room.activePlayer[0]}},data(){return{player:{playerId:this.$store.state.room.activePlayer[0]._id,id:this.$store.state.room._id,roomCode:this.$store.state.room.roomCode,playerCode:this.$store.state.room.activePlayer[0].playerCode,me:this.$store.state.me}}},methods:{async modal(){this.$store.dispatch("modal",this.$store.state.room),this.$store.dispatch("waitingView")},async score(t){this.player.playerScore=t,console.log("Score is",this.player.playerScore);let e=this.player;await this.$store.dispatch("scorePlayer",this.player),await this.$store.dispatch("updateScored",e),await this.$store.dispatch("modalView",e),setTimeout(this.$store.dispatch("waitingView"),3e3)}}},i=r,n=(a("6039"),a("2877")),c=Object(n["a"])(i,o,s,!1,null,null,null);e["default"]=c.exports},c62d:function(t,e,a){"use strict";var o=a("dff3"),s=a.n(o);s.a},c67d:function(t,e,a){"use strict";var o=a("1548"),s=a.n(o);s.a},cb52:function(t,e,a){t.exports=a.p+"img/userbear7.4c7b4cb6.png"},cccb:function(t,e,a){"use strict";var o=a("5ced"),s=a.n(o);s.a},cee2:function(t,e,a){"use strict";var o=a("4784"),s=a.n(o);s.a},d832:function(t,e,a){},dff3:function(t,e,a){},e218:function(t,e,a){t.exports=a.p+"img/userbear8.717f802e.png"},e3b9:function(t,e,a){t.exports=a.p+"img/userbear10.12cc3842.png"},e557:function(t,e,a){"use strict";a.r(e),a.d(e,"socketStore",(function(){return i}));var o=a("4bea"),s=a.n(o);let r={};const i={actions:{initializeSocket({commit:t,dispatch:e}){let a=window.location.host.includes("localhost")?"//localhost:3000":"/";r=s()(a),r.on("CONNECTED",t=>{console.log("Connected to socket, Do you dare continue")}),r.on("getRoom",e=>{console.log("setting room from socketstore","getRoom"),t("setRoom",e)}),r.on("newRoom",e=>{console.log("setting room from socketstore","newRoom"),t("setRoom",e)}),r.on("start",t=>{e("roundView")}),r.on("startRound",t=>{e("dareView")}),r.on("endGame",t=>{e("endGameView")}),r.on("endRound",t=>{e("endRoundView")}),r.on("endTurn",t=>{e("endTurnView")}),r.on("waiting",t=>{e("waitingView")}),r.on("modal",t=>{e("modalView")}),r.on("updateRoom",e=>{t("setRoom",e)})},joinRoom({commit:t,dispatch:e},a){r.emit("dispatch",{action:"JoinRoom",data:a})}}}},e60b:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.room?a("div",{staticClass:"main-font"},[a("div",{staticClass:"row my-2"},[a("div",{staticClass:"col-1"}),a("div",{staticClass:"col-10 text-info info-border text-center"},[a("h1",[t._v(t._s(this.room.roomName))])]),a("div",{staticClass:"col-1"})]),a("div",{staticClass:"row my-2"},[a("div",{staticClass:"col-1"}),a("div",{staticClass:"col-10 text-info info-border text-center pt-2"},[this.room.roundCount!=this.room.roundTotal?a("h3",[t._v("Round "+t._s(this.room.roundCount))]):a("h3",[t._v("FINAL ROUND")])]),a("div",{staticClass:"col-1"})]),a("div",{staticClass:"row my-2"},[a("div",{staticClass:"col-1"}),a("div",{staticClass:"col-10 text-info info-border text-center"},[a("span",{staticClass:"text-info tex-center"},[t._v("Be kind! You could end up with your own dare!")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.submitDare(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newDare.dare,expression:"newDare.dare"}],staticClass:"bg-transparent blue-border text-danger input-font my-2 mr-1",attrs:{type:"text",placeholder:"Enter Your Dare...",required:""},domProps:{value:t.newDare.dare},on:{input:function(e){e.target.composing||t.$set(t.newDare,"dare",e.target.value)}}}),a("button",{staticClass:"bg-transparent blue-border text-danger input-font my-2",attrs:{type:"submit"}},[t._v("+")])])]),a("div",{staticClass:"col-1"})]),a("div",{staticClass:"row my-2"},[a("div",{staticClass:"col-1"}),a("div",{staticClass:"col-10 text-info info-border text-center pt-2"},[a("h3",[t._v(t._s(this.room.dares.length)+" / "+t._s(this.room.players.length)+" Players Ready")])]),a("div",{staticClass:"col-1"})]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-1"}),a("div",{staticClass:"col-10"},[a("div",{staticClass:"row blue-border"},[a("div",{staticClass:"col-3"}),t._m(0),a("div",{staticClass:"col-3"}),t._l(t.players,(function(t){return a("player",{key:t._id,attrs:{playerData:t}})}))],2)]),a("div",{staticClass:"col-1"})])]):t._e()},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-6 text-danger text-center"},[a("h4",[t._v("Players:")])])}],r=a("8f01"),i={name:"Round",components:{player:r["default"]},data(){return{newDare:{playerCode:this.$store.state.me},newRoom:{dares:[],roomCode:this.$store.state.room.roomCode}}},computed:{room(){return this.$store.state.room},players(){return this.$store.state.room.players}},methods:{submitDare(){let t=this.newRoom;t.dares=this.room.dares,t.dares.push(this.newDare),this.$store.dispatch("editDares",t)}},mounted(){this.$store.dispatch("clearEligible",this.$store.state.room)}},n=i,c=(a("c62d"),a("2877")),l=Object(c["a"])(n,o,s,!1,null,"96170968",null);e["default"]=l.exports},e79d:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-primary main-font"},[a("Navbar"),a("div",{staticClass:"row text-center"},[a("div",{staticClass:"col-1"}),a("div",{staticClass:"col-10 info-border text-info button-font"},[t._v(t._s(this.$store.state.room.roomName))]),a("div",{staticClass:"col-1"})]),t._m(0),a("div",{staticClass:"row"},t._l(t.players,(function(t){return a("player",{key:t._id,attrs:{playerData:t}})})),1)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row text-center py-2"},[a("div",{staticClass:"col-1"}),a("div",{staticClass:"col-10 info-border text-info button-font"},[t._v("Waiting For Other Players...")]),a("div",{staticClass:"col-1"})])}],r=a("9d8d"),i=a("8f01"),n={name:"WaitingForPlayers",components:{Navbar:r["default"],Player:i["default"]},computed:{players(){return this.$store.state.room.players}},mounted(){this.$store.state.room.activePlayer.push({x:1})}},c=n,l=(a("5fe1"),a("2877")),d=Object(l["a"])(c,o,s,!1,null,null,null);e["default"]=d.exports},fb80:function(t,e,a){t.exports=a.p+"img/bearfinal4.a96cd735.png"}});