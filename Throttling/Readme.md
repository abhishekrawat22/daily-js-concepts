Throttling sometimes also called throttle function is a practice used in websites. Throttling is used to call a function after every millisecond or a particular interval of time only the first click is executed immediately.

Without throttling, a function may be invoked rapidly, leading to performance issues, unnecessary resource consumption, and a potentially poor user experience.

With throttling, you limit the frequency of function invocations. For example, you might decide to execute a function at most once every 1500 milliseconds. This prevents the function from being called too frequently and helps maintain a smoother performance.

**Advantages of throttling function:** 
- It prevents frequent calling of the function.
- It makes the website faster and controls the rate at which a particular function is called.
- Performance Optimization.
- Improved Responsiveness

# Debouncing vs Throttling

First of all both are used to limit the rate of function execution and thus optimizing the performance of a web app.

**Use cases:** In searching, window resizing, shooting game button click(throtttling more suitable)

| Debouncing | Throttling |
|:-----------|:-----------|
| Fn executes when the difference b/w **two key presses** is greater than the time given for the fn to re-execute. | Fn executes when the difference b/w **two fn calls** is greater than the time given for the fn to re-execute. But the fn executes on the first keypress immediately. |