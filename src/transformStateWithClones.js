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
    if (act.type === 'addProperties') {
      newState = { ...newState, ...act.extraData };
    } else if (act.type === 'removeProperties') {
      newState = { ...newState };

      for (const key of act.keysToRemove) {
        delete newState[key];
      }
    } else {
      newState = {};
    }

    stateHistory.push({ ...newState });
  }

  return stateHistory;
}

module.exports = transformStateWithClones;
