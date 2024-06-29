# Debouncing
Debouncing is a technique in programming that helps prevent time-consuming tasks from being triggered so frequently that they slow down the performance of a web page. In simpler terms, it controls how often a function is called.

In JavaScript, debouncing is commonly used to enhance browser performance. Sometimes, certain actions on a web page involve complex computations that take up time. If these actions are triggered too frequently, it can significantly impact the browser’s performance, especially since JavaScript operates on a single thread.

**Approach**
- The button is linked to an event listener that invokes the debounce function when the button is clicked.
- The debounce function takes two parameters: a function to be debounced and a delay in milliseconds.
- Inside the debounce function, a variable named debounceTimer is declared. This variable is crucial for executing the debounced function after a specified delay.
- When the button is clicked, the debounce function is called. If the button is clicked only once, the debounced function is scheduled to run after the specified delay.
- If the button is clicked again before the end of the delay, the initial delay is canceled using clearTimeout(debounceTimer).
- A new delay timer is initiated, effectively resetting the debounce process. This mechanism ensures that the debounced function is only executed after the user stops clicking the button for the specified delay duration.
- The core idea behind debouncing is to start with a timeout of 0.
- If the debounced function is called again within the delay period, the timer is reset to the specified delay.
- Ultimately, when the timeout occurs, the debounced function is executed. The process repeats for each call to the debounce function, effectively resetting the timer and introducing a delay for each invocation.