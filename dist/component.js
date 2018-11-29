define('nodes/components/driver-scaleway/component', ['exports', 'shared/mixins/node-driver'], function (exports, _nodeDriver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var LAYOUT = "PHNlY3Rpb24gY2xhc3M9Imhvcml6b250YWwtZm9ybSI+CiAge3sjYWNjb3JkaW9uLWxpc3Qgc2hvd0V4cGFuZEFsbD1mYWxzZSBhcyB8IGFsIGV4cGFuZEZuIHx9fQogICAge3shLS0gVGhpcyBsaW5lIHNob3dzIHRoZSBkcml2ZXIgdGl0bGUgd2hpY2ggeW91IGRvbid0IGhhdmUgdG8gY2hhbmdlIGl0IC0tfX0KICAgIDxkaXYgY2xhc3M9Im92ZXItaHIgbWItMjAiPjxzcGFuPnt7ZHJpdmVyT3B0aW9uc1RpdGxlfX08L3NwYW4+PC9kaXY+CgogICAge3shLS0gQW4gZXhhbXBsZSBpbnB1dCBvcHRpb24gLS19fQogICAge3sjYWNjb3JkaW9uLWxpc3QtaXRlbSAKICAgICAgdGl0bGU9IkFQSSBBY2Nlc3MiCiAgICAgIGRldGFpbD0iIgogICAgICBleHBhbmRBbGw9ZXhwYW5kQWxsCiAgICAgIGV4cGFuZD0oYWN0aW9uIGV4cGFuZEZuKSAKICAgICAgZXhwYW5kT25Jbml0PXRydWUgCiAgICB9fQogICAgICA8ZGl2IGNsYXNzPSJyb3ciPgogICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPk9yZ2FuaXphdGlvbiBJRHt7ZmllbGQtcmVxdWlyZWR9fTwvbGFiZWw+CiAgICAgICAgICB7e2lucHV0IHR5cGU9InRleHQiIGNsYXNzPSJmb3JtLWNvbnRyb2wiICB2YWx1ZT1jb25maWcub3JnYW5pemF0aW9ufX0KICAgICAgICA8L2Rpdj4KICAgICAgCiAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+QVBJIFRva2Vue3tmaWVsZC1yZXF1aXJlZH19PC9sYWJlbD4KICAgICAgICAgIHt7aW5wdXQgdHlwZT0icGFzc3dvcmQiIGNsYXNzPSJmb3JtLWNvbnRyb2wiIHZhbHVlPWNvbmZpZy50b2tlbiB9fQogICAgICAgIDwvZGl2PgogICAgICA8L2Rpdj4KICAgIHt7L2FjY29yZGlvbi1saXN0LWl0ZW19fQoKICB7eyNhY2NvcmRpb24tbGlzdC1pdGVtIAogICAgICB0aXRsZT0iSW5zdGFuY2UiCiAgICAgIGRldGFpbD0iIgogICAgICBleHBhbmRBbGw9ZXhwYW5kQWxsCiAgICAgIGV4cGFuZD0oYWN0aW9uIGV4cGFuZEZuKSAKICAgICAgZXhwYW5kT25Jbml0PXRydWUgCiAgICB9fQogICAgICA8ZGl2IGNsYXNzPSJyb3ciPgogICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPlJlZ2lvbjwvbGFiZWw+CiAgICAgICAgICB7e25ldy1zZWxlY3QgY2xhc3M9ImZvcm0tY29udHJvbCIgY29udGVudD1yZWdpb25zIG9wdGlvbkxhYmVsUGF0aD0nbG9jYXRpb24nIG9wdGlvblZhbHVlUGF0aD0naWQnIHZhbHVlPWNvbmZpZy5yZWdpb259fQogICAgICAgIDwvZGl2PgoKICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj5OYW1lPC9sYWJlbD4KICAgICAgICAgIHt7aW5wdXQgaW5wdXQgdHlwZT0idGV4dCIgY2xhc3M9ImZvcm0tY29udHJvbCIgdmFsdWU9Y29uZmlnLm5hbWV9fQogICAgICAgIDwvZGl2PgogICAgICAKICAgICAgPC9kaXY+CiAgICAgIDxkaXYgY2xhc3M9InJvdyI+CiAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+VHlwZXt7ZmllbGQtcmVxdWlyZWR9fTwvbGFiZWw+CiAgICAgICAgICB7e2lucHV0IHR5cGU9InRleHQiIGNsYXNzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSJTVEFSVDEtWFMiIHZhbHVlPWNvbmZpZy5jb21tZXJjaWFsVHlwZQogICAgICAgICAgfX0KICAgICAgICA8L2Rpdj4KCiAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+SW1hZ2V7e2ZpZWxkLXJlcXVpcmVkfX08L2xhYmVsPgogICAgICAgICAge3tpbnB1dCB0eXBlPSJ0ZXh0IiBjbGFzcz0iZm9ybS1jb250cm9sIiBwbGFjZWhvbGRlcj0idWJ1bnR1LXhlbmlhbCIgdmFsdWU9Y29uZmlnLmltYWdlIH19CiAgICAgICAgPC9kaXY+CiAgICAKICAgICAgPC9kaXY+CiAgICAgIDxkaXYgY2xhc3M9InJvdyI+CiAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+QWRkaXRpb25hbCBWb2x1bWVzPC9sYWJlbD4KICAgICAgICAgIHt7aW5wdXQgdHlwZT0idGV4dCIgY2xhc3M9ImZvcm0tY29udHJvbCIgcGxhY2Vob2xkZXI9IjUwRyIgdmFsdWU9Y29uZmlnLnZvbHVtZXMKICAgICAgICAgIH19CiAgICAgICAgPC9kaXY+CgogICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPkJvb3RzY3JpcHQ8L2xhYmVsPgogICAgICAgICAgIHt7aW5wdXQgdHlwZT0idGV4dCIgY2xhc3M9ImZvcm0tY29udHJvbCIgcGxhY2Vob2xkZXI9ImRvY2tlciIgdmFsdWU9Y29uZmlnLmJvb3RzY3JpcHQgfX0KICAgICAgICA8L2Rpdj4KICAgICAgPC9kaXY+CiAgICB7ey9hY2NvcmRpb24tbGlzdC1pdGVtfX0gIAogIAogICAge3sjYWNjb3JkaW9uLWxpc3QtaXRlbSAKICAgICAgdGl0bGU9Ik5ldHdvcmsiCiAgICAgIGRldGFpbD0iIgogICAgICBleHBhbmRBbGw9ZXhwYW5kQWxsCiAgICAgIGV4cGFuZD0oYWN0aW9uIGV4cGFuZEZuKSAKICAgICAgZXhwYW5kT25Jbml0PXRydWUgCiAgICB9fQogICAgICA8ZGl2IGNsYXNzPSJyb3ciPgogICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPklQIEFkZHJlc3M8L2xhYmVsPgogICAgICAgICAgIHt7aW5wdXQgdHlwZT0idGV4dCIgY2xhc3M9ImZvcm0tY29udHJvbCIgdmFsdWU9Y29uZmlnLmlwCiAgICAgICAgICB9fQogICAgICAgIDwvZGl2PgogICAgICAKICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj5JUHY2PC9sYWJlbD4KICAgICAgICAgICB7e2lucHV0IHR5cGU9ImNoZWNrYm94IiBjaGVja2VkPWNvbmZpZy5pcHY2IH19CiAgICAgICAgPC9kaXY+CiAgICAgIDwvZGl2PgogICAge3svYWNjb3JkaW9uLWxpc3QtaXRlbX19CgogICAge3sjYWNjb3JkaW9uLWxpc3QtaXRlbSAKICAgICAgdGl0bGU9IkRlYnVnIgogICAgICBkZXRhaWw9IiIKICAgICAgZXhwYW5kQWxsPWV4cGFuZEFsbAogICAgICBleHBhbmQ9KGFjdGlvbiBleHBhbmRGbikgCiAgICAgIGV4cGFuZE9uSW5pdD1mYWxzZSAKICAgIH19CiAgICAgIDxkaXYgY2xhc3M9InJvdyI+CiAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+RW5hYmxlIERlYnVnZ2luZzwvbGFiZWw+CiAgICAgICAgICB7e2lucHV0IHR5cGU9ImNoZWNrYm94IiBjaGVja2VkPWNvbmZpZy5kZWJ1ZyB9fQogICAgICAgIDwvZGl2PgogICAgICA8L2Rpdj4KICAgIHt7L2FjY29yZGlvbi1saXN0LWl0ZW19fQoKICAgIHt7IS0tIFRoaXMgZm9sbG93aW5nIGNvbnRhaW5zIHRoZSBOYW1lLCBMYWJlbHMgYW5kIEVuZ2luZSBPcHRpb25zIGZpZWxkcyAtLX19CiAgICA8ZGl2IGNsYXNzPSJvdmVyLWhyIj48c3Bhbj57e3RlbXBsYXRlT3B0aW9uc1RpdGxlfX08L3NwYW4+PC9kaXY+CgogICAge3tmb3JtLW5hbWUtZGVzY3JpcHRpb24KICAgICAgbW9kZWw9bW9kZWwKICAgICAgbmFtZVJlcXVpcmVkPXRydWUKICAgIH19CgogICAge3tmb3JtLXVzZXItbGFiZWxzCiAgICAgIGluaXRpYWxMYWJlbHM9bGFiZWxSZXNvdXJjZS5sYWJlbHMKICAgICAgc2V0TGFiZWxzPShhY3Rpb24gJ3NldExhYmVscycpCiAgICAgIGV4cGFuZEFsbD1leHBhbmRBbGwKICAgICAgZXhwYW5kPShhY3Rpb24gZXhwYW5kRm4pCiAgICB9fQoKICAgIHt7Zm9ybS1lbmdpbmUtb3B0cwogICAgICBtYWNoaW5lPW1vZGVsCiAgICAgIHNob3dFbmdpbmVVcmw9c2hvd0VuZ2luZVVybAogICAgfX0KICB7ey9hY2NvcmRpb24tbGlzdH19CgogIHt7IS0tIFRoaXMgY29tcG9uZW50IHNob3dzIGVycm9ycyBwcm9kdWNlZCBieSB2YWxpZGF0ZSgpIGluIHRoZSBjb21wb25lbnQgLS19fQogIHt7dG9wLWVycm9ycyBlcnJvcnM9ZXJyb3JzfX0KCiAge3shLS0gVGhpcyBjb21wb25lbnQgc2hvd3MgdGhlIENyZWF0ZSBhbmQgQ2FuY2VsIGJ1dHRvbnMgLS19fQogIHt7c2F2ZS1jYW5jZWwgc2F2ZT0ic2F2ZSIgY2FuY2VsPSJjYW5jZWwifX0KPC9zZWN0aW9uPgo=";

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
define('ui/components/driver-scaleway/component', ['exports', 'nodes/components/driver-scaleway/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});