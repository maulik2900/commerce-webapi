---
title: Braintree Vault payment method
description: Learn how to use the GraphQL API mutation for the Braintree Vault payment solution.
contributor_name: Something Digital (now Rightpoint)
contributor_link: https://www.rightpoint.com/
keywords:
  - GraphQL
  - Payments
---

# Braintree Vault payment method

Braintree Vault is a payment gateway that processes debit and credit card payments from the Magento_Vault.

## Braintree Vault workflow

The following diagram shows the workflow for placing an order when Braintree Vault is the selected payment method.

![Braintree sequence diagram](../../_images/graphql/braintree-vault.svg)

1. Use the [`customerPaymentTokens`](../schema/checkout/queries/customer-payment-tokens.md) query to retrieve
   the payment tokens the customer has stored in the vault.

1. The application returns an array of payment tokens.

1. The client renders the token information, and the customer selects a payment method.

   When the customer selects a stored payment method, the PWA uses the [`setPaymentMethodOnCart`](../schema/cart/mutations/set-payment-method.md) mutation to set the payment method to [`braintree_cc_vault`](#braintree_cc_vault-object). The vaulted public hash is passed with other optional properties in the `braintree_cc_vault`.

1. The application returns a `Cart` object.

1. The client runs the [`placeOrder`](../schema/cart/mutations/place-order.md) mutation.

1. The application sends an authorization request to the gateway.

1. The gateway sends the response to Magento.

1. The application creates an order and sends an order ID in response to the `placeOrder` mutation.

## `setPaymentMethodOnCart` mutation

When you set the payment method to Braintree in the [`setPaymentMethodOnCart`](../schema/cart/mutations/set-payment-method.md)
mutation, the `payment_method` object must contain a [`braintree_cc_vault`](#braintree_cc_vault-object) object.

### braintree_cc_vault object

The `braintree_cc_vault` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`public_hash` | String! | Required input for Magento_Vault public hash for the selected stored payment method
`device_data` | String | Optional. JSON-encoded device data for Kount integration

### Example Usage

The following example shows the `setPaymentMethodOnCart` mutation constructed for the Braintree Vault payment method.

**Request:**

```graphql
mutation {
  setPaymentMethodOnCart(
    input: {
      cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG"
      payment_method: {
        code: "braintree_cc_vault"
        braintree_cc_vault: { public_hash: "fake-public-hash" }
      }
    }
  ) {
    cart {
      selected_payment_method {
        code
        title
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "setPaymentMethodOnCart": {
      "cart": {
        "selected_payment_method": {
          "code": "braintree_cc_vault"
          "title": "Stored Cards"
        }
      }
    }
  }
}
```
