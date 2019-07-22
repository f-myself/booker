webpackJsonp([1],{

/***/ "0xAs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: "navBar",
    data: function () {
        return {
            username: localStorage.getItem("login"),
            logoutData: {
                id: localStorage.getItem("id"),
                operation: ""
            },
            rooms: {}
        };
    },
    methods: {
        dataToParamString: function (data) {

            this.logoutData.operation = "logout";

            var string = '';
            for (var val in data) {
                string += val + '=' + encodeURIComponent(data[val]) + '&';
            }
            return string;
        },

        logout: function () {
            localStorage.clear();
            var str = this.dataToParamString(this.logoutData);

            fetch('api/auth/',
            // fetch('http://booker.loc/Server/app/api/auth/', 
            // fetch('http://192.168.0.15/~user6/booker/Server/app/api/auth/', 
            { method: "PUT", body: str });

            location.reload();
        },
        getRooms: function () {
            fetch('api/rooms/',
            // fetch('http://booker.loc/Server/app/api/rooms/', 
            // fetch('http://192.168.0.15/~user6/booker/Server/app/api/rooms/',
            { method: "GET" }).then(response => response.json()).then(res => {
                switch (res.status) {
                    case 'success':
                        this.rooms = res.data;
                        break;

                    default:
                        break;
                }
            });
        },
        changeRoom: function (room) {
            this.$emit("changeRoom", room);
        }
    },
    created: function () {
        this.getRooms();
    }
});

/***/ }),

/***/ "2NcG":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "4xtP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[(_vm.status)?_c('b-alert',{staticClass:"text-center",attrs:{"show":"","variant":_vm.statusVar},model:{value:(_vm.status),callback:function ($$v) {_vm.status=$$v},expression:"status"}},[_c('h4',[_vm._v(_vm._s(_vm.status))])]):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"col-4"}),_vm._v(" "),_c('div',{staticClass:"col-4"},[(_vm.showEvent)?_c('form',{ref:"form",staticClass:"text-left",on:{"submit":_vm.validateForm}},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"userFor"}},[_vm._v("Booked for:")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.userFor),expression:"formData.userFor"}],staticClass:"form-control",attrs:{"id":"userFor"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.formData, "userFor", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.users),function(user,key){return _c('option',{key:key,domProps:{"value":user.id}},[_vm._v(_vm._s(user.name))])}),0)]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"timeStart"}},[_vm._v("Beginning on ("),_c('small',[_vm._v("Old time: "+_vm._s(_vm.formData.oldTime))]),_vm._v("):")]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-4"},[(_vm.hoursFormat == 24)?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.hoursStart),expression:"formData.hoursStart"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.formData, "hoursStart", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"selected":"","disabled":""}},[_vm._v("Hours")]),_vm._v(" "),_vm._l((24),function(hour,index){return (hour >= 8 && hour <= 20)?_c('option',{key:index},[_vm._v(_vm._s(hour))]):_vm._e()})],2):_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.hoursStart),expression:"formData.hoursStart"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.formData, "hoursStart", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"selected":"","disabled":""}},[_vm._v("Hours")]),_vm._v(" "),_vm._l((12),function(hour,index){return _c('option',{key:index},[_vm._v(_vm._s(hour))])})],2)]),_vm._v(":\n            "),_c('div',{staticClass:"col-4"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.minutesStart),expression:"formData.minutesStart"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.formData, "minutesStart", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"selected":"","disabled":""}},[_vm._v("Minutes")]),_vm._v(" "),_vm._l((_vm.minutes),function(minute,index){return _c('option',{key:index},[_vm._v(_vm._s(minute))])})],2)]),_vm._v(" "),(_vm.hoursFormat != 24)?_c('div',{staticClass:"col-3 pl-0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.midnightStart),expression:"formData.midnightStart"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.formData, "midnightStart", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"selected":"","disabled":""}},[_vm._v("AM/PM")]),_vm._v(" "),_c('option',{attrs:{"value":"am"}},[_vm._v("A.M.")]),_vm._v(" "),_c('option',{attrs:{"value":"pm"}},[_vm._v("P.M.")])])]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"timeStart"}},[_vm._v("Ending on:")]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-4"},[(_vm.hoursFormat == 24)?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.hoursEnd),expression:"formData.hoursEnd"}],staticClass:"form-control",attrs:{"id":"h-end"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.formData, "hoursEnd", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"selected":"","disabled":""}},[_vm._v("Hours")]),_vm._v(" "),_vm._l((24),function(hour,index){return (hour >= 8 && hour <= 20)?_c('option',{key:index},[_vm._v(_vm._s(hour))]):_vm._e()})],2):_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.hoursEnd),expression:"formData.hoursEnd"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.formData, "hoursEnd", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"selected":"","disabled":""}},[_vm._v("Hours")]),_vm._v(" "),_vm._l((12),function(hour,index){return _c('option',{key:index},[_vm._v(_vm._s(hour))])})],2)]),_vm._v(":\n            "),_c('div',{staticClass:"col-4"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.minutesEnd),expression:"formData.minutesEnd"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.formData, "minutesEnd", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"selected":"","disabled":""}},[_vm._v("Minutes")]),_vm._v(" "),_vm._l((_vm.minutes),function(minute,index){return _c('option',{key:index},[_vm._v(_vm._s(minute))])})],2)]),_vm._v(" "),(_vm.hoursFormat != 24)?_c('div',{staticClass:"col-3 pl-0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.midnightEnd),expression:"formData.midnightEnd"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.formData, "midnightEnd", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"selected":"","disabled":""}},[_vm._v("AM/PM")]),_vm._v(" "),_c('option',{attrs:{"value":"am"}},[_vm._v("A.M.")]),_vm._v(" "),_c('option',{attrs:{"value":"pm"}},[_vm._v("P.M.")])])]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"event-desc"}},[_vm._v("Describe event")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.description),expression:"formData.description"}],staticClass:"form-control",attrs:{"id":"event-desc","rows":"3","required":""},domProps:{"value":(_vm.formData.description)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formData, "description", $event.target.value)}}})]),_vm._v(" "),(_vm.showRecurrence)?_c('div',{staticClass:"custom-control custom-switch pb-2"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.recurrence),expression:"recurrence"}],staticClass:"custom-control-input",attrs:{"type":"checkbox","name":"recurrence","id":"recurrenceSwitcher"},domProps:{"checked":Array.isArray(_vm.recurrence)?_vm._i(_vm.recurrence,null)>-1:(_vm.recurrence)},on:{"click":_vm.switchRecurring,"change":function($event){var $$a=_vm.recurrence,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.recurrence=$$a.concat([$$v]))}else{$$i>-1&&(_vm.recurrence=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.recurrence=$$c}}}}),_vm._v(" "),_c('label',{staticClass:"custom-control-label",attrs:{"for":"recurrenceSwitcher"}},[_vm._v("Apply to all occurrences?")])]):_vm._e(),_vm._v(" "),_c('button',{staticClass:"btn btn-primary right",attrs:{"type":"submit"}},[_vm._v("Submit")])]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-4"})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "70y6":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9M+g":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "DHjN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      users: [],
      error: undefined,
      minutes: ['00', '15', '30', '45'],
      recurrence: false,
      formData: {
        userFor: localStorage.getItem("id"),
        dateStart: undefined,
        hoursStart: "Hours",
        minutesStart: "Minutes",
        midnightStart: "AM/PM",
        hoursEnd: "Hours",
        minutesEnd: "Minutes",
        midnightEnd: "AM/PM",
        description: "",
        recurring: "weekly",
        duration: 1
      }
    };
  },
  props: ['hoursFormat', 'currentDate'],
  methods: {
    resetModal() {
      this.formData = {
        userFor: localStorage.getItem("id"),
        dateStart: undefined,
        hoursStart: "Hours",
        minutesStart: "Minutes",
        midnightStart: "AM/PM",
        hoursEnd: "Hours",
        minutesEnd: "Minutes",
        midnightEnd: "AM/PM",
        description: "",
        recurring: "weekly",
        duration: 1
      };
    },
    getUsers: function () {
      let id = localStorage.getItem("id");
      let role = localStorage.getItem("role");
      if (role == 1) {
        let token = localStorage.getItem("token");
        fetch('api/admin/' + id + '/' + token,
        // fetch('http://booker.loc/Server/app/api/admin/' + id + '/' + token, 
        // fetch('http://192.168.0.15/~user6/booker/Server/app/api/admin/' + id + '/' + token,
        { method: "GET" }).then(response => response.json()).then(res => {
          switch (res.status) {
            case "success":
              this.users = res.data;
              break;
            default:
              localStorage.clear();
              location.reload();
              break;
          }
        });
      } else {
        fetch('api/users/' + id,
        // fetch('http://booker.loc/Server/app/api/users/' + id, 
        // fetch('http://192.168.0.15/~user6/booker/Server/app/api/users/' + id, 
        { method: "GET" }).then(response => response.json()).then(res => {
          switch (res.status) {
            case "success":
              this.users = res.data;
              break;
            case "no_user":
              localStorage.clear();
              location.reload();
              break;
            case "err_valid":
              localStorage.clear();
              location.reload();
              break;
            default:
              break;
          }
        });
      }
    },
    resetDuration: function () {
      this.formData.duration = 1;
    },
    validateForm: function (bvModalEvt) {
      bvModalEvt.preventDefault();

      if (!this.formData.dateStart) {
        this.error = "Please, choose the correct start date!";
        return;
      }

      if (!this.validateDate(this.formData.dateStart)) {
        return;
      }

      let hoursStart = this.standartizeHours(this.formData.hoursStart, this.formData.midnightStart);
      let hoursEnd = this.standartizeHours(this.formData.hoursEnd, this.formData.midnightEnd);

      if (hoursStart < 8 || hoursStart > 20 || hoursEnd < 8 || hoursEnd > 20) {
        this.error = "Events aviable only on 8 a.m. till 9 p.m.";
        return;
      }

      if (!hoursStart || isNaN(this.formData.minutesStart)) {
        this.error = "Please, choose the correct start time";
        return;
      }

      if (!hoursEnd || isNaN(this.formData.minutesEnd)) {
        this.error = "Please, choose the correct ending time";
        return;
      }

      let correctDates = this.standartizeDate(this.formData.dateStart, hoursStart, this.formData.minutesStart, hoursEnd, this.formData.minutesEnd);

      if (correctDates) {
        if (correctDates.dateStart > correctDates.dateEnd) {
          this.error = "The event cannot end before it starts";
          return;
        }
      } else {
        return;
      }

      if (this.formData.description.length <= 0) {
        this.error = "Desctiption is required field";
        return;
      }

      if (this.recurrence) {
        if (this.formData.recurring == 'weekly' && this.formData.duration > 4 || this.formData.duration < 1) {
          this.error = "Weekly duration cannot be more than 4";
          return;
        }

        if (this.formData.recurring == 'bi-weekly' && this.formData.duration > 2 || this.formData.duration < 1) {
          this.error = "Bi-weekly duration cannot be more than 2";
          return;
        }

        if (this.formData.recurring == 'monthly' && this.formData.duration != 1) {
          this.error = "Monthly duration cannot be more than 1";
          return;
        }
      }

      let finalFormData = new FormData();
      finalFormData.append('userForId', this.formData.userFor);
      finalFormData.append('dateStart', correctDates.dateStart);
      finalFormData.append('dateEnd', correctDates.dateEnd);
      finalFormData.append('description', this.formData.description);
      finalFormData.append('boardroom', this.$route.params.id);
      finalFormData.append('dateCreate', this.currentDate.getTime() / 1000 | 0);

      if (this.recurrence) {
        finalFormData.append("recurring", this.formData.recurring);
        finalFormData.append("duration", this.formData.duration);
      }

      fetch('api/events/',
      // fetch('http://booker.loc/Server/app/api/events/', 
      // fetch('http://192.168.0.15/~user6/booker/Server/app/api/events/',
      { method: "POST", body: finalFormData }).then(response => response.json()).then(res => {
        switch (res.status) {
          case "success":
            this.$emit("getStatus", { variant: "success", msg: "Thanks, your event created!" });
            break;
          case "err_dates":
            this.$emit("getStatus", { variant: "danger", msg: "The event cannot end before it starts!" });
            break;
          case "err_hours":
            this.$emit("getStatus", { variant: "danger", msg: "Events aviable only on 8 a.m. till 9 p.m." });
            break;
          case "err_future":
            this.$emit("getStatus", { variant: "danger", msg: "The selected date is not soon" });
            break;
          case "err_past":
            this.$emit("getStatus", { variant: "danger", msg: "You might to select the current year or later" });
            break;
          case "err_valid":
            this.$emit("getStatus", { variant: "danger", msg: "Fields were filled incorrect!" });
            break;
          case "err_time":
            this.$emit("getStatus", { variant: "danger", msg: "An event has already been booked for the specified time!" });
            break;
          case "err_holiday":
            this.$emit("getStatus", { variant: "danger", msg: "You can not book an event for the weekend!" });
            break;
          case "succ_with_errors":
            this.$emit("getStatus", { variant: "warning", msg: "The event was booked, but some recurrent events were failed cause they overlapped with other events." });
            break;
          default:
            this.$emit("getStatus", { variant: "danger", msg: "Something going wrong. Please, try again later!" });
            break;
        }
      });
      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
    },
    validateDate: function (date) {

      let dateArr = date.split('-');
      if (+dateArr[0] < 2019) {
        this.error = "You might to select the current year or later";
        return;
      }

      if (+dateArr[1] > 12 || +dateArr[1] < 1) {
        this.error = "You might to select correct month";
        return;
      }

      if (+dateArr[0] > 2020) {
        this.error = "The selected date is not soon";
        return;
      }

      return true;
    },
    switchRecurring: function () {
      if (this.recurrence == false) {
        this.recurrence = true;
      } else {
        this.recurrence = false;
      }
    },
    standartizeHours: function (hours, midnight) {
      if (isNaN(hours)) {
        return;
      }
      if (this.hoursFormat != 24 && midnight == 'pm') {
        return +hours + 12;
      }
      return hours;
    },
    checkHolidays: function (date) {
      if (date.getDay() >= 6) {
        this.error = "Sorry, you can't planning event on weekends";
        return;
      }
      return true;
    },
    standartizeDate: function (date, hoursStart, minutesStart, hoursEnd, minutesEnd) {
      let result = {};
      let dateArr = date.split('-');

      if (hoursStart && minutesStart) {
        var dateStart = new Date(dateArr[0], dateArr[1] - 1, dateArr[2], hoursStart, minutesStart);
      }

      if (hoursEnd && minutesEnd) {
        var dateEnd = new Date(dateArr[0], dateArr[1] - 1, dateArr[2], hoursEnd, minutesEnd);
      }

      if (!this.checkHolidays(dateStart) || !this.checkHolidays(dateEnd)) {
        return;
      }

      if (dateStart.getTime() < this.currentDate.getTime()) {
        this.error = "You can not create event before current time!";
        return;
      }

      if (dateStart && dateEnd) {
        result.dateStart = dateStart.getTime() / 1000;
        result.dateEnd = dateEnd.getTime() / 1000;
        return result;
      }
      this.error = "Please, choose correct date";
      return;
    }
  },
  computed: {},
  created: function () {
    this.getUsers();
  }
});

/***/ }),

/***/ "Dwu1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EditEvent_vue__ = __webpack_require__("cW6p");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_022531d0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_EditEvent_vue__ = __webpack_require__("4xtP");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EditEvent_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_022531d0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_EditEvent_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "E5zT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: "EmployeeList",
    data: function () {
        return {
            status: {
                variant: 'danger',
                msg: ''
            },
            showList: false,
            users: [],
            selectedUser: undefined,
            updateError: {
                variant: "danger",
                msg: ""
            },
            addError: {
                variant: "danger",
                msg: ""
            },
            modalAddShow: false,
            updateForm: {
                name: undefined,
                email: undefined,
                passRestore: false,
                role: "Select role",
                newPassword: "",
                rePassword: ""
            },
            addForm: {
                name: "",
                email: "",
                login: "",
                role: "Select role",
                password: "",
                rePassword: ""
            }
        };
    },
    methods: {
        switchPassRestore: function () {
            if (this.updateForm.passRestore == false) {
                this.updateForm.passRestore = true;
            } else {
                this.updateForm.passRestore = false;
            }
        },
        dataToParamString: function (data) {
            var string = '';
            for (let val in data) {
                string += val + '=' + encodeURIComponent(data[val]) + '&';
            }
            return string;
        },
        selectUser: function (id) {
            this.selectedUser = id;
            this.updateForm.name = this.users[id].name;
            this.updateForm.email = this.users[id].email;
        },
        resetUpdate: function () {
            this.updateForm = {
                passRestore: false,
                role: "Select role",
                newPassword: "",
                rePassword: ""
            }, this.updateError = {
                variant: "danger",
                msg: ""
            };
            this.selectedUser = undefined;
            this.getUsers();
        },
        validateUpdate: function (event) {
            event.preventDefault();

            if (this.updateForm.name.length <= 0) {
                this.updateError.msg = "Username is required!";
                return;
            }

            if (this.updateForm.email.length <= 0) {
                this.updateError.msg = "Email is required!";
                return;
            }

            if (isNaN(this.updateForm.role)) {
                this.updateError.msg = "Please, select new role!";
                return;
            }

            if (this.updateForm.passRestore) {
                if (!this.updateForm.newPassword || !this.updateForm.rePassword) {
                    this.updateError.msg = "Passwords are required! Disable the pass-restoring to cancel operation.";
                    return;
                }

                if (this.updateForm.newPassword != this.updateForm.rePassword) {
                    this.updateError.msg = "Passwords do not match!";
                    return;
                }
            }

            var updateData = {
                id: this.users[this.selectedUser].id,
                email: this.updateForm.email,
                name: this.updateForm.name,
                role: this.updateForm.role,
                passRestore: this.updateForm.passRestore,
                newPass: this.updateForm.newPassword,
                rePass: this.updateForm.rePassword,
                userId: localStorage.getItem("id"),
                token: localStorage.getItem("token")
            };

            var dataToSend = this.dataToParamString(updateData);

            fetch('api/admin/',
            // fetch('http://booker.loc/Server/app/api/admin/', 
            // fetch('http://192.168.0.15/~user6/booker/Server/app/api/admin/', 
            { method: "PUT", body: dataToSend }).then(response => response.json()).then(res => {
                switch (res.status) {
                    case 'success':
                        this.status.variant = "success";
                        this.status.msg = "Thanks, new user has been added";
                        break;

                    case 'err_valid':
                        this.status.variant = "danger";
                        this.status.msg = "Invalid inputs. Try again";
                        break;

                    case 'err_login':
                        localStorage.clear();
                        location.reload();
                        break;

                    case 'err_exists':
                        this.status.variant = "danger";
                        this.status.msg = "Sorry, but user with this login or email already exists";
                        break;

                    case 'err_password':
                        this.status.variant = "danger";
                        this.status.msg = "Sorry, but passwords do not match";
                        break;

                    default:
                        this.status.variant = "danger";
                        this.status.msg = "Error. Try again later";
                        break;
                }
            });

            this.$bvModal.hide('modal-update');
        },
        submitUpdate: function () {},
        validateAdd: function (event) {
            event.preventDefault();

            if (this.addForm.email.length <= 0) {
                this.addError.msg = "Email is required!";
                return;
            }

            if (this.addForm.name.length <= 0) {
                this.addError.msg = "Username is required!";
                return;
            }

            if (this.addForm.login.length <= 0) {
                this.addError.msg = "Login is required!";
                return;
            }

            if (isNaN(this.addForm.role)) {
                this.addError.msg = "Please, select new role!";
                return;
            }

            if (!this.addForm.password || !this.addForm.rePassword) {
                this.addError.msg = "Passwords are required! Disable the pass-restoring to cancel operation.";
                return;
            }

            if (this.addForm.password != this.addForm.rePassword) {
                this.addError.msg = "Passwords do not match!";
                return;
            }

            var addFormData = new FormData();
            for (var name in this.addForm) {
                addFormData.append(name, this.addForm[name]);
            }
            addFormData.append("userId", localStorage.getItem("id"));
            addFormData.append("token", localStorage.getItem("token"));

            fetch('api/admin/',
            // fetch('http://booker.loc/Server/app/api/admin/', 
            // fetch('http://192.168.0.15/~user6/booker/Server/app/api/admin/', 
            { method: "POST", body: addFormData }).then(response => response.json()).then(res => {
                switch (res.status) {
                    case 'success':
                        this.status.variant = "success";
                        this.status.msg = "Thanks, new user has been added";
                        break;

                    case 'err_valid':
                        this.status.variant = "danger";
                        this.status.msg = "Invalid inputs. Try again";
                        break;

                    case 'err_login':
                        localStorage.clear();
                        location.reload();
                        break;

                    case 'err_exists':
                        this.status.variant = "danger";
                        this.status.msg = "Sorry, but user with this login or email already exists";
                        break;

                    case 'err_password':
                        this.status.variant = "danger";
                        this.status.msg = "Sorry, but passwords do not match";
                        break;

                    default:
                        this.status.variant = "danger";
                        this.status.msg = "Error. Try again later";
                        break;
                }
            });

            this.$bvModal.hide('add-modal');
        },
        resetAdd: function () {
            this.addForm = {
                name: "",
                email: "",
                login: "",
                role: "Select role",
                password: "",
                rePassword: ""
            };
            this.getUsers();
        },
        deleteUser: function () {
            var userId = this.users[this.selectedUser].id;
            fetch('api/admin/' + userId + '/' + localStorage.getItem("id") + '/' + localStorage.getItem("token"),
            // fetch('http://booker.loc/Server/app/api/admin/' + userId + '/' + localStorage.getItem("id") + '/' + localStorage.getItem("token"),
            // fetch('http://192.168.0.15/~user6/booker/Server/app/api/admin/' + userId + '/' + localStorage.getItem("id") + '/' + localStorage.getItem("token"),
            { method: "DELETE" }).then(response => response.json()).then(res => {
                switch (res.status) {
                    case 'success':
                        this.status.variant = "success";
                        this.status.msg = "Thanks. User and the events were successfully deleted!";
                        break;

                    case 'err_valid':
                        localStorage.clear();
                        location.reload();
                        break;

                    case 'err_login':
                        localStorage.clear();
                        location.reload();
                        break;

                    default:
                        this.status.variant = "danger";
                        this.status.msg = "Something going wrong. Try again";
                        break;
                }
            });
            this.$bvModal.hide('modal-delete');
        },
        checkAdmin: function () {
            fetch('api/auth/' + localStorage.getItem("id") + '/' + localStorage.getItem("token"),
            // fetch('http://booker.loc/Server/app/api/auth/' + localStorage.getItem("id") + '/' + localStorage.getItem("token"), 
            // fetch('http://192.168.0.15/~user6/booker/Server/app/api/auth/' + localStorage.getItem("id") + '/' + localStorage.getItem("token"), 
            { method: "GET" }).then(response => response.json()).then(res => {
                switch (res.status) {

                    case 'success':
                        this.showList = true;
                        break;

                    default:
                        localStorage.clear();
                        location.reload();
                        break;
                }
            });
        },
        getUsers: function () {
            let id = localStorage.getItem("id");
            let token = localStorage.getItem("token");
            fetch('api/admin/' + id + '/' + token,
            // fetch('http://booker.loc/Server/app/api/admin/' + id + '/' + token, 
            // fetch('http://192.168.0.15/~user6/booker/Server/app/api/admin/' + id + '/' + token,
            { method: "GET" }).then(response => response.json()).then(res => {
                switch (res.status) {
                    case "success":
                        this.users = res.data;
                        break;
                    default:
                        localStorage.clear();
                        location.reload();
                        break;
                }
            });
        }
    },
    created: function () {
        if (localStorage.getItem("role") == 1) {
            this.checkAdmin();
            this.getUsers();
        } else {
            this.status.msg = "Only admins can check employee list";
        }

        // this.getUsers();
    },
    mounted: function () {}
});

/***/ }),

/***/ "H2he":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EmployeeList_vue__ = __webpack_require__("E5zT");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_74b2e8e6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_EmployeeList_vue__ = __webpack_require__("o8u/");
function injectStyle (ssrContext) {
  __webpack_require__("70y6")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EmployeeList_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_74b2e8e6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_EmployeeList_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "HiNh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"margin-bottom":"20px"}},[_c('b-navbar',{staticClass:"my-navbar",attrs:{"toggleable":"lg","type":"dark","variant":"primary"}},[_c('b-navbar-brand',{attrs:{"to":"/calendar/1"},on:{"click":function($event){return _vm.changeRoom(1)}}},[_vm._v("Boardroom Booker")]),_vm._v(" "),_c('b-navbar-toggle',{attrs:{"target":"nav-collapse"}}),_vm._v(" "),_c('b-collapse',{attrs:{"id":"nav-collapse","is-nav":""}},[_c('b-navbar-nav',[_c('b-nav-item-dropdown',{staticClass:"white",attrs:{"text":"Calendar","left":""}},_vm._l((_vm.rooms),function(room){return _c('b-dropdown-item',{key:room.id,attrs:{"to":'/calendar/' + room.id},on:{"click":function($event){return _vm.changeRoom(room.id)}}},[_vm._v(_vm._s(room.name))])}),1)],1),_vm._v(" "),_c('b-navbar-nav',{staticClass:"ml-auto"},[_c('b-nav-item-dropdown',{attrs:{"right":""}},[_c('template',{staticClass:"white",slot:"button-content"},[_vm._v("Hello, "),_c('font-awesome-icon',{attrs:{"icon":"user"}}),_vm._v(" "+_vm._s(_vm.username))],1),_vm._v(" "),_c('b-dropdown-item',{attrs:{"href":"#"},on:{"click":_vm.logout}},[_vm._v("Sign Out")])],2)],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "J+R/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Auth_vue__ = __webpack_require__("ngLG");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3b369f36_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Auth_vue__ = __webpack_require__("oybJ");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Auth_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3b369f36_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Auth_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "JAfV":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f89fdabe_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("P4u7");
function injectStyle (ssrContext) {
  __webpack_require__("JAfV")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f89fdabe_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_vue__ = __webpack_require__("Tqaz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__("YaEn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bootstrap_dist_css_bootstrap_min_css__ = __webpack_require__("qb6w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bootstrap_dist_css_bootstrap_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_bootstrap_dist_css_bootstrap_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bootstrap_vue_dist_bootstrap_vue_css__ = __webpack_require__("9M+g");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bootstrap_vue_dist_bootstrap_vue_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_bootstrap_vue_dist_bootstrap_vue_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fortawesome_fontawesome_svg_core__ = __webpack_require__("C/JF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fortawesome_free_solid_svg_icons__ = __webpack_require__("fhbW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fortawesome_free_regular_svg_icons__ = __webpack_require__("Yu89");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fortawesome_vue_fontawesome__ = __webpack_require__("1e6/");
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.













__WEBPACK_IMPORTED_MODULE_0_vue__["default"].component('font-awesome-icon', __WEBPACK_IMPORTED_MODULE_9__fortawesome_vue_fontawesome__["a" /* FontAwesomeIcon */]);
__WEBPACK_IMPORTED_MODULE_6__fortawesome_fontawesome_svg_core__["a" /* library */].add(__WEBPACK_IMPORTED_MODULE_7__fortawesome_free_solid_svg_icons__["a" /* faUserSecret */], __WEBPACK_IMPORTED_MODULE_7__fortawesome_free_solid_svg_icons__["b" /* faUser */], __WEBPACK_IMPORTED_MODULE_8__fortawesome_free_regular_svg_icons__["a" /* faCalendarAlt */]);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_bootstrap_vue__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

__WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */].beforeEach((to, from, next) => {

  let id = localStorage.getItem("id");
  let token = localStorage.getItem("token");
  let login = localStorage.getItem("login");

  if (id && token && login) {
    to.meta.login = true;
    next();
  } else {
    if (to.path != '/') {
      to.meta.login = false;
      next('/');
    } else {
      next();
    }
  }

  if (to.meta.login && to.path == '/') {
    next('/calendar/1');
  }
});

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_2__App__["a" /* default */] }
});

/***/ }),

/***/ "NRqe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EventForm_vue__ = __webpack_require__("DHjN");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2bf2eb41_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_EventForm_vue__ = __webpack_require__("rnwA");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EventForm_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2bf2eb41_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_EventForm_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "P4u7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('div',{staticClass:"container"},[(_vm.login)?_c('navBar',{on:{"changeRoom":_vm.roomHandler}}):_vm._e(),_vm._v(" "),_c('router-view',{attrs:{"room":_vm.selectedRoom},on:{"logSuc":function($event){return _vm.loginChange()}}})],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "P7/f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navBar_vue__ = __webpack_require__("0xAs");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_13923c68_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_navBar_vue__ = __webpack_require__("HiNh");
function injectStyle (ssrContext) {
  __webpack_require__("2NcG")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navBar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_13923c68_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_navBar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "VdQo":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "YT0m":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EventForm__ = __webpack_require__("NRqe");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    name: "Calendar",
    components: {
        EventForm: __WEBPACK_IMPORTED_MODULE_0__EventForm__["a" /* default */]
    },
    data: function () {
        return {
            status: "",
            selectedEvent: undefined,
            events: [],
            login: localStorage.getItem("login"),
            date: new Date(),
            monthes: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'October', 'December'],
            selectedMonth: undefined,
            selectedYear: undefined,
            daysInSelectedMonth: undefined,
            lastDay: undefined,
            firstWeekDay: undefined,
            firstDay: 1,
            lastWeekDay: undefined,
            days: [],
            weekFormat: "RU",
            timeFormat: 24
        };
    },
    props: ['room'],
    methods: {
        setStatus(data) {
            this.status = data;
            this.getEvents();
        },
        getEventById: function (id) {
            this.selectedEvent = id;
        },
        currentMonth: function () {
            this.selectedMonth = this.date.getMonth();
            return this.selectedMonth;
        },
        currentYear: function () {
            this.selectedYear = this.date.getFullYear();
            return this.selectedYear;
        },
        showMonth: function (month) {
            this.selectedMonth = month;
            return this.monthes[month];
        },
        nextMonth: function () {
            this.getFirstWeekDay();
            this.getLastDay();
            this.getLastWeekDay();
            this.getMonthesDays();
            if (this.selectedMonth < 11) {
                return this.selectedMonth++;
            }
            this.selectedYear++;
            return this.selectedMonth = 0;
        },
        prevMonth() {
            this.getFirstWeekDay();
            this.getLastDay();
            this.getLastWeekDay();
            this.getMonthesDays();
            if (this.selectedMonth > 0) {
                return this.selectedMonth--;
            }
            this.selectedYear--;
            return this.selectedMonth = 11;
        },
        getFirstWeekDay: function () {
            this.firstWeekDay = new Date(this.selectedYear, this.selectedMonth, 1).getDay();
        },
        getLastDay: function () {
            this.lastDay = new Date(this.selectedYear, this.selectedMonth + 1, 0).getDate();
        },
        getLastWeekDay: function () {
            this.getLastDay();
            this.lastWeekDay = new Date(this.selectedYear, this.selectedMonth, this.lastDay).getDay();
        },
        getMonthesDays: function () {
            this.days = [];
            var week = 0;
            this.days[week] = [];
            for (var i = 1; i <= this.lastDay; i++) {
                if (new Date(this.selectedYear, this.selectedMonth, i).getDay() != this.firstDay) {
                    this.days[week].push({
                        dayNum: i,
                        dayWeek: new Date(this.selectedYear, this.selectedMonth, i).getDay()
                    });
                } else {
                    week++;
                    if (!this.days[week]) {
                        this.days[week] = [];
                    }
                    this.days[week].push({
                        dayNum: i,
                        dayWeek: new Date(this.selectedYear, this.selectedMonth, i).getDay()
                    });
                }
            }
        },
        formatFirstWeek: function () {
            for (var i = this.days[0].length; i != 0 && i < 7; i++) {
                this.days[0].unshift({
                    dayNum: undefined,
                    dayWeek: i
                });
            }
        },
        changeFormat() {
            if (this.firstDay == 0) {
                localStorage.setItem("firstDay", 1);
                this.firstDay = localStorage.getItem("firstDay");
                localStorage.setItem("weekFormat", "RU");
                this.weekFormat = localStorage.getItem("weekFormat");
                this.weekFormat = "RU";
            } else {
                localStorage.setItem("firstDay", 0);
                this.firstDay = localStorage.getItem("firstDay");
                localStorage.setItem("weekFormat", "USA");
                this.weekFormat = localStorage.getItem("weekFormat");
            }
            this.getMonthesDays();
        },
        changeTimeFormat() {
            if (this.timeFormat == 24) {
                this.timeFormat = 12;
                localStorage.setItem("timeFormat", 12);
            } else {
                localStorage.setItem("timeFormat", 24);
                this.timeFormat = 24;
            }
            this.getEvents();
        },
        getEvents: function () {
            fetch('api/events/' + this.$route.params.id + '/' + this.selectedYear + '/' + (this.selectedMonth + 1),
            // fetch('http://booker.loc/Server/app/api/events/' + this.$route.params.id + '/' + this.selectedYear + '/' + (this.selectedMonth + 1), 
            // fetch('http://192.168.0.15/~user6/booker/Server/app/api/events/' + this.$route.params.id + '/' + this.selectedYear + '/' + (this.selectedMonth + 1),
            { method: "GET" }).then(response => response.json()).then(res => {
                switch (res.status) {
                    case "success":
                        if (Array.isArray(res.data)) {
                            res.data.forEach(element => {
                                element.startEvent += "000";
                                element.endEvent += "000";
                                element.createdEvent += "000";

                                if (this.timeFormat == 24) {
                                    element.startHour = new Date(+element.startEvent).getHours();
                                    element.startMinutes = new Date(+element.startEvent).getMinutes();
                                    if (element.startMinutes == 0) {
                                        element.startMinutes = "00";
                                    }
                                    element.endHour = new Date(+element.endEvent).getHours();
                                    element.endMinutes = new Date(+element.endEvent).getMinutes();
                                    if (element.endMinutes == 0) {
                                        element.endMinutes = "00";
                                    }
                                } else {
                                    element.startHour = new Date(+element.startEvent).getHours();
                                    element.startMinutes = new Date(+element.startEvent).getMinutes();
                                    element.ampmStart = element.startHour >= 12 ? 'pm' : 'am';
                                    element.startHour = element.startHour % 12;
                                    element.startHour = element.startHour ? element.startHour : 12;
                                    element.startMinutes = new Date(+element.startEvent).getMinutes();
                                    if (element.startMinutes == 0) {
                                        element.startMinutes = "00";
                                    }

                                    element.endHour = new Date(+element.endEvent).getHours();
                                    element.endMinutes = new Date(+element.endEvent).getMinutes();
                                    element.ampmEnd = element.endHour >= 12 ? 'pm' : 'am';
                                    element.endHour = element.endHour % 12;
                                    element.endHour = element.endHour ? element.endHour : 12;
                                    element.endMinutes = new Date(+element.endEvent).getMinutes();
                                    if (element.endMinutes == 0) {
                                        element.endMinutes = "00";
                                    }
                                }
                            });
                        }
                        this.events = res.data;
                        break;
                    default:
                        this.status = {
                            variant: 'danger',
                            msg: 'Cannot get events'
                        };
                        break;
                }
            });
        },
        checkAdmin: function () {
            var result = fetch('api/auth/' + localStorage.getItem("id") + '/' + localStorage.getItem("token"),
            // fetch('http://booker.loc/Server/app/api/auth/' + localStorage.getItem("id") + '/' + localStorage.getItem("token"), 
            // fetch('http://192.168.0.15/~user6/booker/Server/app/api/auth/' + localStorage.getItem("id") + '/' + localStorage.getItem("token"), 
            { method: "GET" }).then(response => response.json()).then(res => {
                switch (res.status) {

                    case 'success':
                        return true;
                        break;

                    default:
                        localStorage.clear();
                        location.reload();
                        break;
                }
            });
        },
        deleteEvent: function (all) {
            if (localStorage.getItem("role") == 1) {
                this.checkAdmin();
            } else {

                if (this.events[this.selectedEvent].user_id != localStorage.getItem("id")) {
                    this.status = {
                        variant: "danger",
                        msg: "You cannot delete this event cause it doesn't belong to you"
                    };
                    this.$bvModal.hide('delete-modal');
                    return;
                }
            }

            if (all) {

                if (this.events[this.selectedEvent].parent != null) {
                    var eventId = this.events[this.selectedEvent].parent;
                } else {
                    var eventId = this.events[this.selectedEvent].id;
                }

                fetch('api/events/' + eventId + '/all/' + localStorage.getItem("id") + '/' + localStorage.getItem("token"),
                // fetch('http://booker.loc/Server/app/api/events/' + eventId + '/all/' + localStorage.getItem("id") + '/' + localStorage.getItem("token"),
                // fetch('http://192.168.0.15/~user6/booker/Server/app/api/events/' + eventId + '/all/' + localStorage.getItem("id") + '/' + localStorage.getItem("token"),
                { method: "DELETE" }).then(response => response.json()).then(res => {
                    switch (res.status) {
                        case 'success':
                            this.setStatus({ variant: 'success', msg: "Booking has been deleted" });
                            break;

                        case 'err_valid':
                            this.setStatus({ variant: 'warning', msg: "Something going wrong. Try again" });
                            break;

                        case 'err_login':
                            localStorage.clear();
                            location.reload();
                            break;

                        case 'err_operation':
                            this.setStatus({ variant: 'warning', msg: "Something going wrong. Try again" });
                            break;

                        default:
                            this.setStatus({ variant: 'danger', msg: "Something going wrong. Try again" });
                            break;
                    }
                });
            } else {
                fetch('api/events/' + this.events[this.selectedEvent].id + '/single/' + localStorage.getItem("id") + '/' + localStorage.getItem("token"),
                // fetch('http://booker.loc/Server/app/api/events/' + this.events[this.selectedEvent].id + '/single/' + localStorage.getItem("id") + '/' + localStorage.getItem("token"),
                // fetch('http://192.168.0.15/~user6/booker/Server/app/api/events/' + this.events[this.selectedEvent].id + '/single/' + localStorage.getItem("id") + '/' + localStorage.getItem("token"),
                { method: "DELETE" }).then(response => response.json()).then(res => {
                    switch (res.status) {
                        case 'success':
                            this.setStatus({ variant: 'success', msg: "Booking has been deleted" });
                            break;

                        case 'err_valid':
                            this.setStatus({ variant: 'warning', msg: "Something going wrong. Try again" });
                            break;

                        case 'err_login':
                            localStorage.clear();
                            location.reload();
                            break;

                        case 'err_operation':
                            this.setStatus({ variant: 'warning', msg: "Something going wrong. Try again" });
                            break;

                        default:
                            this.setStatus({ variant: 'danger', msg: "Something going wrong. Try again" });
                            break;
                    }
                });
            }
            this.$bvModal.hide('delete-modal');
            this.getEvents();
        }
    },

    computed: {
        setDefaultVals: function () {},
        monthYear: function () {
            this.days = [];
            if (void 0 === this.selectedMonth) {
                this.selectedMonth = this.currentMonth();
            }
            if (void 0 === this.selectedYear) {
                this.selectedYear = this.currentYear();
            }
            return this.monthes[this.selectedMonth] + " " + this.selectedYear;
        },
        week() {
            if (this.firstDay == 0) {
                return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            } else {
                return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
            }
        }
    },
    watch: {
        selectedMonth: function (val, oldVal) {
            this.getEvents();
            this.selectedEvent = undefined;
        },
        room: function (val, oldVal) {
            this.getEvents();
        }
    },
    created: function () {
        let first = localStorage.getItem("firstDay");
        let format = localStorage.getItem("weekFormat");
        if (first != undefined && format != undefined) {
            this.firstDay = first;
            this.weekFormat = format;
        }
    },
    mounted: function () {
        this.getFirstWeekDay();
        this.getLastWeekDay();
        this.getLastDay();
        this.getMonthesDays();
        this.formatFirstWeek();
        localStorage.setItem("timeFormat", 24);
    },
    beforeUpdate: function () {
        this.getFirstWeekDay();
        this.getLastWeekDay();
        this.getLastDay();
        this.getMonthesDays();
        this.formatFirstWeek();
    }
});

/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Auth__ = __webpack_require__("J+R/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Calendar__ = __webpack_require__("iyFI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_EditEvent__ = __webpack_require__("Dwu1");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_EmployeeList__ = __webpack_require__("H2he");







__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'Auth',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Auth__["a" /* default */]
  }, {
    path: '/calendar/:id',
    name: 'Calendar',
    component: __WEBPACK_IMPORTED_MODULE_3__components_Calendar__["a" /* default */]
  }, {
    path: '/edit/:id',
    name: 'EditEvent',
    component: __WEBPACK_IMPORTED_MODULE_4__components_EditEvent__["a" /* default */]
  }, {
    path: '/employees',
    name: 'EmployeeList',
    component: __WEBPACK_IMPORTED_MODULE_5__components_EmployeeList__["a" /* default */]
  }]
}));

/***/ }),

/***/ "Zy4h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"col-9"},[(_vm.status)?_c('b-alert',{staticClass:"text-center",attrs:{"show":"","variant":_vm.status.variant},model:{value:(_vm.status),callback:function ($$v) {_vm.status=$$v},expression:"status"}},[_c('h4',[_vm._v(_vm._s(_vm.status.msg))])]):_vm._e(),_vm._v(" "),_c('table',{staticClass:"table table-bordered",attrs:{"id":"calendar2"}},[_c('thead',[_c('tr',[_c('td',{on:{"click":_vm.prevMonth}},[_c('b-button',{staticClass:"btn-switch",attrs:{"variant":"primary"}},[_vm._v(" < ")])],1),_vm._v(" "),_c('td',{attrs:{"colspan":"5"}},[_c('h2',[_c('font-awesome-icon',{attrs:{"icon":['far', 'calendar-alt']}}),_vm._v(" "+_vm._s(_vm.monthYear))],1)]),_vm._v(" "),_c('td',{on:{"click":_vm.nextMonth}},[_c('b-button',{staticClass:"btn-switch",attrs:{"variant":"primary"}},[_vm._v(" > ")])],1)]),_vm._v(" "),_c('tr',{staticClass:"week-days"},_vm._l((_vm.week),function(weekDay,index){return _c('td',{key:index},[_vm._v(_vm._s(weekDay))])}),0)]),_vm._v(" "),_c('tbody',_vm._l((_vm.days),function(week,index){return _c('tr',{key:index},_vm._l((week),function(day,index){return _c('td',{key:index},[_vm._v(_vm._s(day.dayNum)+"\n                        "),_c('b-list-group',_vm._l((_vm.events),function(event,index){return (new Date(+event.startEvent).getDate() == day.dayNum)?_c('b-list-group-item',{directives:[{name:"b-modal",rawName:"v-b-modal.my-modal",modifiers:{"my-modal":true}}],key:index,staticClass:"mb-1 p-0 border-0 text-center event-badge",staticStyle:{"background-color":"#007bff","color":"white","border-radius":".25rem","cursor":"pointer"},attrs:{"size":"sm","variant":"primary"},on:{"click":function($event){return _vm.getEventById(index)}}},[_c('small',[_vm._v("\n                           "+_vm._s(event.startHour)+":"+_vm._s(event.startMinutes)+" "+_vm._s(event.ampmStart)+" - "+_vm._s(event.endHour)+":"+_vm._s(event.endMinutes)+" "+_vm._s(event.ampmEnd))])]):_vm._e()}),1)],1)}),0)}),0)]),_vm._v(" "),(_vm.selectedEvent != undefined)?_c('b-modal',{attrs:{"id":"my-modal","title":"Event details","hide-footer":""}},[_c('table',{staticClass:"table"},[_c('tbody',[_c('tr',[_c('th',{attrs:{"scope":"row"}},[_vm._v("When")]),_vm._v(" "),_c('td',[_c('small',[_vm._v("Starts at")]),_vm._v(" "+_vm._s(_vm.events[_vm.selectedEvent].startHour)+":"+_vm._s(_vm.events[_vm.selectedEvent].startMinutes)+" "+_vm._s(_vm.events[_vm.selectedEvent].ampmStart))]),_vm._v(" "),_c('td',[_c('small',[_vm._v("Ends at")]),_vm._v(" "+_vm._s(_vm.events[_vm.selectedEvent].endHour)+":"+_vm._s(_vm.events[_vm.selectedEvent].endMinutes)+" "+_vm._s(_vm.events[_vm.selectedEvent].ampmEnd))])]),_vm._v(" "),_c('tr',[_c('th',{attrs:{"scope":"row"}},[_vm._v("Notes")]),_vm._v(" "),_c('td',{attrs:{"colspan":"2"}},[_vm._v(_vm._s(_vm.events[_vm.selectedEvent].description))])]),_vm._v(" "),_c('tr',[_c('th',{attrs:{"scope":"row"}},[_vm._v("Who")]),_vm._v(" "),_c('td',{attrs:{"colspan":"2"}},[_vm._v(_vm._s(_vm.events[_vm.selectedEvent].name))])])])]),_vm._v(" "),_c('div',{staticClass:"modal-footer"},[_c('button',{directives:[{name:"b-modal",rawName:"v-b-modal.delete-modal",modifiers:{"delete-modal":true}}],staticClass:"btn btn-outline-danger",attrs:{"type":"button"},on:{"click":function($event){return _vm.$bvModal.hide('my-modal')}}},[_vm._v("Delete")]),_vm._v(" "),_c('router-link',{staticClass:"btn btn-primary",attrs:{"to":'/edit/' + _vm.events[_vm.selectedEvent].id}},[_vm._v("Update")])],1)]):_vm._e(),_vm._v(" "),(_vm.selectedEvent != undefined)?_c('b-modal',{attrs:{"id":"delete-modal","title":"Delete event","hide-footer":""}},[_c('p',[_vm._v("Are you sure you want to delete this event?")]),_vm._v(" "),_c('div',{staticClass:"modal-footer"},[_c('button',{staticClass:"btn btn-outline-danger float-right",attrs:{"type":"button"},on:{"click":function($event){return _vm.deleteEvent(true)}}},[_vm._v("Delete all accurrencies")]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary float-right",attrs:{"type":"button"},on:{"click":function($event){return _vm.deleteEvent(false)}}},[_vm._v("Delete")])])]):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"col-3 text-left"},[_c('div',{staticClass:"custom-control custom-switch"},[(_vm.weekFormat == 'RU')?_c('input',{staticClass:"custom-control-input",attrs:{"type":"checkbox","id":"customSwitch1"},on:{"click":_vm.changeFormat}}):_c('input',{staticClass:"custom-control-input",attrs:{"type":"checkbox","id":"customSwitch1","checked":""},on:{"click":_vm.changeFormat}}),_vm._v(" "),_c('label',{staticClass:"custom-control-label",attrs:{"for":"customSwitch1"}},[_vm._v("Switch week format: "),_c('b',[_vm._v("("+_vm._s(_vm.weekFormat)+")")])])]),_vm._v(" "),_c('div',{staticClass:"custom-control custom-switch pb-2"},[_c('input',{staticClass:"custom-control-input",attrs:{"type":"checkbox","name":"time","id":"timeSwicher"},on:{"click":_vm.changeTimeFormat}}),_vm._v(" "),_c('label',{staticClass:"custom-control-label",attrs:{"for":"timeSwicher"}},[_vm._v("Switch time format: "+_vm._s(_vm.timeFormat))])]),_vm._v(" "),_c('div',{staticClass:"p-2 pt-3"},[_c('router-link',{staticClass:"btn btn-secondary",attrs:{"to":"/employees"}},[_vm._v("Employee List")])],1),_vm._v(" "),_c('div',{staticClass:"p-2"},[_c('EventForm',{attrs:{"hours-format":_vm.timeFormat,"current-date":_vm.date},on:{"getStatus":_vm.setStatus}})],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "cW6p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: "EditEvent",
    data: function () {
        return {
            statusVar: "danger",
            status: "",
            eventData: [],
            showEvent: false,
            showRecurrence: false,
            recurrence: false,
            formData: {
                userFor: localStorage.getItem("id"),
                dateStart: "",
                hoursStart: "Hours",
                minutesStart: "Minutes",
                midnightStart: "AM/PM",
                hoursEnd: "Hours",
                minutesEnd: "Minutes",
                midnightEnd: "AM/PM",
                description: "",
                oldTime: ""

            },
            hoursFormat: localStorage.getItem("timeFormat"),
            users: [],
            minutes: ['00', '15', '30', '45']
        };
    },
    methods: {
        switchRecurring: function () {
            if (this.recurrence == false) {
                this.recurrence = true;
            } else {
                this.recurrence = false;
            }
        },
        getDate: function (startEvent) {
            let start = startEvent + "000";
            let date = new Date(+start);
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            return year + '-' + month + '-' + day;
        },
        getTime: function (startEvent, endEvent) {
            let start = startEvent + "000";
            let dateStart = new Date(+start);
            if (dateStart.getMinutes() == 0) {
                var timeStart = dateStart.getHours() + ':00';
            } else {
                var timeStart = dateStart.getHours() + ':' + dateStart.getMinutes();
            }
            let end = endEvent + "000";
            let dateEnd = new Date(+end);
            if (dateEnd.getMinutes() == 0) {
                var timeEnd = dateEnd.getHours() + ':00';
            } else {
                var timeEnd = dateEnd.getHours() + ':' + dateEnd.getMinutes();
            }

            return timeStart + " - " + timeEnd;
        },
        standartizeHours: function (hours, midnight) {
            if (isNaN(hours)) {
                return;
            }
            if (this.hoursFormat != 24 && midnight == 'pm') {
                return +hours + 12;
            }
            return hours;
        },

        standartizeDate: function (date, hoursStart, minutesStart, hoursEnd, minutesEnd) {
            let result = {};
            let dateArr = date.split('-');
            let currentDate = new Date();

            if (hoursStart && minutesStart) {
                var dateStart = new Date(dateArr[0], dateArr[1] - 1, dateArr[2], hoursStart, minutesStart);
            }

            if (hoursEnd && minutesEnd) {
                var dateEnd = new Date(dateArr[0], dateArr[1] - 1, dateArr[2], hoursEnd, minutesEnd);
            }

            if (dateStart.getTime() < currentDate.getTime()) {
                this.status = "Sorry, but event is already finished!";
                return;
            }

            if (dateStart && dateEnd) {
                result.dateStart = dateStart.getTime() / 1000;
                result.dateEnd = dateEnd.getTime() / 1000;
                return result;
            }
            this.status = "Please, choose correct date";
            return;
        },
        checkAdmin: function () {
            var result = fetch('api/auth/' + localStorage.getItem("id") + '/' + localStorage.getItem("token"),
            // fetch('http://booker.loc/Server/app/api/auth/' + localStorage.getItem("id") + '/' + localStorage.getItem("token"), 
            // fetch('http://192.168.0.15/~user6/booker/Server/app/api/auth/' + localStorage.getItem("id") + '/' + localStorage.getItem("token"), 
            { method: "GET" }).then(response => response.json()).then(res => {
                switch (res.status) {

                    case 'success':
                        return true;
                        break;

                    default:
                        localStorage.clear();
                        location.reload();
                        break;
                }
            });
        },
        getUsers: function () {
            let id = localStorage.getItem("id");
            let role = localStorage.getItem("role");
            if (role == 1) {
                let token = localStorage.getItem("token");
                fetch('api/admin/' + id + '/' + token,
                // fetch('http://booker.loc/Server/app/api/admin/' + id + '/' + token, 
                // fetch('http://192.168.0.15/~user6/booker/Server/app/api/admin/' + id + '/' + token,
                { method: "GET" }).then(response => response.json()).then(res => {
                    switch (res.status) {
                        case "success":
                            this.users = res.data;
                            break;
                        default:
                            localStorage.clear();
                            location.reload();
                            break;
                    }
                });
            } else {
                fetch('api/users/' + id,
                // fetch('http://booker.loc/Server/app/api/users/' + id, 
                // fetch('http://192.168.0.15/~user6/booker/Server/app/api/users/' + id, 
                { method: "GET" }).then(response => response.json()).then(res => {
                    switch (res.status) {
                        case "success":
                            this.users = res.data;
                            break;
                        case "no_user":
                            localStorage.clear();
                            location.reload();
                            break;
                        case "err_valid":
                            localStorage.clear();
                            location.reload();
                            break;
                        default:
                            break;
                    }
                });
            }
        },
        getEvent: function () {
            fetch('api/events/' + this.$route.params.id,
            // fetch('http://booker.loc/Server/app/api/events/' + this.$route.params.id, 
            // fetch('http://192.168.0.15/~user6/booker/Server/app/api/events/' + this.$route.params.id, 
            { method: "GET" }).then(response => response.json()).then(res => {
                switch (res.status) {

                    case 'success':
                        if (res.data[0].user_id == localStorage.getItem("id") || localStorage.getItem("role") == 1) {
                            this.eventData = res.data;
                            if (res.data.length > 1 || res.data[0].parent) {
                                this.showRecurrence = true;
                            }
                            this.showEvent = true;
                            this.formData.dateStart = this.getDate(res.data[0].startEvent);
                            this.formData.description = res.data[0].description;
                            this.formData.oldTime = this.getTime(res.data[0].startEvent, res.data[0].endEvent);
                        } else {
                            this.status = "error! not yours!";
                        }
                        break;

                    default:
                        this.status = "error";
                }
            }).catch(error => {
                this.status = "error";
            });
        },
        dataToParamString: function (data) {
            var string = '';
            for (let val in data) {
                string += val + '=' + encodeURIComponent(data[val]) + '&';
            }
            return string;
        },
        validateForm: function (event) {
            event.preventDefault();

            let hoursStart = this.standartizeHours(this.formData.hoursStart, this.formData.midnightStart);
            let hoursEnd = this.standartizeHours(this.formData.hoursEnd, this.formData.midnightEnd);

            if (hoursStart < 8 || hoursStart > 20 || hoursEnd < 8 || hoursEnd > 20) {
                this.status = "Events aviable only on 8 a.m. till 9 p.m.";
                return;
            }

            if (!hoursStart || isNaN(this.formData.minutesStart)) {
                this.status = "Please, choose the correct start time";
                return;
            }

            if (!hoursEnd || isNaN(this.formData.minutesStart)) {
                this.status = "Please, choose the correct ending time";
                return;
            }

            let correctDates = this.standartizeDate(this.formData.dateStart, hoursStart, this.formData.minutesStart, hoursEnd, this.formData.minutesEnd);

            if (correctDates) {
                if (correctDates.dateStart > correctDates.dateEnd) {
                    this.status = "The event cannot end before it starts";
                    return;
                }
            } else {
                return;
            }

            if (this.formData.description.length <= 0) {
                this.error = "Desctiption is required field";
                return;
            }

            var dataForm = {
                eventId: this.eventData[0].id,
                roomId: this.eventData[0].boardroom_id,
                parent: this.eventData[0].parent,
                userFor: this.formData.userFor,
                dateStart: correctDates.dateStart,
                dateEnd: correctDates.dateEnd,
                description: this.formData.description,
                recFlag: this.recurrence,
                userId: localStorage.getItem("id"),
                token: localStorage.getItem("token")
            };

            var sendingData = this.dataToParamString(dataForm);

            fetch('api/events/',
            // fetch('http://booker.loc/Server/app/api/events/',
            // fetch('http://192.168.0.15/~user6/booker/Server/app/api/events/', 
            { method: "PUT", body: sendingData }).then(response => response.json()).then(res => {
                switch (res.status) {
                    case 'success':
                        this.statusVar = 'success';
                        this.status = 'Thanks, events were updated!';
                        break;

                    case 'err_valid':
                        this.status = 'Fill in the fields correctly!';
                        break;

                    case 'err_dates':
                        this.status = 'The event cannot end before it starts!';
                        break;

                    case 'err_hours':
                        this.status = 'The selected date is not soon';
                        break;

                    case 'err_future':
                        this.status = 'Events aviable only on 8 a.m. till 9 p.m.';
                        break;

                    case 'err_past':
                        this.status = 'You might to select the current year or later';
                        break;

                    case 'err_time':
                        this.status = 'An event has already been booked for the specified time!';
                        break;

                    case 'err_current':
                        this.status = 'Sorry, but event is already finished!';
                        break;

                    case 'succ_with_errors':
                        this.statusVar = 'warning';
                        this.status = 'events were updated but problems occurred!';
                        break;

                    case 'err_login':
                        localStorage.clear();
                        location.reload();
                        break;

                    default:
                        break;
                }
            });
        }
    },
    created: function () {
        if (localStorage.getItem("role") == 1) {
            this.checkAdmin();
        }
        this.getEvent();
        this.getUsers();
    }
});

/***/ }),

/***/ "iyFI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Calendar_vue__ = __webpack_require__("YT0m");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0a3ccac6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Calendar_vue__ = __webpack_require__("Zy4h");
function injectStyle (ssrContext) {
  __webpack_require__("VdQo")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Calendar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0a3ccac6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Calendar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "ngLG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Auth',
  data: function () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      infoBar: {
        msg: "You might to be looged to check events and make new bookings",
        variant: "info"
      }
    };
  },
  methods: {
    dataToParamString: function (data) {

      this.loginForm.operation = "login";

      var string = '';
      for (let val in data) {
        string += val + '=' + encodeURIComponent(data[val]) + '&';
      }
      return string;
    },
    signIn: function (event) {
      event.preventDefault();

      let str = this.dataToParamString(this.loginForm);

      fetch('api/auth/',
      // fetch('http://booker.loc/Server/app/api/auth/', 
      // fetch('http://192.168.0.15/~user6/booker/Server/app/api/auth/', 
      { method: "PUT", body: str }).then(response => response.json()).then(data => {
        switch (data.status) {
          case 'success':
            localStorage.setItem("id", data.id);
            localStorage.setItem("login", data.login);
            localStorage.setItem("token", data.token);
            localStorage.setItem("role", data.role);
            this.$router.push('/calendar/1');

            this.$emit("logSuc");
            break;

          case 'no_user':
            this.infoBar.variant = "danger";
            this.infoBar.msg = "No user with this login.";
            break;

          case 'err_password':
            this.infoBar.variant = "danger";
            this.infoBar.msg = "Wrong password.";
            break;

          default:
            this.infoBar.variant = "danger";
            this.infoBar.msg = "Error. No user with this login/password.";
        }
      }).catch(error => {
        this.infoBar.variant = "danger";
        this.infoBar.msg = "Error. Please, try again later.";
      });
    }
  }
});

/***/ }),

/***/ "o8u/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[(_vm.status.msg)?_c('b-alert',{staticClass:"text-center",attrs:{"show":"","variant":_vm.status.variant}},[_c('h4',[_vm._v(_vm._s(_vm.status.msg))])]):_vm._e()],1)]),_vm._v(" "),(_vm.showList)?_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-2"}),_vm._v(" "),_c('div',{staticClass:"col-8"},[_c('table',{staticClass:"table table-striped text-left"},[_vm._m(0),_vm._v(" "),_c('tbody',_vm._l((_vm.users),function(user,index){return _c('tr',{key:index},[_c('td',[_c('a',{attrs:{"href":'mailto:' + user.email}},[_vm._v("\n                            "+_vm._s(user.name)+"\n                        ")])]),_vm._v(" "),_c('td',{staticClass:"text-right actions"},[_c('button',{directives:[{name:"b-modal",rawName:"v-b-modal.modal-delete",modifiers:{"modal-delete":true}}],staticClass:"btn btn-outline-danger mr-1",attrs:{"type":"button"},on:{"click":function($event){return _vm.selectUser(index)}}},[_vm._v("\n                            Delete\n                        ")]),_vm._v(" "),_c('button',{directives:[{name:"b-modal",rawName:"v-b-modal.modal-update",modifiers:{"modal-update":true}}],staticClass:"btn btn-primary ml-1",attrs:{"type":"button"},on:{"click":function($event){return _vm.selectUser(index)}}},[_vm._v("\n                            Update\n                        ")])])])}),0)]),_vm._v(" "),_c('button',{directives:[{name:"b-modal",rawName:"v-b-modal.add-modal",modifiers:{"add-modal":true}}],staticClass:"btn btn-primary ml-1",attrs:{"type":"button"}},[_vm._v("\n                    Add user\n                ")]),_vm._v(" "),(_vm.selectedUser != undefined)?_c('b-modal',{attrs:{"id":"modal-update","title":"Update User","hide-footer":""},on:{"hidden":_vm.resetUpdate}},[(_vm.updateError.msg)?_c('b-alert',{staticClass:"text-center",attrs:{"show":"","variant":_vm.updateError.variant}},[_c('h4',[_vm._v(_vm._s(_vm.updateError.msg))])]):_vm._e(),_vm._v(" "),_c('form',[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"email"}},[_vm._v("Email address")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.updateForm.email),expression:"updateForm.email"}],staticClass:"form-control",attrs:{"type":"email","id":"email","aria-describedby":"emailHelp","placeholder":"email@mail.com","required":""},domProps:{"value":(_vm.updateForm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.updateForm, "email", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"username"}},[_vm._v("Name")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.updateForm.name),expression:"updateForm.name"}],staticClass:"form-control",attrs:{"type":"text","id":"username","placeholder":"User name","required":""},domProps:{"value":(_vm.updateForm.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.updateForm, "name", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"role"}},[_vm._v("Select role")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.updateForm.role),expression:"updateForm.role"}],staticClass:"form-control",attrs:{"id":"role"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.updateForm, "role", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"selected":"","disabled":""}},[_vm._v("Select role")]),_vm._v(" "),_c('option',{attrs:{"value":"1"}},[_vm._v("Admin")]),_vm._v(" "),_c('option',{attrs:{"value":"2"}},[_vm._v("User")])])]),_vm._v(" "),_c('div',{staticClass:"custom-control custom-switch pb-2"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.updateForm.passRestore),expression:"updateForm.passRestore"}],staticClass:"custom-control-input",attrs:{"type":"checkbox","name":"pass-restore","id":"pass-restore"},domProps:{"checked":Array.isArray(_vm.updateForm.passRestore)?_vm._i(_vm.updateForm.passRestore,null)>-1:(_vm.updateForm.passRestore)},on:{"click":_vm.switchPassRestore,"change":function($event){var $$a=_vm.updateForm.passRestore,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.updateForm, "passRestore", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.updateForm, "passRestore", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.updateForm, "passRestore", $$c)}}}}),_vm._v(" "),_c('label',{staticClass:"custom-control-label",attrs:{"for":"pass-restore"}},[_vm._v("Restore pass?")])]),_vm._v(" "),(_vm.updateForm.passRestore)?_c('div',[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"newPassword"}},[_vm._v("New password")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.updateForm.newPassword),expression:"updateForm.newPassword"}],staticClass:"form-control",attrs:{"type":"password","id":"newPassword","placeholder":"Password","required":""},domProps:{"value":(_vm.updateForm.newPassword)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.updateForm, "newPassword", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"rePassword"}},[_vm._v("Repeat Password")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.updateForm.rePassword),expression:"updateForm.rePassword"}],staticClass:"form-control",attrs:{"type":"password","id":"rePassword","placeholder":"Password","required":""},domProps:{"value":(_vm.updateForm.rePassword)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.updateForm, "rePassword", $event.target.value)}}})])]):_vm._e(),_vm._v(" "),_c('button',{staticClass:"btn btn-primary float-right",attrs:{"type":"submit"},on:{"click":_vm.validateUpdate}},[_vm._v("\n                        Submit\n                    ")])])],1):_vm._e(),_vm._v(" "),_c('b-modal',{attrs:{"id":"add-modal","title":"Add User","hide-footer":""},on:{"hidden":_vm.resetAdd}},[(_vm.addError.msg)?_c('b-alert',{staticClass:"text-center",attrs:{"show":"","variant":_vm.addError.variant}},[_c('h4',[_vm._v(_vm._s(_vm.addError.msg))])]):_vm._e(),_vm._v(" "),_c('form',[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"email"}},[_vm._v("Email address")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.addForm.email),expression:"addForm.email"}],staticClass:"form-control",attrs:{"type":"email","id":"email","aria-describedby":"emailHelp","placeholder":"email@mail.com","required":""},domProps:{"value":(_vm.addForm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.addForm, "email", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"username"}},[_vm._v("Name")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.addForm.name),expression:"addForm.name"}],staticClass:"form-control",attrs:{"type":"text","id":"username","placeholder":"User name","required":""},domProps:{"value":(_vm.addForm.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.addForm, "name", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"login"}},[_vm._v("Login")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.addForm.login),expression:"addForm.login"}],staticClass:"form-control",attrs:{"type":"text","id":"login","placeholder":"login","required":""},domProps:{"value":(_vm.addForm.login)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.addForm, "login", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"role"}},[_vm._v("Select role")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.addForm.role),expression:"addForm.role"}],staticClass:"form-control",attrs:{"id":"role"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.addForm, "role", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"selected":"","disabled":""}},[_vm._v("Select role")]),_vm._v(" "),_c('option',{attrs:{"value":"1"}},[_vm._v("Admin")]),_vm._v(" "),_c('option',{attrs:{"value":"2"}},[_vm._v("User")])])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"newPassword"}},[_vm._v("Password")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.addForm.password),expression:"addForm.password"}],staticClass:"form-control",attrs:{"type":"password","id":"newPassword","placeholder":"Password","required":""},domProps:{"value":(_vm.addForm.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.addForm, "password", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"rePassword"}},[_vm._v("Repeat Password")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.addForm.rePassword),expression:"addForm.rePassword"}],staticClass:"form-control",attrs:{"type":"password","id":"rePassword","placeholder":"Password","required":""},domProps:{"value":(_vm.addForm.rePassword)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.addForm, "rePassword", $event.target.value)}}})]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary float-right",attrs:{"type":"submit"},on:{"click":_vm.validateAdd}},[_vm._v("\n                        Submit\n                    ")])])],1),_vm._v(" "),(_vm.selectedUser != undefined)?_c('b-modal',{attrs:{"id":"modal-delete","title":"Delete user","hide-footer":""},on:{"hidden":_vm.getUsers}},[_c('p',[_vm._v("Are you sure you want to delete this user?")]),_vm._v(" "),_c('div',{staticClass:"modal-footer"},[_c('button',{staticClass:"btn btn-outline-secondary float-right",attrs:{"type":"button"},on:{"click":function($event){return _vm.$bvModal.hide('modal-delete')}}},[_vm._v("Cancel")]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger float-right",attrs:{"type":"button"},on:{"click":_vm.deleteUser}},[_vm._v("Delete")])])]):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"col-2"})]):_vm._e()])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',{attrs:{"scope":"col"}},[_vm._v("Name")]),_vm._v(" "),_c('th',{staticClass:"text-right actions",attrs:{"scope":"col"}})])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "oybJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-3"}),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('b-alert',{staticClass:"text-center",attrs:{"show":"","variant":_vm.infoBar.variant},model:{value:(_vm.infoBar.msg),callback:function ($$v) {_vm.$set(_vm.infoBar, "msg", $$v)},expression:"infoBar.msg"}},[_c('h4',[_vm._v(_vm._s(_vm.infoBar.msg))])])],1),_vm._v(" "),_c('div',{staticClass:"col-3"})]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-4"}),_vm._v(" "),_c('div',{staticClass:"col-4 text-left"},[_c('form',{on:{"submit":_vm.signIn}},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"LoginUsername"}},[_vm._v("Username")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.loginForm.username),expression:"loginForm.username"}],staticClass:"form-control",attrs:{"type":"text","id":"LoginUsername","aria-describedby":"emailHelp","placeholder":"Enter username","required":""},domProps:{"value":(_vm.loginForm.username)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.loginForm, "username", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"loginPass"}},[_vm._v("Password")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.loginForm.password),expression:"loginForm.password"}],staticClass:"form-control",attrs:{"type":"password","id":"loginPass","placeholder":"Password","required":""},domProps:{"value":(_vm.loginForm.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.loginForm, "password", $event.target.value)}}})]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary",attrs:{"type":"submit"}},[_vm._v("Submit")])])]),_vm._v(" "),_c('div',{staticClass:"col-4"})])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "qb6w":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "rnwA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-button',{directives:[{name:"b-modal",rawName:"v-b-modal.modal-prevent-closing",modifiers:{"modal-prevent-closing":true}}],attrs:{"variant":"success"}},[_vm._v("Book it!")]),_vm._v(" "),_c('b-modal',{ref:"modal",attrs:{"id":"modal-prevent-closing","title":"Booking"},on:{"show":_vm.resetModal,"hidden":_vm.resetModal,"ok":_vm.validateForm}},[(_vm.error)?_c('b-alert',{staticClass:"text-center",attrs:{"show":"","variant":"danger"},model:{value:(_vm.error),callback:function ($$v) {_vm.error=$$v},expression:"error"}},[_c('h4',[_vm._v(_vm._s(_vm.error))])]):_vm._e(),_vm._v(" "),_c('form',{ref:"form",on:{"submit":_vm.validateForm}},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"userFor"}},[_vm._v("Booked for:")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.userFor),expression:"formData.userFor"}],staticClass:"form-control",attrs:{"id":"userFor"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.formData, "userFor", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.users),function(user,key){return _c('option',{key:key,domProps:{"value":user.id}},[_vm._v(_vm._s(user.name))])}),0)]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"datestart"}},[_vm._v("Book this meeting on:")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.dateStart),expression:"formData.dateStart"}],staticClass:"form-control",attrs:{"type":"date","id":"datestart","required":""},domProps:{"value":(_vm.formData.dateStart)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formData, "dateStart", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"timeStart"}},[_vm._v("Beginning on:")]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-4"},[(_vm.hoursFormat == 24)?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.hoursStart),expression:"formData.hoursStart"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.formData, "hoursStart", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"selected":"","disabled":""}},[_vm._v("Hours")]),_vm._v(" "),_vm._l((24),function(hour,index){return (hour >= 8 && hour <= 20)?_c('option',{key:index},[_vm._v(_vm._s(hour))]):_vm._e()})],2):_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.hoursStart),expression:"formData.hoursStart"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.formData, "hoursStart", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"selected":"","disabled":""}},[_vm._v("Hours")]),_vm._v(" "),_vm._l((12),function(hour,index){return _c('option',{key:index},[_vm._v(_vm._s(hour))])})],2)]),_vm._v(":\n          "),_c('div',{staticClass:"col-4"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.minutesStart),expression:"formData.minutesStart"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.formData, "minutesStart", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"selected":"","disabled":""}},[_vm._v("Minutes")]),_vm._v(" "),_vm._l((_vm.minutes),function(minute,index){return _c('option',{key:index},[_vm._v(_vm._s(minute))])})],2)]),_vm._v(" "),(_vm.hoursFormat != 24)?_c('div',{staticClass:"col-3 pl-0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.midnightStart),expression:"formData.midnightStart"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.formData, "midnightStart", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"selected":"","disabled":""}},[_vm._v("AM/PM")]),_vm._v(" "),_c('option',{attrs:{"value":"am"}},[_vm._v("A.M.")]),_vm._v(" "),_c('option',{attrs:{"value":"pm"}},[_vm._v("P.M.")])])]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"timeStart"}},[_vm._v("Ending on:")]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-4"},[(_vm.hoursFormat == 24)?_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.hoursEnd),expression:"formData.hoursEnd"}],staticClass:"form-control",attrs:{"id":"h-end"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.formData, "hoursEnd", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"selected":"","disabled":""}},[_vm._v("Hours")]),_vm._v(" "),_vm._l((24),function(hour,index){return (hour >= 8 && hour <= 20)?_c('option',{key:index},[_vm._v(_vm._s(hour))]):_vm._e()})],2):_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.hoursEnd),expression:"formData.hoursEnd"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.formData, "hoursEnd", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"selected":"","disabled":""}},[_vm._v("Hours")]),_vm._v(" "),_vm._l((12),function(hour,index){return _c('option',{key:index},[_vm._v(_vm._s(hour))])})],2)]),_vm._v(":\n          "),_c('div',{staticClass:"col-4"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.minutesEnd),expression:"formData.minutesEnd"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.formData, "minutesEnd", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"selected":"","disabled":""}},[_vm._v("Minutes")]),_vm._v(" "),_vm._l((_vm.minutes),function(minute,index){return _c('option',{key:index},[_vm._v(_vm._s(minute))])})],2)]),_vm._v(" "),(_vm.hoursFormat != 24)?_c('div',{staticClass:"col-3 pl-0"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.midnightEnd),expression:"formData.midnightEnd"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.formData, "midnightEnd", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"selected":"","disabled":""}},[_vm._v("AM/PM")]),_vm._v(" "),_c('option',{attrs:{"value":"am"}},[_vm._v("A.M.")]),_vm._v(" "),_c('option',{attrs:{"value":"pm"}},[_vm._v("P.M.")])])]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"event-desc"}},[_vm._v("Describe event")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.description),expression:"formData.description"}],staticClass:"form-control",attrs:{"id":"event-desc","rows":"3","required":""},domProps:{"value":(_vm.formData.description)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formData, "description", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"custom-control custom-switch pb-2"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.recurrence),expression:"recurrence"}],staticClass:"custom-control-input",attrs:{"type":"checkbox","name":"recurrence","id":"recurrenceSwitcher"},domProps:{"checked":Array.isArray(_vm.recurrence)?_vm._i(_vm.recurrence,null)>-1:(_vm.recurrence)},on:{"click":_vm.switchRecurring,"change":function($event){var $$a=_vm.recurrence,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.recurrence=$$a.concat([$$v]))}else{$$i>-1&&(_vm.recurrence=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.recurrence=$$c}}}}),_vm._v(" "),_c('label',{staticClass:"custom-control-label",attrs:{"for":"recurrenceSwitcher"}},[_vm._v("Is this going to be recurring event?")])]),_vm._v(" "),(_vm.recurrence)?_c('div',{staticClass:"pt-1 pb-1"},[_c('p',{staticClass:"mb-2"},[_vm._v("Specify recurrence of event:")]),_vm._v(" "),_c('div',{staticClass:"form-check"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.recurring),expression:"formData.recurring"}],staticClass:"form-check-input",attrs:{"type":"radio","name":"recurr","id":"weekly","value":"weekly","checked":""},domProps:{"checked":_vm._q(_vm.formData.recurring,"weekly")},on:{"click":_vm.resetDuration,"change":function($event){return _vm.$set(_vm.formData, "recurring", "weekly")}}}),_vm._v(" "),_c('label',{staticClass:"form-check-label",attrs:{"for":"weekly"}},[_vm._v("\n            Weekly\n          ")])]),_vm._v(" "),_c('div',{staticClass:"form-check"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.recurring),expression:"formData.recurring"}],staticClass:"form-check-input",attrs:{"type":"radio","name":"recurr","id":"bi-weekly","value":"bi-weekly"},domProps:{"checked":_vm._q(_vm.formData.recurring,"bi-weekly")},on:{"click":_vm.resetDuration,"change":function($event){return _vm.$set(_vm.formData, "recurring", "bi-weekly")}}}),_vm._v(" "),_c('label',{staticClass:"form-check-label",attrs:{"for":"bi-weekly"}},[_vm._v("\n            Bi-weekly\n          ")])]),_vm._v(" "),_c('div',{staticClass:"form-check"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.recurring),expression:"formData.recurring"}],staticClass:"form-check-input",attrs:{"type":"radio","name":"recurr","id":"monthly","value":"monthly"},domProps:{"checked":_vm._q(_vm.formData.recurring,"monthly")},on:{"click":_vm.resetDuration,"change":function($event){return _vm.$set(_vm.formData, "recurring", "monthly")}}}),_vm._v(" "),_c('label',{staticClass:"form-check-label",attrs:{"for":"monthly"}},[_vm._v("\n            Monthly\n          ")])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"duration"}},[_vm._v("Duration: "+_vm._s(_vm.formData.duration))]),_vm._v(" "),(_vm.formData.recurring == 'weekly')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.duration),expression:"formData.duration"}],staticClass:"custom-range",attrs:{"type":"range","min":"1","max":"4","step":"1","id":"duration"},domProps:{"value":(_vm.formData.duration)},on:{"__r":function($event){return _vm.$set(_vm.formData, "duration", $event.target.value)}}}):_vm._e(),_vm._v(" "),(_vm.formData.recurring == 'bi-weekly')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.duration),expression:"formData.duration"}],staticClass:"custom-range",attrs:{"type":"range","min":"1","max":"2","step":"1","id":"duration"},domProps:{"value":(_vm.formData.duration)},on:{"__r":function($event){return _vm.$set(_vm.formData, "duration", $event.target.value)}}}):_vm._e(),_vm._v(" "),(_vm.formData.recurring == 'monthly')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData.duration),expression:"formData.duration"}],staticClass:"custom-range",attrs:{"type":"range","min":"1","max":"1","disabled":"","value":"1","id":"duration"},domProps:{"value":(_vm.formData.duration)},on:{"__r":function($event){return _vm.$set(_vm.formData, "duration", $event.target.value)}}}):_vm._e()])]):_vm._e()])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_navBar__ = __webpack_require__("P7/f");
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app',
  components: {
    navBar: __WEBPACK_IMPORTED_MODULE_0__components_navBar__["a" /* default */]
  },
  data: () => {
    return {
      login: false,
      selectedRoom: "1"
    };
  },
  methods: {
    loginChange: function () {
      this.login = true;
    },
    roomHandler: function (room) {
      this.selectedRoom = room;
    }
  },
  created: function () {
    if (localStorage.getItem("id")) {
      this.login = true;
    }
  }
});

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.af553252d2e93a19dc86.js.map