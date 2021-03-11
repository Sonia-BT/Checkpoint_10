let v1 = [3, 2.5, 2, 0],
  v2 = [-2, 2, 0.5, 0];
let obj = {
  Product: 0,
};
function dot_product(v1, v2, obj) {
  for (let i = 0; i < v1.length; i++) {
    obj.Product += v1[i] * v2[i];
  }
}

dot_product(v1, v2, obj);
let x = dot_product(v1, v2, obj).Product;
function Orthogonal(dot_product) {
  if (dot_product.Product == 0) {
    return "Orthogonal true";
  } else {
    return "Orthogonal false";
  }
}

Orthogonal(dot_product(v1, v2));
