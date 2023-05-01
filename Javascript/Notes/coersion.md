## Coersion :-
- Stands for `type interconversion`.
- In laguages like {`c, c++, java, etc --> type exists for variable`} while in `JS --> type exists for values.`
- 2 types :-
    1. `Implicit`
    2. `Explicit`
### Type Conversion :-
- The ECMAScript language implicitly performs automatic type conversion as needed. 
- To clarify the semantics of certain constructs it is useful to define a set of conversion abstract operations. 
- The conversion abstract operations are polymorphic.
- They can accept a value of any ECMAScript language type.`(ie. the 7-types defined in JS)`
- But no other specification types(outside the knowledge of JS, like user defined classes, etc.) are used with these operations.
- `NOTE` : 
    - The BigInt type has no implicit conversions in the ECMAScript language.
    - programmers must call BigInt explicitly to convert values from other types.