"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[2278],{98642:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return N}});var n,m=a(87462),r=a(63366),d=(a(15007),a(64983)),i=a(91515),o=a(94720),l=a(14552),u=["components"],s={},p=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)}),x={_frontmatter:s},c=i.Z;function N(e){var t=e.components,a=(0,r.Z)(e,u);return(0,d.mdx)(c,(0,m.Z)({},x,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"createcustomer-mutation"},"createCustomer mutation"),(0,d.mdx)(p,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"We recommend using the ",(0,d.mdx)("a",{parentName:"p",href:"create-v2.md"},"createCustomerV2 mutation")," to create a customer."),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"createCustomer")," mutation creates a new customer."),(0,d.mdx)("p",null,"To return or modify information about a customer, we recommend you use customer tokens in the header of your GraphQL calls. However, you also can use ",(0,d.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-session"},"session authentication"),"."),(0,d.mdx)("h2",{id:"syntax"},"Syntax"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"mutation: {createCustomer(input: CustomerInput!) {CustomerOutput}}")),(0,d.mdx)("h2",{id:"example-usage"},"Example usage"),(0,d.mdx)("p",null,"The following call creates a new customer."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Request:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  createCustomer(\n    input: {\n      firstname: "Bob"\n      lastname: "Loblaw"\n      email: "bobloblaw@example.com"\n      password: "b0bl0bl@w"\n      is_subscribed: true\n    }\n  ) {\n    customer {\n      firstname\n      lastname\n      email\n      is_subscribed\n    }\n  }\n}\n')),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Response:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "createCustomer": {\n      "customer": {\n        "firstname": "Bob",\n        "lastname": "Loblaw",\n        "email": "bobloblaw@example.com",\n        "is_subscribed": true\n      }\n    }\n  }\n}\n')),(0,d.mdx)("h2",{id:"input-attributes"},"Input attributes"),(0,d.mdx)("p",null,"The following table lists the attributes you can use as input for the ",(0,d.mdx)("inlineCode",{parentName:"p"},"createCustomer")," mutation. The ",(0,d.mdx)("a",{parentName:"p",href:"../../customer/queries/customer.md#customer-attributes"},"Customer attributes")," table lists the attributes the application returns."),(0,d.mdx)(o.default,{mdxType:"CreateCustomer"}),(0,d.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"createCustomer")," mutation returns the ",(0,d.mdx)("inlineCode",{parentName:"p"},"CustomerOutput")," object."),(0,d.mdx)("p",null,"The following table lists the top-level attributes of the ",(0,d.mdx)("inlineCode",{parentName:"p"},"customer")," object. See the ",(0,d.mdx)("a",{parentName:"p",href:"../../customer/queries/customer.md"},(0,d.mdx)("inlineCode",{parentName:"a"},"customer")," query")," for complete details about this object."),(0,d.mdx)(l.default,{mdxType:"Customer"}),(0,d.mdx)("h2",{id:"errors"},"Errors"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Error"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"A customer with the same email address already exists in an associated website.")),(0,d.mdx)("td",{parentName:"tr",align:null},"The email provided in the ",(0,d.mdx)("inlineCode",{parentName:"td"},"input"),".",(0,d.mdx)("inlineCode",{parentName:"td"},"email")," argument belongs to an existing customer.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},'"Email" is not a valid email address.')),(0,d.mdx)("td",{parentName:"tr",align:null},"The value provided in the ",(0,d.mdx)("inlineCode",{parentName:"td"},"input"),".",(0,d.mdx)("inlineCode",{parentName:"td"},"email")," argument has an invalid format.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"Field CustomerInput.email of required type String! was not provided")),(0,d.mdx)("td",{parentName:"tr",align:null},"The ",(0,d.mdx)("inlineCode",{parentName:"td"},"input"),".",(0,d.mdx)("inlineCode",{parentName:"td"},"email")," argument was omitted.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},'Field "xxx" is not defined by type CustomerInput.')),(0,d.mdx)("td",{parentName:"tr",align:null},"The ",(0,d.mdx)("inlineCode",{parentName:"td"},"input"),".",(0,d.mdx)("inlineCode",{parentName:"td"},"xxx")," argument is undefined.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"Required parameters are missing: First Name")),(0,d.mdx)("td",{parentName:"tr",align:null},"The ",(0,d.mdx)("inlineCode",{parentName:"td"},"input"),".",(0,d.mdx)("inlineCode",{parentName:"td"},"firstname")," argument was omitted or contains an empty value.")))),(0,d.mdx)("h2",{id:"related-topics"},"Related topics"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"../queries/customer.md"},"customer query")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"update.md"},"updateCustomer mutation")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"create-address.md"},"createCustomerAddress mutation")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"update-address.md"},"updateCustomerAddress mutation")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"delete-address.md"},"deleteCustomerAddress mutation"))))}N.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-customer-mutations-create-md-6fdae1e0f751af44aba2.js.map