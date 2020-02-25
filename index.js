const HetzJS = require("./hetz");

HetzJS.authenticate(
  "ST4C2DAFiyGYGWebrRAoEJkCWzwmGE3d8Wamg28ORkv3z3YjWQv7bf7iaWp4ciHs"
);

HetzJS.server(4697980).requestConsole(cons => {
  console.log(cons);
});
