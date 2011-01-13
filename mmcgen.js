function hashRoot(x0) {
      var v3 =  h1(x0);
      var v4 = 1732584193;
      var v5 = -271733879;
      var v6 = -1732584194;
      var v7 = 271733878;
      var v9 = 0;
      while (v9 < v3.length) {
        var v10 = v4;
        var v11 = v5;
        var v12 = v6;
        var v13 = v7;
        var v8 = 0;
        v4 =  h2(v4, v5, v6, v7, v3[v9 + 0], 7, -680876936);
        v7 =  h2(v7, v4, v5, v6, v3[v9 + 1], 12, -389564586);
        v6 =  h2(v6, v7, v4, v5, v3[v9 + 2], 17, 606105819);
        v5 =  h2(v5, v6, v7, v4, v3[v9 + 3], 22, -1044525330);
        v4 =  h2(v4, v5, v6, v7, v3[v9 + 4], 7, -176418897);
        v7 =  h2(v7, v4, v5, v6, v3[v9 + 5], 12, 1200080426);
        v6 =  h2(v6, v7, v4, v5, v3[v9 + 6], 17, -1473231341);
        v5 =  h2(v5, v6, v7, v4, v3[v9 + 7], 22, -45705983);
        v4 =  h2(v4, v5, v6, v7, v3[v9 + 8], 7, 1770035416);
        v7 =  h2(v7, v4, v5, v6, v3[v9 + 9], 12, -1958414417);
        v6 =  h2(v6, v7, v4, v5, v3[v9 + 10], 17, -42063);
        v5 =  h2(v5, v6, v7, v4, v3[v9 + 11], 22, -1990404162);
        v4 =  h2(v4, v5, v6, v7, v3[v9 + 12], 7, 1804603682);
        v7 =  h2(v7, v4, v5, v6, v3[v9 + 13], 12, -40341101);
        v6 =  h2(v6, v7, v4, v5, v3[v9 + 14], 17, -1502002290);
        v5 =  h2(v5, v6, v7, v4, v3[v9 + 15], 22, 1236535329);
        v4 =  h3(v4, v5, v6, v7, v3[v9 + 1], 5, -165796510);
        v7 =  h3(v7, v4, v5, v6, v3[v9 + 6], 9, -1069501632);
        v6 =  h3(v6, v7, v4, v5, v3[v9 + 11], 14, 643717713);
        v5 =  h3(v5, v6, v7, v4, v3[v9 + 0], 20, -373897302);
        v4 =  h3(v4, v5, v6, v7, v3[v9 + 5], 5, -701558691);
        v7 =  h3(v7, v4, v5, v6, v3[v9 + 10], 9, 38016083);
        v6 =  h3(v6, v7, v4, v5, v3[v9 + 15], 14, -660478335);
        v5 =  h3(v5, v6, v7, v4, v3[v9 + 4], 20, -405537848);
        v4 =  h3(v4, v5, v6, v7, v3[v9 + 9], 5, 568446438);
        v7 =  h3(v7, v4, v5, v6, v3[v9 + 14], 9, -1019803690);
        v6 =  h3(v6, v7, v4, v5, v3[v9 + 3], 14, -187363961);
        v5 =  h3(v5, v6, v7, v4, v3[v9 + 8], 20, 1163531501);
        v4 =  h3(v4, v5, v6, v7, v3[v9 + 13], 5, -1444681467);
        v7 =  h3(v7, v4, v5, v6, v3[v9 + 2], 9, -51403784);
        v6 =  h3(v6, v7, v4, v5, v3[v9 + 7], 14, 1735328473);
        v5 =  h3(v5, v6, v7, v4, v3[v9 + 12], 20, -1926607734);
        v4 =  h4(v4, v5, v6, v7, v3[v9 + 5], 4, -378558);
        v7 =  h4(v7, v4, v5, v6, v3[v9 + 8], 11, -2022574463);
        v6 =  h4(v6, v7, v4, v5, v3[v9 + 11], 16, 1839030562);
        v5 =  h4(v5, v6, v7, v4, v3[v9 + 14], 23, -35309556);
        v4 =  h4(v4, v5, v6, v7, v3[v9 + 1], 4, -1530992060);
        v7 =  h4(v7, v4, v5, v6, v3[v9 + 4], 11, 1272893353);
        v6 =  h4(v6, v7, v4, v5, v3[v9 + 7], 16, -155497632);
        v5 =  h4(v5, v6, v7, v4, v3[v9 + 10], 23, -1094730640);
        v4 =  h4(v4, v5, v6, v7, v3[v9 + 13], 4, 681279174);
        v7 =  h4(v7, v4, v5, v6, v3[v9 + 0], 11, -358537222);
        v6 =  h4(v6, v7, v4, v5, v3[v9 + 3], 16, -722521979);
        v5 =  h4(v5, v6, v7, v4, v3[v9 + 6], 23, 76029189);
        v4 =  h4(v4, v5, v6, v7, v3[v9 + 9], 4, -640364487);
        v7 =  h4(v7, v4, v5, v6, v3[v9 + 12], 11, -421815835);
        v6 =  h4(v6, v7, v4, v5, v3[v9 + 15], 16, 530742520);
        v5 =  h4(v5, v6, v7, v4, v3[v9 + 2], 23, -995338651);
        v4 =  h5(v4, v5, v6, v7, v3[v9 + 0], 6, -198630844);
        v7 =  h5(v7, v4, v5, v6, v3[v9 + 7], 10, 1126891415);
        v6 =  h5(v6, v7, v4, v5, v3[v9 + 14], 15, -1416354905);
        v5 =  h5(v5, v6, v7, v4, v3[v9 + 5], 21, -57434055);
        v4 =  h5(v4, v5, v6, v7, v3[v9 + 12], 6, 1700485571);
        v7 =  h5(v7, v4, v5, v6, v3[v9 + 3], 10, -1894986606);
        v6 =  h5(v6, v7, v4, v5, v3[v9 + 10], 15, -1051523);
        v5 =  h5(v5, v6, v7, v4, v3[v9 + 1], 21, -2054922799);
        v4 =  h5(v4, v5, v6, v7, v3[v9 + 8], 6, 1873313359);
        v7 =  h5(v7, v4, v5, v6, v3[v9 + 15], 10, -30611744);
        v6 =  h5(v6, v7, v4, v5, v3[v9 + 6], 15, -1560198380);
        v5 =  h5(v5, v6, v7, v4, v3[v9 + 13], 21, 1309151649);
        v4 =  h5(v4, v5, v6, v7, v3[v9 + 4], 6, -145523070);
        v7 =  h5(v7, v4, v5, v6, v3[v9 + 11], 10, -1120210379);
        v6 =  h5(v6, v7, v4, v5, v3[v9 + 2], 15, 718787259);
        v5 =  h5(v5, v6, v7, v4, v3[v9 + 9], 21, -343485551);
        v4 =  h6(v4, v10);
        v5 =  h6(v5, v11);
        v6 =  h6(v6, v12);
        v7 =  h6(v7, v13);
        v9 += 16;
      }
      return  h7(v4) +  h7(v5) +  h7(v6) +  h7(v7);
    };

function h11(x0, x1) {
  var v4 = x0 & 1 | x1 & 1;
  var v5 = x0 >>> 1 | x1 >>> 1;
  return v5 << 1 | v4;
};

function h10(x0, x1) {
  var v4 = x0 & 1 ^ x1 & 1;
  var v5 = x0 >>> 1 ^ x1 >>> 1;
  return v5 << 1 | v4;
};

function h12(x0, x1) {
  var v4 = x0 & 1 & (x1 & 1);
  var v5 = x0 >>> 1 & x1 >>> 1;
  return v5 << 1 | v4;
};

function h6(x0, x1) {
  var v4 = (x0 & 65535) + (x1 & 65535);
  var v5 = (x0 >> 16) + (x1 >> 16) + (v4 >> 16);
  return v5 << 16 | v4 & 65535;
};

function h7(x0) {
  var v3 = '';
  var v4 = '0123456789abcdef';
  var v5 = 0;
  var v6 = 4;
  while (v5 < v6) {
    var v7 = v5;
    ++v5;
    v3 += v4.charAt(x0 >> v7 * 8 + 4 & 15) + v4.charAt(x0 >> v7 * 8 & 15);
  }
  return v3;
};

function h1(x0) {
  var v3 = (x0.length + 8 >> 6) + 1;
  var v4 = new Array();
  var v5 = 0;
  var v6 = v3 * 16;
  while (v5 < v6) {
    var v7 = v5;
    ++v5;
    v4[v7] = 0;
  }
  v5 = 0;
  while (v5 < x0.length) {
    v4[v5 >> 2] |= x0.charCodeAt(v5) << ((x0.length * 8 + v5) % 4) * 8;
    ++v5;
  }
  v4[v5 >> 2] |= 128 << ((x0.length * 8 + v5) % 4) * 8;
  v6 = x0.length * 8;
  v4[v3 * 16 - 2] = v6 & 255;
  v4[v3 * 16 - 2] |= (v6 >>> 8 & 255) << 8;
  v4[v3 * 16 - 2] |= (v6 >>> 16 & 255) << 16;
  v4[v3 * 16 - 2] |= (v6 >>> 24 & 255) << 24;
  return v4;
};

function h9(x0, x1) {
  return x0 << x1 | x0 >>> 32 - x1;
};

function h8(x0, x1, x2, x3, x4, x5) {
  return  h6( h9( h6( h6(x1, x0),  h6(x3, x5)), x4), x2);
};

function h2(x0, x1, x2, x3, x4, x5, x6) {
  return  h8( h11( h12(x1, x2),  h12(x1 ^ -1, x3)), x0, x1, x4, x5, x6);
};

function h3(x0, x1, x2, x3, x4, x5, x6) {
  return  h8( h11( h12(x1, x3),  h12(x2, x3 ^ -1)), x0, x1, x4, x5, x6);
};

function h4(x0, x1, x2, x3, x4, x5, x6) {
  return  h8( h10( h10(x1, x2), x3), x0, x1, x4, x5, x6);
};

function h5(x0, x1, x2, x3, x4, x5, x6) {
  return  h8( h10(x2,  h11(x1, x3 ^ -1)), x0, x1, x4, x5, x6);
};

function getK(pop, ind, tra, sec, env, com){
    return ( hashRoot(pop + ';' + ind + ';' + tra + ';' + sec + ';' + env + ';' + com)).substr(0, 5);
};

function getMMC(name, pop, ind, tra, sec, env, com, width, height){
    if(typeof width == 'undefined'){
        width = 600;
    }
    if(typeof height == 'undefined'){
        height = 400;
    }
    var varString = 'name='+name+'&pop='+pop+'&ind='+ind+'&tra='+tra+
    '&sec='+sec+'&env='+env+'&com='+com+'&k='+
    getK(pop, ind, tra, sec, env, com);
    return '<embed type=\"application/x-shockwave-flash\" '+
    'src=\"http://data.myminicity.com/swf/client.swf?v=5\" '+
    'width=\"'+width+'\" height=\"'+height+'\" id=\"client\" name=\"client\" '+
    'bgcolor=\"#deecfe\" quality=\"high\" menu=\"false\" '+
    'allowscriptaccess=\"always\" flashvars=\"'+
    varString+'\" '+
    'scale=\"noscale\"></embed>';
}
