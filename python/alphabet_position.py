def alphabet_position(text):
  alphabet = list('abcdefghijklmnopqrstuvwxyz')
  text = text.lower().replace(" ","")
  result = ''
  for i in text:
      if i.isalpha():
          result += str(alphabet.index(i) + 1) + ' '
  return result[0:len(result) - 1]