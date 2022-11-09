"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[5496],{43612:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return u}});var n=a(87462),r=a(63366),o=(a(15007),a(64983)),m=a(91515),i=a(8673),d=["components"],l={},s={_frontmatter:l},p=m.Z;function u(e){var t=e.components,a=(0,r.Z)(e,d);return(0,o.mdx)(p,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"tutorials"},"Tutorials"),(0,o.mdx)("p",null,"The REST tutorials provide an introduction to Adobe Commerce web APIs. In general, the tutorials guide you through commonly-performed complex tasks:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"The ",(0,o.mdx)("a",{parentName:"p",href:"/commerce-webapi/rest/tutorials/orders/"},(0,o.mdx)("strong",{parentName:"a"},"order processing")," tutorial")," demonstrates the lifecycle of an order. Major steps include creating a quote, converting it to an order, issuing an invoice, and shipping the order.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"The ",(0,o.mdx)("a",{parentName:"p",href:"/commerce-webapi/rest/tutorials/inventory/index/"},(0,o.mdx)("strong",{parentName:"a"},"order processing with Inventory Management"))," tutorial builds upon the original order processing tutorial. It also configures sources and stocks and other Inventory Management features.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"The ",(0,o.mdx)("a",{parentName:"p",href:"/commerce-webapi/rest/tutorials/configurable-product/"},(0,o.mdx)("strong",{parentName:"a"},"configurable product")," tutorial")," helps you plan then create a configurable product and its component simple products.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"The ",(0,o.mdx)("a",{parentName:"p",href:"/commerce-webapi/rest/tutorials/bulk-configurable-product/"},(0,o.mdx)("strong",{parentName:"a"},"bulk API configurable product")," tutorial")," demonstrates how to create configurable products using bulk APIs.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"The ",(0,o.mdx)("a",{parentName:"p",href:"/commerce-webapi/rest/tutorials/grouped-product/"},(0,o.mdx)("strong",{parentName:"a"},"grouped products")," tutorial")," demonstrates how to create and manage grouped products."))),(0,o.mdx)("h2",{id:"complete-these-prerequisites"},"Complete these prerequisites"),(0,o.mdx)("p",null,"Before you begin any tutorial, make sure you know the basics about ",(0,o.mdx)(i.sitedatavarce,null)),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Install an Commerce instance with sample data."),(0,o.mdx)("p",{parentName:"li"},"The sample data defines a functional store, called Luma, that sells fitness clothing and accessories. The store does not provide any sandbox accounts for testing credit card payments, so transactions will be simulated using an offline ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/payment-method"},"payment method"),".")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Install a REST client. You can use any REST client to send calls to Commerce. ",(0,o.mdx)("a",{parentName:"p",href:"https://www.getpostman.com/"},"Postman")," is recommended.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Know how to construct a REST call in Commerce. See ",(0,o.mdx)("a",{parentName:"p",href:"/commerce-webapi/get-started/gs-web-api-request"},"Construct a request")," for details.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Find the Commerce REST API documentation. You can view the ",(0,o.mdx)("a",{parentName:"p",href:"../quick-reference/index.md"},"static REST API documentation on devdocs")," or ",(0,o.mdx)("a",{parentName:"p",href:"/commerce-webapi/rest/use-rest/generate-local/"},"generate a local API reference"),".")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Find the Commerce Merchant documentation. Refer to ",(0,o.mdx)("a",{parentName:"p",href:"https://docs.magento.com/user-guide/getting-started.html"},"Getting Started with ",(0,o.mdx)(i.sitedatavarce,null))," for information about the Luma store that is created when you install Commerce with the sample data."))),(0,o.mdx)("h2",{id:"performing-steps"},"Performing steps"),(0,o.mdx)("p",null,"Although some steps require that you configure Commerce in some way, you perform most steps by sending one or more REST calls to Commerce. Each step that makes a REST call provides the following information:"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,o.mdx)("p",null,"This section lists the HTTP verb and full path to the endpoint. The basic structure of a REST call in Commerce is"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"<HTTP verb> http://<host>/rest/<scope>/<endpoint>")),(0,o.mdx)("p",null,"where:"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Element"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"HTTP verb")),(0,o.mdx)("td",{parentName:"tr",align:null},"One of ",(0,o.mdx)("inlineCode",{parentName:"td"},"GET"),", ",(0,o.mdx)("inlineCode",{parentName:"td"},"POST"),", ",(0,o.mdx)("inlineCode",{parentName:"td"},"PUT"),", or ",(0,o.mdx)("inlineCode",{parentName:"td"},"DELETE"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"host")),(0,o.mdx)("td",{parentName:"tr",align:null},"The hostname or IP address (and optionally, port) of the Commerce installation.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"scope")),(0,o.mdx)("td",{parentName:"tr",align:null},"Specifies which store the call affects. In this tutorial, this value is ",(0,o.mdx)("inlineCode",{parentName:"td"},"default"),".")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"endpoint")),(0,o.mdx)("td",{parentName:"tr",align:null},"The full URI (Uniform Resource Identifier) to the endpoint. These values always start with ",(0,o.mdx)("inlineCode",{parentName:"td"},"/V1"),". For example, ",(0,o.mdx)("inlineCode",{parentName:"td"},"/V1/orders/4"),".")))),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Scope:")),(0,o.mdx)("p",null,"The ",(0,o.mdx)("strong",{parentName:"p"},"Scope:")," section is included when the tutorial requires that you send requests to different stores."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"HTTP headers:")),(0,o.mdx)("p",null,"This section indicates which key/value pairs you must specify in the HTTP headers. All calls require one or more HTTP headers."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Payload:")),(0,o.mdx)("p",null,"This section lists the information that is sent to Commerce. All payload samples are valid and can be copied and pasted into your calls, but you might need to change the ",(0,o.mdx)("inlineCode",{parentName:"p"},"id")," values that Commerce returns."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Response:")),(0,o.mdx)("p",null,"This section lists the information that Commerce sends to the REST client. These values are often referenced in other steps in the tutorial. The values Commerce returns might be different than the values listed in the examples provided in this tutorial."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-tutorials-index-md-98f1f0ac1c5f002e2710.js.map