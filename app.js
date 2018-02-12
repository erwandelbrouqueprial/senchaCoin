Ext.application({
  name: 'MyApp',

  requires: ['Ext.MessageBox'],

  launch: function() {
    Ext.Msg.alert('Hello Ext JS', 'Hello! Welcome to Ext JS.');
  },
});
