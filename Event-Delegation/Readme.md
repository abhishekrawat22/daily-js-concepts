# Event Delegation

It exists because event bubbling exists

Attaching events to each and every card in a category page having infinite scroll too will lead to many event handlers attached further leading to performance issues.

Therefore we can attach event handler to there parent

## Benefits
- Memory
- Less code
- DOM Manipulation

## Limitations
- All events are not bubbled up like, blur, focus, resizing, scrolling, etc.
- use e.stopPropagation will stop its event