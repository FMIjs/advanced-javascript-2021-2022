function tag(staticParts, ...dynamicParts) {
  return staticParts.map((str, index) => {
    if (dynamicParts.length - index > 0) {
      return `${str}<<${dynamicParts[dynamicParts.length - index - 1]}>>`;
    }
    return str;
  }).join('');
}
const value = 123;
const result = tag`dsadsadadasdad      => ${value}dsadsadas${value}`;

console.log(result);
