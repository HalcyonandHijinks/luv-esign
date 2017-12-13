let cData = null;

var API = class {
  login () {
    return 2*2;
  }

  logout () {

  }

  create (data) {
    data = JSON.stringify(data);
    return this._request('create', data);
  }

  read () {
    return this._request('read', '');
  }

  update () {

  }

  delete () {

  }

  _request (cmd, data) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://dev.handh.xyz/project/luv/api.php");
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.onload = () => resolve(xhr.responseText);
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send(`cmd=${cmd}&data=${data}`);
    });
  }
}

var Tabs = class {
  constructor (tabs, hash = false) {
    this.tabs = tabs;
    this.current = hash.split('?')[0] || 'table1';

    if (document.querySelector(`.tab-indicators [data-view-link='${this.current}']`)) {
      document.querySelector(`.tab-indicators [data-view-link='${this.current}']`).classList.add('active');
    }

    document.querySelector(`[data-view='${this.current}']`).classList.add('active');
    window.location.hash = hash || this.current;

    for (let link of document.querySelectorAll('[data-view-link]')) {
      link.addEventListener('click', e => {
        e.preventDefault();
        e.currentTarget.blur();
        window.location.hash = e.currentTarget.dataset.viewLink;
      });
    }

    window.addEventListener('hashchange', e => {
      let view = window.location.hash.substring(1).split('?')[0];
      this.switchTab(view)
    });

    //this.switchTab(this.current);
  }

  switchTab (view = null) {
    // let view = e.currentTarget.dataset.viewLink || window.location.hash;

    if (view !== this.current) {
      if (document.querySelector(`.tab-indicators [data-view-link='${this.current}']`)) {
        document.querySelector(`.tab-indicators [data-view-link='${this.current}']`).classList.remove('active');
      }

      if (document.querySelector(`.tab-indicators [data-view-link='${view}']`)) {
        document.querySelector(`.tab-indicators [data-view-link='${view}']`).classList.add('active');
      }

      if (document.querySelector(`[data-view='${this.current}']`)) {
        document.querySelector(`[data-view='${this.current}']`).classList.remove('active');
      }

      if (document.querySelector(`[data-view='${view}']`)) {
        document.querySelector(`[data-view='${view}']`).classList.add('active');
      }

      this.current = view;
    }

    if (view === 'single') {
      loadSingleCustomer(window.location.hash.substring(1).split('?')[1]);
    } else {
      window.location.hash = view;
    }
  }
}

function initDatatables () {
  $(document).ready(function() {
    $('.datatable').DataTable({
      'dom': '<"d-hide"fl>rt<"text-center mt"pi>',
      'language': {
        'paginate': {
          'previous': '<i class="icon icon-arrow-left"></i>',
          'next': '<i class="icon icon-arrow-right"></i>'
        }
      },
    });
  });

  $.fn.dataTable.ext.classes.sPageButton = 'pagination-item m-1 c-hand';

  for (let link of document.querySelectorAll('.datatable tbody tr')) {
    link.addEventListener('click', e => {
      e.preventDefault();
      e.currentTarget.blur();
      window.location.hash = `single?${e.currentTarget.dataset.id}`;
    });
  }

  if (tabs.current === 'single') {
    loadSingleCustomer(window.location.hash.substring(1).split('?')[1]);
  }
}

function loadSingleCustomer (id) {
  let customer = cData.find(x => x.uuid === id);
  $('[data-view="single"] table').append(`
    <tr>
      <th>Customer ID</th>
      <td><input type="text" value="${customer.uuid}"></td>
      <td>
        <div class="form-group">
          <label class="form-switch">
            <input type="checkbox">
            <i class="form-icon"></i>
          </label>
        </div>
      </td>
    </tr>

    <tr>
      <th>Issuer ID</th>
      <td><input type="text" value="${customer.issuer_uuid}"></td>
      <td>
        <div class="form-group">
          <label class="form-switch">
            <input type="checkbox">
            <i class="form-icon"></i>
          </label>
        </div>
      </td>
    </tr>

    <tr>
      <th>Status</th>
      <td><input type="text" value="${customer.status}"></td>
      <td>
      <div class="form-group">
        <label class="form-switch">
          <input type="checkbox">
          <i class="form-icon"></i>
        </label>
      </div>
    </td>
  </tr>

    <tr>
      <th>Flags</th>
      <td><input type="text" value="${customer.flags}"></td>
      <td>
      <div class="form-group">
        <label class="form-switch">
          <input type="checkbox">
          <i class="form-icon"></i>
        </label>
      </div>
    </td>
  </tr>

    <tr>
      <th>PRE Name</th>
      <td><input type="text" value="${customer.pre_name}"></td>
      <td>
        <div class="form-group">
          <label class="form-switch">
            <input type="checkbox">
            <i class="form-icon"></i>
          </label>
        </div>
      </td>
    </tr>

    <tr>
      <th>PRE DOB</th>
      <td><input type="text" value="${customer.pre_dob}"></td>
      <td>
        <div class="form-group">
          <label class="form-switch">
            <input type="checkbox">
            <i class="form-icon"></i>
          </label>
        </div>
      </td>
    </tr>

    <tr>
      <th>PRE Dealer</th>
      <td><input type="text" value="${customer.pre_dealer}"></td>
      <td>
        <div class="form-group">
          <label class="form-switch">
            <input type="checkbox">
            <i class="form-icon"></i>
          </label>
        </div>
      </td>
    </tr>

    <tr>
      <th>PRE Make Model</th>
      <td><input type="text" value="${customer.pre_make_model}"></td>
      <td>
        <div class="form-group">
          <label class="form-switch">
            <input type="checkbox">
            <i class="form-icon"></i>
          </label>
        </div>
      </td>
    </tr>

    <tr>
      <th>PRE Mileage</th>
      <td><input type="text" value="${customer.pre_mileage}"></td>
      <td>
        <div class="form-group">
          <label class="form-switch">
            <input type="checkbox">
            <i class="form-icon"></i>
          </label>
        </div>
      </td>
    </tr>

    <tr>
      <th>Dealer</th>
      <td><input type="text" value="${customer.dealer}"></td>
      <td>
        <div class="form-group">
          <label class="form-switch">
            <input type="checkbox">
            <i class="form-icon"></i>
          </label>
        </div>
      </td>
    </tr>

    <tr>
      <th>Email</th>
      <td><input type="text" value="${customer.email}"></td>
      <td>
        <div class="form-group">
          <label class="form-switch">
            <input type="checkbox">
            <i class="form-icon"></i>
          </label>
        </div>
      </td>
    </tr>

    <tr>
      <th>Name</th>
      <td><input type="text" value="${customer.name}"></td>
      <td>
        <div class="form-group">
          <label class="form-switch">
            <input type="checkbox">
            <i class="form-icon"></i>
          </label>
        </div>
      </td>
    </tr>

    <tr>
      <th>Q1</th>
      <td><input type="text" value="${customer.q1}"></td>
      <td>
        <div class="form-group">
          <label class="form-switch">
            <input type="checkbox">
            <i class="form-icon"></i>
          </label>
        </div>
      </td>
    </tr>

    <tr>
      <th>Q2</th>
      <td><input type="text" value="${customer.q2}"></td>
      <td>
        <div class="form-group">
          <label class="form-switch">
            <input type="checkbox">
            <i class="form-icon"></i>
          </label>
        </div>
      </td>
    </tr>

    <tr>
      <th>Q3</th>
      <td><input type="text" value="${customer.q3}"></td>
      <td>
        <div class="form-group">
          <label class="form-switch">
            <input type="checkbox">
            <i class="form-icon"></i>
          </label>
        </div>
      </td>
    </tr>

    <tr>
      <th>Q4</th>
      <td><input type="text" value="${customer.q4}"></td>
      <td>
        <div class="form-group">
          <label class="form-switch">
            <input type="checkbox">
            <i class="form-icon"></i>
          </label>
        </div>
      </td>
    </tr>

    <tr>
      <th>Q5</th>
      <td><input type="text" value="${customer.q5}"></td>
      <td>
        <div class="form-group">
          <label class="form-switch">
            <input type="checkbox">
            <i class="form-icon"></i>
          </label>
        </div>
      </td>
    </tr>

    <tr>
      <th>Q6</th>
      <td><input type="text" value="${customer.q6}"></td>
      <td>
        <div class="form-group">
          <label class="form-switch">
            <input type="checkbox">
            <i class="form-icon"></i>
          </label>
        </div>
      </td>
    </tr>

    <tr>
      <th>Q7</th>
      <td><input type="text" value="${customer.q7}"></td>
      <td>
        <div class="form-group">
          <label class="form-switch">
            <input type="checkbox">
            <i class="form-icon"></i>
          </label>
        </div>
      </td>
    </tr>

    <tr>
      <th>Q8</th>
      <td><input type="text" value="${customer.q8}"></td>
      <td>
        <div class="form-group">
          <label class="form-switch">
            <input type="checkbox">
            <i class="form-icon"></i>
          </label>
        </div>
      </td>
    </tr>

    <tr>
      <th>Q9</th>
      <td><input type="text" value="${customer.q9}"></td>
      <td>
        <div class="form-group">
          <label class="form-switch">
            <input type="checkbox">
            <i class="form-icon"></i>
          </label>
        </div>
      </td>
    </tr>

    <tr>
      <th>Q10</th>
      <td><input type="text" value="${customer.q10}"></td>
      <td>
      <div class="form-group">
        <label class="form-switch">
          <input type="checkbox">
          <i class="form-icon"></i>
        </label>
      </div>
    </td>
  </tr>

    <tr>
      <th>Q11</th>
      <td><input type="text" value="${customer.q11}"></td>
      <td>
        <div class="form-group">
          <label class="form-switch">
            <input type="checkbox">
            <i class="form-icon"></i>
          </label>
        </div>
      </td>
    </tr>

    <tr>
      <th>Q12</th>
      <td><input type="text" value="${customer.q12}"></td>
      <td>
        <div class="form-group">
          <label class="form-switch">
            <input type="checkbox">
            <i class="form-icon"></i>
          </label>
        </div>
      </td>
    </tr>

    <tr>
      <th>Q13</th>
      <td><input type="text" value="${customer.q13}"></td>
      <td>
        <div class="form-group">
          <label class="form-switch">
            <input type="checkbox">
            <i class="form-icon"></i>
          </label>
        </div>
      </td>
    </tr>

    <tr>
      <th>Agreed</th>
      <td><input type="text" value="${customer.agreed}"></td>
      <td>
        <div class="form-group">
          <label class="form-switch">
            <input type="checkbox">
            <i class="form-icon"></i>
          </label>
        </div>
      </td>
    </tr>

    <tr>
      <th>Agreememnt Date</th>
      <td><input type="text" value="${customer.agreement_date}"></td>
      <td>
        <div class="form-group">
          <label class="form-switch">
            <input type="checkbox">
            <i class="form-icon"></i>
          </label>
        </div>
      </td>
    </tr>

    <tr>
      <th>Underwriter ID</th>
      <td><input type="text" value="${customer.underwriter_uuid}"></td>
      <td>
        <div class="form-group">
          <label class="form-switch">
            <input type="checkbox">
            <i class="form-icon"></i>
          </label>
        </div>
      </td>
    </tr>

    <tr>
      <th>Date Created</th>
      <td><input type="text" value="${customer.created_at}"></td>
      <td>
        <div class="form-group">
          <label class="form-switch">
            <input type="checkbox">
            <i class="form-icon"></i>
          </label>
        </div>
      </td>
    </tr>

    <tr>
      <th>Date Updated</th>
      <td><input type="text" value="${customer.updated_at}"></td>
      <td>
        <div class="form-group">
          <label class="form-switch">
            <input type="checkbox">
            <i class="form-icon"></i>
          </label>
        </div>
      </td>
    </tr>
  `);
}

let api = new API();
let tabs = new Tabs(document.querySelectorAll('.view'), window.location.hash.substring(1));
let data = null;

api.read().then((d) => {
  d = JSON.parse(d);
  data = d.data;
  cData = data;

  for (let customer of data) {
    if (customer.status === '1') {
      $('[data-view="table1"] .datatable tbody').append(`
        <tr data-id="${customer.uuid}">
          <td>${customer.pre_name}</td>
          <td>${customer.pre_dob}</td>
          <td>${customer.pre_dealer}</td>
          <td>${customer.pre_make_model}</td>
          <td>${customer.pre_mileage}</td>
        </tr>
      `);
    }

    if (customer.status === '2') {
      $('[data-view="table2"] .datatable tbody').append(`
        <tr data-id="${customer.uuid}">
          <td>${customer.pre_name}</td>
          <td>${customer.pre_dob}</td>
          <td>${customer.pre_dealer}</td>
          <td>${customer.pre_make_model}</td>
          <td>${customer.pre_mileage}</td>
        </tr>
      `);
    }

    if (customer.status === '3') {
      $('[data-view="table3"] .datatable tbody').append(`
        <tr data-id="${customer.uuid}">
          <td>${customer.pre_name}</td>
          <td>${customer.pre_dob}</td>
          <td>${customer.pre_dealer}</td>
          <td>${customer.pre_make_model}</td>
          <td>${customer.pre_mileage}</td>
        </tr>
      `);
    }
  }

  initDatatables();

});

$('body').on('click', '.toast .btn-clear', (e) => {
  $(e.currentTarget.parentNode).slideUp(500, () => {
    $(e.currentTarget.parentNode).remove();
  });
});

document.querySelector('#btnCreate').addEventListener('click', e => {
  let data = {};
  let validation = 0;
  let form = e.currentTarget.parentNode;
  let toast = document.createElement('div');
  for (let input of form.querySelectorAll('.form-input')) {
    if (!input.value) {
      validation++;
      input.parentNode.classList.add('has-error');
    } else {
      data[input.id] = input.value;
      input.parentNode.classList.remove('has-error');
    }
  }

  let $toastWrapper = $(e.currentTarget.parentNode).children('.toast-wrapper');

  if (validation === 0) {
    let create = api.create(data);

    create.then((data) => {
      data = JSON.parse(data);
      if (data.status === 'success') {
        $toastWrapper.append(`
          <div class="toast toast-success" style="display: none;">
            <button class="btn btn-clear float-right"></button>
            ${data.data}!
            ${data.id}
          </div>
        `);
        $toastWrapper.find('.toast').slideDown();
      } else {
        $toastWrapper.append(`
          <div class="toast toast-error" style="display: none;">
            <button class="btn btn-clear float-right"></button>
            API Error!
          </div>
        `);
        $toastWrapper.find('.toast').slideDown();
      }
    });
  } else {
    $toastWrapper.append(`
      <div class="toast toast-error" style="display: none;">
        <button class="btn btn-clear float-right"></button>
        Validation Error!
      </div>
    `);
    $toastWrapper.find('.toast').slideDown();
  }
});
