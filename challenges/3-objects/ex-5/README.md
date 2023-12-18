# hasProperty Function

## Objective:

Your task is to write a TypeScript function named `hasProperty`. This function should check if a given object has a specified property. It will take two parameters: an object of generic type `T` and a property name of type `keyof any`. The function will return a type predicate that specifies whether the given property is a key of the object type `T`.

## Function Signature:

```typescript
export function hasProperty<T extends {}>(
  obj: T,
  prop: keyof any
): prop is keyof T;
```

## Instructions:

1. **Create a file:** Begin by creating a file named `hasProperty.ts`.
2. **Define the function:** Utilize generics and the provided function signature to define your function.
3. **Export the Function:** Ensure that your function is exported from the module so it can be imported and tested elsewhere.
4. **Testing your function:** After you've implemented the function, test it using the command:

```Bash
npm test -- hasProperty
```

## Example:

Given the object:

```typescript
const person = {
  name: "Alice",
  age: 25,
};
```

If you call the function with `person` as the object and `"name"` as the property:

```typescript
hasProperty(person, "name"); // Expected return value: true
```

However, if you check for a property that does not exist in the object:

```typescript
hasProperty(person, "address"); // Expected return value: false
```

The function should confirm the presence or absence of the specified property in the provided object.
