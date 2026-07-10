//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive) , Heap (Non-Primitive)

/* Stack : (here, you get a COPY)
    When you assign a primitive variable to another,
    JavaScript creates a brand-new, independent copy of that value in a new stack location.
*/
let myYoutubename = "Nupurdangedotcom"
let anothername = myYoutubename  // A completely separate copy is made in the Stack

anothername = "The_GalaxyStudios"  // Changing 'anothername' does NOT affect 'myYoutubename'

console.log(myYoutubename); // Output: "Nupurdangedotcom"
console.log(anothername);   // Output: "The_GalaxyStudios"


/* Heap : (her, you get a REF, matlab, jo bhi ap changes krte hain wo Original Value mei hi krte hai)
    Heap memory is a large, mostly unstructured pool of memory. 
    It is used to store Non-Primitive Datatypes (Objects, Arrays, and Functions) 
    because their size can change dynamically.

Key Concept: Pass-by-Reference (Sharing)
    When you create an object, the actual data structure 
    is placed in the Heap. However, the variable itself 
    lives in the Stack and only stores a pointer (or reference) to that location in the Heap.
*/
let userOne = {
  email: "user@google.com",
  upi: "user@ybl"
}

let userTwo = userOne; // Copying the REFERENCE, not the actual object!

//As beautifully drawn in your second image diagram, both userOne and userTwo point to the exact same memory address inside the Heap.

userTwo.email = "Nupur@google.com";

console.log(userOne.email); // Output: "Nupur@google.com"
console.log(userTwo.email); // Output: "Nupur@google.com"