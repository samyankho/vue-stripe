import { STRIPE_PARTNER_DETAILS } from '../constants';
/**
 * @deprecated - This can be achieved by using the Stripe plugin.
 */
export default {
  async install (Vue, options) {
    if(typeof window != 'undefined') {
      const {
        pk,
        stripeAccount,
        apiVersion,
        locale,
        elementsOptions,
      } = options;
      const stripe = window.Stripe(pk, { stripeAccount, apiVersion, locale });
      stripe.registerAppInfo(STRIPE_PARTNER_DETAILS);
      const elements = stripe.elements(elementsOptions);
      Vue.prototype.$stripe = stripe;
      Vue.prototype.$stripeElements = elements;
    }
  },
};
