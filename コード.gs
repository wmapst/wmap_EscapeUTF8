//sjisエンコード
function wmap_EscapeSJIS(str) {
  var url_text = ecljs.EscapeSJIS(str);

  return url_text;
}

//utf8エンコード
function wmap_EscapeUTF8(str) {
  var url_text = ecljs.EscapeUTF8(str);

  return url_text;
}