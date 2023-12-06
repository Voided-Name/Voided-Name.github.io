function isint(number) {
  return !isNaN(number) && parseInt(number) == number;
}
function factorial(n) {
  let x;
  if (n == 0) {
    return 1;
  }

  for (x = n - 1; x > 0; x--) {
    n *= x;
  }

  return n;
}
function perm() {
  let n = document.getElementById("perm_1").value;
  let r = document.getElementById("perm_2").value;
  let ans = document.getElementById("return_ans_perm");

  //empty inputs
  if (n == "") {
    ans.innerHTML = "No Input(n)";
    return;
  } else if (r == "") {
    ans.innerHTML = "No Input(r)";
    return;
  }
  //checking int state
  if (!isint(n)) {
    ans.innerHTML = "Invalid Input(n)";
    return;
  } else if (!isint(r)) {
    ans.innerHTML = "Invalid Input(r)";
    return;
  }
  //checking equality
  if (r < 0) {
    ans.innerHTML = "r must be greater than 0";
    return;
  } else if (n < r) {
    ans.innerHTML = "n must be equal or greater than r";
    return;
  }

  let answer = factorial(n) / factorial(n - r);

  ans.innerHTML = answer;
}
function circ_perm() {
  let n = document.getElementById("circ_perm").value;
  let ans = document.getElementById("return_ans_circ_perm");

  if (!isint(n)) {
    ans.innerHTML = "Invalid Input(n)";
    return;
  }
  if (n <= 0) {
    ans.innerHTML = "n must be greater than 0";
    return;
  }

  let answer = factorial(n - 1);
  ans.innerHTML = answer;
}

function combi() {
  let n = document.getElementById("combi_1").value;
  let r = document.getElementById("combi_2").value;
  let ans = document.getElementById("return_ans_combi");

  //empty inputs
  if (n == "") {
    ans.innerHTML = "No Input(n)";
    return;
  } else if (r == "") {
    ans.innerHTML = "No Input(r)";
    return;
  }
  //checking int state
  if (!isint(n)) {
    ans.innerHTML = "Invalid Input(n)";
    return;
  } else if (!isint(r)) {
    ans.innerHTML = "Invalid Input(r)";
    return;
  }
  //checking equality
  if (r < 0) {
    ans.innerHTML = "r must be greater than 0";
    return;
  } else if (n < r) {
    ans.innerHTML = "n must be equal or greater than r";
    return;
  }

  let answer = Math.floor(factorial(n) / (factorial(r) * factorial(n - r)));

  ans.innerHTML = Math.floor(answer);
}
function fib() {
  let n = document.getElementById("fib").value;
  let ans = document.getElementById("return_ans_fib");

  //empty inputs
  if (n == "") {
    ans.innerHTML = "No Input(n)";
    return;
  } //checking int state
  if (!isint(n)) {
    ans.innerHTML = "Invalid Input(n)";
    return;
  } //checking equality
  if (n < 0) {
    ans.innerHTML = "n must be greater than or equal to 0";
    return;
  }

  let answer =
    ((1 + Math.sqrt(5)) ** n - (1 - Math.sqrt(5)) ** n) /
    (2 ** n * Math.sqrt(5));

  ans.innerHTML = parseInt(answer);
}
function lucas() {
  let n = document.getElementById("lucas").value;
  let ans = document.getElementById("return_ans_lucas");

  //empty inputs
  if (n == "") {
    ans.innerHTML = "No Input(n)";
    return;
  } //checking int state
  if (!isint(n)) {
    ans.innerHTML = "Invalid Input(n)";
    return;
  } //checking equality
  if (n < 0) {
    ans.innerHTML = "n must be greater than or equal to 0";
    return;
  }

  let answer = ((1 + Math.sqrt(5)) / 2) ** n + ((1 - Math.sqrt(5)) / 2) ** n;

  ans.innerHTML = parseInt(answer);
}
function collatz_form(n) {
  const collatz_sequence = [];

  collatz_sequence.push(n);
  while (true) {
    if (n % 2 == 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    collatz_sequence.push(n);
    if (n == 1) {
      break;
    }
  }
  return collatz_sequence;
}
function colatz() {
  let n = document.getElementById("colatz").value;
  let ans = document.getElementById("return_ans_colatz");
  let answer = "";

  //empty inputs
  if (n == "") {
    ans.innerHTML = "No Input(n)";
    return;
  } //checking int state
  if (!isint(n)) {
    ans.innerHTML = "Invalid Input(n)";
    return;
  } //checking equality
  if (n < 0) {
    ans.innerHTML = "n must be greater than or equal to 0";
    return;
  }

  answer = collatz_form(n);

  ans.innerHTML = answer;
}
function trib_form(n) {
  let n_1 = 0;
  let n_2 = 0;
  let nth = 1;
  let nth_buf, n_1_buf;
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 0;
  } else if (n == 2) {
    return 1;
  } else {
    n -= 2;
    for (x = 0; x < n; x++) {
      nth_buf = nth;
      n_1_buf = n_1;
      nth = nth + n_1 + n_2;
      n_1 = nth_buf;
      n_2 = n_1_buf;
    }
    return nth;
  }
}
function trib() {
  let n = document.getElementById("trib").value;
  let ans = document.getElementById("return_ans_trib");

  //empty inputs
  if (n == "") {
    ans.innerHTML = "No Input(n)";
    return;
  } //checking int state
  if (!isint(n)) {
    ans.innerHTML = "Invalid Input(n)";
    return;
  } //checking equality
  if (n < 0) {
    ans.innerHTML = "Invalid Input(n) (n >= 0)";
    return;
  }

  let answer = trib_form(n);

  ans.innerHTML = answer;
}
function union(A, B) {
  A = A.replace(/\s/g, "");
  B = B.replace(/\s/g, "");
  let A_arr = A.split(",");
  let B_arr = B.split(",");
  let is_repeated = false;
  let x, y;

  A_arr = A_arr.concat(B_arr);

  const final = [];

  for (x = 0; x < A_arr.length; x++) {
    if (final.length == 0) {
      final.push(A_arr[0]);
      continue;
    }
    for (y = 0; y < final.length; y++) {
      if (A_arr[x] == final[y]) {
        is_repeated = true;
      }
    }
    if (!is_repeated) {
      final.push(A_arr[x]);
    }
    is_repeated = false;
  }

  return final;
}
function intersection(A, B) {
  A = A.replace(/\s/g, "");
  B = B.replace(/\s/g, "");
  let A_arr = A.split(",");
  let B_arr = B.split(",");
  let x, y;

  const final = [];

  for (x = 0; x < A_arr.length; x++) {
    for (y = 0; y < B_arr.length; y++) {
      if (A_arr[x] == B_arr[y]) {
        final.push(A_arr[x]);
      }
    }
  }

  return final;
}
function difference(A, B) {
  A = A.replace(/\s/g, "");
  B = B.replace(/\s/g, "");
  let A_arr = A.split(",");
  let B_arr = B.split(",");
  let x, y;
  let is_repeated = false;

  const final = [];

  for (x = 0; x < A_arr.length; x++) {
    for (y = 0; y < B_arr.length; y++) {
      if (A_arr[x] == B_arr[y]) {
        is_repeated = true;
      }
    }
    if (!is_repeated) {
      final.push(A_arr[x]);
    }
  }

  return final;
}
function sets() {
  let A = document.getElementById("sets_A").value;
  let B = document.getElementById("sets_B").value;
  let operation = document.getElementById("operations").value;
  let ans = document.getElementById("return_ans_sets");
  let answer_str = "";
  let x = 0;

  for (x = 0; x < A.length; x++) {
    if (isNaN(A[x])) {
      if (A[x] != ",") {
        if (A[x] == " ") {
          continue;
        }
        ans.innerHTML = "Invalid Input A";
        return;
      }
    }
  }
  for (x = 0; x < B.length; x++) {
    if (isNaN(B[x])) {
      if (B[x] != ",") {
        if (B[x] == " ") {
          continue;
        }
        ans.innerHTML = "Invalid Input A";
        return;
      }
    }
  }
  if (operation == "union") {
    const answers = union(A, B);
    for (x = 0; x < answers.length; x++) {
      if (x == answers.length - 1) {
        answer_str += answers[x];
      } else {
        answer_str += answers[x] + ", ";
      }
    }
  } else if (operation == "intersection") {
    const answers = intersection(A, B);
    for (x = 0; x < answers.length; x++) {
      if (x == answers.length - 1) {
        answer_str += answers[x];
      } else {
        answer_str += answers[x] + ", ";
      }
    }
  } else if (operation == "difference") {
    const answers = difference(A, B);
    for (x = 0; x < answers.length; x++) {
      if (x == answers.length - 1) {
        answer_str += answers[x];
      } else {
        answer_str += answers[x] + ", ";
      }
    }
  }

  ans.innerHTML = answer_str;
}
function relationship_sets(A, B) {
  A = A.replace(/\s/g, "");
  B = B.replace(/\s/g, "");
  let A_arr = A.split(",");
  let B_arr = B.split(",");
  let x, y;
  let answer = "";
  let b_index = 0;
  let equivalent = false,
    equal = false,
    disjoint = false,
    joint = false,
    not_eq = false,
    eq = false;
  let bool_array = [];

  //Equivalent
  if (A_arr.length == B_arr.length) {
    equivalent = true;
  }

  for (x = 0; x < A_arr.length; x++) {
    bool_array.push(false);
  }

  for (x = 0; x < A_arr.length; x++) {
    for (y = 0; y < A_arr.length; y++) {
      if (A_arr[x] == B_arr[y]) {
        bool_array[x] = true;
        eq = true;
      }
    }
  }

  if (bool_array.every(Boolean)) {
    not_eq = false;
  } else {
    not_eq = true;
  }

  not_eq = !bool_array.every(Boolean);

  if (not_eq && eq) {
    joint = true;
  } else if (!not_eq && eq) {
    if (equivalent) {
      equal = true;
    }
    joint = true;
  } else if (not_eq && !eq) {
    disjoint = true;
  }

  if (equivalent) {
    answer += "- Equivalent<br>";
  }
  if (equal) {
    answer += "- Equal<br>";
  }
  if (joint) {
    answer += "- Joint<br>";
  }
  if (disjoint) {
    answer += "- Disjoint<br>";
  }
  return answer;
}
function rel_sets() {
  let A = document.getElementById("rel_sets_A").value;
  let B = document.getElementById("rel_sets_B").value;
  let ans = document.getElementById("return_ans_rel_sets");
  let answer_str = "";
  let x = 0;

  for (x = 0; x < A.length; x++) {
    if (isNaN(A[x])) {
      if (A[x] != ",") {
        if (A[x] == " ") {
          continue;
        }
        ans.innerHTML = "Invalid Input A";
        return;
      }
    }
  }
  for (x = 0; x < B.length; x++) {
    if (isNaN(B[x])) {
      if (B[x] != ",") {
        if (B[x] == " ") {
          continue;
        }
        ans.innerHTML = "Invalid Input A";
        return;
      }
    }
  }

  answer_str = relationship_sets(A, B);

  ans.innerHTML = answer_str;
}
