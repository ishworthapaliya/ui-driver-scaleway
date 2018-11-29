/*!!!!!!!!!!!Do not change anything between here (the DRIVERNAME placeholder will be automatically replaced at buildtime)!!!!!!!!!!!*/
import NodeDriver from 'shared/mixins/node-driver';
 // do not remove LAYOUT, it is replaced at build time with a base64 representation of the template of the hbs template

// we do this to avoid converting template to a js file that returns a string and the cors issues that would come along with that
const LAYOUT;
/*!!!!!!!!!!!DO NOT CHANGE END!!!!!!!!!!!*/


/*!!!!!!!!!!!GLOBAL CONST START!!!!!!!!!!!*/
// EMBER API Access - if you need access to any of the Ember API's add them here in the same manner rather then import them via modules, since the dependencies exist in rancher we dont want to expor the modules in the amd def
const computed     = Ember.computed;
const get          = Ember.get;
const set          = Ember.set;
const alias        = Ember.computed.alias;
const service      = Ember.inject.service;

const defaultRadix = 10;
const defaultBase  = 1024;
/*!!!!!!!!!!!GLOBAL CONST END!!!!!!!!!!!*/



/*!!!!!!!!!!!DO NOT CHANGE START!!!!!!!!!!!*/
export default Ember.Component.extend(NodeDriver, {
  driverName: 'scaleway',
  config:     alias('model.scalewayConfig'),
  app:        service(),

  init() {
    // This does on the fly template compiling, if you mess with this :cry:
    const decodedLayout = window.atob(LAYOUT);
    const template      = Ember.HTMLBars.compile(decodedLayout, {
      moduleName: 'nodes/components/driver-scaleway/template'
    });
    set(this,'layout', template);

    this._super(...arguments);

  },
  /*!!!!!!!!!!!DO NOT CHANGE END!!!!!!!!!!!*/

    regions: [{
        id: 'par1',
        location: 'Paris (par1)'
      },
      {
        id: 'ams1',
        location: 'Amsterdam (ams1)'
      }
    ],

    // Write your component here, starting with setting 'model' to a machine with your config populated
    bootstrap: function() {
      let config = get(this, 'globalStore').createRecord({
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

    // Add custom validation beyond what can be done from the config API schema
    validate() {
      // Get generic API validation errors
      this._super();
      var errors = get(this, 'errors')||[];
      if ( !get(this, 'model.name') ) {
        errors.push('Name is required!');
      }

      // Add more specific errors
      if (!get(this, 'config.organization') ) {
        errors.push('Organization ID is required!');
      }

      if (!get(this, 'config.token') ) {
        errors.push('API Token is required!');
      }

      if (!get(this, 'config.commercialType') ) {
        errors.push('Instance Type is required!');
      }

      if (!get(this, 'config.image') ) {
        errors.push('Image is required!');
      }

      // Set the array of errors for display,
      // and return true if saving should continue.
      if ( get(errors, 'length') )
      {
        set(this, 'errors', errors);
        return false;
      }
      else
      {
        set(this, 'errors', null);
        return true;
      }
    },
    //Any computed properties or custom logic can go here
  });
});
;
export { default } from 'nodes/components/driver-scaleway/component';
;
define("shared/components/node-driver/driver-scaleway/template",["exports"],function(exports){

exports["default"] = Ember.HTMLBars.template({"id":"hx3/UB9U","block":"{\"symbols\":[\"al\",\"expandFn\"],\"statements\":[[6,\"section\"],[10,\"class\",\"horizontal-form\"],[8],[0,\"\\n\"],[4,\"accordion-list\",null,[[\"showExpandAll\"],[false]],{\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",\"over-hr mb-20\"],[8],[6,\"span\"],[8],[1,[20,\"driverOptionsTitle\"],false],[9],[9],[0,\"\\n\\n\"],[4,\"accordion-list-item\",null,[[\"title\",\"detail\",\"expandAll\",\"expand\",\"expandOnInit\"],[\"API Access\",\"\",[22,[\"expandAll\"]],[26,\"action\",[[21,0,[]],[21,2,[]]],null],true]],{\"statements\":[[0,\"      \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col span-6\"],[8],[0,\"\\n          \"],[6,\"label\"],[10,\"class\",\"acc-label\"],[8],[0,\"Organization ID\"],[1,[20,\"field-required\"],false],[9],[0,\"\\n          \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"value\"],[\"text\",\"form-control\",[22,[\"config\",\"organization\"]]]]],false],[0,\"\\n        \"],[9],[0,\"\\n      \\n        \"],[6,\"div\"],[10,\"class\",\"col span-6\"],[8],[0,\"\\n          \"],[6,\"label\"],[10,\"class\",\"acc-label\"],[8],[0,\"API Token\"],[1,[20,\"field-required\"],false],[9],[0,\"\\n          \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"value\"],[\"password\",\"form-control\",[22,[\"config\",\"token\"]]]]],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"accordion-list-item\",null,[[\"title\",\"detail\",\"expandAll\",\"expand\",\"expandOnInit\"],[\"Instance\",\"\",[22,[\"expandAll\"]],[26,\"action\",[[21,0,[]],[21,2,[]]],null],true]],{\"statements\":[[0,\"      \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col span-6\"],[8],[0,\"\\n          \"],[6,\"label\"],[10,\"class\",\"acc-label\"],[8],[0,\"Region\"],[9],[0,\"\\n          \"],[1,[26,\"new-select\",null,[[\"class\",\"content\",\"optionLabelPath\",\"optionValuePath\",\"value\"],[\"form-control\",[22,[\"regions\"]],\"location\",\"id\",[22,[\"config\",\"region\"]]]]],false],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"col span-6\"],[8],[0,\"\\n          \"],[6,\"label\"],[10,\"class\",\"acc-label\"],[8],[0,\"Name\"],[9],[0,\"\\n          \"],[1,[26,\"input\",[[22,[\"input\"]]],[[\"type\",\"class\",\"value\"],[\"text\",\"form-control\",[22,[\"config\",\"name\"]]]]],false],[0,\"\\n        \"],[9],[0,\"\\n      \\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col span-6\"],[8],[0,\"\\n          \"],[6,\"label\"],[10,\"class\",\"acc-label\"],[8],[0,\"Type\"],[1,[20,\"field-required\"],false],[9],[0,\"\\n          \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"START1-XS\",[22,[\"config\",\"commercialType\"]]]]],false],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"col span-6\"],[8],[0,\"\\n          \"],[6,\"label\"],[10,\"class\",\"acc-label\"],[8],[0,\"Image\"],[1,[20,\"field-required\"],false],[9],[0,\"\\n          \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"ubuntu-xenial\",[22,[\"config\",\"image\"]]]]],false],[0,\"\\n        \"],[9],[0,\"\\n    \\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col span-6\"],[8],[0,\"\\n          \"],[6,\"label\"],[10,\"class\",\"acc-label\"],[8],[0,\"Additional Volumes\"],[9],[0,\"\\n          \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"50G\",[22,[\"config\",\"volumes\"]]]]],false],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"col span-6\"],[8],[0,\"\\n          \"],[6,\"label\"],[10,\"class\",\"acc-label\"],[8],[0,\"Bootscript\"],[9],[0,\"\\n           \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"docker\",[22,[\"config\",\"bootscript\"]]]]],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \\n\"],[4,\"accordion-list-item\",null,[[\"title\",\"detail\",\"expandAll\",\"expand\",\"expandOnInit\"],[\"Network\",\"\",[22,[\"expandAll\"]],[26,\"action\",[[21,0,[]],[21,2,[]]],null],true]],{\"statements\":[[0,\"      \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col span-6\"],[8],[0,\"\\n          \"],[6,\"label\"],[10,\"class\",\"acc-label\"],[8],[0,\"IP Address\"],[9],[0,\"\\n           \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"value\"],[\"text\",\"form-control\",[22,[\"config\",\"ip\"]]]]],false],[0,\"\\n        \"],[9],[0,\"\\n      \\n        \"],[6,\"div\"],[10,\"class\",\"col span-6\"],[8],[0,\"\\n          \"],[6,\"label\"],[10,\"class\",\"acc-label\"],[8],[0,\"IPv6\"],[9],[0,\"\\n           \"],[1,[26,\"input\",null,[[\"type\",\"checked\"],[\"checkbox\",[22,[\"config\",\"ipv6\"]]]]],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"accordion-list-item\",null,[[\"title\",\"detail\",\"expandAll\",\"expand\",\"expandOnInit\"],[\"Debug\",\"\",[22,[\"expandAll\"]],[26,\"action\",[[21,0,[]],[21,2,[]]],null],false]],{\"statements\":[[0,\"      \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col span-6\"],[8],[0,\"\\n          \"],[6,\"label\"],[10,\"class\",\"acc-label\"],[8],[0,\"Enable Debugging\"],[9],[0,\"\\n          \"],[1,[26,\"input\",null,[[\"type\",\"checked\"],[\"checkbox\",[22,[\"config\",\"debug\"]]]]],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[0,\"    \"],[6,\"div\"],[10,\"class\",\"over-hr\"],[8],[6,\"span\"],[8],[1,[20,\"templateOptionsTitle\"],false],[9],[9],[0,\"\\n\\n    \"],[1,[26,\"form-name-description\",null,[[\"model\",\"nameRequired\"],[[22,[\"model\"]],true]]],false],[0,\"\\n\\n    \"],[1,[26,\"form-user-labels\",null,[[\"initialLabels\",\"setLabels\",\"expandAll\",\"expand\"],[[22,[\"labelResource\",\"labels\"]],[26,\"action\",[[21,0,[]],\"setLabels\"],null],[22,[\"expandAll\"]],[26,\"action\",[[21,0,[]],[21,2,[]]],null]]]],false],[0,\"\\n\\n    \"],[1,[26,\"form-engine-opts\",null,[[\"machine\",\"showEngineUrl\"],[[22,[\"model\"]],[22,[\"showEngineUrl\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"\\n\"],[0,\"  \"],[1,[26,\"top-errors\",null,[[\"errors\"],[[22,[\"errors\"]]]]],false],[0,\"\\n\\n\"],[0,\"  \"],[1,[26,\"save-cancel\",null,[[\"save\",\"cancel\"],[\"save\",\"cancel\"]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}","meta":{}});;

});