# べき乗計算

x^n を計算するアルゴリズム

１．繰り返し２乗法
　　指数を 2 の累乗の積に分解し計算を効率化する手法
　　O(log n)
　　例）3^50
    50=2^5+2^4+2^1
    2^5=32
    2^4=16
    2^1=2
    3^50=3^2^2^2^2^2
        *3^2^2^2^2
        *3^2

各言語とも標準ライブラリMathの中にpow()が用意されている
