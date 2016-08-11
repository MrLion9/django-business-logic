export default {};


Blockly.Blocks['variables_get'].init = function () {
  this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
  this.setColour(Blockly.Blocks.variables.HUE);
  this.appendDummyInput()
    .appendField(new Blockly.FieldTextInput(), 'TITLE')

    .appendField('(')
    .appendField(new Blockly.FieldTextInput(
      Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR')
    .appendField(')')

  this.setOutput(true);
  this.setEditable(false);
  this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
  this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET;
};
