function generateToken(length) {
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("")
  var token = []
  for (var i = 0; i < length; i++) {
    var j = (Math.random() * (chars.length - 1)).toFixed() //.toFixed() 四捨五入
    token[i] = chars[j]
  }
  return token.join("")
}

console.log("token: " + generateToken(16))
