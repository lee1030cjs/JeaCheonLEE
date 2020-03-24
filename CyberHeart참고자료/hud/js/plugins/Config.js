/*:
 * @plugindesc Remove Battlebacks
 * @author biud436
 */
 
var Imported = Imported || {};
Imported.stabilize = true;
 
(function() {
  
  Spriteset_Battle.prototype.terrainBattleback1Name = function(type) {
    return null;
  };

  Spriteset_Battle.prototype.terrainBattleback2Name = function(type) {
    return null;
  };
  
  Spriteset_Battle.prototype.defaultBattleback1Name = function() {
      return 'Grassland';
  };

  Spriteset_Battle.prototype.defaultBattleback2Name = function() {
      return 'Grassland';
  };

  Spriteset_Battle.prototype.shipBattleback1Name = function() {
      return null;
  };

  Spriteset_Battle.prototype.shipBattleback2Name = function() {
      return null;
  };
  
})();