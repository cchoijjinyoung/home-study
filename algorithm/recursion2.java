// 문자열의 길이 계산
public static int length(String str) {
  if(str.equeals(""))
  return 0;
  else
  return 1+length(str.substring(1));
  }