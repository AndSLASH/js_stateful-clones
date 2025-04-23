'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const stateHistory = [];
  let newState = { ...state };

  for (const act of actions) {
    switch (act.type) {
      case 'addProperties':
        newState = { ...newState, ...act.extraData };
        break;

      case 'removeProperties':
        newState = { ...newState };

        for (const key of act.keysToRemove) {
          delete newState[key];
        }
        break;

      default:
        newState = {};
        break;
    }

    stateHistory.push({ ...newState });
  }

  return stateHistory;
}

module.exports = transformStateWithClones;
