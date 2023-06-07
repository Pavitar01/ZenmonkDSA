let s = "cbacdcbc";
s = s.split('');

function findUnique() {
  const uniqueSet = new Set();

  for (let i = 0; i < s.length; i++) {
    uniqueSet.add(s[i]);
  }
  console.log(uniqueSet);
}

findUnique();
