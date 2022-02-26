function sumMul(n,m){
    if (n >= m) return 'INVALID'
  
    const last = Math.ceil(m / n) * n - n
    return (last + n) * (last / n) / 2
  }