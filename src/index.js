const steps = Object.entries({
  upload: { next: "post" },
  approve: { next: "paid" },
  post: { next: "approve" },
  paid: { next: undefined },
});

// Sort the steps array in order given that each item has a reference to the next
// Keep in mind that the initial order of the array isn't reliable (So you might get it in order but unreliably)
const sortedSteps = steps.sort((a, b) => {
  if (a[1].next === b[1].next) {
    return 0;
  }
  if (a[1].next === undefined) {
    return 1;
  }
  if (b[1].next === undefined) {
    return -1;
  }
  return (
    steps.findIndex((step) => step[0] === a[1].next) -
    steps.findIndex((step) => step[0] === b[1].next)
  );
});

console.log(sortedSteps);

// Expected Output
// [
//   [upload, { next: 'post' }],
//   [post, { next: 'approve' }],
//   [approve, { next: 'paid' }],
//   [paid, { next: undefined }],
// ]
