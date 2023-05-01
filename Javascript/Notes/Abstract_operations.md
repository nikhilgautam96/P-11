## Abstract Operations :-
- These operations are not a part of the ECMAScript language.
- As an end user we cannot use/call these operations. like we can use console.log() but not these.
- They are defined solely to aid the specification of the semantics of the ECMAScript language.

## `ToPrimitive ( input [ , preferredType ] )`  :-
```JS
if(`input` == `Object`) {
    let hint;
    if(`preferredType` == `is not present`) {
        hint = "default";
    } else if(`prefferedType` == `String`) {
        hint = "String";
    } else if(`prefferedType` == `Number`) {
        hint = "Number";
    }
    if(`hint` == `default`) {
        hint = "Number";
    }
} else {
    return `input`;
}
```
### `OrdinaryToPrimitive ( O, hint )`   :-
```JS
assert(Type(O) == Object);
assert(Type(hint) == String);

if(`hint` == `String` || `hint` == `number`) {
    let methodName;
    if(`hint` == `String`) {
        methodNames = ["toString()", "valueOf()"];
    } else if(`hint` == `Number`) {
        methodNames = ["valueOf", "toString()"];
    }
} else {
    throw `TypeError`;
}
```

## `ToBoolean ( argument )` :-


## `ToNumeric ( value )`    :-


## `ToNumber ( argument )`  :-


## `ToString ( argument )`  :-


## `ToObject ( argument )`  :-