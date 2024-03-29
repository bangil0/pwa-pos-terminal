import { isExist } from 'common/utils';
import { TaxActions, Action } from 'common/types';
import { getTaxEntity } from 'common/assets';

const taxActions: Action<TaxActions> = (state, updateState) => ({
  // add a tax
  add: (tax) => updateState({ taxes: [...state.taxes, getTaxEntity(tax)] }),

  // update a tax
  update: (tax) => {
    const updTaxes = [...state.taxes.filter((entity) => entity.id !== tax.id), tax];
    updateState({ taxes: updTaxes });
  },

  // remove a tax
  remove: (taxId) => {
    const updTaxes = [...state.taxes];
    const targetEntity = state.taxes.findIndex((entity) => taxId === entity.id);
    if (!isExist(targetEntity)) throw new Error('The specified tax does not exist');
    updTaxes[targetEntity].isDeleted = true;
    updateState({ taxes: updTaxes });
  },
});

export default taxActions;
