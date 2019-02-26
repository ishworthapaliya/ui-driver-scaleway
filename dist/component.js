"use strict";

define("nodes/components/driver-scaleway/component", ["exports", "shared/mixins/node-driver"], function (exports, _nodeDriver) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var LAYOUT = "PHNlY3Rpb24gY2xhc3M9Imhvcml6b250YWwtZm9ybSI+DQogIHt7I2FjY29yZGlvbi1saXN0IHNob3dFeHBhbmRBbGw9ZmFsc2UgYXMgfCBhbCBleHBhbmRGbiB8fX0NCiAgICB7eyEtLSBUaGlzIGxpbmUgc2hvd3MgdGhlIGRyaXZlciB0aXRsZSB3aGljaCB5b3UgZG9uJ3QgaGF2ZSB0byBjaGFuZ2UgaXQgLS19fQ0KICAgIDxkaXYgY2xhc3M9Im92ZXItaHIgbWItMjAiPjxzcGFuPnt7ZHJpdmVyT3B0aW9uc1RpdGxlfX08L3NwYW4+PC9kaXY+DQoNCiAgICB7eyEtLSBBbiBleGFtcGxlIGlucHV0IG9wdGlvbiAtLX19DQogICAge3sjYWNjb3JkaW9uLWxpc3QtaXRlbSANCiAgICAgIHRpdGxlPSJBUEkgQWNjZXNzIg0KICAgICAgZGV0YWlsPSIiDQogICAgICBleHBhbmRBbGw9ZXhwYW5kQWxsDQogICAgICBleHBhbmQ9KGFjdGlvbiBleHBhbmRGbikgDQogICAgICBleHBhbmRPbkluaXQ9dHJ1ZSANCiAgICB9fQ0KICAgICAgPGRpdiBjbGFzcz0icm93Ij4NCiAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+DQogICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPk9yZ2FuaXphdGlvbiBJRHt7ZmllbGQtcmVxdWlyZWR9fTwvbGFiZWw+DQogICAgICAgICAge3tpbnB1dCB0eXBlPSJ0ZXh0IiBjbGFzcz0iZm9ybS1jb250cm9sIiAgdmFsdWU9Y29uZmlnLm9yZ2FuaXphdGlvbn19DQogICAgICAgIDwvZGl2Pg0KICAgICAgDQogICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPg0KICAgICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj5BUEkgVG9rZW57e2ZpZWxkLXJlcXVpcmVkfX08L2xhYmVsPg0KICAgICAgICAgIHt7aW5wdXQgdHlwZT0icGFzc3dvcmQiIGNsYXNzPSJmb3JtLWNvbnRyb2wiIHZhbHVlPWNvbmZpZy50b2tlbiB9fQ0KICAgICAgICA8L2Rpdj4NCiAgICAgIDwvZGl2Pg0KICAgIHt7L2FjY29yZGlvbi1saXN0LWl0ZW19fQ0KDQogIHt7I2FjY29yZGlvbi1saXN0LWl0ZW0gDQogICAgICB0aXRsZT0iSW5zdGFuY2UiDQogICAgICBkZXRhaWw9IiINCiAgICAgIGV4cGFuZEFsbD1leHBhbmRBbGwNCiAgICAgIGV4cGFuZD0oYWN0aW9uIGV4cGFuZEZuKSANCiAgICAgIGV4cGFuZE9uSW5pdD10cnVlIA0KICAgIH19DQogICAgICA8ZGl2IGNsYXNzPSJyb3ciPg0KICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4NCiAgICAgICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+UmVnaW9uPC9sYWJlbD4NCiAgICAgICAgICB7e25ldy1zZWxlY3QgY2xhc3M9ImZvcm0tY29udHJvbCIgY29udGVudD1yZWdpb25zIG9wdGlvbkxhYmVsUGF0aD0nbG9jYXRpb24nIG9wdGlvblZhbHVlUGF0aD0naWQnIHZhbHVlPWNvbmZpZy5yZWdpb259fQ0KICAgICAgICA8L2Rpdj4NCg0KICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4NCiAgICAgICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+TmFtZTwvbGFiZWw+DQogICAgICAgICAge3tpbnB1dCBpbnB1dCB0eXBlPSJ0ZXh0IiBjbGFzcz0iZm9ybS1jb250cm9sIiB2YWx1ZT1jb25maWcubmFtZX19DQogICAgICAgIDwvZGl2Pg0KICAgICAgDQogICAgICA8L2Rpdj4NCiAgICAgIDxkaXYgY2xhc3M9InJvdyI+DQogICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPg0KICAgICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj5UeXBle3tmaWVsZC1yZXF1aXJlZH19PC9sYWJlbD4NCiAgICAgICAgICB7e2lucHV0IHR5cGU9InRleHQiIGNsYXNzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSJTVEFSVDEtWFMiIHZhbHVlPWNvbmZpZy5jb21tZXJjaWFsVHlwZQ0KICAgICAgICAgIH19DQogICAgICAgIDwvZGl2Pg0KDQogICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPg0KICAgICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj5JbWFnZXt7ZmllbGQtcmVxdWlyZWR9fTwvbGFiZWw+DQogICAgICAgICAge3tpbnB1dCB0eXBlPSJ0ZXh0IiBjbGFzcz0iZm9ybS1jb250cm9sIiBwbGFjZWhvbGRlcj0idWJ1bnR1LXhlbmlhbCIgdmFsdWU9Y29uZmlnLmltYWdlIH19DQogICAgICAgIDwvZGl2Pg0KICAgIA0KICAgICAgPC9kaXY+DQogICAgICA8ZGl2IGNsYXNzPSJyb3ciPg0KICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4NCiAgICAgICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+QWRkaXRpb25hbCBWb2x1bWVzPC9sYWJlbD4NCiAgICAgICAgICB7e2lucHV0IHR5cGU9InRleHQiIGNsYXNzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSI1MEciIHZhbHVlPWNvbmZpZy52b2x1bWVzDQogICAgICAgICAgfX0NCiAgICAgICAgPC9kaXY+DQoNCiAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+DQogICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPkJvb3RzY3JpcHQ8L2xhYmVsPg0KICAgICAgICAgICB7e2lucHV0IHR5cGU9InRleHQiIGNsYXNzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSJkb2NrZXIiIHZhbHVlPWNvbmZpZy5ib290c2NyaXB0IH19DQogICAgICAgIDwvZGl2Pg0KICAgICAgPC9kaXY+DQogICAge3svYWNjb3JkaW9uLWxpc3QtaXRlbX19ICANCiAgDQogICAge3sjYWNjb3JkaW9uLWxpc3QtaXRlbSANCiAgICAgIHRpdGxlPSJOZXR3b3JrIg0KICAgICAgZGV0YWlsPSIiDQogICAgICBleHBhbmRBbGw9ZXhwYW5kQWxsDQogICAgICBleHBhbmQ9KGFjdGlvbiBleHBhbmRGbikgDQogICAgICBleHBhbmRPbkluaXQ9dHJ1ZSANCiAgICB9fQ0KICAgICAgPGRpdiBjbGFzcz0icm93Ij4NCiAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+DQogICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPklQIEFkZHJlc3M8L2xhYmVsPg0KICAgICAgICAgICB7e2lucHV0IHR5cGU9InRleHQiIGNsYXNzPSJmb3JtLWNvbnRyb2wiIHZhbHVlPWNvbmZpZy5pcA0KICAgICAgICAgIH19DQogICAgICAgIDwvZGl2Pg0KICAgICAgDQogICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPg0KICAgICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj5JUHY2PC9sYWJlbD4NCiAgICAgICAgICAge3tpbnB1dCB0eXBlPSJjaGVja2JveCIgY2hlY2tlZD1jb25maWcuaXB2NiB9fQ0KICAgICAgICA8L2Rpdj4NCiAgICAgIDwvZGl2Pg0KICAgIHt7L2FjY29yZGlvbi1saXN0LWl0ZW19fQ0KDQogICAge3sjYWNjb3JkaW9uLWxpc3QtaXRlbSANCiAgICAgIHRpdGxlPSJEZWJ1ZyINCiAgICAgIGRldGFpbD0iIg0KICAgICAgZXhwYW5kQWxsPWV4cGFuZEFsbA0KICAgICAgZXhwYW5kPShhY3Rpb24gZXhwYW5kRm4pIA0KICAgICAgZXhwYW5kT25Jbml0PWZhbHNlIA0KICAgIH19DQogICAgICA8ZGl2IGNsYXNzPSJyb3ciPg0KICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4NCiAgICAgICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+RW5hYmxlIERlYnVnZ2luZzwvbGFiZWw+DQogICAgICAgICAge3tpbnB1dCB0eXBlPSJjaGVja2JveCIgY2hlY2tlZD1jb25maWcuZGVidWcgfX0NCiAgICAgICAgPC9kaXY+DQogICAgICA8L2Rpdj4NCiAgICB7ey9hY2NvcmRpb24tbGlzdC1pdGVtfX0NCg0KICAgIHt7IS0tIFRoaXMgZm9sbG93aW5nIGNvbnRhaW5zIHRoZSBOYW1lLCBMYWJlbHMgYW5kIEVuZ2luZSBPcHRpb25zIGZpZWxkcyAtLX19DQogICAgPGRpdiBjbGFzcz0ib3Zlci1ociI+PHNwYW4+e3t0ZW1wbGF0ZU9wdGlvbnNUaXRsZX19PC9zcGFuPjwvZGl2Pg0KDQogICAge3tmb3JtLW5hbWUtZGVzY3JpcHRpb24NCiAgICAgIG1vZGVsPW1vZGVsDQogICAgICBuYW1lUmVxdWlyZWQ9dHJ1ZQ0KICAgIH19DQoNCiAgICB7e2Zvcm0tdXNlci1sYWJlbHMNCiAgICAgIGluaXRpYWxMYWJlbHM9bGFiZWxSZXNvdXJjZS5sYWJlbHMNCiAgICAgIHNldExhYmVscz0oYWN0aW9uICdzZXRMYWJlbHMnKQ0KICAgICAgZXhwYW5kQWxsPWV4cGFuZEFsbA0KICAgICAgZXhwYW5kPShhY3Rpb24gZXhwYW5kRm4pDQogICAgfX0NCg0KICAgIHt7Zm9ybS1lbmdpbmUtb3B0cw0KICAgICAgbWFjaGluZT1tb2RlbA0KICAgICAgc2hvd0VuZ2luZVVybD1zaG93RW5naW5lVXJsDQogICAgfX0NCiAge3svYWNjb3JkaW9uLWxpc3R9fQ0KDQogIHt7IS0tIFRoaXMgY29tcG9uZW50IHNob3dzIGVycm9ycyBwcm9kdWNlZCBieSB2YWxpZGF0ZSgpIGluIHRoZSBjb21wb25lbnQgLS19fQ0KICB7e3RvcC1lcnJvcnMgZXJyb3JzPWVycm9yc319DQoNCiAge3shLS0gVGhpcyBjb21wb25lbnQgc2hvd3MgdGhlIENyZWF0ZSBhbmQgQ2FuY2VsIGJ1dHRvbnMgLS19fQ0KICB7e3NhdmUtY2FuY2VsIHNhdmU9InNhdmUiIGNhbmNlbD0iY2FuY2VsIn19DQo8L3NlY3Rpb24+DQo=";
  var computed = Ember.computed;
  var get = Ember.get;
  var set = Ember.set;
  var alias = Ember.computed.alias;
  var service = Ember.inject.service;
  var defaultRadix = 10;
  var defaultBase = 1024;
  exports.default = Ember.Component.extend(_nodeDriver.default, {
    driverName: 'scaleway',
    config: alias('model.scalewayConfig'),
    app: service(),
    init: function init() {
      var decodedLayout = window.atob(LAYOUT);
      var template = Ember.HTMLBars.compile(decodedLayout, {
        moduleName: 'nodes/components/driver-scaleway/template'
      });
      set(this, 'layout', template);

      this._super.apply(this, arguments);
    },
    regions: [{
      id: 'par1',
      location: 'Paris (par1)'
    }, {
      id: 'ams1',
      location: 'Amsterdam (ams1)'
    }],
    bootstrap: function bootstrap() {
      var config = get(this, 'globalStore').createRecord({
        type: 'scalewayConfig',
        commercialType: '',
        region: '',
        name: '',
        debug: false,
        image: '',
        ip: '',
        ipv6: false,
        organization: '',
        token: '',
        volumes: '',
        bootscript: ''
      });
      set(this, 'model.scalewayConfig', config);
    },
    validate: function validate() {
      this._super();

      var errors = get(this, 'errors') || [];

      if (!get(this, 'model.name')) {
        errors.push('Name is required!');
      }

      if (!get(this, 'config.organization')) {
        errors.push('Organization ID is required!');
      }

      if (!get(this, 'config.token')) {
        errors.push('API Token is required!');
      }

      if (!get(this, 'config.commercialType')) {
        errors.push('Instance Type is required!');
      }

      if (!get(this, 'config.image')) {
        errors.push('Image is required!');
      }

      if (get(errors, 'length')) {
        set(this, 'errors', errors);
        return false;
      } else {
        set(this, 'errors', null);
        return true;
      }
    }
  });
});;
"use strict";

define("ui/components/driver-scaleway/component", ["exports", "nodes/components/driver-scaleway/component"], function (exports, _component) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});