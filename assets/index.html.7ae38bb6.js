import{_ as e,o as t,c as o,e as a}from"./app.5a2e3c6b.js";const i={},r=a(`<p><strong>The power of a number</strong> says how many times to use the number in a multiplication.</p><p>It is written as a small number to the right and above the base number.</p><p><img src="https://www.mathsisfun.com/algebra/images/exponent-8-2.svg" alt="Power"></p><h2 id="naive-algorithm-complexity" tabindex="-1"><a class="header-anchor" href="#naive-algorithm-complexity" aria-hidden="true">#</a> Naive Algorithm Complexity</h2><p>How to find <code>a</code> raised to the power <code>b</code>?</p><p>We multiply <code>a</code> to itself, <code>b</code> times. That is, <code>a^b = a * a * a * ... * a</code> (<code>b</code> occurrences of <code>a</code>).</p><p>This operation will take <code>O(n)</code> time since we need to do multiplication operation exactly <code>n</code> times.</p><h2 id="fast-power-algorithm" tabindex="-1"><a class="header-anchor" href="#fast-power-algorithm" aria-hidden="true">#</a> Fast Power Algorithm</h2><p>Can we do better than naive algorithm does? Yes we may solve the task of powering in <code>O(log(n))</code> time.</p><p>The algorithm uses divide and conquer approach to compute power. Currently the algorithm work for two positive integers <code>X</code> and <code>Y</code>.</p><p>The idea behind the algorithm is based on the fact that:</p><p>For <strong>even</strong> <code>Y</code>:</p><div class="language-text ext-text"><pre class="language-text"><code>X^Y = X^(Y/2) * X^(Y/2)
</code></pre></div><p>For <strong>odd</strong> <code>Y</code>:</p><div class="language-text ext-text"><pre class="language-text"><code>X^Y = X^(Y//2) * X^(Y//2) * X
where Y//2 is result of division of Y by 2 without reminder.
</code></pre></div><p><strong>For example</strong></p><div class="language-text ext-text"><pre class="language-text"><code>2^4 = (2 * 2) * (2 * 2) = (2^2) * (2^2)
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>2^5 = (2 * 2) * (2 * 2) * 2 = (2^2) * (2^2) * (2)
</code></pre></div><p>Now, since on each step we need to compute the same <code>X^(Y/2)</code> power twice we may optimise it by saving it to some intermediate variable to avoid its duplicate calculation.</p><p><strong>Time Complexity</strong></p><p>Since each iteration we split the power by half then we will call function recursively <code>log(n)</code> times. This the time complexity of the algorithm is reduced to:</p><div class="language-text ext-text"><pre class="language-text"><code>O(log(n))
</code></pre></div><h2 id="references" tabindex="-1"><a class="header-anchor" href="#references" aria-hidden="true">#</a> References</h2><ul><li><a href="https://www.youtube.com/watch?v=LUWavfN9zEo&amp;index=80&amp;list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&amp;t=0s" target="_blank" rel="noopener noreferrer">YouTube</a></li><li><a href="https://en.wikipedia.org/wiki/Exponentiation_by_squaring" target="_blank" rel="noopener noreferrer">Wikipedia</a></li></ul>`,24),n=[r];function c(s,d){return t(),o("div",null,n)}var p=e(i,[["render",c],["__file","index.html.vue"]]);export{p as default};