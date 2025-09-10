const byteSize = (str) => {
  // Create a Blob from the string and return its size in bytes
  return new Blob([str]).size;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
