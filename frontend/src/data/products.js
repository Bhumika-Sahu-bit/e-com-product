export const products = [
  // SHOES CATEGORY 👟
  {
    id: 1,
    name: "Nike Air Max 270",
    price: 149.99,
    description: "Premium comfort with Air Max cushioning",
    image: "https://imgs.search.brave.com/DytdUvvnbgv5q9YPt-4Mt0aLKc7uGDraWIj3ygGlZJs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMS9OaWtl/LVNob2VzLVBORy1J/bWFnZS5wbmc",
    category: "shoes"
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    price: 179.99,
    description: "Revolutionary comfort for runners",
    image: "https://imgs.search.brave.com/YaV_5WoxXMNv6cUf-7zx_DEr4_ro8Ooxum8IRrA_xLs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzYvV2hp/dGUtU3VwZXJzdGFy/LUFkaWRhcy1TaG9l/cy1QTkcucG5n",
    category: "shoes"
  },
  {
    id: 3,
    name: "Puma RS-X",
    price: 129.99,
    description: "Retro-style chunky sneakers",
    image: "https://imgs.search.brave.com/0UDo9ZAeF6AGCkK22b1peQ4CQTngoPfaLOv25gDNwno/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL3FEWUFB/T1N3SlRGam9iTH4v/cy1sNjQwLnBuZw",
    category: "shoes"
  },
  {
    id: 4,
    name: "Nike Jordan 1",
    price: 189.99,
    description: "Iconic basketball sneakers",
    image: "https://imgs.search.brave.com/A-x-2GJbu_k5H5Ank0GGo-n-9d2JZHgFrgswUwWKV8M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTQvSm9y/ZGFuLVNob2VzLVBO/Ry1GcmVlLUltYWdl/LnBuZw",
    category: "shoes"
  },

  // ELECTRONICS CATEGORY 🎧
  {
    id: 5,
    name: "Sony WH-1000XM4",
    price: 349.99,
    description: "Premium noise-cancelling headphones",
    image: "https://imgs.search.brave.com/UatSGN4_BrLbC8WHKjaTF0WqjGR8nbhtUubDKIfkL1E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvd2ly/ZWxlc3MtaGVhZHBo/b25lcy1ibGFjay1w/bmctMDUwNDIwMjQt/ZHdnajJwbmQxZWVk/dDhpNy5wbmc",
    category: "electronics"
  },
  {
    id: 6,
    name: "Apple AirPods Pro",
    price: 249.99,
    description: "True wireless earbuds with ANC",
    image: "https://imgs.search.brave.com/9XjtbXnolWttthhV66quYXQNv3VsA5n4HM2FQIaSWY8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MGI3OWU4NzcxYTFm/ZDAwMDQxMWY2YmUu/cG5n",
    category: "electronics"
  },
  {
    id: 7,
    name: "Samsung Galaxy Buds Pro",
    price: 199.99,
    description: "Premium wireless earbuds",
    image: "https://imgs.search.brave.com/VXeg2Nox9axEJsFF3xdSHwZMKCVbwLA0LD9F80tFACI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9zZW8vU0FN/U1VORy1HYWxheHkt/QnVkcy1Qcm8tUGhh/bnRvbS1CbGFja183/ODNmZjhmNy1iNzI1/LTQ3MTAtYjUyZi01/ZTJmYmU2NmZlM2Yu/YTMwY2NjYWM1N2U0/ZGI3MmM0ZmNmZjIy/NTBkY2YwZGUucG5n/P29kbkhlaWdodD02/NDAmb2RuV2lkdGg9/NjQwJm9kbkJnPUZG/RkZGRg",
    category: "electronics"
  },
  {
    id: 8,
    name: "Bose QuietComfort 35",
    price: 299.99,
    description: "Wireless noise cancelling",
    image: "https://imgs.search.brave.com/ylIf5busov0WXChZZaFj-D9gQoq7kLfylVWAI7spweU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuYm9zZS5jb20v/Y29udGVudC9kYW0v/Y2xvdWRhc3NldHMv/Qm9zZV9EQU0vV2Vi/L2NvbnN1bWVyX2Vs/ZWN0cm9uaWNzL2ds/b2JhbC9wcm9kdWN0/cy9oZWFkcGhvbmVz/L3FjLWhlYWRwaG9u/ZWFybi9pbWFnZXMv/U0ZfUERQX0lNRy1E/RVRBSUxTX0JMQUNL/LnBuZy9qY3I6Y29u/dGVudC9yZW5kaXRp/b25zL2NxNWRhbS53/ZWIuMzIwLjMyMC5w/bmc",
    category: "electronics"
  },

  // ACCESSORIES CATEGORY 🎒
  {
    id: 9,
    name: "North Face Recon",
    price: 99.99,
    description: "Durable 30L backpack",
    image: "https://imgs.search.brave.com/T7cWpq0FIB4WhyfxzVLb_wseY9UaUZ8cvN8pMWWIehU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMTUvUmVk/LVNwb3J0cy1CYWNr/cGFjay1QTkctUGhv/dG9zLnBuZw",
    category: "accessories"
  },
  {
    id: 10,
    name: "Casio G-Shock",
    price: 119.99,
    description: "Rugged digital watch",
    image: "https://imgs.search.brave.com/qBFGwmjj8Cal1KSbw53X_LPXQ5aed_pssWVm3Y_hnDg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nc2hv/Y2suY2FzaW8uY29t/L2NvbnRlbnQvY2Fz/aW8vbG9jYWxlcy91/cy9lbi9icmFuZHMv/Z3Nob2NrL19qY3Jf/Y29udGVudC9yb290/L3Jlc3BvbnNpdmVn/cmlkL2NvbnRhaW5l/cl8xNDgxMjYyNDEy/XzIwMDU4NDMyOTEv/Y29udGFpbmVyL2Nv/bnRhaW5lcl8xNDA0/NjM0MzQ5XzE5NDY0/OTE5MTYvY29udGFp/bmVyL2NvbnRhaW5l/cl83NTQ1NTA0MDIv/Y29udGFpbmVyL2lt/YWdlLmNhc2lvY29y/ZWltZy5wbmcvMTcz/ODI1NzgxMDYwNC9n/Ym0tMjEwMC0xYS5w/bmc",
    category: "accessories"
  },
  {
    id: 11,
    name: "Ray-Ban Aviator",
    price: 154.99,
    description: "Classic sunglasses",
    image: "https://imgs.search.brave.com/mkiewUSvrwlR4o5uMk8-NKpFsRSKikkrJpILhHJNlDE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvc3VuZ2xhc3Nl/cy9zbWFsbC9zdW5n/bGFzc2VzX1BORzEw/My5wbmc",
    category: "accessories"
  },
  {
    id: 12,
    name: "Swiss Gear Backpack",
    price: 89.99,
    description: "Travel backpack with laptop compartment",
    image: "https://imgs.search.brave.com/A4BcurpPxKAPO0H1aFw4OMoRIRZc3ndFsRnUCj5_GV0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGh1bGUuY29tLy0v/cC9aTGg4VHZpZlgx/YWFpNFBjSlVDOWNp/ZTBOSGY2QUVhNXdH/WTAybFZHa1JnL3Jz/OmZpdC9oOjQ4MC9j/YjoxLjYvdzo0ODAv/cGxhaW4vYXBwcm92/ZWQvc3RkLmxhbmcu/YWxsLzUxLzIwLzE0/NTUxMjAucG5n",
    category: "accessories"
  },

  
];