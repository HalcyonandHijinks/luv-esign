"use strict";function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function initDatatables(){$(document).ready(function(){$(".datatable").DataTable({dom:'<"d-hide"fl>rt<"text-center mt"pi>',language:{paginate:{previous:'<i class="icon icon-arrow-left"></i>',next:'<i class="icon icon-arrow-right"></i>'}}})}),$.fn.dataTable.ext.classes.sPageButton="pagination-item m-1 c-hand";var t=!0,n=!1,e=void 0;try{for(var a,r=document.querySelectorAll(".datatable tbody tr")[Symbol.iterator]();!(t=(a=r.next()).done);t=!0){a.value.addEventListener("click",function(t){t.preventDefault(),t.currentTarget.blur(),window.location.hash="single?"+t.currentTarget.dataset.id})}}catch(t){n=!0,e=t}finally{try{!t&&r.return&&r.return()}finally{if(n)throw e}}"single"===tabs.current&&loadSingleCustomer(window.location.hash.substring(1).split("?")[1])}function loadSingleCustomer(t){var n=cData.find(function(n){return n.uuid===t});$('[data-view="single"] table').append('\n    <tr>\n      <th>Customer ID</th>\n      <td><input type="text" value="'+n.uuid+'"></td>\n      <td>\n        <div class="form-group">\n          <label class="form-switch">\n            <input type="checkbox">\n            <i class="form-icon"></i>\n          </label>\n        </div>\n      </td>\n    </tr>\n\n    <tr>\n      <th>Issuer ID</th>\n      <td><input type="text" value="'+n.issuer_uuid+'"></td>\n      <td>\n        <div class="form-group">\n          <label class="form-switch">\n            <input type="checkbox">\n            <i class="form-icon"></i>\n          </label>\n        </div>\n      </td>\n    </tr>\n\n    <tr>\n      <th>Status</th>\n      <td><input type="text" value="'+n.status+'"></td>\n      <td>\n      <div class="form-group">\n        <label class="form-switch">\n          <input type="checkbox">\n          <i class="form-icon"></i>\n        </label>\n      </div>\n    </td>\n  </tr>\n\n    <tr>\n      <th>Flags</th>\n      <td><input type="text" value="'+n.flags+'"></td>\n      <td>\n      <div class="form-group">\n        <label class="form-switch">\n          <input type="checkbox">\n          <i class="form-icon"></i>\n        </label>\n      </div>\n    </td>\n  </tr>\n\n    <tr>\n      <th>PRE Name</th>\n      <td><input type="text" value="'+n.pre_name+'"></td>\n      <td>\n        <div class="form-group">\n          <label class="form-switch">\n            <input type="checkbox">\n            <i class="form-icon"></i>\n          </label>\n        </div>\n      </td>\n    </tr>\n\n    <tr>\n      <th>PRE DOB</th>\n      <td><input type="text" value="'+n.pre_dob+'"></td>\n      <td>\n        <div class="form-group">\n          <label class="form-switch">\n            <input type="checkbox">\n            <i class="form-icon"></i>\n          </label>\n        </div>\n      </td>\n    </tr>\n\n    <tr>\n      <th>PRE Dealer</th>\n      <td><input type="text" value="'+n.pre_dealer+'"></td>\n      <td>\n        <div class="form-group">\n          <label class="form-switch">\n            <input type="checkbox">\n            <i class="form-icon"></i>\n          </label>\n        </div>\n      </td>\n    </tr>\n\n    <tr>\n      <th>PRE Make Model</th>\n      <td><input type="text" value="'+n.pre_make_model+'"></td>\n      <td>\n        <div class="form-group">\n          <label class="form-switch">\n            <input type="checkbox">\n            <i class="form-icon"></i>\n          </label>\n        </div>\n      </td>\n    </tr>\n\n    <tr>\n      <th>PRE Mileage</th>\n      <td><input type="text" value="'+n.pre_mileage+'"></td>\n      <td>\n        <div class="form-group">\n          <label class="form-switch">\n            <input type="checkbox">\n            <i class="form-icon"></i>\n          </label>\n        </div>\n      </td>\n    </tr>\n\n    <tr>\n      <th>Dealer</th>\n      <td><input type="text" value="'+n.dealer+'"></td>\n      <td>\n        <div class="form-group">\n          <label class="form-switch">\n            <input type="checkbox">\n            <i class="form-icon"></i>\n          </label>\n        </div>\n      </td>\n    </tr>\n\n    <tr>\n      <th>Email</th>\n      <td><input type="text" value="'+n.email+'"></td>\n      <td>\n        <div class="form-group">\n          <label class="form-switch">\n            <input type="checkbox">\n            <i class="form-icon"></i>\n          </label>\n        </div>\n      </td>\n    </tr>\n\n    <tr>\n      <th>Name</th>\n      <td><input type="text" value="'+n.name+'"></td>\n      <td>\n        <div class="form-group">\n          <label class="form-switch">\n            <input type="checkbox">\n            <i class="form-icon"></i>\n          </label>\n        </div>\n      </td>\n    </tr>\n\n    <tr>\n      <th>Q1</th>\n      <td><input type="text" value="'+n.q1+'"></td>\n      <td>\n        <div class="form-group">\n          <label class="form-switch">\n            <input type="checkbox">\n            <i class="form-icon"></i>\n          </label>\n        </div>\n      </td>\n    </tr>\n\n    <tr>\n      <th>Q2</th>\n      <td><input type="text" value="'+n.q2+'"></td>\n      <td>\n        <div class="form-group">\n          <label class="form-switch">\n            <input type="checkbox">\n            <i class="form-icon"></i>\n          </label>\n        </div>\n      </td>\n    </tr>\n\n    <tr>\n      <th>Q3</th>\n      <td><input type="text" value="'+n.q3+'"></td>\n      <td>\n        <div class="form-group">\n          <label class="form-switch">\n            <input type="checkbox">\n            <i class="form-icon"></i>\n          </label>\n        </div>\n      </td>\n    </tr>\n\n    <tr>\n      <th>Q4</th>\n      <td><input type="text" value="'+n.q4+'"></td>\n      <td>\n        <div class="form-group">\n          <label class="form-switch">\n            <input type="checkbox">\n            <i class="form-icon"></i>\n          </label>\n        </div>\n      </td>\n    </tr>\n\n    <tr>\n      <th>Q5</th>\n      <td><input type="text" value="'+n.q5+'"></td>\n      <td>\n        <div class="form-group">\n          <label class="form-switch">\n            <input type="checkbox">\n            <i class="form-icon"></i>\n          </label>\n        </div>\n      </td>\n    </tr>\n\n    <tr>\n      <th>Q6</th>\n      <td><input type="text" value="'+n.q6+'"></td>\n      <td>\n        <div class="form-group">\n          <label class="form-switch">\n            <input type="checkbox">\n            <i class="form-icon"></i>\n          </label>\n        </div>\n      </td>\n    </tr>\n\n    <tr>\n      <th>Q7</th>\n      <td><input type="text" value="'+n.q7+'"></td>\n      <td>\n        <div class="form-group">\n          <label class="form-switch">\n            <input type="checkbox">\n            <i class="form-icon"></i>\n          </label>\n        </div>\n      </td>\n    </tr>\n\n    <tr>\n      <th>Q8</th>\n      <td><input type="text" value="'+n.q8+'"></td>\n      <td>\n        <div class="form-group">\n          <label class="form-switch">\n            <input type="checkbox">\n            <i class="form-icon"></i>\n          </label>\n        </div>\n      </td>\n    </tr>\n\n    <tr>\n      <th>Q9</th>\n      <td><input type="text" value="'+n.q9+'"></td>\n      <td>\n        <div class="form-group">\n          <label class="form-switch">\n            <input type="checkbox">\n            <i class="form-icon"></i>\n          </label>\n        </div>\n      </td>\n    </tr>\n\n    <tr>\n      <th>Q10</th>\n      <td><input type="text" value="'+n.q10+'"></td>\n      <td>\n      <div class="form-group">\n        <label class="form-switch">\n          <input type="checkbox">\n          <i class="form-icon"></i>\n        </label>\n      </div>\n    </td>\n  </tr>\n\n    <tr>\n      <th>Q11</th>\n      <td><input type="text" value="'+n.q11+'"></td>\n      <td>\n        <div class="form-group">\n          <label class="form-switch">\n            <input type="checkbox">\n            <i class="form-icon"></i>\n          </label>\n        </div>\n      </td>\n    </tr>\n\n    <tr>\n      <th>Q12</th>\n      <td><input type="text" value="'+n.q12+'"></td>\n      <td>\n        <div class="form-group">\n          <label class="form-switch">\n            <input type="checkbox">\n            <i class="form-icon"></i>\n          </label>\n        </div>\n      </td>\n    </tr>\n\n    <tr>\n      <th>Q13</th>\n      <td><input type="text" value="'+n.q13+'"></td>\n      <td>\n        <div class="form-group">\n          <label class="form-switch">\n            <input type="checkbox">\n            <i class="form-icon"></i>\n          </label>\n        </div>\n      </td>\n    </tr>\n\n    <tr>\n      <th>Agreed</th>\n      <td><input type="text" value="'+n.agreed+'"></td>\n      <td>\n        <div class="form-group">\n          <label class="form-switch">\n            <input type="checkbox">\n            <i class="form-icon"></i>\n          </label>\n        </div>\n      </td>\n    </tr>\n\n    <tr>\n      <th>Agreememnt Date</th>\n      <td><input type="text" value="'+n.agreement_date+'"></td>\n      <td>\n        <div class="form-group">\n          <label class="form-switch">\n            <input type="checkbox">\n            <i class="form-icon"></i>\n          </label>\n        </div>\n      </td>\n    </tr>\n\n    <tr>\n      <th>Underwriter ID</th>\n      <td><input type="text" value="'+n.underwriter_uuid+'"></td>\n      <td>\n        <div class="form-group">\n          <label class="form-switch">\n            <input type="checkbox">\n            <i class="form-icon"></i>\n          </label>\n        </div>\n      </td>\n    </tr>\n\n    <tr>\n      <th>Date Created</th>\n      <td><input type="text" value="'+n.created_at+'"></td>\n      <td>\n        <div class="form-group">\n          <label class="form-switch">\n            <input type="checkbox">\n            <i class="form-icon"></i>\n          </label>\n        </div>\n      </td>\n    </tr>\n\n    <tr>\n      <th>Date Updated</th>\n      <td><input type="text" value="'+n.updated_at+'"></td>\n      <td>\n        <div class="form-group">\n          <label class="form-switch">\n            <input type="checkbox">\n            <i class="form-icon"></i>\n          </label>\n        </div>\n      </td>\n    </tr>\n  ')}var _createClass=function(){function t(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(n,e,a){return e&&t(n.prototype,e),a&&t(n,a),n}}(),cData=null,API=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"login",value:function(){return 4}},{key:"logout",value:function(){}},{key:"create",value:function(t){return t=JSON.stringify(t),this._request("create",t)}},{key:"read",value:function(){return this._request("read","")}},{key:"update",value:function(){}},{key:"delete",value:function(){}},{key:"_request",value:function(t,n){return new Promise(function(e,a){var r=new XMLHttpRequest;r.open("POST","https://dev.handh.xyz/project/luv/api.php"),r.setRequestHeader("Content-type","application/x-www-form-urlencoded"),r.onload=function(){return e(r.responseText)},r.onerror=function(){return a(r.statusText)},r.send("cmd="+t+"&data="+n)})}}]),t}(),Tabs=function(){function t(n){var e=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];_classCallCheck(this,t),this.tabs=n,this.current=a.split("?")[0]||"table1",document.querySelector(".tab-indicators [data-view-link='"+this.current+"']")&&document.querySelector(".tab-indicators [data-view-link='"+this.current+"']").classList.add("active"),document.querySelector("[data-view='"+this.current+"']").classList.add("active"),window.location.hash=a||this.current;var r=!0,i=!1,l=void 0;try{for(var s,d=document.querySelectorAll("[data-view-link]")[Symbol.iterator]();!(r=(s=d.next()).done);r=!0){s.value.addEventListener("click",function(t){t.preventDefault(),t.currentTarget.blur(),window.location.hash=t.currentTarget.dataset.viewLink})}}catch(t){i=!0,l=t}finally{try{!r&&d.return&&d.return()}finally{if(i)throw l}}window.addEventListener("hashchange",function(t){var n=window.location.hash.substring(1).split("?")[0];e.switchTab(n)})}return _createClass(t,[{key:"switchTab",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t!==this.current&&(document.querySelector(".tab-indicators [data-view-link='"+this.current+"']")&&document.querySelector(".tab-indicators [data-view-link='"+this.current+"']").classList.remove("active"),document.querySelector(".tab-indicators [data-view-link='"+t+"']")&&document.querySelector(".tab-indicators [data-view-link='"+t+"']").classList.add("active"),document.querySelector("[data-view='"+this.current+"']")&&document.querySelector("[data-view='"+this.current+"']").classList.remove("active"),document.querySelector("[data-view='"+t+"']")&&document.querySelector("[data-view='"+t+"']").classList.add("active"),this.current=t),"single"===t?loadSingleCustomer(window.location.hash.substring(1).split("?")[1]):window.location.hash=t}}]),t}(),api=new API,tabs=new Tabs(document.querySelectorAll(".view"),window.location.hash.substring(1)),data=null;api.read().then(function(t){t=JSON.parse(t),data=t.data,cData=data;var n=!0,e=!1,a=void 0;try{for(var r,i=data[Symbol.iterator]();!(n=(r=i.next()).done);n=!0){var l=r.value;"1"===l.status&&$('[data-view="table1"] .datatable tbody').append('\n        <tr data-id="'+l.uuid+'">\n          <td>'+l.pre_name+"</td>\n          <td>"+l.pre_dob+"</td>\n          <td>"+l.pre_dealer+"</td>\n          <td>"+l.pre_make_model+"</td>\n          <td>"+l.pre_mileage+"</td>\n        </tr>\n      "),"2"===l.status&&$('[data-view="table2"] .datatable tbody').append('\n        <tr data-id="'+l.uuid+'">\n          <td>'+l.pre_name+"</td>\n          <td>"+l.pre_dob+"</td>\n          <td>"+l.pre_dealer+"</td>\n          <td>"+l.pre_make_model+"</td>\n          <td>"+l.pre_mileage+"</td>\n        </tr>\n      "),"3"===l.status&&$('[data-view="table3"] .datatable tbody').append('\n        <tr data-id="'+l.uuid+'">\n          <td>'+l.pre_name+"</td>\n          <td>"+l.pre_dob+"</td>\n          <td>"+l.pre_dealer+"</td>\n          <td>"+l.pre_make_model+"</td>\n          <td>"+l.pre_mileage+"</td>\n        </tr>\n      ")}}catch(t){e=!0,a=t}finally{try{!n&&i.return&&i.return()}finally{if(e)throw a}}initDatatables()}),$("body").on("click",".toast .btn-clear",function(t){$(t.currentTarget.parentNode).slideUp(500,function(){$(t.currentTarget.parentNode).remove()})}),document.querySelector("#btnCreate").addEventListener("click",function(t){var n={},e=0,a=t.currentTarget.parentNode,r=(document.createElement("div"),!0),i=!1,l=void 0;try{for(var s,d=a.querySelectorAll(".form-input")[Symbol.iterator]();!(r=(s=d.next()).done);r=!0){var o=s.value;o.value?(n[o.id]=o.value,o.parentNode.classList.remove("has-error")):(e++,o.parentNode.classList.add("has-error"))}}catch(t){i=!0,l=t}finally{try{!r&&d.return&&d.return()}finally{if(i)throw l}}var c=$(t.currentTarget.parentNode).children(".toast-wrapper");if(0===e){api.create(n).then(function(t){"success"===(t=JSON.parse(t)).status?(c.append('\n          <div class="toast toast-success" style="display: none;">\n            <button class="btn btn-clear float-right"></button>\n            '+t.data+"!\n            "+t.id+"\n          </div>\n        "),c.find(".toast").slideDown()):(c.append('\n          <div class="toast toast-error" style="display: none;">\n            <button class="btn btn-clear float-right"></button>\n            API Error!\n          </div>\n        '),c.find(".toast").slideDown())})}else c.append('\n      <div class="toast toast-error" style="display: none;">\n        <button class="btn btn-clear float-right"></button>\n        Validation Error!\n      </div>\n    '),c.find(".toast").slideDown()});
//# sourceMappingURL=admin-dist.js.map