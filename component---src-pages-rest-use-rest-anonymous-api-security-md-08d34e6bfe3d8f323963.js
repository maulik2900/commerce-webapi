"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[6298],{18888:function(t,a,e){e.r(a),e.d(a,{_frontmatter:function(){return p},default:function(){return x}});var n,r=e(87462),l=e(63366),d=(e(15007),e(64983)),m=e(91515),u=["components"],p={},i=(n="InlineAlert",function(t){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",t)}),o={_frontmatter:p},g=m.Z;function x(t){var a=t.components,e=(0,l.Z)(t,u);return(0,d.mdx)(g,(0,r.Z)({},o,e,{components:a,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"restricting-access-to-anonymous-web-apis"},"Restricting access to anonymous web APIs"),(0,d.mdx)("p",null,"Adobe Commerce allows some web APIs to be accessed by unauthenticated (anonymous) users. Many of these APIs allow a customer to have a robust shopping experience on the website without having to log in."),(0,d.mdx)("p",null,"A subset of these APIs can return information about products, promotions, and storefronts that a merchant might consider proprietary. For example, Catalog module APIs can provide information about an item's pricing and quantity, as well as items that are currently not for sale. The CMS module could reveal information about upcoming promotional landing pages and coupons. The Store module can reveal too much information about individual websites."),(0,d.mdx)("p",null,"For this reason, by default, Commerce now prevents anonymous users from accessing the APIs that could reveal sensitive information.  When the feature is enabled, the user must have administrator privileges to execute the affected APIs."),(0,d.mdx)("p",null,"The following table lists the APIs that are no longer available to an anonymous user by default:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Product"),(0,d.mdx)("th",{parentName:"tr",align:null},"Module"),(0,d.mdx)("th",{parentName:"tr",align:null},"API"),(0,d.mdx)("th",{parentName:"tr",align:null},"Action"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Catalog"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/products"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Catalog"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/products/:sku"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Catalog"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/products/attributes/:attributeCode"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Catalog"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/products/types"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Catalog"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/products/attribute-sets/sets/list"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Catalog"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/products/attribute-sets/:attributeSetId"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Catalog"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/products/attribute-sets/:attributeSetId/attributes"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Catalog"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/products/attribute-sets/groups/list"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Catalog"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/products/attributes/:attributeCode/options"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Catalog"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/products/media/types/:attributeSetName"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Catalog"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/products/:sku/media/:entryId"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Catalog"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/products/:sku/media"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Catalog"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/products/:sku/group-prices/:customerGroupId/tiers"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Catalog"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/categories/:categoryId"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Catalog"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/categories"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Catalog"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/products/:sku/options"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Catalog"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/products/:sku/options/:optionId"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Catalog"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/products/links/types"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Catalog"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/products/links/:type/attributes"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Catalog"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/products/:sku/links/:type"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Catalog"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/categories/:categoryId/products"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"CatalogInventory"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/stockStatuses/:productSku"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Cms"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/cmsPage/:pageId"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Cms"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/cmsBlock/:blockId"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"ConfigurableProduct"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/configurable-products/:sku/children"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"ConfigurableProduct"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/configurable-products/:sku/options/:id"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"ConfigurableProduct"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/configurable-products/:sku/options/all"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Store"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/store/storeViews"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Store"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/store/storeGroups"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Store"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/store/websites"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Store"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/store/storeConfigs"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")))),(0,d.mdx)(i,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("div",null,(0,d.mdx)("p",null),"Preventing anonymous access to these endpoints could cause third-party integrations to fail. If a third-party integration calls any of these endpoints, it will receive an authentication error instead of the expected response. In this case, you might need to disable this feature.",(0,d.mdx)("p",null),(0,d.mdx)("p",null),(0,d.mdx)("p",null," "),"To disable this feature, log in to the Admin panel and navigate to ",(0,d.mdx)("strong",null,"Stores")," > ",(0,d.mdx)("strong",null,"Settings")," > ",(0,d.mdx)("strong",null,"Configuration")," > ",(0,d.mdx)("strong",null,"Services")," > ",(0,d.mdx)("strong",null,"Magento Web API")," > ",(0,d.mdx)("strong",null,"Web API Security"),". Then select ",(0,d.mdx)("strong",null,"Yes")," from the ",(0,d.mdx)("strong",null,"Allow Anonymous Guest Access")," menu."),(0,d.mdx)("p",null,"If the list of APIs that are inaccessible to anonymous users must be updated for a third-party extension, an integrator can add to their extension's ",(0,d.mdx)("inlineCode",{parentName:"p"},"di.xml")," file to update or replace the functionality defined in the WebapiSecurity module."),(0,d.mdx)("p",null,"The following APIs remain accessible to anonymous users. Most of these must remain accessible to support the checkout and add-to-cart Ajax functionalities."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Product"),(0,d.mdx)("th",{parentName:"tr",align:null},"Module"),(0,d.mdx)("th",{parentName:"tr",align:null},"API"),(0,d.mdx)("th",{parentName:"tr",align:null},"Action"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Catalog"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/products-render-info"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Checkout"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/guest-carts/:cartId/payment-information"),(0,d.mdx)("td",{parentName:"tr",align:null},"POST")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Checkout"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/guest-carts/:cartId/payment-information"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Checkout"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/guest-carts/:cartId/set-payment-information"),(0,d.mdx)("td",{parentName:"tr",align:null},"POST")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Checkout"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/guest-carts/:cartId/shipping-information"),(0,d.mdx)("td",{parentName:"tr",align:null},"POST")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Checkout"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/guest-carts/:cartId/totals-information"),(0,d.mdx)("td",{parentName:"tr",align:null},"POST")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Customer"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/customers"),(0,d.mdx)("td",{parentName:"tr",align:null},"POST")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Customer"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/customers/:customerId/password/resetLinkToken/:resetPasswordLinkToken"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Customer"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/customers/password"),(0,d.mdx)("td",{parentName:"tr",align:null},"PUT")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Customer"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/customers/resetPassword"),(0,d.mdx)("td",{parentName:"tr",align:null},"POST")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Customer"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/customers/isEmailAvailable"),(0,d.mdx)("td",{parentName:"tr",align:null},"POST")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Directory"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/directory/countries"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Directory"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/directory/countries/:countryId"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Directory"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/directory/currency"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"GiftMessage"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/guest-carts/:cartId/gift-message"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"GiftMessage"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/guest-carts/:cartId/gift-message"),(0,d.mdx)("td",{parentName:"tr",align:null},"POST")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"GiftMessage"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/guest-carts/:cartId/gift-message/:itemId"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"GiftMessage"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/guest-carts/:cartId/gift-message/:itemId"),(0,d.mdx)("td",{parentName:"tr",align:null},"POST")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Integration"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/integration/admin/token"),(0,d.mdx)("td",{parentName:"tr",align:null},"POST")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Integration"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/integration/customer/token"),(0,d.mdx)("td",{parentName:"tr",align:null},"POST")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Quote"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/guest-carts/:cartId/billing-address"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Quote"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/guest-carts/:cartId/billing-address"),(0,d.mdx)("td",{parentName:"tr",align:null},"POST")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Quote"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/guest-carts/:cartId/items"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Quote"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/guest-carts/:cartId/items"),(0,d.mdx)("td",{parentName:"tr",align:null},"POST")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Quote"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/guest-carts/:cartId/items/:itemId"),(0,d.mdx)("td",{parentName:"tr",align:null},"PUT")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Quote"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/guest-carts/:cartId/items/:itemId"),(0,d.mdx)("td",{parentName:"tr",align:null},"DELETE")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Quote"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/guest-carts"),(0,d.mdx)("td",{parentName:"tr",align:null},"POST")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Quote"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/guest-carts/:cartId/order"),(0,d.mdx)("td",{parentName:"tr",align:null},"PUT")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Quote"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/guest-carts/:cartId"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Quote"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/guest-carts/:cartId/collect-totals"),(0,d.mdx)("td",{parentName:"tr",align:null},"PUT")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Quote"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/guest-carts/:cartId/totals"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Quote"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/guest-carts/:cartId/coupons"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Quote"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/guest-carts/:cartId/coupons/:couponCode"),(0,d.mdx)("td",{parentName:"tr",align:null},"PUT")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Quote"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/guest-carts/:cartId/coupons"),(0,d.mdx)("td",{parentName:"tr",align:null},"DELETE")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Quote"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/guest-carts/:cartId/selected-payment-method"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Quote"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/guest-carts/:cartId/selected-payment-method"),(0,d.mdx)("td",{parentName:"tr",align:null},"PUT")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Quote"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/guest-carts/:cartId/payment-methods"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Quote"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/guest-carts/:cartId/estimate-shipping-methods"),(0,d.mdx)("td",{parentName:"tr",align:null},"POST")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Quote"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/guest-carts/:cartId/shipping-methods"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Open Source"),(0,d.mdx)("td",{parentName:"tr",align:null},"Search"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/search"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,d.mdx)("td",{parentName:"tr",align:null},"GiftCardAccount"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/carts/guest-carts/:cartId/giftCards/:giftCardCode"),(0,d.mdx)("td",{parentName:"tr",align:null},"DELETE")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,d.mdx)("td",{parentName:"tr",align:null},"GiftCardAccount"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/carts/guest-carts/:cartId/giftCards"),(0,d.mdx)("td",{parentName:"tr",align:null},"POST")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,d.mdx)("td",{parentName:"tr",align:null},"GiftCardAccount"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/carts/guest-carts/:cartId/checkGiftCard/:giftCardCode"),(0,d.mdx)("td",{parentName:"tr",align:null},"GET")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,d.mdx)("td",{parentName:"tr",align:null},"GiftRegistry"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/guest-giftregistry/:cartId/estimate-shipping-methods"),(0,d.mdx)("td",{parentName:"tr",align:null},"POST")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Commerce"),(0,d.mdx)("td",{parentName:"tr",align:null},"WorldPay"),(0,d.mdx)("td",{parentName:"tr",align:null},"/V1/worldpay-guest-carts/:cartId/payment-information"),(0,d.mdx)("td",{parentName:"tr",align:null},"POST")))))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-use-rest-anonymous-api-security-md-08d34e6bfe3d8f323963.js.map